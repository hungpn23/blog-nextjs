import { jwtDecode } from "jwt-decode";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import type { HttpErrorType } from "@/types/error.type";

const IS_SERVER = typeof window === "undefined";
export const BASE_URL = "http://localhost:3001/api/v1";

const loggerInterceptor = (config: InternalAxiosRequestConfig) => {
  console.log("[AXIOS] [REQUEST URL] >>>", config.url);
  // console.log("[AXIOS] [IS SERVER] >>>", IS_SERVER);
  return config;
};

const cookieInterceptor = async (config: InternalAxiosRequestConfig) => {
  let accessToken: string | undefined;
  if (IS_SERVER) {
    const { cookies } = await import("next/headers");
    accessToken = (await cookies()).get("access_token")?.value;
  }

  config.headers["Authorization"] = `Bearer ${accessToken || "nothing here"}`;

  return config;
};

export const AxiosService = axios.create({
  baseURL: BASE_URL,
  timeout: 10 * 1000,
  withCredentials: true,
});

AxiosService.interceptors.request.use(loggerInterceptor);
AxiosService.interceptors.request.use(cookieInterceptor);

// ======================= DEPRECATED =======================
/**
 * @deprecated
 * @description HTTP does not allow setting cookies after streaming starts, so you must use .set in a Server Action or Route Handler.
 * @link https://nextjs.org/docs/app/api-reference/functions/cookies#understanding-cookie-behavior-in-server-components
 */
const refreshTokenInterceptor = async (error: AxiosError<HttpErrorType>) => {
  if (error.response!.data.message === "invalid token") {
    console.log("hello from refresh token interceptor");

    let refreshToken: string | undefined;

    if (IS_SERVER) {
      const { cookies } = await import("next/headers");
      refreshToken = (await cookies()).get("refresh_token")?.value;
    }

    const response = await axios
      .post<{ accessToken: string }>(`${BASE_URL}/auth/refresh-token`, {
        headers: {
          Authorization: `Bearer ${refreshToken || "nothing here"}`,
        },
      })
      .catch((error: AxiosError<HttpErrorType>) => {
        console.log("refresh token error:", error.response?.data.message);
        // TODO: force logout and delete all cookies
        // return null
      });

    const accessToken = response?.data.accessToken;

    if (IS_SERVER && accessToken) {
      const { cookies } = await import("next/headers");
      (await cookies()).set({
        name: "access_token",
        value: accessToken,
        httpOnly: true,
        expires: jwtDecode(accessToken).exp! * 1000,
      });
    }

    const originalRequest = error.config!;
    originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
    return await axios.request(originalRequest);
  }

  return Promise.reject(error);
};

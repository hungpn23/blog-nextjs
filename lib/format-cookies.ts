import type { TokenPairType } from "@/types/auth.type";

export const formatCookieHeaders = (cookieHeaders: string[]): TokenPairType => {
  let accessToken = "";
  let refreshToken = "";

  cookieHeaders.forEach((cookie) => {
    const [key, value] = cookie.split(";")[0].split("=")!;
    if (key === "access_token") accessToken = value;
    if (key === "refresh_token") refreshToken = value;
  });

  return { accessToken, refreshToken };
};

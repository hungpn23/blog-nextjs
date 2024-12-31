"use server";

import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AxiosService } from "@/lib/axios";
import { AxiosError } from "axios";
import type { LoginInputType, LoginStateType } from "@/types/auth.type";

export async function login(
  _previousState: LoginStateType,
  formData: FormData,
) {
  const input: LoginInputType = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    const response = await AxiosService.post<{ accessToken: string }>(
      `/auth/login`,
      input,
    );
    const { accessToken } = response.data;

    (await cookies()).set({
      name: "access_token",
      value: accessToken,
      httpOnly: true,
      expires: jwtDecode(accessToken).exp! * 1000,
    });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        input,
        error: error.response!.data,
      } as LoginStateType;
    }
  }

  redirect("/profile");
}

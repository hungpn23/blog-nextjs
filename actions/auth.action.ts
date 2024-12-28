"use server";

import instance from "@/utils/axios";
import type { LoginResponseType } from "@/types/data.type";
import type { HttpErrorType } from "@/types/error.type";
import axios, { AxiosError } from "axios";

export async function login(_previousState: unknown, formData: FormData) {
  console.log("🚀 ~ login ~ formData:", formData);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // do sth like fetch data
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const res = await instance.post<LoginResponseType>("/auth/login", {
      email,
      password,
    });
    console.log(res.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("🚀 ~ login ~ error:", error.response?.data);
      return error.response?.data;
    }
    return { error: "error" };
  }

  return {
    timestamp: "2021-09-01T00:00:00.000Z",
    statusCode: 401,
    message: "Unauthorized",
  } as HttpErrorType;
}

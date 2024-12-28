"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { login } from "@/actions/auth.action";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [error, action, isPending] = useActionState(login, undefined); // mean previousState in login is undefined
  console.log("error", error);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email and password.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" aria-required>
                  Email<span className="text-red-500">*</span>
                </Label>
                <Input
                  // className="border-red-500"
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                  required
                />
                {/* <span className="ml-4 text-sm text-red-500">
                  - email is required
                </span> */}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" aria-required>
                    Password<span className="text-red-500">*</span>
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input name="password" type="password" required />
              </div>
              <Button disabled={isPending} type="submit" className="w-full">
                Login
              </Button>
              <Button disabled={isPending} variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

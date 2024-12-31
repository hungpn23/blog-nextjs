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
import { useActionState, useEffect } from "react";
import { login } from "@/actions/login.action";
import { useToast } from "@/hooks/use-toast";
import type { LoginStateType } from "@/types/auth.type";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { toast } = useToast();

  const [state, action, isPending] = useActionState<LoginStateType, FormData>(
    login,
    null,
  );

  useEffect(() => {
    if (state?.error && state?.error.details === undefined) {
      toast({
        variant: "destructive",
        title: "Login failed.",
        description: state.error.message,
      });
    }
  }, [state, toast]);

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
                  className={
                    state?.error.details?.some(
                      ({ property }) => property === "email",
                    )
                      ? "border-red-500"
                      : ""
                  }
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                  defaultValue={state?.input.email}
                  autoFocus
                  tabIndex={1}
                  required
                />

                {state?.error.details?.map(({ property, code, message }) => {
                  if (property === "email") {
                    return (
                      <span key={code} className="ml-4 text-sm text-red-500">
                        - {message}
                      </span>
                    );
                  }
                })}
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
                <Input
                  className={
                    state?.error.details?.some(
                      ({ property }) => property === "password",
                    )
                      ? "border-red-500"
                      : ""
                  }
                  name="password"
                  type="password"
                  defaultValue={state?.input.password}
                  tabIndex={2}
                  required
                />

                {state?.error.details?.map(({ property, code, message }) => {
                  if (property === "password") {
                    return (
                      <span key={code} className="ml-4 text-sm text-red-500">
                        - {message}
                      </span>
                    );
                  }
                })}
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

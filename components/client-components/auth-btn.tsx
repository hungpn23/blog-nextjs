"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { AuthContext } from "@/contexts/auth.context";
import { use } from "react";
import { LogIn, LogOut } from "lucide-react";

export function AuthBtn() {
  const user = use(AuthContext);

  if (user)
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          console.log("logout");
        }}
      >
        <LogOut className="h-4 w-4" />
      </Button>
    );

  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="/login">
        <LogIn className="h-4 w-4" />
      </Link>
    </Button>
  );
}

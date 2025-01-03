"use client";

import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

export function Toast({
  variant = "default",
}: {
  variant?: "default" | "destructive";
}) {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      variant,
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  }, [toast, variant]);

  return <main>Error</main>;
}

import * as React from "react";

export function PageBody({ children }: { children: React.ReactNode }) {
  return <div className="py-16 sm:py-24">{children}</div>;
}

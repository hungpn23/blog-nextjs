import Link from "next/link";
import { Button } from "../ui/button";

export function NavIcon({
  href = "",
  target = "_blank",
  className,
  children,
}: {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Button variant="ghost" size="icon" className={className} asChild>
      <Link href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
}

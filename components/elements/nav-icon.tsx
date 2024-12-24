import Link from "next/link";
import { Button } from "../ui/button";

interface NavIconProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  children: React.ReactNode;
}

export const NavIcon: React.FC<NavIconProps> = ({
  href,
  target = "_self",
  className,
  children,
}) => {
  return (
    <Button variant="ghost" size="icon" className={className} asChild>
      <Link href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
};

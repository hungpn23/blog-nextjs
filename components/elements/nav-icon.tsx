import Link from "next/link";
import { Button } from "../ui/button";

interface NavIconProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children: React.ReactNode;
}

const NavIcon: React.FC<NavIconProps> = ({
  href,
  target = "_self",
  children,
}) => {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
};

export default NavIcon;

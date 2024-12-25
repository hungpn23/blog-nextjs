import Link from "next/link";
import { Github, Youtube, FileText, LogIn } from "lucide-react";
import { NavLink } from "../clients/nav-link";
import { ContentContainer } from "./content-container";
import { NavIcon } from "../elements/nav-icon";
import { MobileMenu } from "./mobile-menu";
import { Separator } from "../elements/separator";
import { ToggleTheme } from "../clients/toggle-theme";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ContentContainer className="flex h-12 max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg">
          phamngochung
          <span className="text-[hsl(222,75%,55%)]">.dev</span>
        </Link>

        <nav className="hidden items-center md:flex">
          <div className="flex">
            <NavLink path="/blog">Blog</NavLink>
            <NavLink path="/projects">Projects</NavLink>
          </div>

          <div className="flex items-center gap-2">
            <Separator />

            <NavIcon href="#">
              <Github className="h-4 w-4" />
            </NavIcon>

            <NavIcon href="#">
              <FileText className="h-4 w-4" />
            </NavIcon>

            <NavIcon href="#">
              <Youtube className="h-4 w-4" />
            </NavIcon>

            <Separator className="mr-2" />
          </div>

          <div className="flex">
            <NavIcon href="/login" className="mr-2">
              <LogIn className="h-4 w-4" />
            </NavIcon>

            <ToggleTheme />
          </div>
        </nav>

        <MobileMenu />
      </ContentContainer>
    </header>
  );
}

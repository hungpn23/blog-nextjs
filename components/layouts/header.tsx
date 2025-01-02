import Link from "next/link";
import { Github, Send, LogIn } from "lucide-react";
import { NavLink } from "../client-components/nav-link";
import { ContentContainer } from "./content-container";
import { NavIcon } from "../elements/nav-icon";
import { MobileMenu } from "./mobile-menu";
import { Separator } from "../elements/separator";
import { ToggleTheme } from "../client-components/toggle-theme";
import { LoginBtn } from "../client-components/login-btn";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ContentContainer className="flex h-12 max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg">
          Blog
          <span className="text-link">.dev</span>
        </Link>

        <nav className="hidden items-center md:flex">
          <div className="flex">
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </div>

          <div className="flex items-center gap-2">
            <Separator />

            <NavIcon>
              <Github className="h-4 w-4" />
            </NavIcon>

            <NavIcon>
              <Send className="h-4 w-4" />
            </NavIcon>

            <Separator className="mr-2" />
          </div>

          <div className="flex">
            <LoginBtn className="mr-2">
              <LogIn className="h-4 w-4" />
            </LoginBtn>

            <ToggleTheme />
          </div>
        </nav>

        <MobileMenu />
      </ContentContainer>
    </header>
  );
}

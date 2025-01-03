import Link from "next/link";
import { Github, Send } from "lucide-react";
import { NavLink } from "../client-components/nav-link";
import { NavIcon } from "../server-components/nav-icon";
import { MobileMenu } from "./mobile-menu";
import { Separator } from "../server-components/separator";
import { ToggleTheme } from "../client-components/toggle-theme";
import { AuthBtn } from "../client-components/auth-btn";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-12 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg">
          Blog
          <span className="text-link">.dev</span>
        </Link>

        <nav className="hidden items-center md:flex">
          <div className="flex">
            <NavLink href="/profile">Profile</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </div>

          <div className="flex items-center gap-2">
            <Separator />

            <NavIcon href="https://github.com/hungpn23">
              <Github className="h-4 w-4" />
            </NavIcon>

            <NavIcon href="https://t.me/hungpn23">
              <Send className="h-4 w-4" />
            </NavIcon>

            <Separator className="mr-2" />
          </div>

          <div className="flex">
            <AuthBtn />

            <ToggleTheme />
          </div>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Github, Youtube, FileText, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "../elements/nav-link";
import { Content } from "./content";
import NavIcon from "../elements/nav-icon";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Content className="flex h-14 max-w-5xl items-center justify-between">
        <Link href="/">
          phamngochung<span className="text-[hsl(222,75%,55%)]">.dev</span>
        </Link>

        <nav className="flex items-center gap-5">
          <NavLink path="/blog">Blog</NavLink>
          <NavLink path="/projects">Projects</NavLink>

          <span className="h-4 w-px bg-border" />

          <div className="flex items-center gap-2">
            <NavIcon href="#">
              <Github className="h-4 w-4" />
            </NavIcon>

            <NavIcon href="#">
              <FileText className="h-4 w-4" />
            </NavIcon>

            <NavIcon href="#">
              <Youtube className="h-4 w-4" />
            </NavIcon>

            <span className="h-4 w-px bg-border" />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </nav>
      </Content>
    </header>
  );
}

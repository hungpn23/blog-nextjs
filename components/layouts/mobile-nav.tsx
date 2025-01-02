import { Github, Youtube, FileText, LogIn } from "lucide-react";
import { NavIcon } from "../elements/nav-icon";
import { NavLink } from "../client-components/nav-link";
import { Separator } from "../elements/separator";
import { ToggleTheme } from "../client-components/toggle-theme";
import { LoginBtn } from "../client-components/login-btn";

export function MobileNav() {
  return (
    <div className="flex h-full flex-col pt-6">
      <nav className="flex flex-col items-center space-y-8">
        <NavLink className="mr-0" href="/blog">
          Blog
        </NavLink>
        <NavLink className="mr-0 last:mr-0" href="/projects">
          Projects
        </NavLink>

        <div className="flex flex-col items-center space-y-6">
          <Separator direction="horizontal" />

          <NavIcon>
            <Github className="h-4 w-4" />
          </NavIcon>

          <NavIcon>
            <FileText className="h-4 w-4" />
          </NavIcon>

          <NavIcon>
            <Youtube className="h-4 w-4" />
          </NavIcon>

          <Separator direction="horizontal" />

          <LoginBtn>
            <LogIn className="h-4 w-4" />
          </LoginBtn>

          <ToggleTheme />
        </div>
      </nav>
    </div>
  );
}

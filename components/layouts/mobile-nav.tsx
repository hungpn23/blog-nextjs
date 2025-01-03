import { Github, Youtube, FileText, Send } from "lucide-react";
import { NavLink } from "../client-components/nav-link";
import { ToggleTheme } from "../client-components/toggle-theme";
import { AuthBtn } from "../client-components/auth-btn";
import { Separator } from "../server-components/separator";
import { NavIcon } from "../server-components/nav-icon";

export function MobileNav() {
  return (
    <div className="flex h-full flex-col pt-6">
      <nav className="flex flex-col items-center space-y-8">
        <NavLink className="mr-0" href="/profile">
          Profile
        </NavLink>
        <NavLink className="mr-0" href="/blog">
          Blog
        </NavLink>
        <NavLink className="mr-0 last:mr-0" href="/projects">
          Projects
        </NavLink>

        <div className="flex flex-col items-center space-y-6">
          <Separator direction="horizontal" />

          <NavIcon href="https://github.com/hungpn23">
            <Github className="h-4 w-4" />
          </NavIcon>

          <NavIcon href="https://t.me/hungpn23">
            <Send className="h-4 w-4" />
          </NavIcon>

          <Separator direction="horizontal" />

          <AuthBtn />

          <ToggleTheme />
        </div>
      </nav>
    </div>
  );
}

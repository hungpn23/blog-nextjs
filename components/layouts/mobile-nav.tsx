import { Github, Youtube, FileText } from "lucide-react";
import { NavIcon } from "../elements/nav-icon";
import { NavLink } from "../clients/nav-link";
import { Separator } from "../elements/separator";
import { ToggleTheme } from "../clients/toggle-theme";

export function MobileNav() {
  return (
    <div className="flex h-full flex-col pt-6">
      <nav className="flex flex-col items-center space-y-8">
        <NavLink path="/blog">Blog</NavLink>
        <NavLink path="/projects">Projects</NavLink>

        <div className="flex flex-col items-center space-y-6">
          <Separator direction="horizontal" />

          <NavIcon href="#">
            <Github className="h-4 w-4" />
          </NavIcon>

          <NavIcon href="#">
            <FileText className="h-4 w-4" />
          </NavIcon>

          <NavIcon href="#">
            <Youtube className="h-4 w-4" />
          </NavIcon>

          <Separator direction="horizontal" />

          <ToggleTheme />
        </div>
      </nav>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinks";

export default function DesktopMenu() {
  return (
    <ul className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `
                relative pb-1
                transition-all duration-300
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:bg-pink-500
                after:transition-all
                ${
                  isActive
                    ? "text-pink-500 after:w-full"
                    : "after:w-0 hover:text-pink-400 hover:after:w-full"
                }
              `
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

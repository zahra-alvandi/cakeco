import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinks";
import { Link } from "react-router-dom";

export default function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <aside
        className={`
          fixed left-0 top-0 h-full w-72 bg-white z-50
          shadow-lg md:hidden
          transition-transform duration-500
          ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-5">
          {/* Login */}
          <Link to="/login">
            <button
              className="
              w-full mb-8
              bg-pink-500
              text-white
              py-2
              rounded-lg
              hover:bg-pink-600
              transition-colors
            "
            >
              Login / Register
            </button>
          </Link>

          <ul className="space-y-5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive
                      ? "text-pink-500 font-medium"
                      : "hover:text-pink-500"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

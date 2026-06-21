import { HomeIcon, UserIcon,BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function MobileFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden z-50">
      <svg className="hidden">
        <symbol
          id="layoutGrid"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </symbol>
      </svg>

      <div className="flex items-center justify-around bg-white/95 backdrop-blur-md border-t border-pink-100 shadow-lg py-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-pink-600" : "text-gray-500"
            }`
          }
        >
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </NavLink>

        <NavLink
          to="/cakes"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-pink-600" : "text-gray-500"
            }`
          }
        >
          <svg className="w-6 h-6">
            <use href="#layoutGrid" />
          </svg>
          <span className="text-xs">Cake</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-pink-600" : "text-gray-500"
            }`
          }
        >
          <BuildingStorefrontIcon className="w-6 h-6" />
          <span className="text-xs">About</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-pink-600" : "text-gray-500"
            }`
          }
        >
          <UserIcon className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </NavLink>
      </div>
    </div>
  );
}

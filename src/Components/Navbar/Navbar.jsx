import { useEffect, useState } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileSidebar from "./MobileSidebar";
import CartDrawer from "./CartDrawer";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsSidebarOpen(false);
        setIsCartOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    const isAnyDrawerOpen = isSidebarOpen || isCartOpen;

    document.body.style.overflow = isAnyDrawerOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen, isCartOpen]);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-700"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="./images/logo.png" alt="Logo" className="w-10 h-10" loading="lazy" />

          <div className="flex flex-col items-start">
            <span
              className="text-xl text-pink-500"
              style={{ fontFamily: "pacifico" }}
            >
              Sweet Delights
            </span>

            <span className="text-[10px] uppercase tracking-wider text-gray-500">
              Cakes & Drinks
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <DesktopMenu />

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop Login */}
          <Link
            to="/login"
            className="
    hidden md:block
    px-4 py-2
    border border-pink-500
    rounded-lg
    text-pink-500
    hover:bg-pink-500
    hover:text-white
    transition-colors
  "
          >
            Login
          </Link>

          {/* Cart */}
          <button
            className="relative text-pink-700 hover:text-pink-800 transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {cartCount > 0 && (
              <span
                className="
      absolute
      -top-2
      -right-2
      bg-pink-600
      text-white
      text-xs
      min-w-5
      h-5
      rounded-full
      flex
      items-center
      justify-center
    "
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

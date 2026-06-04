import { useEffect, useState } from "react";

function Overlay({ isOpen, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 z-50 transition-all duration-300
        ${
          isOpen
            ? "bg-black/40 opacity-100 visible"
            : "bg-black/0 opacity-0 invisible"
        }
      `}
    >
      {children}
    </div>
  );
}

export default function Navbar() {
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setActivePanel(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    if (activePanel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activePanel]);

  return (
    <>
      <nav className="flex items-center justify-between p-5 shadow-sm">
        {/* Menu Button */}
        <button
          aria-label="Open menu"
          onClick={() => setActivePanel("sidebar")}
          className="text-pink-700"
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
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Cake & Co Logo"
            className="w-10 h-10"
          />

          <span
            className="pt-2 text-pink-500 text-xl"
            style={{ fontFamily: "kalam" }}
          >
            Cake & Co.
          </span>
        </div>

        {/* Cart Button */}
        <button
          aria-label="Open cart"
          onClick={() => setActivePanel("cart")}
          className="text-pink-700"
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
        </button>
      </nav>

      {/* Sidebar */}
      <Overlay
        isOpen={activePanel === "sidebar"}
        onClose={() => setActivePanel(null)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute left-0 top-0 h-full w-64 bg-white p-5 shadow-lg
            transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${
              activePanel === "sidebar"
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          <h2 className="mb-6 text-lg font-bold">Menu</h2>

          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-pink-500">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500">
                Cakes
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500">
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={() => setActivePanel(null)}
            className="mt-8 text-red-500"
          >
            بستن
          </button>
        </div>
      </Overlay>

      {/* Cart */}
      <Overlay
        isOpen={activePanel === "cart"}
        onClose={() => setActivePanel(null)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute top-0 right-0 h-full w-80 bg-white p-5 shadow-lg
            transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${
              activePanel === "cart"
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >
          <h2 className="mb-4 text-lg font-bold">
            سبد خرید
          </h2>

          <p className="text-gray-500">
            سبد خرید شما خالی است.
          </p>

          <button
            onClick={() => setActivePanel(null)}
            className="mt-6 text-red-500"
          >
            بستن
          </button>
        </div>
      </Overlay>
    </>
  );
}
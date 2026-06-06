export default function MobileSidebar({ isOpen, onClose }) {
  const links = ["Home", "Cakes", "About", "Contact"];

  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300 md:hidden
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      <aside
        className={`
          fixed left-0 top-0 h-full w-72 bg-white z-50
          shadow-lg md:hidden
          transition-transform duration-500
          ease-[cubic-bezier(0.32,0.72,0,1)]
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="p-5">
          <button
            onClick={onClose}
            className="mb-8 text-red-500"
          >
            بستن
          </button>

          <ul className="space-y-5">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block hover:text-pink-500"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
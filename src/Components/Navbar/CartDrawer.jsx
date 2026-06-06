export default function CartDrawer({ isOpen, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <aside
        className={`
          fixed top-0 right-0 h-full w-80 bg-white z-50
          shadow-lg
          transition-transform duration-500
          ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-5">
          <h2 className="text-xl font-bold mb-4">سبد خرید</h2>

          <p className="text-gray-500">سبد خرید شما خالی است.</p>

          <button onClick={onClose} className="mt-6 text-red-500">
            بستن
          </button>
        </div>
      </aside>
    </>
  );
}

import { useCart } from "../../context/CartContext";

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
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

          {cartItems.length === 0 ? (
            <p className="text-gray-500">سبد خرید شما خالی است.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border rounded-xl p-3">
                  <div className="flex gap-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h4 className="font-medium">{item.title}</h4>

                      <p className="text-pink-600">{item.price}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button onClick={onClose} className="mt-6 text-red-500">
            بستن
          </button>
        </div>
      </aside>
    </>
  );
}

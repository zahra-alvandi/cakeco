import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../context/CartContext";

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40
          transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 right-0 h-screen
          w-full sm:w-[420px]
          bg-white z-50
          shadow-2xl
          flex flex-col
          transition-transform duration-500
          ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2 className="text-xl font-bold text-pink-700">
            Shopping Cart
            <span className="text-sm text-gray-500 ml-2">({totalItems})</span>
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-pink-50 transition"
          >
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-gray-500 text-lg">Your cart is empty 🧁</p>

              <p className="text-sm text-gray-400 mt-2">
                Add something sweet to get started
              </p>

              <button
                onClick={onClose}
                className="mt-5 bg-pink-600 text-white px-5 py-2 rounded-xl hover:bg-pink-700 transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    bg-pink-50
                    rounded-2xl
                    p-3
                    flex
                    gap-3
                    transition-all
                    duration-300
                    hover:scale-[1.01]
                  "
                >
                  {/* image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-cover"
                  />

                  {/* info */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>

                    <p className="text-pink-600 font-medium mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* qty */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:bg-pink-100"
                      >
                        -
                      </button>

                      <span className="font-medium w-6 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:bg-pink-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="
                      text-red-500
                      hover:text-red-700
                      text-xl
                      transition
                      hover:scale-110
                    "
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-5 space-y-4 bg-white">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-pink-700">${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-medium transition">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

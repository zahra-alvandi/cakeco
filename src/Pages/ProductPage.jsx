import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ChevronLeftIcon,
  HeartIcon,
  StarIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const handleAddToCart = () => {
  addToCart(product, quantity);
};
  const products = [
    {
      id: 1,
      title: "Strawberry Cheesecake",
      price: 5.49,
      img: "/images/cakes/cheesecake.webp",
      desc: "Creamy and smooth cheesecake on a buttery graham cracker crust, topped with sweet strawberry sauce. A timeless favorit!",
    },
    {
      id: 2,
      title: "Blueberry Cheesecake",
      price: 6.49,
      img: "/images/cakes/bluberry.jpg",
      desc: "Rich cheesecake with blueberry topping",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 pb-20">
      {/* icons */}
      <svg className="hidden">
        <symbol
          id="RoseIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-rose-icon lucide-rose"
        >
          <path d="M17 10h-1a4 4 0 1 1 4-4v.534" />
          <path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" />
          <path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" />
          <path d="M9.77 12C4 15 2 22 2 22" />
          <circle cx="17" cy="8" r="2" />
        </symbol>
        <symbol
          id="apple"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-apple-icon lucide-apple"
        >
          <path d="M12 6.528V3a1 1 0 0 1 1-1h0" />
          <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />
        </symbol>
        <symbol
          id="heart-pulse"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-heart-pulse-icon lucide-heart-pulse"
        >
          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
        </symbol>
        <symbol
          id="bag"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-handbag-icon lucide-handbag"
        >
          <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
          <path d="M8 11V6a4 4 0 0 1 8 0v5" />
        </symbol>
      </svg>
      <div className="flex items-center justify-between py-5">
        {/* title and back icon */}
        <button onClick={() => navigate(-1)}>
          <ChevronLeftIcon className="w-6 h-6 hover:cursor-pointer text-pink-700 hover:text-pink-800" />
        </button>
        <span>Cheesecake</span>
        <HeartIcon className="w-6 h-6 text-pink-700"></HeartIcon>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <img
          src={product.img}
          alt={product.title}
          className="
    w-full
    h-[320px]
    md:h-[550px]
    rounded-3xl
    object-cover
    shadow-lg
  "
        />

        {/* Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-pink-700">
            {product.title}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-pink-600 mt-5">
            {product.price}
          </p>
          <div className="flex items-center gap-2 my-5">
            {/* point */}
            <StarIcon className="w-5 h-5 text-yellow-300"></StarIcon>
            <p className="text-sm">
              4.8 <span className="text-gray-300">(128 reviews)</span>
            </p>
            <MinusIcon className="transform rotate-90 w-5 h-5 text-gray-300"></MinusIcon>
            <span className="text-green-500 text-sm">In Stock</span>
          </div>
          <p className="text-gray-600 mt-3 text-sm">{product.desc}</p>

          {/* about cake */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            <div className="flex items-center justify-between gap-2 bg-pink-100/50 rounded-xl px-2 py-4">
              <svg className="w-6 h-6 text-pink-600">
                <use href="#RoseIcon"></use>
              </svg>
              <span className="text-sm">Eggless</span>
            </div>
            <div className="flex items-center justify-between gap-2 bg-pink-100/50 rounded-xl px-2 py-4">
              <svg className="w-6 h-6 text-pink-600">
                <use href="#apple"></use>
              </svg>
              <span className="text-sm">Fresh Ingredients</span>
            </div>
            <div className="flex items-center justify-between gap-2 bg-pink-100/50 rounded-xl px-2 py-4">
              <svg className="w-6 h-6 text-pink-600">
                <use href="#heart-pulse"></use>
              </svg>
              <span className="text-sm">No Preservatives</span>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6 flex items-center justify-between">
            <p className="font-medium mb-3">Quantity</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="bg-pink-100 px-4 py-2 rounded-lg"
              >
                -
              </button>

              <span className="font-bold text-lg">{quantity}</span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="bg-pink-100 px-4 py-2 rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className=" bg-pink-600/70 text-white px-4 py-6 rounded-2xl mt-5
flex items-center justify-center gap-3
w-full md:w-fit
min-w-[260px] hover:cursor-pointer
"
          >
            <svg className="w-6 h-6">
              <use href="#bag"></use>
            </svg>
            Add to Cart
            <MinusIcon className="w-5 h-5 rotate-90 text-white"></MinusIcon>
            <p>${(product.price * quantity).toFixed(2)}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

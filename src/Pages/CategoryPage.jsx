import { useState } from "react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      title: "Strawberry Cheesecake",
      price: "$5.49",
      img: "/images/cheesecake.webp",
    },
    {
      id: 2,
      title: "Blueberry Cheesecake",
      price: "$6.49",
      img: "/images/cheesecake.webp",
    },
    {
      id: 3,
      title: "Classic Cheesecake",
      price: "$4.99",
      img: "/images/cheesecake.webp",
    },
    {
      id: 4,
      title: "Chocolate Cheesecake",
      price: "$6.99",
      img: "/images/cheesecake.webp",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">

      {/* Banner */}
      <div
        className="relative h-48 md:h-72 rounded-3xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cheesecake-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Cheesecakes
          </h1>

          <p className="text-white/90 mt-2 text-sm md:text-lg">
            Freshly baked cheesecakes made with love.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-pink-700">
            Cheesecakes
          </h2>

          <p className="text-gray-500 text-sm">
            {filteredProducts.length} Products Available
          </p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex items-center bg-pink-100/70 rounded-xl px-3 py-2 min-w-[250px]">
            <input
              type="search"
              placeholder="Search cheesecake..."
              className="w-full bg-transparent outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <MagnifyingGlassIcon className="w-5 h-5 text-pink-600" />
          </div>

          <select className="bg-white border border-gray-200 rounded-xl px-3 py-2 outline-none">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="
              bg-white
              rounded-2xl
              shadow-sm
              overflow-hidden
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              block
            "
          >
            {/* Image */}
            <div className="relative h-36 md:h-52 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition-transform
                  duration-500
                "
              />

              <button
                onClick={(e) => e.preventDefault()}
                className="
                  absolute
                  top-2
                  right-2
                  bg-white
                  p-2
                  rounded-full
                  shadow
                "
              >
                <HeartIcon className="w-4 h-4 text-pink-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="font-semibold text-gray-800">
                {product.title}
              </h3>

              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-pink-700">
                  {product.price}
                </span>

                <button
                  onClick={(e) => e.preventDefault()}
                  className="
                    flex
                    items-center
                    gap-1
                    bg-pink-600
                    hover:bg-pink-700
                    text-white
                    px-3
                    py-1.5
                    rounded-lg
                    text-sm
                    transition
                  "
                >
                  <ShoppingCartIcon className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>

          </Link>
        ))}

      </div>
    </div>
  );
}
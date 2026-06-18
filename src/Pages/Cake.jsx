import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import products from "../data/products";

const categories = [
  { id: "all", title: "All Products" },
  { id: "cheesecakes", title: "Cheesecakes" },
  { id: "chocolate-cakes", title: "Chocolate Cakes" },
  { id: "hot-drinks", title: "Hot Drinks" },
  { id: "cold-drinks", title: "Cold Drinks" },
];
export default function Cake() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = products
    .filter((p) =>
      activeCategory === "all" ? true : p.category === activeCategory,
    )
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-20">
      {/* HERO */}
      <div className="relative h-[250px] md:h-[420px] rounded-3xl overflow-hidden">
        <img
          src="/images/banner/banner2.webp"
          alt="Cake Collection"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Cake Collection
          </h1>

          <p className="text-white/90 mt-4 max-w-xl">
            Freshly baked cakes prepared daily with premium ingredients and lots
            of love.
          </p>
        </div>
      </div>

      {/* HEADER */}
      <div className="mt-10 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-pink-700">
            Our Delicious Cakes
          </h2>

          <p className="text-gray-500 mt-1">
            {filteredProducts.length} Products Available
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex items-center bg-pink-100 rounded-xl px-4 py-3 w-full lg:w-[350px]">
          <input
            type="search"
            placeholder="Search cakes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none"
          />

          <MagnifyingGlassIcon className="w-5 h-5 text-pink-600" />
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3 mt-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2 rounded-full transition-all duration-300
              ${
                activeCategory === category.id
                  ? "bg-pink-600 text-white shadow-lg"
                  : "bg-pink-100 text-pink-700 hover:bg-pink-200"
              }
            `}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              block
            "
          >
            {/* IMAGE */}
            <div className="relative h-44 md:h-56 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                "
              />

              <button
                onClick={(e) => e.preventDefault()}
                className="
                  absolute
                  top-3
                  right-3
                  bg-white
                  p-2
                  rounded-full
                  shadow-md
                "
              >
                <HeartIcon className="w-4 h-4 text-pink-600" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 line-clamp-1">
                {product.title}
              </h3>

              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-pink-700 text-lg">
                  ${product.price}
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
                    py-2
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

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-gray-700">
            No cakes found
          </h3>

          <p className="text-gray-500 mt-2">
            Try another category or search term.
          </p>
        </div>
      )}
    </div>
  );
}

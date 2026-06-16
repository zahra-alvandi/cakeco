import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();
  const [search, setSearch] = useState("");

  const categoryData = {
    cheesecakes: {
      title: "Cheesecakes",
      banner: `${import.meta.env.BASE_URL}images/banner/cheesecakeBanner.jpg`,
      products: [
        {
          id: 1,
          title: "Strawberry Cheesecake",
          price: "$5.49",
          img: `${import.meta.env.BASE_URL}images/cakes/cheesecake.webp`,
        },
        {
          id: 2,
          title: "Blueberry Cheesecake",
          price: "$6.49",
          img: `${import.meta.env.BASE_URL}images/cakes/bluberry.jpg`,
        },
        {
          id: 3,
          title: "Classic Cheesecake",
          price: "$4.99",
          img: `${import.meta.env.BASE_URL}images/cakes/classic.jpg`,
        },
        {
          id: 4,
          title: "Chocolate Cheesecake",
          price: "$6.99",
          img: `${import.meta.env.BASE_URL}images/cakes/chocolatecake.webp`,
        },
      ],
    },

    "chocolate-cakes": {
      title: "Chocolate Cakes",
      banner: `${import.meta.env.BASE_URL}images/banner/chocolateBanner.jpg`,
      products: [
        {
          id: 5,
          title: "Dark Chocolate Cake",
          price: "$7.99",
          img: `${import.meta.env.BASE_URL}images/cakes/chocolatecake.webp`,
        },
      ],
    },

    "hot-drinks": {
      title: "Hot Drinks",
      banner: `${import.meta.env.BASE_URL}images/banner/htodrinkbanner.webp`,
      products: [
        {
          id: 6,
          title: "Cappuccino",
          price: "$3.99",
          img: `${import.meta.env.BASE_URL}images/drinks/cappuchino.webp`,
        },
      ],
    },

    "cold-drinks": {
      title: "Cold Drinks",
      banner: `${import.meta.env.BASE_URL}images/banner/colddrinkBanner.webp`,
      products: [
        {
          id: 7,
          title: "Iced Latte",
          price: "$4.49",
          img: `${import.meta.env.BASE_URL}images/drinks/icedlatte.webp`,
        },
      ],
    },
  };

  const currentCategory = categoryData[slug];

  if (!currentCategory) {
    return (
      <div className="container mx-auto px-4 py-10 text-center text-gray-500">
        Category not found
      </div>
    );
  }

  const filteredProducts = currentCategory.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative w-full h-[250px] md:h-[450px] overflow-hidden rounded-2xl">
        <img
          src={currentCategory.banner}
          className="w-full h-full object-cover object-center"
          alt="banner"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {currentCategory.title}
          </h1>
          <p className="text-white/90 mt-2 text-sm md:text-lg">
            Freshly baked {currentCategory.title.toLowerCase()} made with love.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-pink-700">
            {currentCategory.title}
          </h2>
          <p className="text-gray-500 text-sm">
            {filteredProducts.length} Products Available
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center bg-pink-100/70 rounded-xl px-3 py-2 min-w-[250px]">
          <input
            type="search"
            placeholder={`Search ${currentCategory.title}...`}
            className="w-full bg-transparent outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-pink-600" />
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
          >
            <div className="relative h-36 md:h-52 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />

              <button
                onClick={(e) => e.preventDefault()}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
              >
                <HeartIcon className="w-4 h-4 text-pink-600" />
              </button>
            </div>

            <div className="p-3">
              <h3 className="font-semibold text-gray-800 line-clamp-1">
                {product.title}
              </h3>

              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-pink-700">{product.price}</span>

                <button
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-1 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1.5 rounded-lg text-sm transition"
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

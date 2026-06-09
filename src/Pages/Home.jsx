import { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const categories = [
    {
      id: 1,
      title: "Cheesecakes",
      img: "/images/cheesecake.webp",
      price: "$5.49",
      slug: "cheesecakes",
      text: "Creamy cheesecake with strawberry topping",
    },
    {
      id: 2,
      title: "Chocolate Cakes",
      img: "/images/chocolatecake.webp",
      price: "$4.99",
      slug: "chocolate-cakes",
      text: "Rich chocolate cake with chocolate ganache",
    },
    {
      id: 3,
      title: "Hot Drinks",
      img: "/images/hotdrink.webp",
      price: "$3.49",
      slug: "hot-drinks",
      text: "Smooth espersso with streamed milk",
    },
    {
      id: 4,
      title: "Cold Drinks",
      img: "/images/icedrink.webp",
      price: "$3.49",
      slug: "cold-drinks",
      text: "Chilled coffee over ice with a smooth finish",
    },
  ];

  const slides = [
    "/images/mobileBanner.png",
    "/images/banner2.webp",
    "/images/banner3.png",
  ];

  // auto slide
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <div className="container mx-auto px-4 my-4">
      {/* SEARCH */}
      <div className="flex items-center justify-between rounded-xl px-3 py-3 bg-pink-100/70">
        <input
          type="search"
          placeholder="Search cakes, drinks..."
          className="w-full outline-none bg-transparent"
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-pink-500" />
      </div>

      {/* SLIDER */}
      <div
        className="relative mt-6 rounded-2xl overflow-hidden h-56 md:h-[420px] lg:h-[520px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute top-1/2 left-10 -translate-y-1/2 z-20">
          <div>
            <h2 className="text-pink-700 font-bold text-2xl md:text-4xl">
              Every Slice
            </h2>
            <p
              className="text-xl md:text-3xl text-pink-600"
              style={{ fontFamily: "pacifico" }}
            >
              brings happiness
            </p>
            <span className="text-[12px] md:text-sm text-gray-600">
              Delicious cakes & drinks for every mood.
            </span>
          </div>
          <button className="bg-pink-700 text-white outline-none border-none rounded-md p-1 text-[10px] md:p-2 md:text-sm">
            Shop now
          </button>
        </div>

        {/* TRACK */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full w-full"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {slides.map((img, i) => (
            <div key={i} className="min-w-full h-full relative">
              {/* 🔥 BACKGROUND COVER (real site style) */}
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${img})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-4 bg-pink-600" : "w-2 bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* PREV */}
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 px-2 py-1 rounded-full"
        >
          ‹
        </button>

        {/* NEXT */}
        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 px-2 py-1 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Shop by category */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h3
            className="text-xl text-pink-700"
            style={{ fontFamily: "pacifico" }}
          >
            Shop by category
          </h3>

          <a href="#" className="text-pink-600 hover:text-pink-700">
            View all
          </a>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-4 gap-3 overflow-x-auto pb-4 shadow-sm">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="block"
            >
              <img src={category.img} alt={category.title} />

              <div className="my-2">
                <p className="text-pink-700 font-bold">{category.title}</p>
                <span className="text-sm">{category.text}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>{category.price}</span>
                <button className="flex items-center justify-between text-sm bg-pink-700 text-white px-2 py-1 rounded-md">
                  <ShoppingCartIcon className="w-4 h-4"></ShoppingCartIcon>
                  Add to cart
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Products */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-3">
                <p className="font-medium">{product.title}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

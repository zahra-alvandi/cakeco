import { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  CakeIcon,
  FireIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Features from "./Features";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const categories = [
    {
      id: 1,
      title: "Cheesecakes",
      img: "./images/cakes/cheesecake.webp",
      slug: "cheesecakes",
      items: 4,
    },
    {
      id: 2,
      title: "Chocolate Cakes",
      img: "./images/cakes/chocolatecake.webp",
      slug: "chocolate-cakes",
      items: 6,
    },
    {
      id: 3,
      title: "Hot Drinks",
      img: "./images/drinks/hotdrink.webp",
      slug: "hot-drinks",
      items: 8,
    },
    {
      id: 4,
      title: "Cold Drinks",
      img: "./images/drinks/icedrink.webp",
      slug: "cold-drinks",
      items: 5,
    },
  ];

  const slides = [
    "./images/banner/mobileBanner.png",
    "./images/banner/banner2.webp",
    "./images/banner/banner3.png",
  ];

  // const Icon = category.icon;
  // <Icon className="w-5 h-5 text-pink-600" />;

  // auto slide
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <div className="container mx-auto px-4 my-4 pb-20 md:pb-0">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:mt-10">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="
        bg-white
        rounded-2xl
        shadow-sm
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-[1.03]
        hover:shadow-xl
      "
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={category.img}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy"
                />

                {/* Heart */}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="
            absolute
            top-2
            right-2
            bg-white/90
            p-2
            rounded-full
            shadow-md
          "
                >
                  <HeartIcon className="w-4 h-4 text-pink-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-3">
                <h4 className="font-semibold text-pink-700">
                  {category.title}
                </h4>

                <p className="text-sm text-gray-500">{category.items} items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features */}
      <Features />
    </div>
  );
}

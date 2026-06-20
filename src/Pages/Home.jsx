import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, HeartIcon } from "@heroicons/react/24/outline";
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

  const popularProducts = [
    {
      id: 1,
      title: "Strawberry Cheesecake",
      price: "$5.49",
      img: "./images/cakes/cheesecake.webp",
    },
    {
      id: 2,
      title: "Chocolate Cake",
      price: "$6.99",
      img: "./images/cakes/chocolatecake.webp",
    },
    {
      id: 6,
      title: "Cappuccino",
      price: "$3.99",
      img: "./images/drinks/hotdrink.webp",
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
      {/* welcome */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h2
          className="text-3xl text-pink-700 mb-3"
          style={{ fontFamily: "pacifico" }}
        >
          Welcome to CakeCo
        </h2>

        <p className="text-gray-600 leading-8">
          Freshly baked cakes, cheesecakes and handcrafted drinks made with
          premium ingredients. Every order is prepared with care to make your
          day a little sweeter.
        </p>
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
          <Link
            to="/cakes"
            className="inline-block mt-3 bg-pink-700 text-white rounded-lg px-4 py-2 text-sm md:text-base hover:bg-pink-800 transition"
          >
            Shop Now
          </Link>
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

      {/* Featured Product */}
      <div className="mt-12">
        <div className="bg-gradient-to-r from-pink-600 to-pink-500 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="p-8 md:p-12 text-white">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Today's Special
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Strawberry Cheesecake
              </h2>

              <p className="mt-4 text-pink-100 max-w-md">
                Rich creamy cheesecake topped with fresh strawberries and
                handcrafted sweet sauce.
              </p>

              <Link
                to="/product/1"
                className="inline-block mt-6 bg-white text-pink-700 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                View Details
              </Link>
            </div>

            <div className="relative h-64 md:h-auto">
              <img
                src="./images/cakes/cheesecake.webp"
                alt="featured cake"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
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

          <Link to="/cakes" className="text-pink-600 hover:text-pink-700">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
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
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-pink-50 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-bold text-pink-700">
          Ready for something sweet?
        </h3>

        <p className="text-gray-600 mt-3">
          Explore our cakes and drinks collection and find your favorite treat.
        </p>

        <Link
          to="/cakes"
          className="inline-block mt-5 bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition"
        >
          Explore Menu
        </Link>
      </div>

      {/* Customer Reviews */}
      <div className="mt-16">
        <h3
          className="text-2xl text-pink-700 text-center mb-8"
          style={{ fontFamily: "pacifico" }}
        >
          What Our Customers Say
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah",
              text: "Amazing cakes and very fresh ingredients. Highly recommended!",
            },
            {
              name: "Emily",
              text: "Beautiful presentation and the drinks were delicious.",
            },
            {
              name: "Michael",
              text: "The cheesecake was one of the best I've ever tasted.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <p className="text-yellow-500 text-lg">★★★★★</p>

              <p className="text-gray-600 mt-3">{review.text}</p>

              <p className="mt-4 font-semibold text-pink-700">{review.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-16 bg-pink-50 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-bold text-pink-700">Get Sweet Updates</h3>

        <p className="text-gray-600 mt-3">
          Subscribe to receive updates about new cakes and special offers.
        </p>

        <div className="max-w-md mx-auto mt-6 flex flex-col md:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-pink-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
          />

          <button
            className="
      bg-pink-600
      text-white
      px-5
      py-3
      rounded-xl
      hover:bg-pink-700
      transition
    "
          >
            Subscribe
          </button>
        </div>
      </div>
      {/* Features */}
      <Features />
    </div>
  );
}

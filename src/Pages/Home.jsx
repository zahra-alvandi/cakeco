import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

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
        className="relative mt-6 rounded-2xl overflow-hidden h-56 md:h-72"
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
    </div>
  );
}

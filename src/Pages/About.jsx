import { Link } from "react-router-dom";
import {
  HeartIcon,
  CakeIcon,
  TruckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  const features = [
    {
      title: "Fresh Ingredients",
      desc: "We use premium ingredients to create delicious cakes and drinks.",
      icon: HeartIcon,
    },
    {
      title: "Handmade Daily",
      desc: "Every product is freshly prepared with care and attention.",
      icon: CakeIcon,
    },
    {
      title: "Fast Delivery",
      desc: "Quick and reliable delivery for your special occasions.",
      icon: TruckIcon,
    },
    {
      title: "Made with Passion",
      desc: "Crafted to bring joy and sweet memories to every customer.",
      icon: SparklesIcon,
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "150+", label: "Cake Designs" },
    { number: "50+", label: "Drink Varieties" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 mb-10">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="text-pink-600 font-medium">Welcome to CakeCo</span>

        <h1
          className="text-4xl md:text-5xl text-pink-700 mt-4"
          style={{ fontFamily: "pacifico" }}
        >
          Crafting Sweet Moments
        </h1>

        <p className="mt-5 text-gray-600 leading-8">
          Freshly baked cakes, creamy cheesecakes, and handcrafted drinks
          prepared with premium ingredients to make every moment special.
        </p>
      </section>

      {/* Story */}
      <section className="mt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="./images/cakes/cheesecake.webp"
              alt="Cake"
              className="w-full rounded-3xl shadow-lg object-cover h-[320px]"
            />
          </div>

          <div>
            <span className="text-pink-600 font-medium">Our Story</span>

            <h2 className="text-3xl font-bold text-pink-700 mt-3">
              Every Cake Tells a Story
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              CakeCo was created with a simple mission: bringing people together
              through delicious desserts and handcrafted drinks.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              From birthdays to everyday treats, every order is prepared with
              care, creativity, and a passion for quality.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-20">
        <div className="text-center">
          <h2
            className="text-3xl text-pink-700"
            style={{ fontFamily: "pacifico" }}
          >
            Why Choose Us
          </h2>

          <p className="text-gray-500 mt-3">
            Quality, freshness and customer happiness are our priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  transition
                  text-center
                "
              >
                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon className="w-7 h-7 text-pink-600" />
                </div>

                <h3 className="font-semibold text-pink-700 mt-4">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-20">
        <div className="bg-pink-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl md:text-4xl font-bold text-pink-700">
                  {stat.number}
                </h3>

                <p className="text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="bg-gradient-to-r from-pink-600 to-pink-500 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold">Ready for Something Sweet?</h2>

          <p className="mt-4 text-pink-100 max-w-2xl mx-auto">
            Explore our collection of cakes and drinks and discover your next
            favorite treat.
          </p>

          <Link
            to="/cakes"
            className="
              inline-block
              mt-6
              bg-white
              text-pink-700
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition
            "
          >
            Explore Menu
          </Link>
        </div>
      </section>
    </div>
  );
}

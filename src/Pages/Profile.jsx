import { Link } from "react-router-dom";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  HeartIcon,
  CreditCardIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Profile() {
  const user = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    memberSince: "2024",
  };

  const stats = [
    { value: "12", label: "Orders" },
    { value: "3", label: "Favorites" },
    { value: "$145", label: "Spent" },
    { value: "2", label: "Rewards" },
  ];

  const recentOrders = [
    {
      id: "#1024",
      product: "Strawberry Cheesecake",
      status: "Delivered",
      price: "$12.99",
    },
    {
      id: "#1025",
      product: "Cappuccino",
      status: "Preparing",
      price: "$3.99",
    },
  ];

  const favorites = [
    {
      id: 1,
      title: "Chocolate Cake",
      img: "./images/cakes/chocolatecake.webp",
    },
    {
      id: 2,
      title: "Blueberry Cheesecake",
      img: "./images/cakes/bluberry.jpg",
    },
    {
      id: 3,
      title: "Iced Latte",
      img: "./images/drinks/icedrink.webp",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 pb-24">
      {/* Profile Card */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-500 rounded-3xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <UserCircleIcon className="w-28 h-28" />

          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">{user.name}</h1>

            <p className="text-pink-100 mt-2">{user.email}</p>

            <p className="text-pink-200 text-sm mt-1">
              Member since {user.memberSince}
            </p>

            <button
              className="
                mt-4
                bg-white
                text-pink-700
                px-5
                py-2
                rounded-xl
                font-medium
                hover:scale-105
                transition
              "
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              bg-white
              rounded-2xl
              shadow-sm
              p-5
              text-center
            "
          >
            <h3 className="text-2xl font-bold text-pink-700">{stat.value}</h3>

            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-pink-700 mb-5">Recent Orders</h2>

        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="
                bg-white
                rounded-2xl
                shadow-sm
                p-5
                flex
                items-center
                justify-between
              "
            >
              <div>
                <h3 className="font-semibold text-gray-800">{order.product}</h3>

                <p className="text-sm text-gray-500">Order {order.id}</p>
              </div>

              <div className="text-right">
                <p className="font-bold text-pink-700">{order.price}</p>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Favorites */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-pink-700 mb-5">
          Favorite Items
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                transition
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex items-center justify-between">
                <h3 className="font-medium text-pink-700">{item.title}</h3>

                <HeartIcon className="w-5 h-5 text-pink-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-pink-700 mb-5">
          Account Settings
        </h2>

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <button className="w-full flex items-center gap-3 p-5 hover:bg-pink-50 transition">
            <UserCircleIcon className="w-5 h-5 text-pink-600" />
            Profile Information
          </button>

          <button className="w-full flex items-center gap-3 p-5 hover:bg-pink-50 transition border-t">
            <BellIcon className="w-5 h-5 text-pink-600" />
            Notifications
          </button>

          <button className="w-full flex items-center gap-3 p-5 hover:bg-pink-50 transition border-t">
            <CreditCardIcon className="w-5 h-5 text-pink-600" />
            Payment Methods
          </button>

          <button className="w-full flex items-center gap-3 p-5 hover:bg-pink-50 transition border-t">
            <ShoppingBagIcon className="w-5 h-5 text-pink-600" />
            Order History
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-10">
        <button
          className="
            w-full
            md:w-auto
            flex
            items-center
            justify-center
            gap-2
            bg-red-50
            text-red-600
            px-6
            py-3
            rounded-xl
            hover:bg-red-100
            transition
          "
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}

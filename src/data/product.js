const products = [
  {
    id: 1,
    category: "cheesecakes",
    title: "Strawberry Cheesecake",
    price: 5.49,
    img: `${import.meta.env.BASE_URL}images/cakes/cheesecake.webp`,
    desc: "Creamy and smooth cheesecake with strawberry topping.",
  },

  {
    id: 2,
    category: "cheesecakes",
    title: "Blueberry Cheesecake",
    price: 6.49,
    img: `${import.meta.env.BASE_URL}images/cakes/bluberry.jpg`,
    desc: "Rich cheesecake with blueberry topping.",
  },

  {
    id: 3,
    category: "cheesecakes",
    title: "Classic Cheesecake",
    price: 4.99,
    img: `${import.meta.env.BASE_URL}images/cakes/classic.jpg`,
    desc: "Classic baked cheesecake.",
  },

  {
    id: 4,
    category: "chocolate-cakes",
    title: "Dark Chocolate Cake",
    price: 7.99,
    img: `${import.meta.env.BASE_URL}images/cakes/chocolatecake.webp`,
    desc: "Chocolate lovers dream.",
  },

  {
    id: 5,
    category: "hot-drinks",
    title: "Cappuccino",
    price: 3.99,
    img: `${import.meta.env.BASE_URL}images/drinks/cappuccino.jpg`,
    desc: "Fresh hot cappuccino.",
  },

  {
    id: 6,
    category: "cold-drinks",
    title: "Iced Latte",
    price: 4.49,
    img: `${import.meta.env.BASE_URL}images/drinks/icedlatte.jpg`,
    desc: "Cold latte with ice.",
  },
];

export default products;
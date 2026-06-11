import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      title: "Strawberry Cheesecake",
      price: "$5.49",
      img: "/images/cheesecake.webp",
      desc: "Creamy cheesecake with fresh strawberries",
    },
    {
      id: 2,
      title: "Blueberry Cheesecake",
      price: "$6.49",
      img: "/images/cheesecake.webp",
      desc: "Rich cheesecake with blueberry topping",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <img
          src={product.img}
          className="rounded-2xl md:w-[50%] object-cover"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-pink-700">{product.title}</h1>

          <p className="text-gray-600 mt-3">{product.desc}</p>

          <p className="text-2xl font-bold text-pink-600 mt-5">
            {product.price}
          </p>

          {/* Add to cart */}
          <button
            className="
            mt-6
            bg-pink-600
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-pink-700
            transition
          "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

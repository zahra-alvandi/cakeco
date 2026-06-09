import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{slug}</h1>
    </div>
  );
}

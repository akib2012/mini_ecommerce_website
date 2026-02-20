"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data: Product[]) => {
        const item = data.find((p) => p.id === Number(id));
        setProduct(item || null);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong while loading product.");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <ProductCardSkeleton></ProductCardSkeleton>;

  if (error)
    return <p className="text-center mt-20 text-red-500">{error}</p>;

  if (!product)
    return <p className="text-center mt-20 text-gray-500">Product not found!</p>;

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto p-4">
      
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        ← Go Back
      </button>

      {/* Product Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-xl p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 md:h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-indigo-600 font-bold text-xl md:text-2xl mb-4">
              ${product.price}
            </p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-sm text-gray-400">Category: {product.category}</p>
          </div>

          <button
            onClick={() => alert("Add to cart feature not implemented")}
            className="mt-4 px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

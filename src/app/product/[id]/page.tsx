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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data: Product[] = await res.json();
        const item = data.find((p) => p.id === Number(id));

        if (!item) {
          throw new Error("Product not found");
        }

        setProduct(item);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);
/* here loading phage  */
  if (loading) return <ProductCardSkeleton />;

  if (error)
    return (
      <div className="text-center mt-20">
        <p className="text-red-600 font-semibold text-lg">{error}</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          ← Go Back
        </button>
      </div>
    );

  if (!product) return null;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        ← Go Back
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-xl p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 md:h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-indigo-600 font-bold text-xl md:text-2xl mb-4">
              ${product.price}
            </p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-sm text-gray-400">
              Category: {product.category}
            </p>
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
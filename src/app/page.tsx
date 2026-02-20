"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Filter from "@/components/Filter";
import { Product } from "@/types/Product";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong while loading products.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ProductCardSkeleton></ProductCardSkeleton>;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

  return (
    <div className="w-11/12 mx-auto p-4">
     
      <Filter products={products} onFilter={setFiltered} />

      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-9">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

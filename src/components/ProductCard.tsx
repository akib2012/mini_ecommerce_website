import Link from "next/link";
import { Product } from "@/types/Product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="group h-80 relative bg-white/80 backdrop-blur border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
        
        {/* Image Container */}
        <div className="h-44 w-full bg-white flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            /* 'object-contain' ensures the whole image is visible.
               'max-h-full' and 'max-w-full' prevents overflow.
            */
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between h-[calc(20rem-11rem)]">
          <div className="space-y-1">
            <h2 className="font-semibold text-sm line-clamp-2 text-gray-800 leading-tight">
              {product.title}
            </h2>
            <p className="text-gray-500 text-xs line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <p className="text-indigo-600 font-bold text-lg">
              ${product.price}
            </p>
            <span className="text-xs font-medium bg-indigo-600/10 text-indigo-600 px-3 py-1 rounded-full">
              View
            </span>
          </div>
        </div>

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 pointer-events-none bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors duration-300" />
      </div>
    </Link>
  );
}
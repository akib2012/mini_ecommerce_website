import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductCardSkeleton() {
  return (
    <div className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-sm h-80 p-4">
     
      <Skeleton height={176} width="100%" />

      {/* Content placeholder */}
      <div className="mt-4 space-y-2">
        <Skeleton height={16} width="75%" />
        <Skeleton height={12} width="100%" />
        <Skeleton height={12} width="83%" />
        <div className="flex items-center justify-between mt-2">
          <Skeleton height={16} width="25%" />
          <Skeleton height={16} width="16%" />
        </div>
      </div>
    </div>
  );
}


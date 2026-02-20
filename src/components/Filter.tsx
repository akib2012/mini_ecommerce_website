import { Product } from "@/types/Product";

type FilterProps = {
  products: Product[];
  onFilter: (filtered: Product[]) => void;
};

export default function Filter({ products, onFilter }: FilterProps) {
  const categories = Array.from(new Set(products.map(p => p.category)));

  const handleCategory = (cat: string) => {
    if (cat === "all") {
      onFilter(products);
    } else {
      onFilter(products.filter(p => p.category === cat));
    }
  };

  const handlePrice = (value: string) => {
    if (value === "all") {
      onFilter(products);
    } else if (value === "0-50") {
      onFilter(products.filter(p => p.price >= 0 && p.price <= 50));
    } else if (value === "51-100") {
      onFilter(products.filter(p => p.price >= 51 && p.price <= 100));
    } else if (value === "101+") {
      onFilter(products.filter(p => p.price >= 101));
    }
  };

  return (
    
    <div>
       <div className="flex justify-center mb-8">
  <h2 className="relative text-2xl  md:text-3xl font-bold text-gray-800 tracking-wide">
    Find Your Product
    <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-indigo-600 rounded-full -translate-x-1/2"></span>
  </h2>
</div>
        <div className="flex flex-col md:flex-row gap-4 mb-6 w-full">
        
      
      {/* Category Filter */}
      <div className="flex flex-col w-full md:w-1/2">
        <label className="relative text-sm font-semibold text-gray-800 mb-4 inline-block">
  Filter by Category
  <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-indigo-600 rounded-full"></span>
</label>
        <select
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => handleCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div className="flex flex-col w-full md:w-1/2">
        <label className="relative text-sm font-semibold text-gray-800 mb-4 inline-block">
  Filter by Price
  <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-indigo-600 rounded-full"></span>
</label>
        <select
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => handlePrice(e.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101+">$101+</option>
        </select>
      </div>

    </div>

    </div>
  );
}

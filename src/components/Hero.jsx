export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Your Next <br /> Favorite Product
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Shop the best products with amazing prices and fast delivery.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-2 rounded font-semibold hover:bg-gray-100">
              Shop Now
            </button>
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/shooping.jpg"
            alt="Shopping"
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

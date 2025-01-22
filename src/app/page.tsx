// pages/index.js

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-6">Your go-to solution for web development and digital services.</p>
        <a
          href="/services"
          className="inline-block bg-yellow-500 text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all"
        >
          Explore Our Services
        </a>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are a dedicated team offering innovative solutions to help your business grow online.
        </p>
        <a
          href="/about"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-500 transition-all"
        >
          Learn More
        </a>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Responsive Design</h3>
              <p className="text-gray-700">We create responsive designs that look great on all devices.</p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Fast Performance</h3>
              <p className="text-gray-700">Our websites are optimized for speed, ensuring a smooth user experience.</p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">SEO Optimized</h3>
              <p className="text-gray-700">We follow best SEO practices to improve your websites visibility on search engines.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <main className="container mx-auto p-4">
        {/* About Us Section */}
        <section id="about" className="my-16 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="">
            We are a company dedicated to providing the best services in app and web development.
          </p>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="my-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-cyan-600 p-4 shadow text-slate-100">Project 1</div>
            <div className="bg-cyan-600 p-4 shadow">Project 2</div>
            <div className="bg-cyan-600 p-4 shadow">Project 3</div>
            
            <div className="bg-cyan-600   p-4 shadow">Project 4</div>
            
            <div className="bg-cyan-600   p-4 shadow">Project 5</div>
            
            <div className="bg-cyan-600   p-4 shadow">Project 6</div>
          </div>
        </section>
      </main>
     </div>
  );
}

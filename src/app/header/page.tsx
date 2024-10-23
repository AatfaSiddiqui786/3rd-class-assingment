export default function Header() {
    return (
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <ul className="flex space-x-4">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
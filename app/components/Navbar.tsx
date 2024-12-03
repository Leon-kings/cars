import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
         Leon
        </Link>
        <div className="new">
          <form action="">
            <input type="text" placeholder="Search" className="p-1"/>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <div className="relative group">
            {/* Dropdown Trigger */}
            <button className="hover:text-blue-300">
              Services
            </button>
            {/* Dropdown Content */}
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <Link
                href="/service1"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Service 1
              </Link>
              <Link
                href="/service2"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Service 2
              </Link>
              <Link
                href="/service3"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Service 3
              </Link>
            </div>
          </div>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden group">
          <button className="hover:text-gray-300">
            ☰
          </button>
          <div className="absolute right-4 top-full mt-2 w-48 bg-white text-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Home
            </Link>
            <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">
              Services
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

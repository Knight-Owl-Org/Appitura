import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container bg-white mx-auto px-4 py-10">
        <nav className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-20">
          <Link href="/about" className="text-gray-800 hover:text-gray-600 font-semibold">
            About Appitura
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-gray-600 font-semibold">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-800 hover:text-gray-600 font-semibold">
            Portfolio
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600 font-semibold">
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© Appitura 2025, Innovating the Future of Mobile Technology</p>
        </div>
      </div>
    </footer>
  )
}


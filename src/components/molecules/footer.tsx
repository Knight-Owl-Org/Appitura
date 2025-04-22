import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container bg-white mx-auto md:px-4 md:py-18 py-10">
        <nav className="flex flex-row justify-center space-x-15 md:space-x-20 text-[8px] sm:text-base">
          <Link
            href="/aboutUs"
            className="text-gray-800 hover:text-gray-600 font-semibold"
            style={{ fontFamily: "Inter" }}
          >
            About Appitura
          </Link>
          <Link
            href="/services"
            className="text-gray-800 hover:text-gray-600 font-semibold"
            style={{ fontFamily: "Inter" }}
          >
            Services
          </Link>
          <Link
            href="/aboutUs"
            className="text-gray-800 hover:text-gray-600 font-semibold"
            style={{ fontFamily: "Inter" }}
          >
            Portfolio
          </Link>
          <Link
            href="/#contactUs"
            className="text-gray-800 hover:text-gray-600 font-semibold"
            style={{ fontFamily: "Inter" }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="bg-black text-white md:py-18 py-10">
        <div
          className="container mx-auto px-4 text-center text-[10px] sm:text-base"
          style={{ fontFamily: "Inter" }}
        >
          <p>© Appitura 2025, Innovating the Future of Mobile Technology</p>
        </div>
      </div>
    </footer>
  )
}

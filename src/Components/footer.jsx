import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t ">
      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-700">
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
          <ul className="p-0 space-y-2">
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Help Center</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Safety information</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">AirCover</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Anti-discrimination</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Disability support</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Cancellation options</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Report a neighborhood concern</Link></li>
          </ul>
        </div>

        {/* Hosting */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Hosting</h3>
          <ul className="p-0 space-y-2">
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Airbnb your home</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Airbnb your experience</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Airbnb-friendly apartments</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">AirCover for Hosts</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Hosting resources</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Community forum</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Join a free hosting class</Link></li>
          </ul>
        </div>

        {/* Airbnb */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Airbnb</h3>
          <ul className="p-0 space-y-2">
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">2025 Summer Release</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Newsroom</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Careers</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Investors</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Gift cards</Link></li>
            <li><Link to="#" className="hover:text-pink-600 transition no-underline">Airbnb.org emergency stays</Link></li>
          </ul>
        </div>

        {/* Social & Language */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <Link to="#" className="p-2 rounded-full bg-gray-200 hover:bg-pink-500 hover:text-white transition no-underline">
              <FaFacebookF />
            </Link>
            <Link to="#" className="p-2 rounded-full bg-gray-200 hover:bg-pink-500 hover:text-white transition no-underline">
              <FaTwitter />
            </Link>
            <Link to="#" className="p-2 rounded-full bg-gray-200 hover:bg-pink-500 hover:text-white transition no-underline">
              <FaInstagram />
            </Link>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-gray-700 hover:border-pink-500 hover:text-pink-600 transition">
            <FaGlobe /> English (EN)
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t py-5 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 bg-gray-100">
        <p>© {new Date().getFullYear()} Airbnb Clone, All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="#" className="hover:text-pink-600 transition no-underline">Privacy</Link>
          <Link to="#" className="hover:text-pink-600 transition no-underline">Terms</Link>
          <Link to="#" className="hover:text-pink-600 transition no-underline">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}

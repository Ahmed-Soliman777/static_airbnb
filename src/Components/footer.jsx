import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
        
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:underline">Help Center</Link></li>
            <li><Link to="#" className="hover:underline">Get help with a safety issue</Link></li>
            <li><Link to="#" className="hover:underline">AirCover</Link></li>
            <li><Link to="#" className="hover:underline">Anti-discrimination</Link></li>
            <li><Link to="#" className="hover:underline">Disability support</Link></li>
          <li><Link to="#" className="hover:underline">Cancellation options</Link></li>
        <li><Link to="#" className="hover:underline">Report neighborhood concern</Link></li>


          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold mb-3">Hosting</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:underline">Airbnb your home</Link></li>
            <li><Link to="#" className="hover:underline">Airbnb your experience</Link></li>
            <li><Link to="#" className="hover:underline">Airbnb your service</Link></li>
            <li><Link to="#" className="hover:underline">AirCover for Hosts</Link></li>
            <li><Link to="#" className="hover:underline">Hosting resources</Link></li>
            <li><Link to="#" className="hover:underline">Community forum</Link></li>
            <li><Link to="#" className="hover:underline">Hosting responsibly</Link></li>
            <li><Link to="#" className="hover:underline">Airbnb-friendly apartments</Link></li>
            <li><Link to="#" className="hover:underline">Join a free Hosting class</Link></li>
            <li><Link to="#" className="hover:underline">Find a co_host</Link></li>

          </ul>
        </div>

        {/* Hosting */}
        <div>
          <h3 className="font-semibold mb-3">Airbnb</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:underline">2025 Summer Release</Link></li>
            <li><Link to="#" className="hover:underline">Newsroom</Link></li>
            <li><Link to="#" className="hover:underline">Careers</Link></li>
            <li><Link to="#" className="hover:underline">Investors</Link></li>
            <li><Link to="#" className="hover:underline">Gift cards</Link></li>
            <li><Link to="#" className="hover:underline">Airbnb.org emergency stays</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="border-t py-4 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Airbnb Clone, All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="#" className="hover:underline">Privacy</Link>
          <Link to="#" className="hover:underline">Terms</Link>
          <Link to="#" className="hover:underline">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}

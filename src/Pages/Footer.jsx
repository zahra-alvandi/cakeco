import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-pink-50 border-t border-pink-100 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2
              className="text-2xl text-pink-700"
              style={{ fontFamily: "pacifico" }}
            >
              Cake & Co.
            </h2>

            <p className="text-gray-600 mt-3 text-sm">
              Delicious cakes, desserts and drinks crafted to make every moment
              sweeter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-pink-700 mb-3">Quick Links</h3>

            <div className="flex flex-col gap-2 text-gray-600">
              <Link className="hover:text-pink-600 transition-all" to="/">Home</Link>
              <Link className="hover:text-pink-600 transition-all" to="/categories">Categories</Link>
              <Link className="hover:text-pink-600 transition-all" to="/favorites">Favorites</Link>
              <Link className="hover:text-pink-600 transition-all" to="/login">Login</Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-pink-700 mb-3">Categories</h3>

            <div className="flex flex-col gap-2 text-gray-600">
              <Link className="hover:text-pink-600 transition-all" to="/category/cheesecakes">Cheesecakes</Link>
              <Link className="hover:text-pink-600 transition-all" to="/category/chocolate-cakes">Chocolate Cakes</Link>
              <Link className="hover:text-pink-600 transition-all" to="/category/hot-drinks">Hot Drinks</Link>
              <Link className="hover:text-pink-600 transition-all" to="/category/cold-drinks">Cold Drinks</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-pink-700 mb-3">Contact</h3>

            <div className="flex flex-col gap-2 text-gray-600 text-sm">
              <span>hello@cakeco.com</span>
              <span>+1 (555) 123-4567</span>
              <span>Open Daily 8AM - 10PM</span>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-100 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 Cake & Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

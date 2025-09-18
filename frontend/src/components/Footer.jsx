import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">Samaya</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Your one-stop solution for learning and building projects.  
            Connect with us for more resources and support!
          </p>
          <p className="text-sm">phone no: +91 12345 67890</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Services</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-400">Twitter</a></li>
            <li><a href="#" className="hover:text-yellow-400">Instagram</a></li>
          </ul>
        </div>
        <div className="hidden md:block"></div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} <span className="font-semibold">Samaya</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

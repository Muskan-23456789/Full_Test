import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="text-3xl font-extrabold tracking-wide hover:text-yellow-300 transition">
            Samaya
          </Link>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span>&#9776;</span>
          </button>
        </div>
        <nav
          className={`flex-col md:flex-row gap-2 md:gap-6 text-lg font-medium flex ${
            open ? "flex" : "hidden"
          } md:flex mt-4 md:mt-0`}
        >
          <Link to="/" className="hover:text-yellow-300 transition" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/services" className="hover:text-yellow-300 transition" onClick={() => setOpen(false)}>
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
}
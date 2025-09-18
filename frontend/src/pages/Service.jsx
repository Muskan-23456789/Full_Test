import React from "react";

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide professional Full Stack Development services, including:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Building responsive and scalable websites with React and Node.js
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <p className="text-gray-600">
              Creating mobile-friendly apps with modern frameworks.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Designing user-friendly interfaces with Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

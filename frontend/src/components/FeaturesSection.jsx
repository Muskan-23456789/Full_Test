import React from "react";
const items = [
  { title: "Fast", desc: "High performance.quick links, and social media, ensuring accessibility and readability across all devicesModern UI design and prototyping" },
  { title: "Secure", desc: "Validated forms & backend checks.quick links, and social media, ensuring accessibility and readability across all devicesModern UI design and prototyping" },
  { title: "Scalable", desc: "Easily extendable.quick links, and social media, ensuring accessibility and readability across all devicesModern UI design and prototyping" }
];
export default function FeaturesSection() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8 text-center">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="p-6 rounded-lg border border-gray-100 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition">
              <h4 className="text-xl font-semibold mb-2">{it.title}</h4>
              <p className="text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





















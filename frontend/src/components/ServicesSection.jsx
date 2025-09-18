import react from "react";
const services = [
  { title: "Design", desc: "A clean, responsive footer with a modern gradient background, neatly structured into columns for company info, quick links, and social media, ensuring accessibility and readability across all devicesModern UI design and prototyping." },
  { title: "Development", desc: "Frontend + Backend integration.quick links, and social media, ensuring accessibility and readability across all devicesModern UI design and prototyping" },
  { title: "Deployment", desc: "Production ready builds and CI.quick links, and social media, ensuring accessibility and readability across all devicesModern UI design and prototyping" }
];
export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-indigo-50">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
              <h4 className="font-semibold text-xl mb-2">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
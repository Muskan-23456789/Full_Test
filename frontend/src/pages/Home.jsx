import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FeaturesSection from "../components/FeaturesSection";

export default function Home() {
  return (
    <div className="space-y-24">
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-bounce">
            Hii, This is Muskan
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum
            itaque ullam pariatur sit ipsa omnis iste! Dolore, magni aliquam?
            Voluptatum animi quae optio architecto reiciendis voluptas quas?
            Libero, esse.
          </p>
        </div>
      </section>
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
    </div>
  );
}

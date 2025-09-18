import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam asperiores laudantium aperiam nisi totam non odit dicta. Laudantium necessitatibus facere voluptatibus officiis perspiciatis atque recusandae soluta est fuga dicta..</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="inline-block w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center animate-float">✓</span>
              <span>India is the biggest country.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center animate-float">✓</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white rounded-2xl shadow-xl p-6 transform transition hover:scale-105 duration-500">
            <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80" alt="illustration" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

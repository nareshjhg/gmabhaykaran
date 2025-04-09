import React from "react";
import Navbar from "../componats/navbar";
import Footer from "../componats/footer";
import {  GiTeacher, } from "react-icons/gi";
import { FaLeaf, FaGlobeAsia, FaUser } from "react-icons/fa";

const services = [
  {
    title: "ARYA SENA",
    icon: <FaUser className="text-5xl text-cyan-500 mb-4 mx-auto" />,
    desc: "Guided teachings on ancient Indian scriptures and philosophies to awaken inner peace and purpose.",
  },
  {
    title: "Abhaykaran Martial Arts",
    icon: <GiTeacher className="text-5xl text-cyan-500 mb-4 mx-auto" />,
    desc: "Transforming lives worldwide through the path of discipline, strength, and spiritual growth rooted in the unique discipline of Abhaykaran Martial Arts.",
  },
  {
    title: "Social Work",
    icon: <FaLeaf className="text-5xl text-cyan-500 mb-4 mx-auto" />,
    desc: "Planting 100 crore trees annually, leading drug-free campaigns, and promoting a plastic-free Earth—touching millions with a message of selfless service.",
  },
  {
    title: "World Games Association",
    icon: <FaGlobeAsia className="text-5xl text-cyan-500 mb-4 mx-auto" />,
    desc: "Promoting peace and unity through 100 global sports—uniting 8 billion people under the spirit of excellence, culture, and inclusion.",
  },
];

const Services = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-600 text-center mb-16">
          Services Offered
        </h1>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Interested in hosting a session or retreat with Grandmaster Abhaykaran?
          </p>
          <a
            href="/Contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;

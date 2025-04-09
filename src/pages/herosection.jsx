/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../componats/navbar";
import Footer from "../componats/footer";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      className="bg-white text-gray-800 scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center pt-32 px-4 sm:px-6 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg sm:text-xl text-cyan-600">Hello, it's me</h2>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            GRANDMASTER <span className="text-cyan-700">ABHAYKARAN</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Chairman of multiple global associations in Martial Arts, Journalism, Film, and more.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 text-xl mt-4">
            <a href="https://www.facebook.com/people/Soke-Abhay-Karan/pfbid0AWPvPzsGiwrMfp5YDf8SafwgTbHGb4AgpQq5hjLM5MKmAviuQBRF5F5moV3X1tmYl/?mibextid=ZbWKwL" className="text-blue-600 hover:text-blue-400"><FaFacebookF /></a>
            <a href="https://www.instagram.com/grandmaster_abhaykaran/?igsh=OXdhbnd3cnJ4dDJk#" className="text-pink-600 hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="text-cyan-700 hover:text-cyan-600"><MdAlternateEmail /></a>
            <a href="#" className="text-red-600 hover:text-red-500"><FaYoutube /></a>
          </div>
          <a
            href="/About"
            className="inline-block mt-6 bg-cyan-700 hover:bg-cyan-600 py-2 px-6 rounded-full text-white font-semibold transition"
          >
            More About Me
          </a>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <img
            src="/assest/images/abhaykaran1.jpeg"
            alt="Grandmaster"
            className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-cyan-700 object-cover shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-cyan-700">About Me</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            PhD in Abhaykaran Martial Arts. <br />
            Black Belt 10th Dan. <br />
            Grandmaster Abhaykaran is the World Chief of Abhaykaran Martial Arts. <br />
            He also serves as the Chairman of the World Games Association, World Journalists Association, and the World Film Artists Association.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            With decades of dedication to martial arts, global peace, cultural heritage, and talent development, his influence extends to training thousands and hosting international summits to unite communities through discipline and creativity.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 px-4 sm:px-6 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyan-700 mb-10">My Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "ARYA SENA",
                desc: "ARYA SENA becomes cultured among 1.5 billion people — 36 states, 808 districts, 7000 blocks, 6,40,930 villages.",
              },
              {
                title: "ABHAYKARAN MARTIALARTS",
                desc: "Promoting Abhaykaran Martial Arts worldwide to foster discipline and strength.",
              },
              {
                title: "SOCIAL WORKER",
                desc: "Planting 100 crore trees annually, drug-free campaign, and making Earth plastic-free across 1.5 billion people.",
              },
              {
                title: "WORLD GAMES ASSOCIATION",
                desc: "Promoting 100 sports globally among 8 billion people with inclusivity and excellence.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-cyan-500/30 transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        className="py-20 px-4 sm:px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyan-700 mb-10">Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {["gallary1.jpg", "gallary2.jpg", "gallary3.jpg"].map((img, i) => (
              <motion.img
                key={i}
                src={`/assest/images/${img}`}
                className="w-full h-64 object-cover rounded-lg shadow-md transition duration-300 hover:scale-105"
                alt={`Gallery ${i + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              />
            ))}
          </div>
          <a
            href="/Gallery"
            className="inline-block bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
          >
            View More Photos & Videos
          </a>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 sm:px-6 bg-gray-100 text-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-cyan-700 mb-10">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-700">
                Feel free to reach out for collaborations, seminars, or any inquiries related to martial arts, global associations, or community work.
              </p>
              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-cyan-600 mt-1" />
                <p className="text-gray-600">+91 96643713746</p>
              </div>
              <div className="flex items-start space-x-4">
                <MdAlternateEmail className="text-cyan-600 mt-1" />
                <p className="text-gray-600">grandmasterabhaykaran@gmail.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-cyan-600 mt-1" />
                <p className="text-gray-600">155, Shyam Colony, Opp. Panchayat Bhawan, Ballabgarh(FBD.)-121004</p>
              </div>
            </div>
            <motion.form
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded-full text-white font-semibold transition"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default LandingPage;

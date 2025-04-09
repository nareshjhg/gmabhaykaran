import React from "react";
import Navbar from "../componats/navbar";
import Footer from "../componats/footer";
import { FaQuoteLeft } from "react-icons/fa";
import { GiMeditation, GiAchievement } from "react-icons/gi";
import { MdOutlineStars } from "react-icons/md";
import ImageCarousel from "../componats/ImageCarousel";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[url('/src/assets/images/gallary1.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-white bg-opacity-70 w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-600">
            About Grandmaster Abhaykaran
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
            Spiritual Guide | Motivator | Cultural Icon
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/assest/images/gallary2.jpg"
            alt="Grandmaster Abhaykaran"
            className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-cyan-600"
          />
          <h2 className="text-2xl font-bold mt-6 text-cyan-700">Grandmaster Abhaykaran</h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            A visionary spiritual leader and motivator empowering lives through divine wisdom, martial discipline, and cultural legacy.
          </p>
        </div>

        {/* Titles */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">PhD in Abhaykaran Martial Arts</h3>
          <p className="text-lg font-medium text-gray-600 mt-1">Black Belt 10 Dan</p>
        </div>

        {/* Description */}
        <section className="space-y-6 text-gray-700 text-justify leading-relaxed">
          <p>
            Grandmaster Abhaykaran is a globally respected martial artist, educator, and visionary leader with over four decades of dedication.
          </p>
          <p>
            He holds chairmanships in esteemed global organizations:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>🌐 World Games Association</li>
            <li>📰 World Journalists Association</li>
            <li>🎬 World Film Artists Association</li>
            <li>🥋 World Martial Arts Association</li>
            <li>🏆 World Grandmaster Federation</li>
          </ul>
          <p>
            His teachings integrate mental strength, spiritual clarity, and physical excellence—an approach that transforms lives.
          </p>
          <p>He has received global honors for his efforts to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Promote peace and unity through martial arts</li>
            <li>Establish global platforms for martial artists</li>
            <li>Inspire youth with values of character and discipline</li>
            <li>Bridge traditional arts, sports, and education</li>
          </ul>
        </section>

        {/* Image Carousel */}
        <section>
          <h3 className="text-2xl font-semibold text-cyan-700 mb-4 text-center">Gallery</h3>
          <ImageCarousel />
        </section>

        {/* Philosophy */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <GiMeditation className="text-5xl text-cyan-600" />
          <div>
            <h3 className="text-2xl font-semibold text-cyan-700 mb-2">Philosophy</h3>
            <p className="text-gray-700">
              Blending ancient Indian wisdom with modern growth, Grandmaster Abhaykaran guides individuals to inner peace through Abhaykaran Martial Arts, mindfulness, and service.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <MdOutlineStars className="text-5xl text-cyan-600" />
          <div>
            <h3 className="text-2xl font-semibold text-cyan-700 mb-2">Our Mission</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Inspire spiritual discipline and unity among youth</li>
              <li>Promote Indian culture,Abhaykaran Martial Arts, and traditional arts globally</li>
              <li>Build compassionate, wise, and resilient communities</li>
            </ul>
          </div>
        </section>

        {/* Achievements */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <GiAchievement className="text-5xl text-cyan-600" />
          <div>
            <h3 className="text-2xl font-semibold text-cyan-700 mb-2">Achievements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Recognized by Deputy Chief Ministers & Parliament Members</li>
              <li>Keynote speaker at international spiritual forums</li>
              <li>Honored at major cultural and wellness summits in India</li>
            </ul>
          </div>
        </section>

        {/* ARYA SENA */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <GiAchievement className="text-5xl text-cyan-600" />
          <div>
            <h3 className="text-2xl font-semibold text-cyan-700 mb-2">ARYA SENA</h3>
            <p className="text-gray-700">
              ARYA SENA cultivates a cultured, disciplined society across <strong>36 states, 808 districts, 7,000 blocks, and 6,40,930 villages</strong>,
              impacting over <strong>1.5 billion people</strong> with the ideals of service, unity, and cultural pride.
            </p>
          </div>
        </section>

        {/* Abhaykaran Martial Arts */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <GiMeditation className="text-5xl text-cyan-600" />
          <div>
            <h3 className="text-2xl font-semibold text-cyan-700 mb-2">Abhaykaran Martial Arts</h3>
            <p className="text-gray-700">
              Promoting martial arts as a path to discipline, strength, and spiritual growth, Grandmaster Abhaykaran's teachings are transforming lives
              globally through the unique discipline of Abhaykaran Martial Arts.
            </p>
          </div>
        </section>

        {/* Social Work */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <MdOutlineStars className="text-5xl text-cyan-600" />
          <div>
            <h3 className="text-2xl font-semibold text-cyan-700 mb-2">Social Work</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Planting <strong>100 crore trees annually</strong> for a greener planet</li>
              <li>Campaigning for a <strong>drug-free society</strong></li>
              <li>Leading initiatives to make the Earth <strong>plastic-free</strong></li>
              <li>Impacting the lives of over <strong>1.5 billion people</strong> through service</li>
            </ul>
          </div>
        </section>

        {/* World Games Association */}
        <section className="flex flex-col md:flex-row items-start gap-6">
          <GiAchievement className="text-5xl text-cyan-600" />
          <div>
            <h3 className="text-2xl font-semibold text-cyan-700 mb-2">World Games Association</h3>
            <p className="text-gray-700">
              Uniting the world through sports, the association promotes <strong>100 diverse games</strong> across all continents,
              reaching <strong>8 billion people</strong> with a message of inclusion, peace, and excellence.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="text-center space-y-6">
          <h3 className="text-2xl font-semibold text-cyan-700">Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ananya Sharma", msg: "Grandmaster changed my life with his wisdom and training." },
              { name: "Rajeev Menon", msg: "His guidance helped me stay grounded and focused in life." },
              { name: "Dr. Kavita Rao", msg: "A true leader, mentor, and light for the youth." }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow">
                <p className="italic text-gray-700 mb-2">"{t.msg}"</p>
                <h4 className="font-bold text-cyan-700">{t.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="text-center">
          <FaQuoteLeft className="text-3xl text-cyan-600 mx-auto mb-4" />
          <p className="text-xl italic text-gray-700 max-w-2xl mx-auto">
            "Discipline is power. Respect is strength. Unity is victory."
            <br />– Grandmaster Abhaykaran
          </p>
        </section>

        {/* Call to Action */}
        <section className="bg-cyan-100 p-8 rounded-xl text-center mt-12">
          <h3 className="text-2xl font-bold text-cyan-800 mb-2">Become a Part of the Legacy</h3>
          <p className="text-gray-700 mb-4">Explore spiritual growth, martial arts, and cultural leadership with Grandmaster Abhaykaran.</p>
          <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition">
            Join Now
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;

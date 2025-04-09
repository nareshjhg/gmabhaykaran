import React from 'react';
import Navbar from '../componats/navbar';
import Footer from '../componats/footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-gray-100 shadow-xl rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold">📍 Address</h4>
              <p>155, Shyam Colony, Opp. Panchayat Bhawan, Ballabgarh(FBD.)-121004</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">📞 Phone</h4>
              <p className="text-blue-600 font-medium">
                <a href="tel:+919876543210">+91 96643713746</a>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">📧 Gmail</h4>
              <p className="text-blue-600 font-medium">
                <a href="mailto:grandmasterabhaykaran@gmail.com">grandmasterabhaykaran@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

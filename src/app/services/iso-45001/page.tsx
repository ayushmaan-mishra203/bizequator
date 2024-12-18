"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ISO45001Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">ISO 45001 Certification (OHSAS)</h1>
          <p className="text-lg mt-2">Occupational Health & Safety Management System Certification</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is ISO 45001?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ISO 45001:2018 is an international standard for Occupational Health and Safety (OHS) management systems. It provides
              a framework to ensure a safe working environment by managing risks and preventing work-related injuries and health
              issues.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Certification under ISO 45001 helps businesses create safer workplaces, reduce accidents, and comply with health and
              safety regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why is ISO 45001 Certification Important?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Helps in reducing workplace accidents and health-related risks.</li>
              <li>Demonstrates your commitment to employee health and safety.</li>
              <li>Improves compliance with occupational health and safety regulations.</li>
              <li>Enhances the reputation and reliability of your organization.</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Assistance?</h2>
            <p className="text-lg text-gray-700 mb-6">
              If you prefer to speak with us directly, feel free to call or request a callback.
            </p>
            <div className="flex justify-center space-x-4">
              {/* Call Now Button */}
              <a
                href="tel:+919999576641"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
              >
                Call Now
              </a>
              {/* Request Callback Button */}
              <a
                href="mailto:info@bizequator.com?subject=Request Callback&body=Please call me back regarding GST registration."
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition"
              >
                Request Callback
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ISO45001Page;

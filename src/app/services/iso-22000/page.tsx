"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ISO22000Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">ISO 22000 Certification</h1>
          <p className="text-lg mt-2">Food Safety Management System Certification</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is ISO 22000?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ISO 22000:2018 is an international standard for Food Safety Management Systems. It ensures the safety of food
              throughout the supply chain by identifying hazards and managing risks related to food safety.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Certification under ISO 22000 demonstrates your organization's commitment to providing safe and high-quality food
              products to consumers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why is ISO 22000 Certification Important?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Improves food safety practices and reduces the risk of foodborne illnesses.</li>
              <li>Helps in gaining consumer confidence in the safety of your food products.</li>
              <li>Ensures compliance with national and international food safety regulations.</li>
              <li>Improves operational efficiency and product quality.</li>
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

export default ISO22000Page;

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

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for ISO 22000 Certification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contact us today to start the process of ISO 22000 certification and improve your food safety standards.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Call Us</h3>
              <p className="text-gray-700 mb-2">
                📞 <a href="tel:+918130029971" className="text-blue-600 hover:underline">+91 81300 29971</a>
              </p>
              <p className="text-gray-700">
                📞 <a href="tel:+919999576641" className="text-blue-600 hover:underline">+91 99995 76641</a>
              </p>
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

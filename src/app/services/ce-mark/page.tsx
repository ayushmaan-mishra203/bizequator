"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CEMarkPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">CE Mark Certification</h1>
          <p className="text-lg mt-2">European Conformity Mark for Products</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is CE Mark?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The CE Mark is a certification mark that indicates a product complies with European Union (EU) legislation and meets European safety, health, and environmental protection standards.
              It is mandatory for certain product categories sold within the EU.
            </p>
            <p className="text-gray-700 leading-relaxed">
              CE certification enables your products to be sold within the European Economic Area (EEA) and ensures product safety and regulatory compliance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why is CE Mark Certification Important?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Ensures compliance with EU health, safety, and environmental requirements.</li>
              <li>Provides access to European markets.</li>
              <li>Demonstrates your commitment to consumer safety and product quality.</li>
              <li>Increases product credibility and brand reputation in the EU market.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for CE Mark Certification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contact us today to begin the process of obtaining CE Mark certification for your product and expand your market reach.
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

export default CEMarkPage;

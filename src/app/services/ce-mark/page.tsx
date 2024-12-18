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

export default CEMarkPage;

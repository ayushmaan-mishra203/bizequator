"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const APEDARegistrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">APEDA Registration</h1>
          <p className="text-lg mt-2">Enhance Your Export Business with APEDA Registration</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is APEDA Registration?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              APEDA (Agricultural and Processed Food Products Export Development Authority) is responsible for promoting the
              export of agricultural and processed food products in India. APEDA registration is required for businesses
              that wish to export products like fruits, vegetables, grains, meat, processed food, etc.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The registration ensures compliance with export standards and provides access to various incentives and
              benefits offered by the government to exporters.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Register with APEDA?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Gain access to various government schemes and subsidies for exporters.</li>
              <li>Improve credibility and international recognition for your business.</li>
              <li>Ensure compliance with international food safety and quality standards.</li>
              <li>Enhance your business's marketability in the global export market.</li>
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

export default APEDARegistrationPage;

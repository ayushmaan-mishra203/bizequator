"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GMPPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">GMP Certification</h1>
          <p className="text-lg mt-2">Good Manufacturing Practices Certification</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is GMP?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Good Manufacturing Practices (GMP) is a system that ensures products are consistently produced and controlled according to quality standards. It is widely used in industries such as pharmaceuticals, food, cosmetics, and medical devices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              GMP certification ensures that your products are produced in a controlled environment and comply with safety, quality, and regulatory requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why is GMP Certification Important?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Ensures product safety, quality, and efficacy.</li>
              <li>Helps meet regulatory requirements in multiple industries.</li>
              <li>Increases consumer trust and product credibility.</li>
              <li>Improves operational efficiency and minimizes risks of contamination or defects.</li>
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

export default GMPPage;

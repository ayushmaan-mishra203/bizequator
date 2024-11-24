"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RERARegistrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">RERA Registration</h1>
          <p className="text-lg mt-2">Streamline Your Real Estate Compliance in India</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is RERA Registration?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              RERA (Real Estate Regulatory Authority) registration is mandatory for real estate developers and agents in India
              under the RERA Act, 2016. This ensures transparency and accountability in real estate transactions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The registration provides legal protection to buyers and builds trust in real estate projects by mandating
              compliance with prescribed norms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Register Under RERA?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Gain the trust of potential buyers by adhering to legal norms.</li>
              <li>Ensure timely delivery of projects and maintain transparency.</li>
              <li>Avoid penalties for non-compliance under the RERA Act.</li>
              <li>Access exclusive benefits for RERA-registered entities.</li>
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

export default RERARegistrationPage;

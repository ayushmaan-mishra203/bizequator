"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const IECRegistrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">IEC Registration (Import Export Code)</h1>
          <p className="text-lg mt-2">Register for IEC to Start Your Import/Export Business</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is IEC Registration?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              IEC (Import Export Code) is a unique 10-digit code issued by the Directorate General of Foreign Trade (DGFT) to
              businesses that wish to engage in import or export of goods. This code is required for every business that intends
              to deal in international trade.
            </p>
            <p className="text-gray-700 leading-relaxed">
              IEC registration enables businesses to smoothly engage in export and import operations and ensures compliance with
              customs and other regulatory bodies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why is IEC Registration Important?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Required for businesses to import/export goods and services in India.</li>
              <li>Helps in conducting international trade smoothly, ensuring compliance with DGFT norms.</li>
              <li>IEC is essential for clearing goods through customs in India.</li>
              <li>Required for opening a foreign bank account for transactions related to exports/imports.</li>
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

export default IECRegistrationPage;

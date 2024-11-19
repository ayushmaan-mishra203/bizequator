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

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for IEC Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you need assistance with IEC registration, our team of experts is ready to help you through the process and
              ensure compliance with international trade regulations.
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

export default IECRegistrationPage;

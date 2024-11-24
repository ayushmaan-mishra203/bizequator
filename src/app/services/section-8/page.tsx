"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Section8Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Section 8 Company Registration</h1>
          <p className="text-lg mt-2">Non-Profit Company Registration for Charitable Purposes</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Section 8 Company?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Section 8 Company is a non-profit organization that is established for promoting art, commerce, charity, education, science, religion, or any other similar purpose. It is registered under Section 8 of the Companies Act, 2013.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Section 8 companies are primarily for promoting welfare, and the income generated is used for the further advancement of their objectives. They do not pay dividends or distribute profits to their members.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Section 8 Company</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Non-Profit Objectives:</strong> Funds raised are used solely for the charitable purposes of the company.</li>
              <li><strong>Tax Exemption:</strong> Section 8 companies are eligible for tax benefits under Section 80G of the Income Tax Act.</li>
              <li><strong>Limited Liability:</strong> The company’s liability is limited to its members, offering legal protection for the directors.</li>
              <li><strong>Registered Non-Profit Entity:</strong> It is legally recognized and can operate at a national level.</li>
              <li><strong>Social Impact:</strong> Can significantly contribute to society by focusing on social causes.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register a Section 8 Company?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Choose a suitable name for your Section 8 company, ensuring that it aligns with charitable purposes.</li>
              <li>Step 2: Draft the company’s objectives and include them in the Memorandum of Association (MOA) and Articles of Association (AOA).</li>
              <li>Step 3: Apply for Digital Signature Certificates (DSC) and Director Identification Numbers (DIN).</li>
              <li>Step 4: File the necessary documents with the Registrar of Companies (RoC) and submit the application for registration.</li>
              <li>Step 5: Once approved, obtain the Certificate of Incorporation, and begin working towards your charitable goals.</li>
            </ol>
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

export default Section8Page;

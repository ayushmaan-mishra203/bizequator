"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BISPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">BIS Licence Registration</h1>
          <p className="text-lg mt-2">Register for BIS Certification to Ensure Product Quality in India</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is BIS Certification?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Bureau of Indian Standards (BIS) is the national standards body of India, responsible for developing and maintaining product quality standards. BIS certification is granted to businesses and manufacturers whose products meet the quality standards established by the Bureau.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The BIS mark, also known as the ISI mark, signifies the compliance of products with quality standards. It is essential for ensuring consumer safety and market acceptance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Documents Required for BIS Licence</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Application form with product details and specifications.</li>
              <li>Proof of business premises and manufacturing facilities.</li>
              <li>Product samples for testing in BIS-approved laboratories.</li>
              <li>Details of the manufacturing process and quality control systems.</li>
              <li>Other relevant business documents (e.g., GST registration, PAN card).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Process for Obtaining BIS Licence</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Apply online through the BIS portal with product details.</li>
              <li>Step 2: Submit required documents and product samples for testing.</li>
              <li>Step 3: BIS inspection of manufacturing facilities and testing of products.</li>
              <li>Step 4: Grant of BIS certification for compliant products.</li>
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

export default BISPage;

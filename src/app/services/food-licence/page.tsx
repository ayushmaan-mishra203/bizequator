"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FSSAIPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">FSSAI Food Licence Registration</h1>
          <p className="text-lg mt-2">Get FSSAI Registered for Safe and Hygienic Food Products</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is FSSAI Registration?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Food Safety and Standards Authority of India (FSSAI) is the statutory body responsible for ensuring the safety and quality of food products in India. The FSSAI food licence is a legal requirement for all food businesses involved in the manufacturing, processing, packaging, or distribution of food products in India.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              FSSAI registration ensures that food businesses comply with food safety standards and provide consumers with safe and quality food products.
            </p>
            <p className="text-gray-700 leading-relaxed">
              FSSAI offers three types of food licences—Basic Registration, State Licence, and Central Licence—depending on the size and nature of the business.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of FSSAI Licences</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Basic Registration:</strong> For small businesses with an annual turnover of up to ₹12 lakhs.</li>
              <li><strong>State Licence:</strong> For businesses with an annual turnover between ₹12 lakhs to ₹20 crores.</li>
              <li><strong>Central Licence:</strong> For large-scale businesses with an annual turnover exceeding ₹20 crores or operating across multiple states.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Documents Required for FSSAI Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Application form with business details.</li>
              <li>Photographs of the proprietor or partners.</li>
              <li>Proof of business premises (e.g., rent agreement, property ownership proof).</li>
              <li>Food safety management system (FSMS) plan and SOPs (Standard Operating Procedures).</li>
              <li>List of food products to be handled.</li>
              <li>Details of the business’s food safety supervisor or manager.</li>
              <li>Other business-related documents, such as PAN card and GST registration (if applicable).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Process for Obtaining FSSAI Licence</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Complete the FSSAI online application form.</li>
              <li>Step 2: Submit all required documents and pay the application fees.</li>
              <li>Step 3: Inspection of premises by FSSAI authorities (if required).</li>
              <li>Step 4: Receive FSSAI registration or licence number once approved.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for FSSAI Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For detailed guidance on obtaining your FSSAI Food Licence, call us or reach out to us via the contact numbers below.
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

export default FSSAIPage;

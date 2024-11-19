"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TrustNGOPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Trust/NGO Registration</h1>
          <p className="text-lg mt-2">Register Your NGO/Trust for Social Welfare and Charitable Activities</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Trust/NGO?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Trust or NGO (Non-Governmental Organization) is an organization established for social, charitable, or religious purposes, with the intention of making a positive impact in society. The primary objective of these organizations is to work for the welfare of the public, without seeking profits.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trusts and NGOs are registered under the Indian Trusts Act, 1882, or Societies Registration Act, 1860, and are eligible for tax exemptions under various sections of the Income Tax Act.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Trust/NGO Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Tax Exemptions:</strong> Registered NGOs/Trusts are eligible for income tax exemptions, making them financially efficient.</li>
              <li><strong>Legal Recognition:</strong> Provides a legal framework for operations, ensuring credibility and trust among donors and partners.</li>
              <li><strong>Grant Eligibility:</strong> Many government and private grants are available exclusively for registered NGOs/Trusts.</li>
              <li><strong>Public Support:</strong> Registration helps build public confidence and trust, which encourages donations and support.</li>
              <li><strong>Partnership Opportunities:</strong> Registered organizations can collaborate with various stakeholders, including international NGOs, corporations, and governments.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register a Trust/NGO?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Choose the type of registration: Trust, Society, or Section 8 Company.</li>
              <li>Step 2: Prepare a clear and detailed Memorandum of Association (MOA) outlining the objectives of the NGO/Trust.</li>
              <li>Step 3: Select the governing body (board members or trustees) for your organization.</li>
              <li>Step 4: Submit the necessary documents, including the MOA, Articles of Association (AOA), and identity proofs of the board members or trustees to the respective Registrar.</li>
              <li>Step 5: Receive the registration certificate and start operating your NGO/Trust as per the approved objectives.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for Trust/NGO Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ready to register your Trust or NGO? We can help you through the entire process, from drafting the necessary documents to completing the registration. Contact us today to get started.
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

export default TrustNGOPage;

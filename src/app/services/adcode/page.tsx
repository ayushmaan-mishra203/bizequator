"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ADCodeRegistrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">AD Code Registration</h1>
          <p className="text-lg mt-2">Register for Authorised Dealer Code (AD Code) to Facilitate International Transactions</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is AD Code Registration?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              An AD Code (Authorised Dealer Code) is required for businesses or individuals involved in international trade
              or foreign exchange transactions. It is issued by the Reserve Bank of India (RBI) through an Authorised Dealer
              Bank and is a mandatory requirement for businesses making international payments or receiving foreign remittances.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The AD Code is essential for the smooth execution of cross-border transactions, as it helps in complying with
              RBI regulations and ensures that the necessary forex controls are met.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why is AD Code Important?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Required for receiving foreign payments and remittances in Indian bank accounts.</li>
              <li>Enables businesses to conduct international trade transactions in compliance with RBI regulations.</li>
              <li>Ensures smooth processing of outward remittances for businesses involved in cross-border transactions.</li>
              <li>Helps prevent illegal transactions and ensures transparency in foreign exchange dealings.</li>
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

export default ADCodeRegistrationPage;

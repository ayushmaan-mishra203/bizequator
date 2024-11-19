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

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for AD Code Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For assistance with your AD Code registration, our experts are ready to help. We will guide you through the process
              and ensure all requirements are met for your international trade activities.
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

export default ADCodeRegistrationPage;

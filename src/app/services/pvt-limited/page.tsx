"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PvtLimitedPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Private Limited Company Registration</h1>
          <p className="text-lg mt-2">Establish Your Business with a Private Limited Company</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Private Limited Company?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Private Limited Company is a business entity that is privately owned, with a limited liability for its shareholders. It is one of the most preferred business structures due to its legal protection, ability to raise capital, and potential for growth.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A private limited company can have a minimum of two shareholders and a maximum of fifty shareholders. The liability of the shareholders is limited to the extent of their shareholding in the company.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Private Limited Company Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Limited Liability:</strong> Shareholders are only liable for the company's debts to the extent of their shareholding.</li>
              <li><strong>Separate Legal Entity:</strong> The company is considered a separate legal entity from its owners, allowing it to own property and enter into contracts.</li>
              <li><strong>Easy to Raise Capital:</strong> The company can issue shares, making it easier to raise capital from investors.</li>
              <li><strong>Tax Benefits:</strong> Private limited companies enjoy lower tax rates compared to individuals or partnerships.</li>
              <li><strong>Credibility:</strong> A private limited company is perceived as more credible and trustworthy by investors, customers, and partners.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register a Private Limited Company?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Choose a unique company name and ensure it is not already taken.</li>
              <li>Step 2: Obtain a Digital Signature Certificate (DSC) and Director Identification Number (DIN).</li>
              <li>Step 3: Submit the Memorandum of Association (MOA) and Articles of Association (AOA) to the Ministry of Corporate Affairs.</li>
              <li>Step 4: Obtain a Certificate of Incorporation from the Registrar of Companies.</li>
              <li>Step 5: Apply for PAN and TAN for the company.</li>
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

export default PvtLimitedPage;

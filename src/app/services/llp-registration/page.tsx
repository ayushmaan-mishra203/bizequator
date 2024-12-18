"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LLPPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">LLP Registration</h1>
          <p className="text-lg mt-2">Limited Liability Partnership Registration for Your Business</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is an LLP?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Limited Liability Partnership (LLP) is a hybrid business structure that combines the benefits of a partnership and a private limited company. In an LLP, partners have limited liability and the business is run in accordance with a partnership agreement.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              LLPs are designed to offer the flexibility of a partnership, while also providing the protection of limited liability. This structure is ideal for businesses that want the benefits of both personal management and corporate protection.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of LLP Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Limited Liability:</strong> Partners' personal assets are protected in case of the LLP's debts.</li>
              <li><strong>Separate Legal Entity:</strong> An LLP is considered a separate legal entity, distinct from its partners.</li>
              <li><strong>Easy to Manage:</strong> The management of an LLP is flexible and can be carried out by designated partners.</li>
              <li><strong>Tax Benefits:</strong> LLPs enjoy favorable tax treatment and avoid double taxation.</li>
              <li><strong>Low Compliance Cost:</strong> LLPs have lower compliance costs compared to private limited companies.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register an LLP?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Choose a unique name for the LLP and get approval from the Ministry of Corporate Affairs.</li>
              <li>Step 2: Obtain a Digital Signature Certificate (DSC) and Director Identification Number (DIN) for the partners.</li>
              <li>Step 3: Draft an LLP agreement outlining the management, profit-sharing, and roles of the partners.</li>
              <li>Step 4: Register the LLP with the Ministry of Corporate Affairs (MCA) through their online portal.</li>
              <li>Step 5: Obtain a Certificate of Incorporation for the LLP.</li>
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

export default LLPPage;

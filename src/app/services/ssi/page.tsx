"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SSIMSMERegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow pt-20">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">SSI/MSME Registration</h1>
          <p className="text-lg mt-2">
            Simplified Process for Small Scale and Micro Enterprises in India
          </p>
        </header>

        {/* Content Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is SSI/MSME Registration?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SSI (Small Scale Industry) and MSME (Micro, Small, and Medium
              Enterprises) registration provides businesses with various
              benefits, including access to government subsidies, low-interest
              loans, and tax exemptions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Registering under SSI/MSME enhances business credibility and
              unlocks opportunities for growth and financial support.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Steps for SSI/MSME Registration
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>
                <strong>Step 1: Check Eligibility</strong>
                <p>
                  Ensure your business meets the criteria for MSME classification
                  based on investment and turnover.
                </p>
              </li>
              <li>
                <strong>Step 2: Gather Required Information</strong>
                <p>
                  Details such as Aadhaar card, PAN card, and business activity
                  information are needed.
                </p>
              </li>
              <li>
                <strong>Step 3: Fill Online Application</strong>
                <p>
                  Complete the registration form on the official MSME portal.
                </p>
              </li>
              <li>
                <strong>Step 4: Submit Documents</strong>
                <p>
                  Upload relevant documents like business proof and bank account
                  details.
                </p>
              </li>
              <li>
                <strong>Step 5: Receive Udyam Registration Certificate</strong>
                <p>
                  Upon successful verification, you will receive your MSME
                  certificate.
                </p>
              </li>
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

export default SSIMSMERegistrationPage;

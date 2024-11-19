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

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get Assistance for SSI/MSME Registration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contact us at the numbers below for guidance and support with the
              SSI/MSME registration process.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md shadow-md">
              <p>
                <strong>Phone Numbers:</strong>
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <a href="tel:+918130029971" className="text-blue-600">
                    +91 8130029971
                  </a>
                </li>
                <li>
                  <a href="tel:+919999576641" className="text-blue-600">
                    +91 99995 76641
                  </a>
                </li>
              </ul>
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

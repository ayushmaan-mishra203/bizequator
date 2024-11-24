"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ESIPFRegistrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow pt-24 container mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">ESI & PF Registration</h1>
          <p className="text-lg mt-2">Comprehensive Guide & Registration Process in India</p>
        </header>

        {/* Content Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What is ESI & PF Registration?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ESI (Employee State Insurance) and PF (Provident Fund) are essential schemes for employee welfare in India.
            ESI provides medical, sickness, and maternity benefits, while PF ensures a secure retirement for employees by mandating savings contributions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Employers with a certain number of employees are required by law to register for ESI & PF and contribute regularly on behalf of their employees.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Steps to Register for ESI & PF</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
            <li>
              <strong>Step 1: Gather Required Documents</strong>
              <p>Documents such as employer PAN, employee details, and business registration proof are essential.</p>
            </li>
            <li>
              <strong>Step 2: ESI Registration</strong>
              <p>Register on the ESIC portal by providing establishment details and employee information.</p>
            </li>
            <li>
              <strong>Step 3: PF Registration</strong>
              <p>Register on the EPFO portal, ensuring all necessary details are entered accurately.</p>
            </li>
            <li>
              <strong>Step 4: Verification</strong>
              <p>Government officials will verify the details and documents provided.</p>
            </li>
            <li>
              <strong>Step 5: Compliance</strong>
              <p>Start monthly contributions for employees under ESI & PF and file regular returns.</p>
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ESIPFRegistrationPage;

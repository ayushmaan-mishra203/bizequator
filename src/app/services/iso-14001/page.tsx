"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ISO14001Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">ISO 14001:2015 (EMS) Certification</h1>
          <p className="text-lg mt-2">Environmental Management System Certification</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is ISO 14001:2015?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ISO 14001:2015 is an international standard for Environmental Management Systems (EMS). It helps businesses manage their
              environmental responsibilities and improve sustainability.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Certification under ISO 14001:2015 demonstrates your organization's commitment to environmental sustainability and
              helps reduce environmental impacts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why is ISO 14001:2015 Certification Important?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Helps in reducing environmental risks and waste management.</li>
              <li>Demonstrates commitment to sustainability to stakeholders.</li>
              <li>Improves compliance with environmental regulations.</li>
              <li>Increases operational efficiency through better resource management.</li>
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

export default ISO14001Page;

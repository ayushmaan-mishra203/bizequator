"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ISO9001Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">ISO 9001:2015 (QMS) Certification</h1>
          <p className="text-lg mt-2">Quality Management System Certification for Your Business</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is ISO 9001:2015?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ISO 9001:2015 is an international standard for Quality Management Systems (QMS). It provides a framework for businesses to
              improve their processes, products, and services through continuous improvement and customer satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Achieving ISO 9001:2015 certification demonstrates your commitment to quality, enhances your marketability, and builds
              trust with customers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why is ISO 9001:2015 Certification Important?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Improves overall business efficiency and productivity.</li>
              <li>Enhances customer satisfaction and trust.</li>
              <li>Provides a competitive edge in the marketplace.</li>
              <li>Helps in identifying and mitigating business risks.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for ISO 9001:2015 Certification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are ready to improve your business processes and get certified under ISO 9001:2015, contact us today to start the
              certification process.
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

export default ISO9001Page;

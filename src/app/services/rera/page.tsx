"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RERARegistrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">RERA Registration</h1>
          <p className="text-lg mt-2">Streamline Your Real Estate Compliance in India</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is RERA Registration?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              RERA (Real Estate Regulatory Authority) registration is mandatory for real estate developers and agents in India
              under the RERA Act, 2016. This ensures transparency and accountability in real estate transactions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The registration provides legal protection to buyers and builds trust in real estate projects by mandating
              compliance with prescribed norms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Register Under RERA?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Gain the trust of potential buyers by adhering to legal norms.</li>
              <li>Ensure timely delivery of projects and maintain transparency.</li>
              <li>Avoid penalties for non-compliance under the RERA Act.</li>
              <li>Access exclusive benefits for RERA-registered entities.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for RERA Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For assistance with your RERA registration, reach out to our experts. We’ll guide you through the entire
              process and help you ensure compliance with all regulatory requirements.
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

export default RERARegistrationPage;

"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PartnershipPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Partnership Registration</h1>
          <p className="text-lg mt-2">Start Your Business Together with Partnership Registration</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Partnership?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A partnership is a business structure where two or more individuals come together to conduct business with a shared goal of making profits. Partners share the responsibilities, profits, and liabilities of the business.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Partnership registration formalizes the agreement between partners and ensures that their business operations are legally recognized. It is ideal for small to medium-sized businesses that benefit from shared decision-making.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Partnership Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Shared Responsibility:</strong> Partners share the workload, decision-making, and responsibilities.</li>
              <li><strong>Cost-Effective:</strong> Partnerships are simple and inexpensive to set up compared to other business structures.</li>
              <li><strong>Pooling Resources:</strong> Partners can pool their resources, expertise, and capital for business growth.</li>
              <li><strong>Flexibility:</strong> Partnerships offer flexibility in terms of management and business operations.</li>
              <li><strong>Tax Benefits:</strong> Partnerships enjoy pass-through taxation, meaning the business itself does not pay taxes, only the partners.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register a Partnership?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Draft a partnership deed that outlines the roles, responsibilities, and profit-sharing ratio.</li>
              <li>Step 2: Register the partnership deed with the local registrar of firms.</li>
              <li>Step 3: Obtain a PAN (Permanent Account Number) for the partnership firm.</li>
              <li>Step 4: Apply for other necessary licenses such as GST, trade licenses, and more.</li>
              <li>Step 5: Start your business operations legally.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for Partnership Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ready to register your partnership or need more guidance? Our team can help you navigate the process quickly and efficiently. Contact us today!
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

export default PartnershipPage;

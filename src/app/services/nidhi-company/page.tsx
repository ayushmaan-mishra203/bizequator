"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NidhiCompanyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Nidhi Company Registration</h1>
          <p className="text-lg mt-2">Start Your Own Nidhi Company for Financial Services</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Nidhi Company?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Nidhi Company is a type of non-banking financial company (NBFC) in India that is primarily formed for the mutual benefit of its members. It is established for the purpose of borrowing and lending money among its members. The company’s activities are limited to its members only and regulated under the Companies Act, 2013.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nidhi Companies can perform functions such as lending and borrowing within its members, accepting deposits, and promoting savings and investments among the members.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Nidhi Company Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Mutual Benefit:</strong> Nidhi companies provide mutual benefit to members by promoting thrift and savings.</li>
              <li><strong>Lower Risk:</strong> Since only members of the company can invest or borrow, the risk factor is significantly lower.</li>
              <li><strong>Easy to Set Up:</strong> The registration process is simple and cost-effective compared to other financial institutions.</li>
              <li><strong>Regulated by the Government:</strong> Nidhi companies are governed by strict rules, ensuring transparency and security for members.</li>
              <li><strong>Attractive Returns:</strong> Nidhi companies offer competitive interest rates on savings and fixed deposits for its members.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register a Nidhi Company?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Choose a suitable name for your Nidhi company and ensure it complies with the regulations.</li>
              <li>Step 2: Ensure a minimum of three directors and seven members in the company.</li>
              <li>Step 3: Apply for Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for the directors.</li>
              <li>Step 4: File the necessary documents with the Registrar of Companies (RoC), including the Memorandum of Association (MOA) and Articles of Association (AOA).</li>
              <li>Step 5: Obtain a Certificate of Incorporation and start business operations with government approval.</li>
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

export default NidhiCompanyPage;

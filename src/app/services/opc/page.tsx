"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OPCPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">One Person Company (OPC) Registration</h1>
          <p className="text-lg mt-2">Start Your Business Alone with OPC Registration</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is an OPC (One Person Company)?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              An OPC (One Person Company) is a company that can be formed by a single individual. It offers the advantages of a private limited company, such as limited liability, while allowing a single person to operate the business.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              OPC is ideal for solo entrepreneurs who want to start a business with the protection of limited liability but without the complexities of a traditional private limited company.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of OPC Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Single Ownership:</strong> Only one person is required to start and run the business.</li>
              <li><strong>Limited Liability:</strong> Liability is limited to the extent of the company's assets, protecting the owner's personal assets.</li>
              <li><strong>Separate Legal Entity:</strong> The company has a separate identity, distinct from the individual who owns it.</li>
              <li><strong>Easy to Set Up:</strong> OPC registration is simple and quick, requiring minimal formalities compared to other business structures.</li>
              <li><strong>Flexible Business Operations:</strong> The owner has full control over the decision-making process of the business.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register an OPC?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Choose a unique name for your OPC and ensure compliance with company naming regulations.</li>
              <li>Step 2: Appoint a nominee who will take over the company in case of the sole member’s incapacity or death.</li>
              <li>Step 3: Apply for Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for the sole member.</li>
              <li>Step 4: File necessary documents with the Registrar of Companies (RoC), including the Memorandum of Association (MOA) and Articles of Association (AOA).</li>
              <li>Step 5: Obtain the Certificate of Incorporation and start your business operations.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for OPC Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ready to register your OPC or need assistance? Contact our experts to guide you through the process.
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

export default OPCPage;

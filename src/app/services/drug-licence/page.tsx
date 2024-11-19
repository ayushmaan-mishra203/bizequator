"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DrugLicencePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Drug Licence Registration</h1>
          <p className="text-lg mt-2">Obtain Your Drug Licence for Legal Distribution in India</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Drug Licence?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Drug Licence is a legal authorization granted by the Central Drugs Standard Control Organization (CDSCO) or State Drugs Control Authorities for the manufacturing, selling, and distribution of drugs in India. It ensures that drugs comply with safety and regulatory standards, and it is mandatory for individuals or entities involved in the pharmaceutical industry.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The licence is issued based on the type of drug activity being carried out—whether it is for wholesale or retail distribution, manufacturing, or export. Different licenses are required for each activity, and they must be renewed periodically.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Drug licenses are issued under the provisions of the Drugs and Cosmetics Act, 1940 and are governed by the Drugs and Cosmetics Rules, 1945.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Drug Licences</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>
                <strong>Wholesale Drug Licence:</strong> For selling drugs in bulk to retailers and distributors.
              </li>
              <li>
                <strong>Retail Drug Licence:</strong> For selling drugs directly to consumers at pharmacies or retail outlets.
              </li>
              <li>
                <strong>Manufacturing Drug Licence:</strong> For manufacturing pharmaceutical products in a controlled environment.
              </li>
              <li>
                <strong>Import Drug Licence:</strong> Required for importing drugs from other countries to sell or distribute in India.
              </li>
              <li>
                <strong>Cosmetic Licence:</strong> For the manufacturing or distribution of cosmetic products in India.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Documents Required for Drug Licence</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Application Form with full details of the business.</li>
              <li>Proof of premises and area of business (Rent Agreement or Property Documents).</li>
              <li>Details of the qualified pharmacist (Pharmacy Degree, Registration Certificate).</li>
              <li>List of drugs to be sold or manufactured (with details of drug composition).</li>
              <li>FSSAI Registration (if applicable).</li>
              <li>Payment of prescribed fees.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Process for Obtaining Drug Licence</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Fill the application form available on the Drugs Controller website.</li>
              <li>Step 2: Submit required documents and fees to the respective State or Central Drug Authority.</li>
              <li>Step 3: Inspection of premises by the Drug Inspector to verify the setup and adherence to regulations.</li>
              <li>Step 4: Grant of licence by the authority based on compliance with the rules.</li>
              <li>Step 5: Regular inspections and maintenance of records are mandatory to ensure continuous compliance.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for Drug Licence Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For detailed guidance on obtaining your Drug Licence, call us or reach out to us via the contact numbers below.
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

export default DrugLicencePage;

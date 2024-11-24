"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TaxExemptionPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">12A & 80G Registration</h1>
          <p className="text-lg mt-2">Tax Exemption for Charitable Organizations</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is 12A & 80G Registration?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              12A and 80G are two important sections of the Income Tax Act, 1961, that provide tax exemptions to NGOs and charitable trusts in India. While Section 12A registration allows the organization to be exempt from paying income tax, Section 80G enables donors to claim tax deductions for the donations they make to the NGO.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These registrations provide a significant benefit to non-profit organizations by making them eligible for tax exemptions and increasing donor confidence through tax rebates.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of 12A & 80G Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Tax Exemption:</strong> Non-profits with 12A registration are exempt from paying taxes on their income.</li>
              <li><strong>Tax Deduction for Donors:</strong> Donors to your NGO can claim a tax deduction of up to 50% of the donation amount under Section 80G.</li>
              <li><strong>Improved Credibility:</strong> Registration boosts the reputation of your organization and instills confidence in donors.</li>
              <li><strong>Donor Attraction:</strong> With the 80G certificate, you can attract more donors who wish to avail of tax benefits.</li>
              <li><strong>Access to Government Grants:</strong> Some government grants require a 12A and 80G certification for eligibility.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register for 12A & 80G?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Ensure your NGO or Trust is registered under the Trusts Act or Societies Registration Act.</li>
              <li>Step 2: Gather the necessary documents, including the organization’s Memorandum of Association (MOA), Articles of Association (AOA), and financial records.</li>
              <li>Step 3: Submit the application to the Income Tax Department, along with the required documents.</li>
              <li>Step 4: Upon approval, receive your 12A and 80G registration certificates, making your NGO eligible for tax exemptions and enabling donors to claim tax deductions.</li>
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

export default TaxExemptionPage;

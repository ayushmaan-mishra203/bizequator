"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LifeInsurancePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Life Insurance Registration</h1>
          <p className="text-lg mt-2">Secure Your Family's Future with Life Insurance Plans</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Life Insurance?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Life insurance is a contract between an individual and an insurance company in which the insurer agrees to pay a lump sum amount (the death benefit) to a beneficiary in case of the policyholder's death. Life insurance helps provide financial security to the policyholder's family in the event of unforeseen circumstances.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are various types of life insurance policies, including term life insurance, whole life insurance, and unit-linked insurance plans (ULIPs), each offering different benefits and coverage options.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Life Insurance Plans</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Term Life Insurance:</strong> Provides coverage for a specific period, paying a death benefit if the policyholder dies during that term.</li>
              <li><strong>Whole Life Insurance:</strong> Offers coverage for the entire lifetime of the policyholder, with benefits paid out on death.</li>
              <li><strong>Endowment Plans:</strong> Combines both life coverage and savings, with a lump sum payout at the end of the policy term or in the event of the policyholder's death.</li>
              <li><strong>Unit Linked Insurance Plans (ULIPs):</strong> Combines life insurance with investment options, where premiums are invested in various market-linked funds.</li>
              <li><strong>Child Plans:</strong> Designed to secure a child's education and future financial needs.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Life Insurance</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Financial Protection for Family:</strong> Ensures your family is financially protected in case of your demise.</li>
              <li><strong>Tax Benefits:</strong> Premiums paid qualify for tax deductions under Section 80C and 10(10D).</li>
              <li><strong>Loan Facility:</strong> Some life insurance policies allow you to take a loan against the policy's surrender value.</li>
              <li><strong>Wealth Creation:</strong> ULIPs and other savings-based policies help create wealth through investments.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Apply for Life Insurance?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Choose the right policy based on your needs and financial goals.</li>
              <li>Step 2: Fill out the application form and provide necessary documents like KYC details, medical reports, etc.</li>
              <li>Step 3: Pay the premium and wait for policy approval.</li>
              <li>Step 4: Receive the policy document and continue regular premium payments.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for Life Insurance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more details on life insurance plans or to get a quote, call us or reach out to us via the contact numbers provided below.
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

export default LifeInsurancePage;

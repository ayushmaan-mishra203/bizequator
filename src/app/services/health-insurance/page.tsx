"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HealthInsurancePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Health Insurance Registration</h1>
          <p className="text-lg mt-2">Secure Your Health with Comprehensive Insurance Plans</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Health Insurance?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Health insurance is a type of coverage that pays for medical, hospitalization, and surgical expenses incurred by the insured individual. It can cover a wide range of health issues, from basic doctor visits to major surgeries and long-term treatments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Health insurance policies can vary in terms of coverage, premium amounts, and additional benefits, such as maternity cover, critical illness cover, and more. With the rising costs of healthcare, having health insurance is essential for ensuring financial protection during medical emergencies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Health Insurance Plans</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Individual Health Insurance:</strong> Covers the medical expenses of an individual.</li>
              <li><strong>Family Floater Plans:</strong> A single policy covering the medical expenses of an entire family.</li>
              <li><strong>Critical Illness Insurance:</strong> Provides coverage for life-threatening illnesses like cancer, heart attack, etc.</li>
              <li><strong>Top-up Plans:</strong> Additional coverage that supplements an existing policy to increase the sum insured.</li>
              <li><strong>Maternity Health Insurance:</strong> Covers the medical expenses related to pregnancy and childbirth.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Health Insurance</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Cashless Treatment:</strong> Direct settlement of medical bills in network hospitals.</li>
              <li><strong>Tax Benefits:</strong> Premiums paid for health insurance qualify for tax deductions under Section 80D.</li>
              <li><strong>Wide Network of Hospitals:</strong> Access to a broad range of hospitals and healthcare providers.</li>
              <li><strong>Pre and Post-Hospitalization Coverage:</strong> Covers medical expenses incurred before and after hospitalization.</li>
              <li><strong>Emergency Assistance:</strong> Coverage for medical emergencies, including ambulance charges.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Apply for Health Insurance?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Research and compare different insurance providers and plans.</li>
              <li>Step 2: Fill out the application form and provide necessary details.</li>
              <li>Step 3: Submit required documents like age proof, address proof, medical history, etc.</li>
              <li>Step 4: Pay the premium and receive the policy documents upon approval.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for Health Insurance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more details on health insurance plans, or to get a quote, please call us or reach out to us through the contact numbers provided below.
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

export default HealthInsurancePage;

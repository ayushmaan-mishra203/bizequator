"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GeneralInsurancePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">General Insurance Registration</h1>
          <p className="text-lg mt-2">Protect Your Assets with Comprehensive General Insurance Plans</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is General Insurance?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              General insurance is a broad category of insurance that covers protection for assets, liabilities, and health. Unlike life insurance, which is primarily focused on the policyholder’s life, general insurance includes insurance for motor vehicles, homes, travel, and other forms of protection.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some common types of general insurance include motor insurance, home insurance, travel insurance, and personal accident insurance. These policies offer coverage for damages, loss, or injury to your property and health.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of General Insurance</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Motor Insurance:</strong> Covers damages to vehicles in case of accidents, theft, or natural disasters.</li>
              <li><strong>Home Insurance:</strong> Covers damage to property due to fire, theft, or natural disasters.</li>
              <li><strong>Travel Insurance:</strong> Covers medical emergencies, trip cancellations, and lost baggage while traveling.</li>
              <li><strong>Personal Accident Insurance:</strong> Provides compensation for accidental injuries or death.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of General Insurance</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Financial Protection:</strong> Covers unexpected financial losses from damages or accidents.</li>
              <li><strong>Peace of Mind:</strong> Reduces stress and worries by providing security for your assets.</li>
              <li><strong>Risk Coverage:</strong> Covers various risks like natural calamities, accidents, theft, and more.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Apply for General Insurance?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Identify the type of general insurance you need.</li>
              <li>Step 2: Complete the application form and provide necessary documents like vehicle registration, property details, etc.</li>
              <li>Step 3: Choose your policy plan and pay the premium.</li>
              <li>Step 4: Receive the policy document and enjoy coverage.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for General Insurance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more details or to get a general insurance quote, call us or reach out to us via the contact numbers provided below.
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

export default GeneralInsurancePage;

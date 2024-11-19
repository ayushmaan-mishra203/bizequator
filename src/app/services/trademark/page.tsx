"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TrademarkPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Trademark Registration</h1>
          <p className="text-lg mt-2">Protect Your Brand Identity with Trademark Registration</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Trademark?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A trademark is a symbol, word, or combination of both used by a business or individual to identify their goods or services and distinguish them from others. A registered trademark provides legal protection, preventing others from using similar marks in the same industry, ensuring that customers can easily identify the origin of the product or service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trademarks can be logos, names, slogans, or any mark that uniquely represents your brand in the market. It is essential for building a unique brand identity and protecting your intellectual property.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Trademarks</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Word Marks:</strong> A word or set of words that uniquely represent the brand.</li>
              <li><strong>Logo Marks:</strong> A symbol, image, or design that represents a brand.</li>
              <li><strong>Combined Marks:</strong> A combination of words and logos that form a brand identity.</li>
              <li><strong>Sound Marks:</strong> A sound that represents the brand, e.g., a jingle or theme tune.</li>
              <li><strong>Color Marks:</strong> Specific colors associated with a brand (e.g., the Coca-Cola red).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Trademark Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Legal Protection:</strong> Protects your brand and prevents others from using similar marks.</li>
              <li><strong>Brand Recognition:</strong> Builds a strong and unique brand identity in the marketplace.</li>
              <li><strong>Exclusive Rights:</strong> Grants the exclusive right to use the trademark for your products/services.</li>
              <li><strong>Deterrence:</strong> Deters competitors from infringing on your brand.</li>
              <li><strong>Increased Value:</strong> Adds value to your business and intellectual property.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register a Trademark?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Choose a unique and distinct trademark for your brand.</li>
              <li>Step 2: Conduct a trademark search to ensure there are no conflicting marks.</li>
              <li>Step 3: File the trademark application with the Intellectual Property Office.</li>
              <li>Step 4: Wait for the examination and response from the authorities.</li>
              <li>Step 5: Receive trademark registration certificate upon approval.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for Trademark Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you need assistance with trademark registration or require more details, please get in touch with us. We can guide you through the entire process.
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

export default TrademarkPage;

"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BarcodeRegistrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">BAR Code Registration</h1>
          <p className="text-lg mt-2">Register for Barcodes to Sell Products in the Market</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is BAR Code Registration?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Barcode registration is the process of obtaining unique barcodes for your products. Barcodes are crucial for tracking,
              managing inventory, and selling goods in retail environments. The most commonly used barcode system is the EAN-13 or UPC
              for products in the retail sector.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Registering your barcode ensures that your products are recognized globally and can be tracked efficiently in supply
              chains, improving the marketability and operational efficiency of your business.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why is BAR Code Registration Important?</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Essential for listing your products on online marketplaces like Amazon, Flipkart, etc.</li>
              <li>Improves inventory management and reduces errors in stock counting.</li>
              <li>Required for retail stores to scan products at checkout points.</li>
              <li>Enhances product tracking across different stages of the supply chain.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for Barcode Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For help with your barcode registration process, our experts are ready to assist you in obtaining the necessary barcodes
              for your products.
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

export default BarcodeRegistrationPage;

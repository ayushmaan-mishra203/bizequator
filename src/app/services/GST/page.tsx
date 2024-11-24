"use client";

import { useState } from "react";
import Footer from "@/components/Footer"; // Update the path if necessary
import Navbar from "@/components/Navbar";

const GSTRegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add logic to handle form submission, e.g., send to API
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow mt-[4rem]"> {/* Adjust margin for navbar */}
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">GST Registration</h1>
          <p className="text-lg mt-2">Complete Guide & Registration Process in India</p>
        </header>

        {/* Content Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is GST Registration?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GST (Goods and Services Tax) is a comprehensive indirect tax
              levied on the supply of goods and services in India. Businesses
              with a turnover exceeding the threshold limit or engaged in
              interstate trade are required to register under GST.
            </p>
            <p className="text-gray-700 leading-relaxed">
              GST registration ensures compliance with the tax regime and
              enables businesses to claim input tax credits, file GST returns,
              and operate seamlessly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Steps to Register for GST
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li>
                <strong>Step 1: Prepare Required Documents</strong>
                <p>
                  Documents like PAN card, Aadhaar card, business registration
                  proof, and bank account details are essential.
                </p>
              </li>
              <li>
                <strong>Step 2: Create a GST Account</strong>
                <p>
                  Visit the GST portal and create a GST account using your PAN
                  and other details.
                </p>
              </li>
              <li>
                <strong>Step 3: Submit GST Application</strong>
                <p>
                  Fill out the GST REG-01 form with business details and upload
                  the required documents.
                </p>
              </li>
              <li>
                <strong>Step 4: Verification</strong>
                <p>
                  The GST officer will verify your application and documents.
                  Additional details may be requested if required.
                </p>
              </li>
              <li>
                <strong>Step 5: GSTIN Issuance</strong>
                <p>
                  Upon approval, you will receive a GSTIN (GST Identification
                  Number) and a certificate of registration.
                </p>
              </li>
            </ul>
          </section>

          {/* Form Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Apply for GST Registration
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="" disabled>
                    Select your state
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  {/* Add other states as needed */}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
              >
                Submit
              </button>
            </form>
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

export default GSTRegistrationPage;

"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
        {/* Background Image for Desktop (with reduced opacity) */}
        <div className="absolute inset-0 bg-cover bg-center opacity-1 lg:block hidden transition-all duration-500 ease-in-out" style={{ backgroundImage: "url('/images/hero.png')" }}></div>

        {/* Main Hero Image */}
        <img
          src="/images/hero.png"
          alt="Hero Image"
          className="w-full h-full object-contain object-center transition-all duration-500 ease-in-out"
        />
      </section>

      {/* Horizontal Line Between Hero and About Section */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* About Section */}
      <AboutSection />

      {/* Main Content */}
      <main className="flex-grow py-20">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {/* Service Cards */}
            {[
              { title: 'GST Registration', image: '/images/gst.png', description: 'Register for GST and ensure compliance with tax regulations.', link: '/services/GST' },
              { title: 'Drug License', image: '/images/Drug licence.png', description: 'Obtain a drug license for your business.', link: '/services/drug-licence' },
              { title: 'Trademark Registration', image: '/images/trademark.png', description: 'Protect your brand with a registered trademark.', link: '/services/trademark' },
              { title: 'Pvt Limited Company Registration', image: '/images/company-registration.jpg', description: 'Officially register your company and start your business.', link: '/services/pvt-limited' },
              { title: 'Import/Export Services', image: '/images/iec-services.jpg', description: 'Facilitate your international trade with our assistance.', link: '/services/iec' },
              { title: 'Food Licence', image: '/images/food-licence.png', description: 'Get FSSAI food licence for your company.', link: '/services/food-licence' },
              { title: 'Copyright', image: '/images/copyright.jpg', description: 'Protect your brand with a registered copyright.', link: '/services/copyright' },
              { title: 'LLP Registration', image: '/images/LLP.jpg', description: 'Start a new LLP company with registration.', link: '/services/llp-registration' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 transition-transform transform hover:scale-105">
                <img src={service.image} alt={service.title} className="h-32 w-full object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
                <button
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                  onClick={() => router.push(service.link)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

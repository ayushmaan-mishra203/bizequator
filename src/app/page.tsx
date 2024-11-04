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
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.png')" }}>
        {/* You can add hero content here if desired */}
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Main Content */}
      <main className="flex-grow py-20">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105">
              <img src="/images/gst.png" alt="GST Registration" className="h-32 w-full object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">GST Registration</h3>
              <p className="mt-2">Register for GST and ensure compliance with tax regulations.</p>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                onClick={() => router.push('/services/gst')}
              >
                Learn More
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105">
              <img src="/images/Drug licence.png" alt="Drug License" className="h-32 w-full object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Drug License</h3>
              <p className="mt-2">Obtain a drug license for your business.</p>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                onClick={() => router.push('/services/drug-license')}
              >
                Learn More
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105">
              <img src="/images/trademark.png" alt="Trademark Registration" className="h-32 w-full object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Trademark Registration</h3>
              <p className="mt-2">Protect your brand with a registered trademark.</p>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                onClick={() => router.push('/services/trademark')}
              >
                Learn More
              </button>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105">
              <img src="/images/company-registration.jpg" alt="Pvt Limited Company Registration" className="h-32 w-full object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Pvt Limited Company Registration</h3>
              <p className="mt-2">Officially register your company and start your business.</p>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                onClick={() => router.push('/services/pvt-limited')}
              >
                Learn More
              </button>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105">
              <img src="/images/iec-services.jpg" alt="Import/Export Services" className="h-32 w-full object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Import/Export Services</h3>
              <p className="mt-2">Facilitate your international trade with our assistance.</p>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                onClick={() => router.push('/services/iec')}
              >
                Learn More
              </button>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105">
              <img src="/images/food-licence.png" alt="Accounting Services" className="h-32 w-full object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Food licence</h3>
              <p className="mt-2">Get FSSAI food licence for your company.</p>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                onClick={() => router.push('/services/food-licence')}
              >
                Learn More
              </button>
            </div>

            {/* Service Card 7 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105">
              <img src="/images/copyright.jpg" alt="Tax Advisory" className="h-32 w-full object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Copyright</h3>
              <p className="mt-2">Protect your brand with a registered copyright.</p>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                onClick={() => router.push('/services/copyright')}
              >
                Learn More
              </button>
            </div>

            {/* Service Card 8 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105">
              <img src="/images/LLP.jpg" alt="Business Planning" className="h-32 w-full object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">LLP Registrion</h3>
              <p className="mt-2">Start a new LLP company with registration.</p>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                onClick={() => router.push('/services/llp-registration')}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

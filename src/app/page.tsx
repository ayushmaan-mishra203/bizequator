import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100"> {/* Set the main background color here */}
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
              <h3 className="text-xl font-semibold">Company Registration</h3>
              <p className="mt-4">Get your business officially registered.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
              <h3 className="text-xl font-semibold">Trademark</h3>
              <p className="mt-4">Protect your brand with a registered trademark.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
              <h3 className="text-xl font-semibold">Legal Documents</h3>
              <p className="mt-4">We offer various legal documents for businesses.</p>
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


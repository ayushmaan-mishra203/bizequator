"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CopyrightPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <header className="bg-blue-600 text-white py-12 text-center rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Copyright Registration</h1>
          <p className="text-lg mt-2">Protect Your Creative Work with Copyright Registration</p>
        </header>

        {/* Content Section */}
        <div>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Copyright?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Copyright is a legal right granted to the creator of an original work, providing exclusive rights to use, reproduce, and distribute that work. Copyright can be applied to literary works, artistic creations, music, films, software, and other forms of intellectual property.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Copyright registration is an essential process for creators to safeguard their work against unauthorized use, reproduction, or distribution. By registering your work, you establish a public record of ownership and obtain legal protection under the law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Works Protected by Copyright</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Literary Works:</strong> Includes books, articles, reports, and other written content.</li>
              <li><strong>Musical Works:</strong> Covers songs, compositions, and sound recordings.</li>
              <li><strong>Artistic Works:</strong> Paintings, drawings, sculptures, and other visual artworks.</li>
              <li><strong>Software:</strong> Computer programs and applications are also protected by copyright.</li>
              <li><strong>Films and Videos:</strong> Motion pictures, documentaries, and video works.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Copyright Registration</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4">
              <li><strong>Exclusive Rights:</strong> Grants the creator the exclusive right to use, distribute, and license the work.</li>
              <li><strong>Legal Protection:</strong> Provides the creator with legal recourse in case of unauthorized use or infringement.</li>
              <li><strong>Public Record:</strong> Establishes an official public record of ownership.</li>
              <li><strong>Monetization:</strong> Allows the creator to license or sell their work for revenue generation.</li>
              <li><strong>Increased Value:</strong> Copyright adds value to your work, making it a valuable asset.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Register Copyright?</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-4">
              <li>Step 1: Ensure the work is original and meets copyright criteria.</li>
              <li>Step 2: Fill out the copyright application form with the details of the work.</li>
              <li>Step 3: Submit the work to the copyright office along with the application and fee.</li>
              <li>Step 4: Wait for the examination and approval of your copyright registration.</li>
              <li>Step 5: Receive a certificate of registration once the copyright is granted.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us for Copyright Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you're an artist, author, or creator looking to protect your intellectual property, we can guide you through the copyright registration process. Contact us today for more details.
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

export default CopyrightPage;

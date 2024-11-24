// src/components/AboutSection.tsx

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <img
            src="/images/about.jpg" // Update this path to your actual image location
            alt="About Us"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8 transform hover:scale-105 transition duration-300"
          />

          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Bizequator is a part of <span className="font-semibold">SNDM AUXILIUM PVT LTD</span> and has been operating since 2019. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With offices in Delhi, Bengaluru, Lucknow, and Agra, we bring you localized expertise and nationwide reach.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Partner with us to navigate your business challenges with confidence and ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

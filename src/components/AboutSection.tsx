// src/components/AboutSection.tsx

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/images/about.jpg" // Update this path to your actual image location
            alt="About Us"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-8 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Bizequator is a part of  SNDM AUXILIUM PVT LTD and we have been in this field from the year 2019.

              Our offices are setup in Delhi, Bengaluru, Lucknow and Agra
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Partner with us to navigate your business challenges with confidence and ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { FC } from 'react';

const DrugLicence: FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Drug Licence</h1>
      <section className="p-6 bg-gray-100 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Overview</h2>
        <p className="text-gray-700">
          Drug licences are required for the manufacturing, sale, and distribution of drugs in the country. Here's everything you need to know about applying for a Drug Licence.
        </p>
      </section>

      <section className="p-6 bg-gray-100 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Eligibility Criteria</h2>
        <p className="text-gray-700">
          To be eligible for a drug licence, you must meet the following requirements:...
        </p>
      </section>

      <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Application Process</h2>
        <p className="text-gray-700">
          The process for applying for a Drug Licence involves the following steps:...
        </p>
      </section>
    </div>
  );
};

export default DrugLicence;

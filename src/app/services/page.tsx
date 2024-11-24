import { FC } from 'react';
import Link from 'next/link';

const Services: FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Our Services</h1>

      {/* Registration Section */}
      <section id="registration" className="mb-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>GST Registration</li>
          <li>ESI & PF Registration</li>
          <li>SSI/MSME Registration</li>
          <li>RERA Registration</li>
          <li>APEDA Registration</li>
          <li>AD Code Registration</li>
          <li>Bar Code Registration</li>
          <li>IEC (Import Export Code)</li>
        </ul>
      </section>

      {/* Licence Section */}
      <section id="licence" className="mb-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Licence</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <Link href="/services/drug-licence" className="hover:text-green-500 transition-colors">
              Drug Licence
            </Link>
          </li>
          <li>Food Licence (FSSAI)</li>
          <li>BIS Registration</li>
        </ul>
      </section>

      {/* Certification Section */}
      <section id="certification" className="mb-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Certification</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>ISO 9001:2015 (QMS)</li>
          <li>ISO 14001:2015 (EMS)</li>
          <li>ISO 45001 (OHSAS)</li>
          <li>ISO 22000</li>
          <li>ISO 13485</li>
          <li>CE Mark Certification</li>
          <li>GMP Certificate</li>
        </ul>
      </section>
    </div>
  );
};

export default Services;

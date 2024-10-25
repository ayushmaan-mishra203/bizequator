import { FC } from 'react';

const Services: FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      {/* Registration Section */}
      <section id="registration" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>
        <ul className="list-disc list-inside">
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

      {/* Certification Section */}
      <section id="certification" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Certification</h2>
        <ul className="list-disc list-inside">
          <li>ISO 9001:2015 (QMS)</li>
          <li>ISO 14001:2015 (EMS)</li>
          <li>ISO 45001 (OHSAS)</li>
          <li>ISO 22000</li>
          <li>ISO 13485</li>
          <li>CE Mark Certification</li>
          <li>GMP Certificate</li>
        </ul>
      </section>

      {/* Licence Section */}
      <section id="licence" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Licence</h2>
        <ul className="list-disc list-inside">
          <li>Drug Licence</li>
          <li>Food Licence (FSSAI)</li>
          <li>BIS Registration</li>
        </ul>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Insurance</h2>
        <ul className="list-disc list-inside">
          <li>Health Insurance</li>
          <li>Life Insurance</li>
          <li>General Insurance</li>
        </ul>
      </section>

      {/* IPR Section */}
      <section id="ipr" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">IPR (Intellectual Property Rights)</h2>
        <ul className="list-disc list-inside">
          <li>Trademark Registration</li>
          <li>Copyright Registration</li>
        </ul>
      </section>

      {/* Start a Business Section */}
      <section id="start-business">
        <h2 className="text-2xl font-bold mb-4">Start a Business</h2>
        <ul className="list-disc list-inside">
          <li>Partnership Registration</li>
          <li>Pvt Limited Registration</li>
          <li>LLP Registration</li>
          <li>Nidhi Company Registration</li>
        </ul>
      </section>
    </div>
  );
};

export default Services;

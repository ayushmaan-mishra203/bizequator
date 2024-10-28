import { readdir } from 'fs';
import ServiceLayout from '../ServiceLayout';

const rera = () => {
  return (
    <ServiceLayout>
      <h1 className="text-3xl font-bold mb-4">Rera</h1>
      <p className="text-lg text-gray-700 mt-4">
        This page contains information on obtaining a Drug Licence, required documents, and guidelines.
      </p>
      {/* Additional content for Drug Licence */}
    </ServiceLayout>
  );
};

export default rera;

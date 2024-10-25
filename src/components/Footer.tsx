import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        {/* Company information */}
        <p className="text-sm font-bold">Bizequator</p>
        <p className="text-xs font-bold">Part of SNDM AUXILIUM PVT LTD</p>
        
        {/* Copyright or other info */}
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

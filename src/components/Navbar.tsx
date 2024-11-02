'use client';

import Link from 'next/link';
import { FC, useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react'; // Import signIn and useSession
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession(); // Access session data

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white p-2 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/images/logo.png" // Always use the company logo
            alt="Company Logo"
            className="h-28 mr-2"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`flex-col md:flex md:flex-row ${isOpen ? 'flex' : 'hidden'} md:block`}>
          {/* Registration Dropdown */}
          <div className="relative group">
            <button className="px-8 py-6 hover:text-gray-400 focus:outline-none">Registration</button>
            <div className="absolute left-0 mt-1 w-56 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <Link href="/services/GST" className="block px-4 py-2 hover:bg-gray-200">GST</Link>
              <Link href="/services/esi&pf" className="block px-4 py-2 hover:bg-gray-200">ESI & PF</Link>
              <Link href="/services/ssi" className="block px-4 py-2 hover:bg-gray-200">SSI/MSME</Link>
              <Link href="/services/rera" className="block px-4 py-2 hover:bg-gray-200">RERA</Link>
              <Link href="/services/apeda" className="block px-4 py-2 hover:bg-gray-200">APEDA</Link>
              <Link href="/services/adcode" className="block px-4 py-2 hover:bg-gray-200">AD Code</Link>
              <Link href="/services/barcode" className="block px-4 py-2 hover:bg-gray-200">Bar Code</Link>
              <Link href="/services/iec" className="block px-4 py-2 hover:bg-gray-200">IEC (Import Export Code)</Link>
            </div>
          </div>

          {/* Certification Dropdown */}
          <div className="relative group">
            <button className="px-8 py-6 hover:text-gray-400 focus:outline-none">Certification</button>
            <div className="absolute left-0 mt-1 w-56 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <Link href="/services/iso-9001" className="block px-4 py-2 hover:bg-gray-200">ISO 9001:2015 (QMS)</Link>
              <Link href="/services/iso-14001" className="block px-4 py-2 hover:bg-gray-200">ISO 14001:2015 (EMS)</Link>
              <Link href="/services/iso-45001" className="block px-4 py-2 hover:bg-gray-200">ISO 45001 (OHSAS)</Link>
              <Link href="/services/iso-22000" className="block px-4 py-2 hover:bg-gray-200">ISO 22000</Link>
              <Link href="/services/iso-13485" className="block px-4 py-2 hover:bg-gray-200">ISO 13485</Link>
              <Link href="/services/ce-mark" className="block px-4 py-2 hover:bg-gray-200">CE Mark</Link>
              <Link href="/services/gmp" className="block px-4 py-2 hover:bg-gray-200">GMP Certificate</Link>
            </div>
          </div>

          {/* License Dropdown */}
          <div className="relative group">
            <button className="px-8 py-6 hover:text-gray-400 focus:outline-none">Licence</button>
            <div className="absolute left-0 mt-1 w-56 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <Link href="/services/drug-licence" className="block px-4 py-2 hover:bg-gray-200">Drug Licence</Link>
              <Link href="/services/food-licence" className="block px-4 py-2 hover:bg-gray-200">Food Licence (FSSAI) State & Central</Link>
              <Link href="/services/bis" className="block px-4 py-2 hover:bg-gray-200">BIS</Link>
            </div>
          </div>

          {/* Insurance Dropdown */}
          <div className="relative group">
            <button className="px-8 py-6 hover:text-gray-400 focus:outline-none">Insurance</button>
            <div className="absolute left-0 mt-1 w-56 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <Link href="/services/health-insurance" className="block px-4 py-2 hover:bg-gray-200">Health Insurance</Link>
              <Link href="/services/life-insurance" className="block px-4 py-2 hover:bg-gray-200">Life Insurance</Link>
              <Link href="/services/general-insurance" className="block px-4 py-2 hover:bg-gray-200">General Insurance</Link>
            </div>
          </div>

          {/* IPR Dropdown */}
          <div className="relative group">
            <button className="px-8 py-6 hover:text-gray-400 focus:outline-none">IPR</button>
            <div className="absolute left-0 mt-1 w-56 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <Link href="/services/trademark" className="block px-4 py-2 hover:bg-gray-200">Trademark</Link>
              <Link href="/services/copyright" className="block px-4 py-2 hover:bg-gray-200">Copyright</Link>
            </div>
          </div>

          {/* Start a Business Dropdown */}
          <div className="relative group">
            <button className="px-8 py-6 hover:text-gray-400 focus:outline-none">Start a Business</button>
            <div className="absolute left-0 mt-1 w-56 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <Link href="/services/partnership" className="block px-4 py-2 hover:bg-gray-200">Partnership</Link>
              <Link href="/services/pvt-limited" className="block px-4 py-2 hover:bg-gray-200">Pvt Limited</Link>
              <Link href="/services/llp-registration" className="block px-4 py-2 hover:bg-gray-200">LLP Registration</Link>
              <Link href="/services/nidhi-company" className="block px-4 py-2 hover:bg-gray-200">Nidhi Company</Link>
              <Link href="/services/opc" className="block px-4 py-2 hover:bg-gray-200">OPC (One Person Company)</Link>
              <Link href="/services/section-8" className="block px-4 py-2 hover:bg-gray-200">Section 8 Company</Link>
              <Link href="/services/trust-ngo" className="block px-4 py-2 hover:bg-gray-200">Trust/NGO</Link>
              <Link href="/services/gst" className="block px-4 py-2 hover:bg-gray-200">GST</Link>
              <Link href="/services/12a-80g" className="block px-4 py-2 hover:bg-gray-200">12A & 80G</Link>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="relative flex items-center">
            {session ? (
              // If user is signed in, show their image and sign out button
              <>
                <div className="flex flex-col items-center">
                  <img 
                    src={session.user.image} 
                    alt="User Profile"
                    className="h-8 w-8 rounded-full mb-1" // Adjust margin bottom for spacing
                  />
                  <button onClick={() => signOut()} className="px-4 py-2 hover:text-gray-400 focus:outline-none">
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <Link href="/signin" className="px-4 py-2 hover:text-gray-400 focus:outline-none flex flex-col items-center">
                <FontAwesomeIcon icon={faCircleUser} className="text-3xl mb-1" /> {/* Larger Icon */}
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

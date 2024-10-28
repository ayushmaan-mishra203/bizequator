// components/ServiceLayout.tsx
import { FC, ReactNode } from 'react';
import Navbar from '../../components/Navbar'; // Assume Navbar and Footer are imported
import Footer from '../../components/Footer';

interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout: FC<ServiceLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;


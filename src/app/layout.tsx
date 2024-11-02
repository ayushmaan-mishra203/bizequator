// src/app/layout.tsx

"use client"

import './globals.css';
import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <SessionProvider>{children}</SessionProvider> {/* Wrap children with SessionProvider */}
      </body>
    </html>
  );
};

export default RootLayout;

'use client';

import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';
import { ApolloWrapper } from '@/presentation/templates';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  console.log('🚀🚀🚀 file: layout.tsx [line 16] layout');
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body className={inter.className} suppressHydrationWarning>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}

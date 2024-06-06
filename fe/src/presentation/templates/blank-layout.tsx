import React from 'react';

export default function BlankLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <>
      blank layout
      {children}
    </>
  );
}

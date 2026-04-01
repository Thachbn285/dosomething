import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Social Network Platform',
  description: 'Connect, share, and engage with your community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

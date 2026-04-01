import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sports Management Platform',
  description: 'Manage teams, events, and competitions in real-time',
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

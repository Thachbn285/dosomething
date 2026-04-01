'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ⚽ SportVenue
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/venues"
              className="text-gray-700 hover:text-primary transition"
            >
              Browse Venues
            </Link>
            <Link
              href="/bookings"
              className="text-gray-700 hover:text-primary transition"
            >
              My Bookings
            </Link>
            <Link
              href="/community"
              className="text-gray-700 hover:text-primary transition"
            >
              Community
            </Link>
            <Link
              href="/profile"
              className="text-gray-700 hover:text-primary transition"
            >
              Profile
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <button className="px-4 py-2 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition">
              Login
            </button>
            <button className="px-4 py-2 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t pt-4">
            <Link href="/" className="block text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link
              href="/venues"
              className="block text-gray-700 hover:text-primary"
            >
              Browse Venues
            </Link>
            <Link
              href="/bookings"
              className="block text-gray-700 hover:text-primary"
            >
              My Bookings
            </Link>
            <Link
              href="/community"
              className="block text-gray-700 hover:text-primary"
            >
              Community
            </Link>
            <Link
              href="/profile"
              className="block text-gray-700 hover:text-primary"
            >
              Profile
            </Link>
            <div className="flex gap-2 pt-4">
              <button className="flex-1 px-4 py-2 text-primary border-2 border-primary rounded-lg">
                Login
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-primary text-white rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

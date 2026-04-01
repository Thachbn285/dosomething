'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">📚</span>
            </div>
            <span className="text-xl font-bold text-gray-900">DoLibrary</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search books, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                🔍
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-1 items-center">
            <Link
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-indigo-50"
            >
              Home
            </Link>
            <Link
              href="/books"
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-indigo-50"
            >
              Explore
            </Link>
            <Link
              href="/bestsellers"
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-indigo-50"
            >
              Bestsellers
            </Link>
            <Link
              href="/categories"
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-indigo-50"
            >
              Categories
            </Link>
            <Link
              href="/community"
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-indigo-50"
            >
              Community
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <div className="px-0">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900"
              />
            </div>
            <Link
              href="/"
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/books"
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              Explore
            </Link>
            <Link
              href="/bestsellers"
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              Bestsellers
            </Link>
            <Link
              href="/categories"
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              Categories
            </Link>
            <Link
              href="/community"
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              Community
            </Link>
            <div className="flex gap-3 pt-4">
              <button className="flex-1 px-4 py-2 text-indigo-600 font-medium border border-indigo-600 rounded-lg hover:bg-indigo-50">
                Sign In
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg">
                Join
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

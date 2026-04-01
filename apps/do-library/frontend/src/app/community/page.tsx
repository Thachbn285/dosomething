'use client';

import Link from 'next/link';

export default function CommunityPage() {
  const discussions = [
    {
      id: 1,
      title: 'Best Fantasy Books for Beginners?',
      author: 'Sarah Johnson',
      category: 'Book Recommendations',
      replies: 24,
      views: 156,
      lastActivity: '2 hours ago',
      avatar: '👩‍💼',
    },
    {
      id: 2,
      title: 'Let\'s Discuss "The Midnight Library"',
      author: 'Michael Chen',
      category: 'Book Discussions',
      replies: 42,
      views: 312,
      lastActivity: '30 minutes ago',
      avatar: '👨‍💻',
    },
    {
      id: 3,
      title: 'Reading Challenge: Complete a Series in 2024',
      author: 'Emma Williams',
      category: 'Reading Challenges',
      replies: 89,
      views: 567,
      lastActivity: '5 minutes ago',
      avatar: '👩‍🏫',
    },
    {
      id: 4,
      title: 'Underrated Books Nobody Talks About',
      author: 'James Park',
      category: 'Book Recommendations',
      replies: 56,
      views: 289,
      lastActivity: '1 hour ago',
      avatar: '✍️',
    },
  ];

  const bookClubs = [
    {
      id: 1,
      name: 'Sci-Fi Enthusiasts',
      members: 452,
      books: 23,
      nextMeeting: '2026-04-15',
      image: '🚀',
    },
    {
      id: 2,
      name: 'Mystery & Thriller Lovers',
      members: 328,
      books: 18,
      nextMeeting: '2026-04-12',
      image: '🔍',
    },
    {
      id: 3,
      name: 'Literary Fiction Club',
      members: 267,
      books: 31,
      nextMeeting: '2026-04-20',
      image: '📚',
    },
    {
      id: 4,
      name: 'Women Authors Spotlight',
      members: 195,
      books: 15,
      nextMeeting: '2026-04-18',
      image: '👩‍✈️',
    },
  ];

  const topReviewers = [
    { id: 1, name: 'Sarah Johnson', reviews: 342, avatar: '👩‍💼' },
    { id: 2, name: 'Michael Chen', reviews: 287, avatar: '👨‍💻' },
    { id: 3, name: 'Emma Williams', reviews: 265, avatar: '👩‍🏫' },
    { id: 4, name: 'James Park', reviews: 241, avatar: '✍️' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Community</h1>
          <p className="text-xl text-indigo-100">
            Join thousands of book lovers to discuss, share, and discover
            together
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Discussions */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Discussions
              </h2>
              <p className="text-gray-600">
                See what the community is talking about
              </p>
            </div>
            <Link
              href="/community/discussions"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Link
                key={discussion.id}
                href={`/community/discussions/${discussion.id}`}
              >
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:border-indigo-300 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{discussion.avatar}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">
                            {discussion.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {discussion.lastActivity}
                          </p>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 hover:text-indigo-600">
                        {discussion.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        in{' '}
                        <span className="font-semibold">
                          {discussion.category}
                        </span>
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold text-indigo-600">
                        {discussion.replies}
                      </p>
                      <p className="text-xs text-gray-600">replies</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      {discussion.views} views
                    </div>
                    <button className="text-indigo-600 font-semibold hover:text-indigo-700">
                      Read More →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Book Clubs */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Book Clubs</h2>
              <p className="text-gray-600">
                Join a club and discuss books with like-minded readers
              </p>
            </div>
            <Link
              href="/community/clubs"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Browse All Clubs
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookClubs.map((club) => (
              <Link key={club.id} href={`/community/clubs/${club.id}`}>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:-translate-y-2 transition-all cursor-pointer h-full">
                  <div className="text-5xl mb-4">{club.image}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {club.name}
                  </h3>
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <p>👥 {club.members.toLocaleString()} members</p>
                    <p>📚 {club.books} books discussed</p>
                    <p>📅 Next: {club.nextMeeting}</p>
                  </div>
                  <button className="w-full px-4 py-2 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
                    Join
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Reviewers */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Top Reviewers
              </h2>
              <p className="text-gray-600">
                Recognition for our most active community members
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {topReviewers.map((reviewer, idx) => (
              <div
                key={reviewer.id}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-6xl">{reviewer.avatar}</div>
                  <div className="text-2xl font-bold text-yellow-500 ml-2">
                    #{idx + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reviewer.name}
                </h3>
                <p className="text-3xl font-bold text-indigo-600 mb-2">
                  {reviewer.reviews}
                </p>
                <p className="text-sm text-gray-600">reviews written</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Community Journey
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Share your love of books with fellow readers and make meaningful
            connections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Create Your Profile
            </Link>
            <Link
              href="/books"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-all"
            >
              Explore Books
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function AboutPage() {
  const features = [
    {
      icon: '📚',
      title: 'Vast Library',
      description:
        'Access to thousands of books across all genres and categories',
    },
    {
      icon: '⭐',
      title: 'Community Reviews',
      description: 'Read authentic reviews from fellow book lovers and readers',
    },
    {
      icon: '💬',
      title: 'Active Community',
      description:
        'Join discussions, book clubs, and connect with like-minded readers',
    },
    {
      icon: '🎯',
      title: 'Smart Discovery',
      description:
        'Find your next favorite book with intelligent recommendations',
    },
    {
      icon: '🏆',
      title: 'Reading Challenges',
      description: 'Participate in community reading challenges and goals',
    },
    {
      icon: '👥',
      title: 'Author Connections',
      description: 'Connect with authors and participate in Q&A sessions',
    },
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'Founder & CEO', emoji: '👩‍💼' },
    { name: 'Michael Chen', role: 'Head of Technology', emoji: '👨‍💻' },
    { name: 'Emma Williams', role: 'Community Manager', emoji: '👩‍🏫' },
    { name: 'James Park', role: 'Content Director', emoji: '✍️' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About DoLibrary</h1>
          <p className="text-xl text-indigo-100">
            Building a global community of passionate book lovers
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              DoLibrary was founded with a simple mission: to create a space
              where book lovers can discover, discuss, and celebrate the stories
              that matter to them.
            </p>
            <p>
              We believe that books have the power to transform lives, inspire
              change, and connect people across the globe. Our platform brings
              together a vibrant community of readers who are passionate about
              sharing their love of reading.
            </p>
            <p>
              Whether you're looking for your next favorite read, want to
              connect with fellow readers, or wish to share your thoughts on
              books, DoLibrary is your ultimate destination.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To democratize access to literary resources and foster a global
              community where readers can discover, discuss, and celebrate the
              transformative power of books.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              A world where every book lover has a platform to discover stories,
              connect with communities, and contribute to a vibrant literary
              ecosystem.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                50K+
              </div>
              <p className="text-gray-600">Books</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                100K+
              </div>
              <p className="text-gray-600">Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">500K+</div>
              <p className="text-gray-600">Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Values</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Authenticity
              </h3>
              <p className="text-gray-600">
                We believe in genuine, honest reviews and recommendations from
                real readers.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                Building inclusive spaces where all book lovers feel welcome and
                valued.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Discovery
              </h3>
              <p className="text-gray-600">
                Helping readers discover books that resonate with their
                interests and passions.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                Continuously improving our platform to provide the best
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start discovering, reading, and connecting with book lovers today
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Get Started Now →
          </Link>
        </section>
      </div>
    </div>
  );
}

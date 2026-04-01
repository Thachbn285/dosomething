export default function SocialPage() {
  return (
    <main className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Social Network</h1>
          <p className="text-xl mb-12 opacity-90">
            Connect with friends, share moments, and build your community
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Feed Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">📱</div>
              <h2 className="text-2xl font-bold mb-4">Feed</h2>
              <p>Discover posts from people you follow and like</p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">👤</div>
              <h2 className="text-2xl font-bold mb-4">Profile</h2>
              <p>Showcase your personality and connect with others</p>
            </div>

            {/* Messages Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="text-2xl font-bold mb-4">Messages</h2>
              <p>Chat privately with your friends in real-time</p>
            </div>

            {/* Notifications Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">🔔</div>
              <h2 className="text-2xl font-bold mb-4">Notifications</h2>
              <p>Stay updated with activity from your network</p>
            </div>

            {/* Groups Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">👥</div>
              <h2 className="text-2xl font-bold mb-4">Groups</h2>
              <p>Join communities and interact with like-minded people</p>
            </div>

            {/* Discover Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">🔍</div>
              <h2 className="text-2xl font-bold mb-4">Discover</h2>
              <p>Find new people and interesting content daily</p>
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Feed from '@/components/community/Feed';
import CommunityGroup from '@/components/community/CommunityGroup';

const SAMPLE_GROUPS = [
  {
    id: 'g1',
    name: 'Basketball Enthusiasts',
    members: 1250,
    description: 'Pickup games, tournaments, and training tips.',
    icon: '🏀',
  },
  {
    id: 'g2',
    name: 'Tennis Players',
    members: 890,
    description: 'Find a partner, join ladders, share drills.',
    icon: '🎾',
  },
  {
    id: 'g3',
    name: 'Badminton Community',
    members: 650,
    description: 'Casual sessions and competitive meetups.',
    icon: '🏸',
  },
];

const SAMPLE_POSTS = [
  {
    id: 'p1',
    author: 'Alex Nguyen',
    avatar: '🏀',
    time: '2h ago',
    content:
      'Anyone up for a 5v5 tonight? Looking for 3 more players near Downtown.',
    likes: 42,
    comments: 8,
    sport: 'Basketball',
  },
  {
    id: 'p2',
    author: 'Mai Tran',
    avatar: '🎾',
    time: 'Yesterday',
    content:
      'Great session at Westside Tennis Club. Courts are in excellent condition!',
    likes: 18,
    comments: 3,
    sport: 'Tennis',
  },
];

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Community</h1>
            <p className="text-gray-600">
              Find groups, share updates, and organize games.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Popular groups
                </h2>
                <div className="space-y-4">
                  {SAMPLE_GROUPS.map((g) => (
                    <CommunityGroup key={g.id} {...g} />
                  ))}
                </div>
              </div>

              <div className="bg-gradient-primary rounded-xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-2">
                  Create your own group
                </h3>
                <p className="opacity-90 mb-4">
                  Organize meetups, manage members, and post updates.
                </p>
                <button className="w-full px-4 py-2.5 rounded-lg bg-white text-primary font-semibold hover:bg-opacity-90 transition">
                  Get started
                </button>
              </div>
            </aside>

            <section className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Share an update
                </h2>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    U
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="What’s happening in your sports world?"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary resize-none"
                      rows={3}
                    />
                    <div className="flex items-center justify-end mt-3">
                      <button className="px-5 py-2.5 rounded-lg bg-gradient-primary text-white font-semibold hover:opacity-90 transition">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <Feed posts={SAMPLE_POSTS} />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


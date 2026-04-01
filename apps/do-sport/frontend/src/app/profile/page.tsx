import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                  U
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Your Profile</h1>
                  <p className="text-gray-600">
                    Manage personal details, preferences, and security.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Name</p>
                  <p className="font-semibold text-gray-800">User</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <p className="font-semibold text-gray-800">user@example.com</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Favorite sports</p>
                  <p className="font-semibold text-gray-800">Basketball, Tennis</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Location</p>
                  <p className="font-semibold text-gray-800">Ho Chi Minh City</p>
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                <button className="px-5 py-2.5 rounded-lg bg-gradient-primary text-white font-semibold hover:opacity-90 transition">
                  Edit profile
                </button>
                <button className="px-5 py-2.5 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">
                  Change password
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


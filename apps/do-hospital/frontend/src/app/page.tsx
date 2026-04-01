export default function HospitalPage() {
  return (
    <main className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Hospital Management System
          </h1>
          <p className="text-xl mb-12 opacity-90">
            Streamline patient care and hospital operations with our modern
            healthcare platform
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Dashboard Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">📊</div>
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
              <p>Real-time hospital analytics and performance metrics</p>
            </div>

            {/* Appointments Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">📅</div>
              <h2 className="text-2xl font-bold mb-4">Appointments</h2>
              <p>Manage patient appointments and schedules efficiently</p>
            </div>

            {/* Doctors Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h2 className="text-2xl font-bold mb-4">Staff Management</h2>
              <p>Organize and manage doctors and medical staff</p>
            </div>

            {/* Patients Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">🏥</div>
              <h2 className="text-2xl font-bold mb-4">Patient Records</h2>
              <p>Maintain secure and comprehensive patient medical records</p>
            </div>

            {/* Inventory Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">📦</div>
              <h2 className="text-2xl font-bold mb-4">Inventory</h2>
              <p>Track medical equipment and supplies inventory</p>
            </div>

            {/* Billing Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <div className="text-4xl mb-4">💳</div>
              <h2 className="text-2xl font-bold mb-4">Billing</h2>
              <p>Manage patient billing and insurance claims</p>
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

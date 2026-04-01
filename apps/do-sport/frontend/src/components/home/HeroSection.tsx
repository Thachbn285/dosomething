export default function HeroSection() {
  return (
    <section className="bg-gradient-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Book Your Perfect Sports Venue
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto">
          Find and reserve premium sports facilities in your area. Connect with
          the sports community and book with confidence.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search venues, sports, or locations..."
            className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none"
          />
          <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition">
            Search
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-lg opacity-80">Venues</p>
          </div>
          <div>
            <p className="text-3xl font-bold">10k+</p>
            <p className="text-lg opacity-80">Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold">25k+</p>
            <p className="text-lg opacity-80">Bookings</p>
          </div>
        </div>
      </div>
    </section>
  );
}

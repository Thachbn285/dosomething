export default function SportTypesSection() {
  const sports = [
    { icon: '🏀', name: 'Basketball', venues: 150 },
    { icon: '🎾', name: 'Tennis', venues: 120 },
    { icon: '🏸', name: 'Badminton', venues: 100 },
    { icon: '⚽', name: 'Football', venues: 180 },
    { icon: '🏐', name: 'Volleyball', venues: 80 },
    { icon: '🏊', name: 'Swimming', venues: 60 },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Popular Sports
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sports.map((sport) => (
            <div
              key={sport.name}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-3">{sport.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{sport.name}</h3>
              <p className="text-sm text-gray-600">{sport.venues} venues</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

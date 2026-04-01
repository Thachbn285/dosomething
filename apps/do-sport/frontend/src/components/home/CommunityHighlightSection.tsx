export default function CommunityHighlightSection() {
  const groups = [
    { icon: '👥', name: 'Basketball Enthusiasts', members: 1250 },
    { icon: '🎾', name: 'Tennis Players', members: 890 },
    { icon: '🏸', name: 'Badminton Community', members: 650 },
    { icon: '⚽', name: 'Football Lovers', members: 1600 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Join Our Community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div
              key={group.name}
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{group.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{group.name}</h3>
              <p className="text-gray-600 mb-6">
                {group.members.toLocaleString()} members
              </p>
              <button className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

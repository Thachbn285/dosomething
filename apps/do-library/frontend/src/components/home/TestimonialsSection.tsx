'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Book Reviewer',
      image: '👩‍💼',
      rating: 5,
      text: 'DoLibrary has transformed how I discover new books. The community is so welcoming and the reviews are incredibly helpful!',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Avid Reader',
      image: '👨‍💻',
      rating: 5,
      text: "Finally a platform where readers can truly connect. I've made so many friends who share my love for reading.",
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Book Club Organizer',
      image: '👩‍🏫',
      rating: 5,
      text: 'The book club features are amazing. We use DoLibrary to organize our monthly meetings and discussions.',
    },
    {
      id: 4,
      name: 'James Park',
      role: 'Author',
      image: '✍️',
      rating: 5,
      text: 'As an author, I love seeing genuine reader feedback here. The community appreciation is incredible!',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Readers
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands who have transformed their reading experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 line-clamp-3">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

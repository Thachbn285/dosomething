export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Basketball Player',
      text: 'SportVenue made it so easy to find and book courts. Great experience!',
      rating: 5,
      avatar: '🏀',
    },
    {
      name: 'Maria Garcia',
      role: 'Tennis Coach',
      text: 'The community features are fantastic. Love connecting with other players!',
      rating: 5,
      avatar: '🎾',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Badminton Enthusiast',
      text: 'Best platform for sports venue booking. Highly recommended!',
      rating: 5,
      avatar: '🏸',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-yellow-500 mb-3">
                {'⭐'.repeat(testimonial.rating)}
              </p>
              <p className="text-gray-700">
                <span aria-hidden="true">&ldquo;</span>
                {testimonial.text}
                <span aria-hidden="true">&rdquo;</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

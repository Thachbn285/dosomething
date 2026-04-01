export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Search Venues',
      description: 'Browse available sports venues in your area',
    },
    {
      number: '2',
      title: 'Check Availability',
      description: 'View dates, times, and facilities available',
    },
    {
      number: '3',
      title: 'Book & Pay',
      description: 'Complete your booking and make a secure payment',
    },
    {
      number: '4',
      title: 'Enjoy & Review',
      description: 'Use the venue and share your experience',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

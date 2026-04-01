import Button from '../common/Button';

export default function CTASection() {
  return (
    <section className="bg-gradient-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Book Your Court?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of sports enthusiasts booking venues every day.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Get Started Now
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

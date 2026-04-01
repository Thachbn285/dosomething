import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Create your account today and start discovering books, reading
          reviews, and connecting with book lovers worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Create Free Account
          </Link>
          <Link
            href="/learn-more"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

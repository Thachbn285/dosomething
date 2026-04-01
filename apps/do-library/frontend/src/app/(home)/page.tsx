import HeroSection from '@/components/home/HeroSection';
import FeaturedBooksSection from '@/components/home/FeaturedBooksSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedBooksSection />
      <CategoriesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}

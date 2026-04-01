import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FeaturedVenuesSection from '@/components/home/FeaturedVenuesSection';
import SportTypesSection from '@/components/home/SportTypesSection';
import CommunityHighlightSection from '@/components/home/CommunityHighlightSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedVenuesSection />
      <SportTypesSection />
      <CommunityHighlightSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

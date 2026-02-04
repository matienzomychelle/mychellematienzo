import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InternshipSection from '@/components/InternshipSection';
import WorksSection from '@/components/WorksSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <InternshipSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

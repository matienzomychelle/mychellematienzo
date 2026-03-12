import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import formalPhoto from '@/assets/formal-photo.jpg';
import bgAuraVideo from '@/assets/bg aura.mp4';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const textRef = useScrollReveal();
  const photoRef = useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgAuraVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="section-container relative z-20" style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div ref={textRef} className="order-1 lg:order-1 text-center lg:text-left flex-1 translate-y-10 scale-95 transition-all duration-700">
            <p className="text-sm md:text-base font-medium text-primary tracking-wider uppercase mb-4">
              IT Intern • OJT Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              Hello, I'm <br />
              <span className="text-primary">Mychelle Jane Matienzo</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Enthusiastic and quick-learning Information Technology student with knowledge in networking, website development, programming, and multimedia editing. Eager to contribute to team success and develop technical skills in real-world scenarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Photo */}
          <div ref={photoRef} className="order-1 lg:order-2 flex justify-center translate-y-10 scale-95 transition-all duration-700">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <div className="w-80 h-96 md:w-96 md:h-[30rem] lg:w-[28rem] lg:h-[36rem] bg-secondary rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={formalPhoto}
                  alt="Mychelle Jane Matienzo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -z-20 top-8 left-8 w-full h-full bg-accent/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 animate-bounce"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;

import { ArrowDown } from 'lucide-react';
import formalPhoto from '@/assets/formal-photo.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm md:text-base font-medium text-primary tracking-wider uppercase mb-4 opacity-0 animate-fade-in-up">
              IT Intern • OJT Portfolio
            </p>
            <h1 className="heading-xl mb-6 opacity-0 animate-fade-in-up animation-delay-200">
              Hello, I'm <br />
              <span className="text-primary">Mychelle Jane Matienzo</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in-up animation-delay-400">
              Enthusiastic and quick-learning Information Technology student with knowledge in networking, website development, programming, and multimedia editing. Eager to contribute to team success and develop technical skills in real-world scenarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-600">
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
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in animation-delay-400">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] bg-secondary rounded-2xl overflow-hidden shadow-xl">
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

import { ExternalLink, FileCode, Presentation, FileSpreadsheet } from 'lucide-react';
import pmtImage from '@/assets/pmt.png';

const projects = [
  {
    title: 'Afflatus Project Management System',
    description: 'A web application developed to streamline project management tasks, including task tracking, team collaboration, and progress reporting.',
    type: 'Web Application',
    icon: FileCode,
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  
  
];

const WorksSection = () => {
  return (
    <section id="works" className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">Sample Works & Outputs</h2>
          <p className="body-md text-muted-foreground">
            A collection of projects, reports, and deliverables completed 
            during my internship experience.
          </p>
        </div>

        {/* Featured PMT Project - Centered and Enlarged */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="group bg-background rounded-2xl border border-border/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Enlarged hero image */}
            <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-secondary/30 to-muted/30 overflow-hidden">
              <img
                src={pmtImage}
                alt="Afflatus Project Management System"
                className="w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            <div className="p-8 md:p-12">
              <span className="text-sm md:text-base font-medium text-primary tracking-wider uppercase">
                Featured Web Application
              </span>
              <h3 className="font-serif heading-xl md:heading-2xl mt-4 mb-6 group-hover:text-primary transition-colors duration-300">
                Afflatus Project Management System
              </h3>
              <p className="body-lg text-muted-foreground mb-8 max-w-2xl">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {projects[0].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://drive.google.com/drive/u/6/folders/1Kq5oYlRHoalnXxdvVDFuuWmtV08G8kVD"
                className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:text-primary/80 transition-all duration-300 group/button"
              >
                View Project Details
                <ExternalLink size={20} className="group-hover/button:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Grid for other projects (placeholder for future) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
                <project.icon className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                <span className="text-xs font-medium text-primary tracking-wider uppercase">
                  {project.type}
                </span>
                <h3 className="font-serif text-xl font-medium mt-2 mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  View Details
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;

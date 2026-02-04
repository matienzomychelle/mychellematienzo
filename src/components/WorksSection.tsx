import { ExternalLink, FileCode, Presentation, FileSpreadsheet } from 'lucide-react';

const projects = [
  {
    title: 'Project Title 1',
    description: 'Brief description of the project and what was accomplished. Include technologies used and your role.',
    type: 'Web Application',
    icon: FileCode,
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Project Title 2',
    description: 'Description of another significant project or task completed during the internship.',
    type: 'Documentation',
    icon: Presentation,
    tags: ['Technical Writing', 'User Guides'],
  },
  {
    title: 'Project Title 3',
    description: 'Details about testing, analysis, or other technical work performed.',
    type: 'Data Analysis',
    icon: FileSpreadsheet,
    tags: ['Excel', 'Reports', 'QA Testing'],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
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

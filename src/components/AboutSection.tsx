import { Code, Users, Lightbulb, MessageSquare, FileText, Monitor, Palette, Database } from 'lucide-react';

const skills = [
  { icon: Code, name: 'Programming', description: 'Basic C#, Web Development, System Administration' },
  { icon: Palette, name: 'UI/UX & Multimedia', description: 'Design, Documentation, Video Editing' },
  { icon: Monitor, name: 'Technical Skills', description: 'Networking, Troubleshooting, Hardware/Software' },
  { icon: Database, name: 'Data & Tools', description: 'Data Analysis, MS Office, Google Suite' },
];

const softSkills = [
  'Team Player', 'Accountable', 'Fast Learner', 'Analytical Thinking', 
  'Logical Reasoning', 'Can Work Under Pressure', 'Communicable'
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">About Me</h2>
          <p className="body-md text-muted-foreground">
            I am an enthusiastic and quick-learning Information Technology student at Pamantasan ng Lungsod ng Valenzuela. 
            With a solid foundation in networking, website development, programming, system administration, and multimedia editing, 
            I strive to create solutions that make a difference. My hands-on experience through academic projects and volunteer work 
            has prepared me to contribute meaningfully in a professional environment.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {softSkills.map((skill) => (
            <span 
              key={skill}
              className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Resume Download */}
        <div className="text-center">
          <a
            href="/CV_Matienzo.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/80 transition-colors duration-200"
          >
            <FileText size={20} />
            Download Resume / CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

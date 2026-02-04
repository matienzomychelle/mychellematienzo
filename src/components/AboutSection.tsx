import { Code, Users, Lightbulb, MessageSquare, FileText } from 'lucide-react';

const skills = [
  { icon: Code, name: 'Technical Skills', description: 'Web Development, Database Management, Programming' },
  { icon: Users, name: 'Teamwork', description: 'Collaborative projects and group coordination' },
  { icon: Lightbulb, name: 'Problem Solving', description: 'Analytical thinking and creative solutions' },
  { icon: MessageSquare, name: 'Communication', description: 'Clear documentation and presentation skills' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">About Me</h2>
          <p className="body-md text-muted-foreground">
            I am a passionate IT student currently pursuing my Bachelor's degree. 
            With a strong foundation in software development and a keen interest in 
            emerging technologies, I strive to create solutions that make a difference.
            My internship experience has allowed me to apply theoretical knowledge 
            to real-world challenges.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
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

        {/* Resume Download */}
        <div className="text-center">
          <a
            href="#"
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

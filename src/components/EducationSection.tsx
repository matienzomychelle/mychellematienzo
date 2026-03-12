import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Pamantasan ng Lungsod ng Valenzuela',
    period: 'Aug 2022 - Present',
    location: 'Valenzuela City, Philippines',
    description: 'Studies general knowledge in the field of Information Technology. Ongoing Capstone Project regarding immediate emergency response in Valenzuela City.',
    highlights: ['Capstone Project: StormAid app for disaster management', 'Multimedia projects including game development and animation']
  },
  {
    degree: 'Senior High School (STEM Strand)',
    institution: 'Our Lady of Fatima University',
    period: 'Aug 2020 - June 2022',
    location: 'Valenzuela City, Philippines',
    description: 'Completed Senior High School under the STEM (Science, Technology, Engineering, and Mathematics) Strand.',
    highlights: ['Gained foundational knowledge in mathematics, physics, chemistry, and information technology', 'Developed critical thinking and analytical skills']
  },
  {
    degree: 'Junior High School',
    institution: 'General Tiburcio De Leon National Highschool',
    period: 'June 2016 - March 2020',
    location: 'Valenzuela City, Philippines',
    description: 'Completed junior high school education with additional responsibilities as a student teacher.',
    highlights: ['Served as student teacher for AutoCAD', 'Assisted classmates with drafting and design concepts']
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">Education</h2>
          <p className="body-md text-muted-foreground">
            My academic journey has equipped me with a strong foundation in Information Technology
            and STEM disciplines, complemented by practical experience and leadership roles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-medium mb-2 hover:text-primary transition-colors duration-200 cursor-pointer">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-4 hover:text-primary/80 transition-colors duration-200 cursor-pointer">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div>
                    <h4 className="font-serif text-lg font-medium mb-3 flex items-center gap-2">
                      <Award size={18} className="text-accent" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full shrink-0 mt-2"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

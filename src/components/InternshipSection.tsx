import { Building2, Calendar, Briefcase, CheckCircle, MapPin, Globe } from 'lucide-react';

const services = [
  'Real Estate Brokerage',
  'Real Estate Consulting & Management',
  'Home Loan Financing Services',
  'House Design & Construction',
  'Real Estate Appraisal',
  'Real Estate Titling & Documentation Services',
];

const tasks = [
  'Assisted in developing and maintaining web applications',
  'Conducted software testing and quality assurance',
  'Participated in daily stand-up meetings and sprint planning',
  'Collaborated with cross-functional teams on project deliverables',
  'Created technical documentation for implemented features',
  'Provided technical support and troubleshooting assistance',
];

const InternshipSection = () => {
  return (
    <section id="internship" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">Internship Experience</h2>
          <p className="body-md text-muted-foreground">
            My on-the-job training provided invaluable hands-on experience 
            in a professional real estate industry environment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Company Info Card */}
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-medium mb-2">Afflatus Realty Inc.</h3>
                <p className="text-muted-foreground mb-4">
                  Established in 2019, Afflatus specializes in real estate brokerage, appraisal, and consulting. 
                  The company collaborates with over 100 developers across all market segments in the Philippines, 
                  from socialized housing to luxury properties, serving developers, family-owned estates, 
                  financial institutions, and private landowners.
                </p>
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    January 2024 - Present
                  </span>
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <Briefcase size={16} className="text-primary" />
                    IT Intern
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    2/F 702A Shaw Blvd., Kapitolyo, Pasig City
                  </span>
                  <a 
                    href="https://afflatusrealty.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe size={16} className="text-primary" />
                    afflatusrealty.com
                  </a>
                </div>
              </div>
            </div>

            {/* Company Services */}
            <div className="mb-8">
              <h4 className="font-serif text-xl font-medium mb-4">Company Services</h4>
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div>
              <h4 className="font-serif text-xl font-medium mb-4">Assigned Tasks & Responsibilities</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {tasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;

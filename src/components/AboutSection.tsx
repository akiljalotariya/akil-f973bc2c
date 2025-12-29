import { Code2, GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BCA Student",
      description: "Pursuing Bachelor of Computer Applications",
    },
    {
      icon: Briefcase,
      title: "Intern",
      description: "Learning at Valudas Tech Park",
    },
    {
      icon: Code2,
      title: "Developer",
      description: "Building with MERN Stack",
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-card glass overflow-hidden shadow-glow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-bold text-gradient opacity-20">JA</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-3 gap-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl glass hover:bg-secondary/50 transition-all duration-300"
                    >
                      <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Hello! I'm <span className="text-gradient">Akil</span>
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated BCA student with a burning passion for web development and technology. 
              My journey into the world of programming started with curiosity and has evolved into a 
              full-fledged pursuit of becoming a professional full-stack developer.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm honing my skills through an exciting internship at Valudas Tech Park, 
              where I get hands-on experience working on real-world projects. This opportunity has 
              allowed me to apply my theoretical knowledge to practical scenarios, collaborate with 
              experienced developers, and understand the dynamics of professional software development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My primary focus is on the MERN stack — MongoDB, Express.js, React, and Node.js. 
              I believe in writing clean, maintainable code and building applications that not 
              only work well but also provide great user experiences. Every project I work on is 
              an opportunity to learn something new and push my boundaries further.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Problem Solver", "Quick Learner", "Team Player", "Detail Oriented"].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 rounded-full glass text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

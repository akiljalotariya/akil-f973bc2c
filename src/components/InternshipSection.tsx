import { Building2, Calendar, CheckCircle, Rocket } from "lucide-react";

const achievements = [
  "Working on real-world web development projects",
  "Building full-stack applications using MERN stack",
  "Collaborating with experienced developers and mentors",
  "Learning industry-standard coding practices and workflows",
  "Improving problem-solving and debugging skills",
  "Understanding agile development methodologies",
];

const InternshipSection = () => {
  return (
    <section id="internship" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">Internship</span> Experience
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Growing and learning in a professional environment
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Card */}
          <div className="lg:col-span-2">
            <div className="h-full p-8 rounded-2xl glass shadow-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-primary">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Valudas Tech Park</h3>
                  <p className="text-muted-foreground">Technology Company</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Currently Interning</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Rocket className="w-5 h-5 text-primary" />
                  <span>MERN Stack Developer Intern</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  At Valudas Tech Park, I'm gaining invaluable hands-on experience in professional 
                  web development. This internship is transforming my theoretical knowledge into 
                  practical skills that will shape my career as a developer.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-3">
            <div className="h-full p-8 rounded-2xl glass">
              <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-secondary">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </span>
                What I'm Learning & Doing
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    <div className="mt-1 p-1 rounded-full bg-primary/20">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">{achievement}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-card border border-primary/20">
                <p className="text-foreground font-medium mb-2">
                  "Every day at Valudas Tech Park is a new learning opportunity."
                </p>
                <p className="text-muted-foreground text-sm">
                  The real-world exposure and mentorship I'm receiving here are invaluable. 
                  I'm not just writing code — I'm learning to think like a professional developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;

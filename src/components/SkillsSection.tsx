import { Database, Server, Code, FileCode, Layers, GitBranch, Globe, Palette } from "lucide-react";

const skills = [
  {
    name: "MongoDB",
    icon: Database,
    color: "text-green-500",
    description: "NoSQL Database",
  },
  {
    name: "Express.js",
    icon: Server,
    color: "text-gray-400",
    description: "Backend Framework",
  },
  {
    name: "React",
    icon: Code,
    color: "text-cyan-400",
    description: "Frontend Library",
  },
  {
    name: "Node.js",
    icon: Layers,
    color: "text-green-400",
    description: "Runtime Environment",
  },
  {
    name: "JavaScript",
    icon: FileCode,
    color: "text-yellow-400",
    description: "Programming Language",
  },
  {
    name: "HTML & CSS",
    icon: Palette,
    color: "text-orange-400",
    description: "Web Fundamentals",
  },
  {
    name: "Git & GitHub",
    icon: GitBranch,
    color: "text-purple-400",
    description: "Version Control",
  },
  {
    name: "REST APIs",
    icon: Globe,
    color: "text-blue-400",
    description: "API Development",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-glow cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 rounded-xl bg-secondary/50 group-hover:bg-secondary transition-colors duration-300`}>
                  <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-16 p-8 rounded-2xl glass text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-green-500">M</span>
            <span className="text-gray-400">E</span>
            <span className="text-cyan-400">R</span>
            <span className="text-green-400">N</span>
            <span className="text-foreground ml-2">Stack Developer</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specializing in building full-stack web applications using MongoDB, Express.js, React, 
            and Node.js. From database design to beautiful user interfaces, I handle it all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

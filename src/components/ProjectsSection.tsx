import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "MERN Task Manager",
    description: "A full-stack task management application with user authentication, CRUD operations, and real-time updates. Built with MongoDB, Express, React, and Node.js.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "React Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark theme, and optimized performance.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "RESTful API Project",
    description: "A robust REST API built with Node.js and Express. Includes authentication, rate limiting, and comprehensive documentation using Swagger.",
    tags: ["Node.js", "Express", "MongoDB", "Swagger"],
    demoLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group rounded-2xl glass overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-card relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/30 group-hover:text-primary/50 group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

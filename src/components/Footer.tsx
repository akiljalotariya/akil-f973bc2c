import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:akil.jalotariya@email.com",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold text-gradient">
            JA
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#internship" className="hover:text-foreground transition-colors">Internship</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm">
              © {currentYear} — <span className="text-foreground font-medium">Jalotariya Akil</span> | MERN Stack Developer
            </p>
            <p className="text-muted-foreground text-xs flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and lots of code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

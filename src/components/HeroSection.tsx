import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import developerImage from "@/assets/developer-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border) / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="stagger-children order-2 lg:order-1">
            {/* Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="text-gradient">Jalotariya Akil</span>
            </h1>

            {/* Typing Effect Subtitle */}
            <p className="text-xl text-muted-foreground mb-8">
              MERN Stack Developer | Creating Digital Experiences
            </p>

            {/* Code Block */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-card max-w-lg">
              {/* Code Window Header */}
              <div className="bg-card px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-muted-foreground text-sm ml-4">developer.js</span>
              </div>
              
              {/* Code Content */}
              <div className="bg-secondary/80 p-6 font-mono text-sm">
                <p className="text-purple-400">const <span className="text-foreground">developer</span> = {"{"}</p>
                <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-amber-400">"Jalotariya Akil"</span>,</p>
                <p className="pl-4"><span className="text-cyan-400">stack</span>: [<span className="text-amber-400">"MongoDB"</span>, <span className="text-amber-400">"Express"</span>, <span className="text-amber-400">"React"</span>, <span className="text-amber-400">"Node.js"</span>],</p>
                <p className="pl-4"><span className="text-cyan-400">passion</span>: <span className="text-amber-400">"Building amazing digital experiences"</span></p>
                <p className="text-foreground">{"};"}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg">
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-md animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow">
                <img 
                  src={developerImage} 
                  alt="Developer coding at multi-monitor setup"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

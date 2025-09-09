import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import manojProfile from "@/assets/manoj-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-warm rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent-warm-light rounded-full opacity-30"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-primary-light rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-glow border-4 border-accent-warm-light">
              <img 
                src={manojProfile} 
                alt="Manoj M - Software Engineer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent-warm rounded-full flex items-center justify-center text-background font-bold text-lg animate-pulse">
              👋
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6">
            Hello, I'm{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Manoj M
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-medium">
            Aspiring Software Engineer
          </p>
          
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Full-Stack Enthusiast | Problem Solver | Electronics & Communication Engineering Student
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent-warm hover:bg-accent-warm-light text-background font-semibold px-8 py-4 rounded-full shadow-accent transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('portfolio')}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Download className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-warm">4+</div>
              <div className="text-sm text-primary-foreground/70">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-warm">Java</div>
              <div className="text-sm text-primary-foreground/70">Primary Language</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-warm">React</div>
              <div className="text-sm text-primary-foreground/70">Frontend</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-warm">IoT</div>
              <div className="text-sm text-primary-foreground/70">Hardware</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
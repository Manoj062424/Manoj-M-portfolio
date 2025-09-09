import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Code2, Zap } from "lucide-react";
import manojProfile from "@/assets/manoj-profile.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className={`w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-accent-warm' : i % 3 === 1 ? 'bg-primary-light' : 'bg-accent-warm-light'
            }`}></div>
          </div>
        ))}
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-warm/20 to-accent-warm-light/10 rounded-3xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-primary/30 to-primary-light/20 rounded-2xl -rotate-12 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-accent-warm-light/25 to-primary-light/15 rounded-full animate-ping"></div>
        
        {/* Interactive Cursor Glow */}
        <div 
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image with Modern Effects */}
          <div className={`mb-12 relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Glassmorphism Container */}
            <div className="relative mx-auto w-fit">
              {/* Glowing Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-warm via-primary-light to-accent-warm-light rounded-full opacity-30 blur-md animate-pulse"></div>
              
              {/* Main Profile Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20 shadow-2xl">
                <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-white/30 ring-offset-4 ring-offset-transparent">
                  <img 
                    src={manojProfile} 
                    alt="Manoj M - Software Engineer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-accent rounded-full p-3 shadow-accent border-2 border-white/30 backdrop-blur-sm animate-bounce">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-4 border-white/80 animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Hero Text with Enhanced Typography */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Main Heading */}
            <div className="relative mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-2 leading-tight">
                Hello, I'm{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-accent bg-clip-text text-transparent animate-pulse">
                    Manoj M
                  </span>
                  {/* Underline Animation */}
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-accent rounded-full opacity-50 animate-pulse"></div>
                </span>
              </h1>
              
              {/* Floating Icons */}
              <div className="absolute -top-8 -left-8 text-accent-warm animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Code2 className="w-8 h-8 opacity-60" />
              </div>
              <div className="absolute -top-4 -right-12 text-primary-light animate-bounce" style={{ animationDelay: '1s' }}>
                <Zap className="w-6 h-6 opacity-60" />
              </div>
            </div>
            
            {/* Subtitle with Glassmorphism */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8 max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-semibold">
                Aspiring Software Engineer
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-lg text-primary-foreground/70">
                <span className="bg-accent-warm/20 px-4 py-2 rounded-full border border-accent-warm/30">Full-Stack Enthusiast</span>
                <span className="bg-primary/20 px-4 py-2 rounded-full border border-primary/30">Problem Solver</span>
                <span className="bg-accent-warm-light/20 px-4 py-2 rounded-full border border-accent-warm-light/30">ECE Student</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button 
              size="lg" 
              className="group relative bg-gradient-accent hover:shadow-accent text-background font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-white/20"
              onClick={() => scrollToSection('portfolio')}
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-warm-light via-accent-warm to-accent-warm-light opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <span className="relative flex items-center">
                View My Work
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              
              {/* Shimmer Effect */}
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-slide-in-right"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative bg-white/5 backdrop-blur-sm border-2 border-white/30 text-primary-foreground hover:bg-white/10 px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow"
              onClick={() => scrollToSection('contact')}
            >
              <span className="relative flex items-center">
                <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
              </span>
            </Button>
          </div>

          {/* Enhanced Stats Section */}
          <div className={`mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "4+", label: "Projects", icon: "🚀", color: "from-accent-warm to-accent-warm-light" },
                  { number: "Java", label: "Primary Language", icon: "☕", color: "from-primary to-primary-light" },
                  { number: "React", label: "Frontend", icon: "⚛️", color: "from-blue-400 to-blue-600" },
                  { number: "IoT", label: "Hardware", icon: "🔧", color: "from-green-400 to-green-600" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-bold group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-2xl mb-2 group-hover:animate-bounce">
                      {stat.icon}
                    </div>
                    <div className="text-sm text-primary-foreground/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
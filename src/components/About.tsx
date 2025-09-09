import { Card } from "@/components/ui/card";
import { GraduationCap, Target, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About <span className="bg-gradient-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions through technology
            </p>
          </div>

          {/* About Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Manoj M, an Electronics and Communication Engineering student at Sathyabama University with a strong interest in software development and full-stack technologies. I enjoy problem-solving in Java, SQL, and exploring modern web/mobile frameworks like React.
                </p>
              </div>

              <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">My Goal</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  My career goal is to become a skilled software engineer and secure a placement in a top IT company where I can grow while contributing to impactful projects that make a difference.
                </p>
              </div>
            </div>

            {/* Right Column - Education & Stats */}
            <div className="space-y-8">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">
                      B.E. Electronics & Communication Engineering
                    </h4>
                    <p className="text-muted-foreground">Sathyabama University</p>
                    <p className="text-sm text-primary">Currently Pursuing</p>
                  </div>
                </div>
              </div>

              {/* Key Strengths */}
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-6">Key Strengths</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">Java</div>
                    <div className="text-sm text-muted-foreground">Problem Solving</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">SQL</div>
                    <div className="text-sm text-muted-foreground">Database Design</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">React</div>
                    <div className="text-sm text-muted-foreground">Frontend Dev</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">IoT</div>
                    <div className="text-sm text-muted-foreground">Hardware</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
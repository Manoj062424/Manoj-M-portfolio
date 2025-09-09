import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code,
  Palette,
  Database,
  Coffee,
  Rocket,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Frontend Web Development",
      description: "Responsive and user-friendly UI using React, HTML, CSS, and JavaScript with modern design principles.",
      icon: <Code className="h-8 w-8" />,
      features: ["React.js Applications", "Responsive Design", "Modern UI/UX", "Performance Optimization"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "UI/UX Design (Basic)",
      description: "Clean layouts with user-focused design principles to create intuitive and engaging experiences.",
      icon: <Palette className="h-8 w-8" />,
      features: ["User Interface Design", "Wireframing", "Prototyping", "Design Systems"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      title: "Database Development",
      description: "SQL database design and queries with focus on performance and data integrity.",
      icon: <Database className="h-8 w-8" />,
      features: ["MySQL Database Design", "Query Optimization", "Data Modeling", "Database Management"],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      title: "Java Programming",
      description: "Object-oriented coding and core Java concepts for robust backend solutions.",
      icon: <Coffee className="h-8 w-8" />,
      features: ["Core Java Development", "OOP Principles", "Problem Solving", "Algorithm Design"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      title: "Full-Stack Projects",
      description: "Complete project lifecycle from design to deployment with modern technologies.",
      icon: <Rocket className="h-8 w-8" />,
      features: ["End-to-End Development", "Testing & Debugging", "Version Control", "Project Planning"],
      color: "text-accent-warm",
      bgColor: "bg-accent-warm/10",
      borderColor: "border-accent-warm/20"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              My <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What I can help you build with my technical expertise
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 3).map((service, index) => (
              <Card key={index} className={`p-8 bg-gradient-card border-2 ${service.borderColor} hover:shadow-card group transition-all duration-300 hover:scale-105`}>
                <div className={`inline-flex p-4 rounded-xl ${service.bgColor} ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className={`w-full ${service.color} hover:bg-opacity-10 group/btn`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Bottom Row - Wider Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(3).map((service, index) => (
              <Card key={index + 3} className={`p-8 bg-gradient-card border-2 ${service.borderColor} hover:shadow-card group transition-all duration-300 hover:scale-105`}>
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 p-4 rounded-xl ${service.bgColor} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`}></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className={`${service.color} hover:bg-opacity-10 group/btn`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
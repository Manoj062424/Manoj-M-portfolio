import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink,
  Github,
  Calculator,
  BookOpen,
  Droplets,
  Zap
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Smart Expense Splitter",
      description: "React-based web application for managing and splitting group expenses with interactive charts and real-time balance tracking.",
      icon: <Calculator className="h-8 w-8" />,
      tags: ["React.js", "JavaScript", "CSS", "Chart.js"],
      features: ["Group Expense Management", "Interactive Charts", "Balance Tracking", "Responsive Design"],
      type: "Web Application",
      status: "Completed",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Library Management System",
      description: "Database-driven system for comprehensive library operations including book management, user registration, and borrowing tracking.",
      icon: <BookOpen className="h-8 w-8" />,
      tags: ["Java", "MySQL", "JDBC", "Swing"],
      features: ["Book Catalog Management", "User Registration", "Borrowing System", "Search & Filter"],
      type: "Desktop Application",
      status: "Completed",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      title: "Misfuel Detection & Monitoring",
      description: "IoT-based hardware system that detects incorrect fuel type and provides real-time monitoring through connected sensors.",
      icon: <Zap className="h-8 w-8" />,
      tags: ["IoT", "Arduino", "Sensors", "C++"],
      features: ["Fuel Type Detection", "Real-time Monitoring", "Alert System", "Data Logging"],
      type: "IoT Project",
      status: "Completed",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      title: "Smart Agriculture System",
      description: "Automated irrigation system that monitors soil moisture levels and activates water pumps based on predefined thresholds.",
      icon: <Droplets className="h-8 w-8" />,
      tags: ["IoT", "Arduino", "Moisture Sensors", "Automation"],
      features: ["Soil Moisture Monitoring", "Automated Irrigation", "Threshold Configuration", "Remote Control"],
      type: "IoT Project",
      status: "Completed",
      color: "text-accent-warm",
      bgColor: "bg-accent-warm/10",
      borderColor: "border-accent-warm/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              My <span className="bg-gradient-accent bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects demonstrating my skills in web development, databases, and IoT
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className={`p-8 bg-gradient-card border-2 ${project.borderColor} hover:shadow-card group transition-all duration-300 hover:scale-105`}>
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`flex-shrink-0 p-4 rounded-xl ${project.bgColor} ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <Badge variant="outline" className={`text-xs ${project.color} border-current`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full ${project.color.replace('text-', 'bg-')} mr-3`}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button size="sm" className={`flex-1 ${project.bgColor} ${project.color} hover:bg-opacity-20 border border-current`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Interested in My Work?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to discuss new projects and opportunities. Let's build something amazing together!
            </p>
            <Button className="bg-accent-warm hover:bg-accent-warm-light text-background font-semibold px-8 py-3">
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Palette, 
  Wrench, 
  Brain,
  Coffee,
  Zap,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "C#", "JavaScript", "SQL/MySQL"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Frontend Development",
      icon: <Palette className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Eclipse IDE", "MySQL Workbench", "VS Code", "Git/GitHub"],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Core Strengths",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Problem-solving", "Logical reasoning", "Continuous learning", "Database handling"],
      color: "text-accent-warm",
      bgColor: "bg-accent-warm/10"
    }
  ];

  const technicalSkills = [
    { name: "Java", level: 85, icon: <Coffee className="h-5 w-5" /> },
    { name: "React.js", level: 80, icon: <Zap className="h-5 w-5" /> },
    { name: "SQL/MySQL", level: 78, icon: <Database className="h-5 w-5" /> },
    { name: "JavaScript", level: 75, icon: <Code2 className="h-5 w-5" /> },
    { name: "Git/GitHub", level: 70, icon: <GitBranch className="h-5 w-5" /> },
    { name: "C#", level: 65, icon: <Code2 className="h-5 w-5" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Skills & <span className="bg-gradient-accent bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className={`inline-flex p-3 rounded-lg ${category.bgColor} ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Technical Skills Progress */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">{skill.icon}</span>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
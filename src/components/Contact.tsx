import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "msmanoj2801@gmail.com",
      href: "mailto:msmanoj2801@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9360014537",
      href: "tel:+919360014537",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/manoj-m-24389628a",
      href: "https://linkedin.com/in/manoj-m-24389628a",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "github.com/Manoj062424",
      href: "https://github.com/Manoj062424",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-warm/20 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Get In <span className="bg-gradient-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">Let's Connect</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, collaborating on exciting projects, or just having a chat about technology and innovation. Feel free to reach out!
                </p>
                
                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group block"
                    >
                      <Card className="p-4 hover:shadow-card transition-all duration-300 hover:scale-105 border-border/50">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${contact.bgColor} ${contact.color} group-hover:scale-110 transition-transform duration-200`}>
                            {contact.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground">{contact.title}</div>
                            <div className="text-xs text-muted-foreground truncate">{contact.value}</div>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-accent-warm mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Chennai, Tamil Nadu, India
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Available for remote work and local opportunities
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or say hello!"
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent-warm hover:bg-accent-warm-light text-background font-semibold py-3 shadow-accent transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
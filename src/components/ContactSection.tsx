import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS values
    const SERVICE_ID = 'service_i34hpi4';
    const TEMPLATE_ID = 'template_fbasw5q';
    const PUBLIC_KEY = 'hn3HMgvFwQNxPKoNE';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhinandan4dev@gmail.com',
      href: 'mailto:abhinandan4dev@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9482053968',
      href: 'tel:+919482053968'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Abhinandan12317',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhinandan-rk-899100290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className={`space-y-8 ${
            isVisible ? 'animate-fadeInLeft' : 'opacity-0 -translate-x-8'
          }`} style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-smooth"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-medium mb-4 text-foreground">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass-card rounded-xl hover:scale-110 transition-bounce hover:shadow-glow ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-border/50 focus:border-primary transition-smooth"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-border/50 focus:border-primary transition-smooth"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass-card border-border/50 focus:border-primary transition-smooth"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="glass-card border-border/50 focus:border-primary transition-smooth resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary hover:scale-105 transition-bounce shadow-primary py-6 text-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className={`text-center mt-16 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 rounded-2xl inline-block">
            <h3 className="text-xl font-semibold mb-2 text-primary">Available for Opportunities</h3>
            <p className="text-muted-foreground mb-4">
              Currently open to internships, freelance projects, and collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="glass-card border-primary/30 hover:border-primary/50 hover:scale-105 transition-bounce"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
              <Button
                className="gradient-primary hover:scale-105 transition-bounce shadow-primary"
                asChild
              >
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
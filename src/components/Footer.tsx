import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:contact@abhinandan.dev',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Abhinandan
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Passionate Computer Science student building innovative AI solutions and modern web applications. 
              Always excited to tackle new challenges and create meaningful impact through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-lg hover:scale-110 transition-bounce hover:shadow-glow"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-muted-foreground hover:text-primary transition-smooth hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Ready to collaborate on innovative projects</p>
              <p>
                <a 
                  href="mailto:contact@abhinandan.dev" 
                  className="hover:text-primary transition-smooth"
                >
                  contact@abhinandan.dev
                </a>
              </p>
              <p>Available for internships and freelance work</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm flex items-center">
            © {currentYear} Abhinandan. Made with{' '}
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
            and lots of code.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-primary transition-smooth"
            >
              Back to Top
            </button>
            <span>•</span>
            <a
              href="#"
              className="hover:text-primary transition-smooth"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
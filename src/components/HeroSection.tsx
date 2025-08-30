import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'AI Engineer',
    'Full-Stack Developer',
    'Problem Solver',
    'Innovation Driver'
  ];

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting) {
        setTypedText(currentText.substring(0, typedText.length + 1));
        
        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentText.substring(0, typedText.length - 1));
        
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typedText, currentIndex, isDeleting]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(15, 15, 23, 0.9) 0%, rgba(25, 25, 45, 0.8) 50%, rgba(35, 35, 65, 0.9) 100%), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-primary-glow/10 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-accent/10 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="space-y-6 animate-fadeInUp">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="block text-primary text-glow font-extrabold">
              Abhinandan
            </span>
          </h1>
          
          {/* Animated subtitle */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground h-16 flex items-center justify-center">
            <span>Aspiring </span>
            <span className="ml-2 text-primary font-semibold min-w-[200px] text-left">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building AI-driven solutions and modern web applications that make a difference. 
            Passionate about turning complex problems into elegant code.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-primary hover:scale-105 transition-bounce shadow-primary text-lg px-8 py-6"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card hover:scale-105 transition-bounce text-lg px-8 py-6 border-primary/30 hover:border-primary/50"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-bounce hover:shadow-glow"
            >
              <Github size={24} className="text-muted-foreground hover:text-primary transition-smooth" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-bounce hover:shadow-glow"
            >
              <Linkedin size={24} className="text-muted-foreground hover:text-primary transition-smooth" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 glass-card rounded-full hover:scale-110 transition-bounce hover:shadow-glow"
            >
              <Mail size={24} className="text-muted-foreground hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-muted-foreground hover:text-primary transition-smooth" />
      </button>
    </section>
  );
};

export default HeroSection;
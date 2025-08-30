import { useEffect, useRef, useState } from 'react';
import { Brain, Globe, Cloud, Search } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Developing intelligent systems using machine learning algorithms, neural networks, and deep learning frameworks to solve complex problems.',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Model Optimization'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Creating modern, responsive web applications with cutting-edge technologies and best practices for optimal user experience.',
      features: ['React & Next.js', 'Full-Stack Development', 'API Integration', 'Performance Optimization'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'Research & Innovation',
      description: 'Contributing to research projects and exploring new frontiers in computer science, with focus on practical applications.',
      features: ['Academic Research', 'Technical Writing', 'Algorithm Design', 'Innovation Strategy'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Designing and implementing scalable cloud infrastructure and services for modern applications and data processing.',
      features: ['AWS & Azure', 'Microservices', 'DevOps & CI/CD', 'Database Management'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            What I Do
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            Combining technical expertise with creative problem-solving to deliver innovative solutions 
            across multiple domains of computer science and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group glass-card p-8 rounded-2xl hover:scale-105 transition-bounce hover:shadow-card cursor-pointer ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-bounce`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-125 transition-smooth" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Let's work together to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 gradient-primary text-white rounded-lg hover:scale-105 transition-bounce shadow-primary"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
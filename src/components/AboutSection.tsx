import { useEffect, useRef, useState } from 'react';
import { Brain, Code, Cloud, Award } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'AI/ML', percentage: 85, icon: Brain, color: 'text-purple-400' },
    { name: 'Web Development', percentage: 90, icon: Code, color: 'text-blue-400' },
    { name: 'Cloud Technologies', percentage: 75, icon: Cloud, color: 'text-green-400' },
    { name: 'Problem Solving', percentage: 95, icon: Award, color: 'text-yellow-400' }
  ];

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

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-secondary" />
      
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            About Me
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            A passionate Computer Science undergraduate with a deep fascination for artificial intelligence 
            and full-stack development. I thrive on creating innovative solutions that bridge the gap 
            between cutting-edge technology and real-world applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bio Section */}
          <div className={`space-y-6 ${
            isVisible ? 'animate-fadeInLeft' : 'opacity-0 -translate-x-8'
          }`} style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Currently pursuing my Computer Science degree with a specialization in AI/ML. 
                  I've been fascinated by the intersection of technology and human creativity since my first 
                  "Hello World" program.
                </p>
                <p>
                  From building neural networks to crafting responsive web applications, I enjoy 
                  tackling complex challenges and turning innovative ideas into reality. My experience 
                  spans from hackathons to research projects, always with a focus on creating 
                  meaningful impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                  open-source projects, or mentoring fellow students in their coding journey.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="glass-card p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <skill.icon className={`w-6 h-6 ${skill.color}`} />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${0.8 + index * 0.1}s`
                      }}
                    />
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

export default AboutSection;
import { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      title: 'Projects Built',
      value: '15+',
      description: 'AI/ML and web development projects'
    },
    {
      title: 'Hackathons',
      value: '8+',
      description: 'Participated with winning solutions'
    },
    {
      title: 'Technologies',
      value: '20+',
      description: 'Programming languages and frameworks'
    },
    {
      title: 'GitHub Commits',
      value: '500+',
      description: 'Open source contributions'
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
    <section className="py-16 lg:py-24 gradient-secondary">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`text-center glass-card p-6 rounded-2xl hover:scale-105 transition-bounce ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Purple bar indicator */}
              <div className="w-full h-3 gradient-primary rounded-lg mb-4 mx-auto"></div>
              
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
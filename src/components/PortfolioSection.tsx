import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectAI from '@/assets/project-ai.jpg';
import projectWeb from '@/assets/project-web.jpg';
import projectCloud from '@/assets/project-cloud.jpg';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'NiyoGen AI',
      description: 'Advanced AI-powered content generation platform using natural language processing and machine learning algorithms.',
      image: projectAI,
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      category: 'AI/ML',
      featured: true,
      links: {
        github: 'https://github.com/Abhinandan12317',
        demo: 'https://github.com/Abhinandan12317'
      }
    },
    {
      id: 2,
      title: 'VidhiPathAI',
      description: 'Legal document analysis and compliance checking system powered by machine learning and NLP.',
      image: projectAI,
      tech: ['Python', 'PyTorch', 'Flask', 'MongoDB'],
      category: 'AI/ML',
      featured: true,
      links: {
        github: 'https://github.com/Abhinandan12317',
        demo: 'https://github.com/Abhinandan12317'
      }
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI, payment integration, and real-time inventory management.',
      image: projectWeb,
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web Development',
      featured: false,
      links: {
        github: 'https://github.com/Abhinandan12317',
        demo: 'https://github.com/Abhinandan12317'
      }
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Monitor',
      description: 'Comprehensive cloud monitoring solution with real-time analytics and automated scaling capabilities.',
      image: projectCloud,
      tech: ['AWS', 'Docker', 'Kubernetes', 'Grafana'],
      category: 'Cloud Solutions',
      featured: false,
      links: {
        github: 'https://github.com/Abhinandan12317',
        demo: 'https://github.com/Abhinandan12317'
      }
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'AI-driven social media sentiment analysis and engagement prediction platform.',
      image: projectAI,
      tech: ['Python', 'Scikit-learn', 'Django', 'Redis'],
      category: 'AI/ML',
      featured: false,
      links: {
        github: 'https://github.com/Abhinandan12317',
        demo: 'https://github.com/Abhinandan12317'
      }
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.',
      image: projectWeb,
      tech: ['React', 'Express.js', 'Socket.io', 'MySQL'],
      category: 'Web Development',
      featured: false,
      links: {
        github: 'https://github.com/Abhinandan12317',
        demo: 'https://github.com/Abhinandan12317'
      }
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Cloud Solutions'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    <section id="portfolio" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-secondary" />
      
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            A collection of projects showcasing my expertise in AI/ML, web development, and cloud technologies. 
            Each project demonstrates problem-solving skills and technical innovation.
          </p>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.4s' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg transition-smooth ${
                  selectedCategory === category
                    ? 'gradient-primary text-white shadow-primary'
                    : 'glass-card text-muted-foreground hover:text-foreground hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-bounce hover:shadow-card ${
                project.featured ? 'lg:col-span-2' : ''
              } ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-110 transition-smooth ${
                    project.featured ? 'h-64' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-card rounded-full hover:scale-110 transition-bounce"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-card rounded-full hover:scale-110 transition-bounce"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <span className="px-3 py-1 text-xs font-medium gradient-primary text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '1s' }}>
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 glass-card rounded-lg hover:scale-105 transition-bounce hover:shadow-glow"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
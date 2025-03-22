
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const caseStudies = [
  {
    title: "Corporate Restructuring",
    category: "Corporate Law",
    description: "Successfully guided a mid-size technology firm through a complex corporate restructuring, resulting in 30% tax savings and improved operational efficiency.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80"
  },
  {
    title: "Intellectual Property Protection",
    category: "IP Law",
    description: "Secured comprehensive protection for a client's innovative product line, successfully defending against infringement and securing licensing agreements worth $2.5M.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "High-Stakes Negotiation",
    category: "Contract Law",
    description: "Represented a client in a complex acquisition negotiation, securing favorable terms that exceeded initial valuation expectations by 25%.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="case-studies" className="bg-silver py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block bg-navy/5 border border-navy/10 px-4 py-1.5 rounded-full text-navy-light text-sm font-medium mb-6">
            Success Stories
          </div>
          <h2 className="text-navy font-semibold mb-6">Case Studies</h2>
          <p className="text-navy-light text-lg">
            Explore how our legal expertise has delivered exceptional results for our clients 
            across various complex scenarios.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="animate-on-scroll" 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="card-glass h-full overflow-hidden group">
                <div className="relative overflow-hidden aspect-16/9">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-white text-navy hover:bg-white">
                    {study.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-navy mb-3">{study.title}</h3>
                  <p className="text-navy-light mb-4">{study.description}</p>
                  <Button variant="ghost" className="text-gold hover:text-gold-dark p-0 hover:bg-transparent group">
                    Read full case study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

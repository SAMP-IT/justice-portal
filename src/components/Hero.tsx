
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-silver to-white -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center opacity-[0.03] -z-10"></div>
      
      <div className="section-container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <div className="animate-on-scroll">
            <div className="inline-block bg-navy/5 border border-navy/10 px-4 py-1.5 rounded-full text-navy-light text-sm font-medium mb-6">
              Premier Legal & Financial Services
            </div>
            <h1 className="font-semibold leading-tight text-balance text-navy">
              Expert Legal Counsel for Complex Matters
            </h1>
          </div>
          
          <p className="text-navy-light text-lg md:text-xl leading-relaxed animate-on-scroll delay-100">
            Navigating legal complexities with precision and expertise. Our team of seasoned professionals provides tailored legal solutions to protect your interests and secure your future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll delay-200">
            <Button 
              className="bg-navy hover:bg-navy-dark text-white px-8 py-6 text-base"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-navy hover:bg-navy-light/5 text-navy px-8 py-6 text-base"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-6 animate-on-scroll delay-300">
            {[
              { number: "95%", text: "Success Rate" },
              { number: "500+", text: "Cases Won" },
              { number: "20+", text: "Years of Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-navy font-semibold text-2xl md:text-3xl">{stat.number}</div>
                <div className="text-navy-light text-sm">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative animate-on-scroll">
          <div className="absolute inset-0 bg-navy/5 rounded-2xl transform rotate-3 -z-10"></div>
          <div className="card-glass overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
              alt="Legal professionals in a meeting" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-100 max-w-xs animate-on-scroll delay-300">
            <div className="flex items-start gap-2">
              <div className="bg-green-500/10 p-2 rounded-full">
                <svg className="h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-navy">Client-Centered Approach</p>
                <p className="text-xs text-navy-light">Personalized strategies for optimal results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

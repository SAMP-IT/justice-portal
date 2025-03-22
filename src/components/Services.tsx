
import { useEffect, useRef } from 'react';
import { ArrowRight, Scale, FileText, Book, Briefcase, HandshakeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Scale className="h-8 w-8 text-gold" />,
    title: "Corporate Law",
    description: "Comprehensive legal solutions for businesses of all sizes, from formation to complex transactions and compliance matters.",
    link: "#corporate-law"
  },
  {
    icon: <FileText className="h-8 w-8 text-gold" />,
    title: "Contract Review",
    description: "Thorough analysis of contracts to identify risks, ensure compliance, and protect your interests in all business dealings.",
    link: "#contract-review"
  },
  {
    icon: <HandshakeIcon className="h-8 w-8 text-gold" />,
    title: "Negotiation Services",
    description: "Expert representation in high-stakes negotiations, ensuring favorable terms and successful outcomes.",
    link: "#negotiation"
  },
  {
    icon: <Book className="h-8 w-8 text-gold" />,
    title: "Regulatory Compliance",
    description: "Navigate complex regulatory frameworks with our specialized guidance and compliance strategies.",
    link: "#compliance"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-gold" />,
    title: "Litigation Support",
    description: "Strategic representation and advocacy in disputes, protecting your rights through every phase of litigation.",
    link: "#litigation"
  },
  {
    icon: <FileText className="h-8 w-8 text-gold" />,
    title: "Legal Documentation",
    description: "Drafting and reviewing comprehensive legal documents tailored to your specific needs and objectives.",
    link: "#documentation"
  }
];

const Services = () => {
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
    <section id="services" className="bg-white py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block bg-navy/5 border border-navy/10 px-4 py-1.5 rounded-full text-navy-light text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="text-navy font-semibold mb-6">Comprehensive Legal Services</h2>
          <p className="text-navy-light text-lg">
            Our team of experienced attorneys offers a wide range of specialized legal services 
            to help you navigate complex legal challenges with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-on-scroll" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full card-glass hover:shadow-md transition-all duration-300 border-t-2 border-t-gold overflow-hidden hover:translate-y-[-5px]">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-navy-light">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-gold hover:text-gold-dark p-0 hover:bg-transparent group">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

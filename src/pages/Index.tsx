
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import BookConsultation from '@/components/BookConsultation';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="smooth-scroll">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Testimonials />
        <BookConsultation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

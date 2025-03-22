
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    content: "The legal expertise and personalized attention we received from the team exceeded our expectations. They guided us through a complex regulatory challenge with precision and clarity.",
    author: "Michael Thompson",
    position: "CEO, Innovate Tech",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80"
  },
  {
    content: "Their strategic approach to our contract negotiations resulted in terms far more favorable than we anticipated. The team's attention to detail and commitment to our success made all the difference.",
    author: "Alexandra Chen",
    position: "COO, Global Ventures",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80"
  },
  {
    content: "Working with this legal team during our merger was one of the best decisions we made. Their expertise in corporate law provided us with confidence and clarity throughout the process.",
    author: "Robert Martinez",
    position: "Founder, Nexus Capital",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    content: "Their combination of legal expertise and business acumen is exceptional. They don't just provide legal solutions – they understand our business objectives and help us achieve them.",
    author: "Sarah Johnson",
    position: "Director, Elevate Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const nextTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  return (
    <section id="testimonials" className="bg-white py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block bg-navy/5 border border-navy/10 px-4 py-1.5 rounded-full text-navy-light text-sm font-medium mb-6">
            Client Feedback
          </div>
          <h2 className="text-navy font-semibold mb-6">What Our Clients Say</h2>
          <p className="text-navy-light text-lg">
            Hear directly from our clients about their experiences working with our legal team 
            and the results we've achieved for them.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="overflow-hidden relative">
            <div 
              className={`flex transition-transform duration-300 ease-in-out ${animating ? 'opacity-0' : 'opacity-100'}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  ref={el => testimonialRefs.current[index] = el}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card-glass p-8 rounded-xl shadow-sm">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonial.rating ? "fill-gold text-gold" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <p className="text-navy-light text-lg italic mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-navy font-medium">{testimonial.author}</h4>
                        <p className="text-navy-light text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full border-navy/10 hover:bg-navy hover:text-white"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </Button>
            
            <div className="flex items-center gap-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-navy w-6' : 'bg-navy/20'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full border-navy/10 hover:bg-navy hover:text-white"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

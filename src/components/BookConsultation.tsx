
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';

const legalServices = [
  "Corporate Law",
  "Contract Review",
  "Negotiation Services",
  "Regulatory Compliance",
  "Litigation Support",
  "Legal Documentation"
];

const BookConsultation = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Consultation request submitted!", {
        description: "We'll contact you shortly to confirm your appointment."
      });
    }, 1500);
  };

  return (
    <section id="consultation" className="bg-navy py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="inline-block bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-white/80 text-sm font-medium mb-6">
              Get Started
            </div>
            <h2 className="text-white font-semibold mb-6">Schedule Your Consultation</h2>
            <p className="text-white/80 text-lg mb-6">
              Take the first step toward resolving your legal matters. Schedule a consultation 
              with our experienced team to discuss your needs and how we can help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 p-2 rounded-full mt-1">
                  <svg className="h-5 w-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Personalized Approach</h4>
                  <p className="text-white/70">Tailored strategies based on your specific legal needs and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 p-2 rounded-full mt-1">
                  <svg className="h-5 w-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Transparent Communication</h4>
                  <p className="text-white/70">Clear information about your options, potential outcomes, and costs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 p-2 rounded-full mt-1">
                  <svg className="h-5 w-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Strategic Guidance</h4>
                  <p className="text-white/70">Expert advice for navigating complex legal challenges and achieving your objectives.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll delay-100">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-white/90 text-sm font-medium">First Name</label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      required 
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-white/90 text-sm font-medium">Last Name</label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      required 
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-gold"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/90 text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-gold"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-white/90 text-sm font-medium">Phone</label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    required 
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-gold"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-white/90 text-sm font-medium">Service Needed</label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/10 text-white focus:border-gold">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {legalServices.map(service => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium">Preferred Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white/10 border-white/10 text-white hover:bg-white/20",
                          !selectedDate && "text-white/50"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>Select a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white/90 text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Briefly describe your legal needs" 
                    className="resize-none bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-gold"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-gold-dark text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Schedule Consultation"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;

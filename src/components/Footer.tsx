
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#" className="text-white font-semibold text-xl inline-block mb-6">
              LEXICON<span className="text-gold">LAW</span>
            </a>
            <p className="text-white/70 mb-6">
              Providing expert legal counsel with a personalized approach for optimal results.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={`${social} profile`}
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v.788c.856-1.382 4-1.539 4 1.324v3.888z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {["Corporate Law", "Contract Review", "Negotiation Services", "Regulatory Compliance", "Litigation Support"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/70 hover:text-gold transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-white/70">
                  123 Legal Avenue, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-gold transition-colors duration-200">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@example.com" className="text-white/70 hover:text-gold transition-colors duration-200">
                  info@lexiconlaw.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Stay updated with our legal insights and news.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/10 focus:outline-none focus:border-gold text-white placeholder:text-white/50"
                required
              />
              <Button className="w-full bg-gold hover:bg-gold-light text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2023 LexiconLaw. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-gold text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-gold text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-gold text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

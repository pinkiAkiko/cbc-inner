import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About CBC</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Capacity Building Commission, Ministry of Personnel, Public Grievances & Pensions,
              Government of India
            </p>
            <div className="mt-4">
              <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">CBC</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="hover:text-accent transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link to="/reports" className="hover:text-accent transition-colors">
                  Reports & Resources
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  RTI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  2nd Floor, Hotel Samrat, Kautilya Marg, Chanakyapuri, New Delhi - 110021
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+911126877800" className="hover:text-accent transition-colors">
                  +91-11-2687-7800
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@cbc.gov.in" className="hover:text-accent transition-colors">
                  info@cbc.gov.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
            <div className="mt-6 text-sm text-primary-foreground/80">
              <p>Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
              <p className="mt-1">Visitors: 1,234,567</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2024 Capacity Building Commission. All rights reserved.</p>
            <p>Website designed and developed by National Informatics Centre</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

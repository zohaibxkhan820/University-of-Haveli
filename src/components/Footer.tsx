import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span>UNI</span>
              </div>
              <div>
                <h3 className="text-lg">University of Haveli</h3>
                <p className="text-sm text-gray-400">Kahuta, Azad Jammu and Kashmir</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Committed to providing world-class education and fostering innovation, research, and leadership for over 50 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About University</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academic Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campus Life</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-6">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faculty Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p>Kahuta, Rawalakot</p>
                  <p>Poonch, AJK</p>
                  <p>Pakistan</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p>Vice Chancellor Office</p>
                  <p>+925823-961707</p>
                  <p>Registrar Office</p>
                  <p>+925823-961705</p>
                  <p>Controller of Examination Office</p>
                  <p>+925823-961708</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>director-kc@upr.edu.pk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 University of Haveli. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

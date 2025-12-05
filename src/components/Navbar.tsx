import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";



export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  

  return (
    <header className="font-sans">
      {/* Announcement Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-full mx-auto h-10 flex items-center px-4">
          <strong className="text-red-600 font-bold mr-4 flex-shrink-0">
            📢 Announcements:
          </strong>

          <div className="flex-1 overflow-hidden">
            <div className="inline-block whitespace-nowrap animate-ticker">
              Important: New Admissions Open Fall 2026! Apply Now to Secure Your Spot at the University of Haveli. &nbsp; &nbsp; | &nbsp; &nbsp;
              COVID-19 Guidelines Updated: Stay Informed on Campus Safety Measures. &nbsp; &nbsp; | &nbsp; &nbsp;
              Research Symposium 2026: Call for Papers Now Open! Submit Your Abstracts Today. &nbsp; &nbsp; | &nbsp; &nbsp;
              Alumni Meet 2026: Reconnect and Network with Fellow Graduates. Register Now! &nbsp; &nbsp; | &nbsp; &nbsp;
              Scholarship Applications for 2026 Now Accepted: Apply for Financial Aid Today!
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-ticker {
          animation: ticker 50s linear infinite;
          padding-left: 100%; 
        }
      `}</style>

      {/* Quick Links Bar */}
      <div className="bg-white border-b border-gray-100 py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center text-xs font-medium text-gray-600 uppercase tracking-tight">
          <div className="flex items-center gap-4">
            {/* CMS Dropdown */}
            <div className="relative group">
              <button className="hover:text-green-800 flex items-center gap-1 transition-colors">
                CMS
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full right-0 mt-1 w-40 bg-white border border-gray-200 shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-800">Faculty Portal</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-800">Student Portal</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-800">Staff Portal</a>
              </div>
            </div>

            <a href="#" className="hover:text-green-800 transition-colors">HMS</a>
            <a href="#" className="hover:text-green-800 transition-colors">ORIC</a>
            <a href="#" className="hover:text-green-800 transition-colors">QEC</a>
            <a href="#" className="hover:text-green-800 transition-colors">Research Repository</a>
            <a href="#" className="hover:text-green-800 transition-colors">ODL</a>
            <a href="#" className="hover:text-green-800 transition-colors">Downloads</a>
            <a href="#" className="hover:text-green-800 transition-colors">Library</a>
            <a href="#" className="hover:text-green-800 transition-colors">Jobs</a>
            <a href="#" className="hover:text-green-800 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#0B5F39] shadow-xl relative z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo & Name Block */}
            <div className="flex items-center gap-2">
              {/* Logo Box */}
              <div className="bg-white rounded-full p-1 h-[70px] w-[70px] flex items-center justify-center shadow-sm shrink-0">
                <img
                  src="/assets/A.png"
                  alt="UOH"
                  className="h-20 w-20 rounded-full object-contain"
                />
              </div>
              
              {/* Text Block */}
              <div className="flex flex-col justify-center h-[70px] text-white">
                <h1 className="text-2xl lg:text-3xl font-bold leading-none tracking-wide uppercase whitespace-nowrap">
                  University of Haveli
                </h1>
                <p className="text-sm lg:text-base font-light tracking-widest text-green-100 uppercase w-full flex justify-between">
                  <span>K</span><span>a</span><span>h</span><span>u</span><span>t</span><span>a</span>, 
                  <span className="mx-1"></span>
                  <span>A</span><span>z</span><span>a</span><span>d</span> 
                  <span className="mx-1"></span>
                  <span>J</span><span>a</span><span>m</span><span>m</span><span>u</span> 
                  <span className="mx-1"></span>
                  <span>&</span> 
                  <span className="mx-1"></span>
                  <span>K</span><span>a</span><span>s</span><span>h</span><span>m</span><span>i</span><span>r</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden xl:flex items-center text-white text-sm font-medium">
              <NavDropdown label="UAH" items={["About Us", "Vision & Mission", "History"]} />
              <NavDropdown label="Administration" items={["Officers", "Departments", "Directorates"]} />
              <NavDropdown label="Faculties" items={["Sciences", "Arts & Humanities", "Health Sciences"]} />
              <NavDropdown label="Admissions" items={["Eligibility Criteria", "Merit Calculator", "Fee Structure"]} />
              <NavDropdown label="Examinations" items={["Date Sheets", "Results", "Downloads"]} />
              <NavDropdown label="Life at Campus" items={["Housing", "Sports", "Societies"]} />
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition-colors">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 text-white hover:bg-green-700 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="xl:hidden py-4 border-t border-green-600 bg-[#0B5F39]">
              <div className="space-y-1 text-white">
                <MobileNavLink label="UAH" />
                <MobileNavLink label="Administration" />
                <MobileNavLink label="Faculties" />
                <MobileNavLink label="Admissions" />
                <MobileNavLink label="Examinations" />
                <MobileNavLink label="Life at Campus" />
                <div className="border-t border-green-600 mt-4 pt-4 px-4 grid grid-cols-2 gap-2 text-xs text-green-100">
                  <a href="#">CMS</a>
                  <a href="#">HMS</a>
                  <a href="#">ORIC</a>
                  <a href="#">Library</a>
                  <a href="#">Jobs</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="group relative px-3 py-2">
      <button className="flex items-center gap-1 hover:text-green-200 transition-colors uppercase">
        {label}
        <ChevronDown className="w-3 h-3" />
      </button>
      <div className="absolute top-full left-0 mt-0 w-48 bg-white text-gray-900 shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-4 border-[#0B5F39]">
        {items.map((item) => (
          <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm hover:text-[#0B5F39]">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileNavLink({ label }: { label: string }) {
  return (
    <a href="#" className="block py-3 px-4 hover:bg-green-700 font-medium uppercase">
      {label}
    </a>
  );
}

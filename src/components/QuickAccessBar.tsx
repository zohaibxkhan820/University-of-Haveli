import { ChevronDown } from "lucide-react";

export function QuickAccessBar() {
  return (
    <div className="bg-white border-b border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center text-sm font-medium text-gray-700 gap-6 flex-wrap">
          <div className="group relative">
            <button className="hover:text-[#0B5F39] flex items-center gap-1 transition-colors">
              CMS
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full right-0 mt-1 bg-white border border-gray-100 rounded-md shadow-lg py-1 min-w-[150px] z-50 hidden group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Faculty Portal</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Student Portal</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Staff Portal</a>
            </div>
          </div>
          
          <a href="#" className="hover:text-[#0B5F39] transition-colors">HMS</a>
          <a href="#" className="hover:text-[#0B5F39] transition-colors">ORIC</a>
          <a href="#" className="hover:text-[#0B5F39] transition-colors">QEC</a>
          <a href="#" className="hover:text-[#0B5F39] transition-colors">Research Repository</a>
          <a href="#" className="hover:text-[#0B5F39] transition-colors">ODL</a>
          <a href="#" className="hover:text-[#0B5F39] transition-colors">Downloads</a>
          <a href="#" className="hover:text-[#0B5F39] transition-colors">Library</a>
          <a href="#" className="hover:text-[#0B5F39] transition-colors">Jobs</a>
          <a href="#" className="hover:text-[#0B5F39] transition-colors">Contact</a>
        </div>
      </div>
    </div>
  );
}

import { Megaphone } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-white border-b border-gray-100 overflow-hidden relative h-10 flex items-center z-50">
      <div className="absolute left-0 top-0 bottom-0 z-10 bg-white px-4 flex items-center shadow-[5px_0_10px_rgba(255,255,255,1)]">
        <div className="flex items-center gap-2 text-red-600 font-bold whitespace-nowrap">
          <Megaphone className="w-5 h-5" />
          <span>Announcements:</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-gray-800 font-medium">
          <span className="inline-block">Important: New Admissions Open — Merit Lists Updated — Semester Results Announced</span>
          <span className="inline-block">Important: New Admissions Open — Merit Lists Updated — Semester Results Announced</span>
          <span className="inline-block">Important: New Admissions Open — Merit Lists Updated — Semester Results Announced</span>
          <span className="inline-block">Important: New Admissions Open — Merit Lists Updated — Semester Results Announced</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

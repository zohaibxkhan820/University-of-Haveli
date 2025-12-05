import { Facebook, Linkedin, Twitter } from "lucide-react";

export function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
      <SocialLink
        href="#"
        icon={<Facebook className="w-6 h-6 text-white" />}
        label="Facebook"
        bg="bg-[#1877F2]"
      />
      <SocialLink
        href="#"
        icon={<Twitter className="w-6 h-6 text-white" />}
        label="X"
        bg="bg-black"
      />
      <SocialLink
        href="#"
        icon={<Linkedin className="w-6 h-6 text-white" />}
        label="LinkedIn"
        bg="bg-[#0A66C2]"
      />
    </div>
  );
}

function SocialLink({ href, icon, label, bg }: { href: string; icon: React.ReactNode; label: string; bg: string }) {
  return (
    <a
      href={href}
      className={`${bg} flex items-center text-white w-12 h-12 hover:w-32 transition-all duration-300 overflow-hidden rounded-r-md shadow-lg group`}
    >
      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
        {label}
      </span>
    </a>
  );
}

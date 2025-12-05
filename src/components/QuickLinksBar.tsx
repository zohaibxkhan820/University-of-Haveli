import React from "react";
import { MapPin, Phone } from "lucide-react";

type ContactButton = {
  icon: React.ReactNode;
  label: string;
  href: string;
  bgColor: string;
  hoverColor: string;
  borderRadius?: string;
};

type Props = {
  buttons?: ContactButton[];
  className?: string;
};

const DEFAULT_BUTTONS: ContactButton[] = [
  {
    icon: <MapPin className="w-7 h-6" />,
    label: "Location",
    href: "#location",
    bgColor: "#1e3a5f",
    hoverColor: "#152b47",
    /** Rounded only on bottom-left */
    borderRadius: "0 0 0 24px"
  },
  {
    icon: <Phone className="w-7 h-6" />,
    label: "Contact",
    href: "#contact",
    bgColor: "#4a9b6b",
    hoverColor: "#3d8158",
    /** Rounded only on bottom-right */
    borderRadius: "0 0 24px 0"
  }
];

export default function ContactButtons({ buttons = DEFAULT_BUTTONS, className = "" }: Props) {
  return (
    <section className={`bg-white ${className}`}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 15px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            width: "100%"
          }}
        >
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              style={{
                background: button.bgColor,
                color: "#fff",
                height: "50px", // controlled size
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                textDecoration: "none",
                transition: "all 0.3s ease",

                /** APPLY INDIVIDUAL ROUNDED CORNERS */
                borderRadius: button.borderRadius
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = button.hoverColor;
                e.currentTarget.style.transform = "translateY(-2px)";
                const icon = e.currentTarget.querySelector(".icon-wrapper");
                if (icon) (icon as HTMLElement).style.transform = "scale(1.15) rotate(5deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = button.bgColor;
                e.currentTarget.style.transform = "translateY(0)";
                const icon = e.currentTarget.querySelector(".icon-wrapper");
                if (icon) (icon as HTMLElement).style.transform = "scale(1) rotate(0deg)";
              }}
            >
              <div
                className="icon-wrapper"
                style={{
                  transition: "transform 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {button.icon}
              </div>

              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase"
                }}
              >
                {button.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

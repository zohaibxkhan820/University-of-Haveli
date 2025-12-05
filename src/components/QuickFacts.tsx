import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Fact = { id: number; number: string; label: string };

const DEFAULT_FACTS: Fact[] = [
  { id: 1, number: "Total Departments", label: "24" },
  { id: 2, number: "1,469", label: "National Outreach Program Students" },
  { id: 3, number: "37", label: "Student Societies" },
  { id: 4, number: "1,285", label: "Alumni" },
  { id: 5, number: "21", label: "Undergraduate Majors" },
  { id: 6, number: "50+", label: "Student Clubs" },
  { id: 7, number: "200+", label: "PhD Qualified Faculty Members" }
];

type Props = {
  facts?: Fact[];
  visibleCount?: number;
  autoplay?: boolean;
  interval?: number;
};

export default function QuickFacts({
  facts = DEFAULT_FACTS,
  visibleCount = 5,
  autoplay = false,
  interval = 300
}: Props) {
  // normalize visibleCount: must be >=1 and odd
  if (visibleCount <= 0) visibleCount = 1;
  if (visibleCount % 2 === 0) visibleCount = visibleCount - 1 || 1;

  const L = facts.length;
  const half = Math.floor(visibleCount / 2);

  const [currentIndex, setCurrentIndex] = useState<number>(2);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef<boolean>(false);

  // stable next / prev functions
  const next = useCallback(() => {
    setCurrentIndex((p) => (p + 1) % L);
  }, [L]);

  const prev = useCallback(() => {
    setCurrentIndex((p) => (p - 1 + L) % L);
  }, [L]);

  // keep refs for autoplay to call stable functions
  const nextRef = useRef(next);
  const prevRef = useRef(prev);
  useEffect(() => void (nextRef.current = next), [next]);
  useEffect(() => void (prevRef.current = prev), [prev]);

  // compute visible items around currentIndex
  const getVisible = useCallback((): Fact[] => {
    const out: Fact[] = [];
    for (let i = -half; i <= half; i++) {
      const idx = ((currentIndex + i) % L + L) % L;
      out.push(facts[idx]);
    }
    return out;
  }, [currentIndex, facts, half, L]);

  // Mouse wheel scrolling (prevent default to keep page from scrolling)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e: WheelEvent) => {
      // only respond to vertical wheel
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      e.preventDefault();
      if (e.deltaY > 0) {
        nextRef.current();
      } else if (e.deltaY < 0) {
        prevRef.current();
      }
    };

    carousel.addEventListener("wheel", handleWheel, { passive: false });
    return () => carousel.removeEventListener("wheel", handleWheel);
  }, []);

  // Keyboard navigation (left / right arrows)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      if (["input", "textarea", "select"].includes(tag)) return;
      if (e.key === "ArrowLeft") prevRef.current();
      if (e.key === "ArrowRight") nextRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Autoplay with pause-on-hover
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => {
      if (!hoverRef.current) nextRef.current();
    }, interval);
    return () => window.clearInterval(id);
  }, [autoplay, interval]);

  const visible = getVisible();
  const centerIdx = half;

  // Combined background: gradient + subtle SVG texture
  const combinedBackground = `
    linear-gradient(135deg, #1a3a7d 0%, #0d2453 100%),
    url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Ccircle cx=%2230%22 cy=%2270%22 r=%2220%22 fill=%22rgba(255,255,255,0.02)%22/%3E%3Ccircle cx=%2285%22 cy=%2240%22 r=%2216%22 fill=%22rgba(255,255,255,0.02)%22/%3E%3C/svg%3E')
  `;

  return (
    <section
      aria-label="Quick Facts"
      style={{
        padding: "60px 0 80px",
        background: combinedBackground,
        backgroundSize: "cover, 300px 300px",
        backgroundRepeat: "no-repeat, repeat",
        backgroundPosition: "center center, 0 0",
        backgroundBlendMode: "overlay",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative overlay pattern (keeps subtle highlights) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 40px",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          zIndex: 1
        }}
      >
        <h2
          style={{
            margin: "0 0 16px",
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            textShadow: "0 2px 8px rgba(0,0,0,0.2)"
          }}
        >
          Quick Facts
        </h2>

        <p
          style={{
            margin: "0 auto 50px",
            maxWidth: 900,
            color: "rgba(255,255,255,0.9)",
            fontSize: 16,
            lineHeight: 1.6,
            fontWeight: 300
          }}
        >
          At University of Haveli we are proud of our accomplishments. Together, faculty, students,
          alumni and staff contribute to creating an amazing experience. Here are
          just a few reasons why University of Haveli is the right choice for you.
        </p>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20
          }}
        >
          {/* Prev Button */}
          <button
            aria-label="Previous quick fact"
            onClick={prev}
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "all 0.18s ease",
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.25)";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards row */}
          <div
            ref={carouselRef}
            role="list"
            aria-live="polite"
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
              overflow: "visible",
              padding: "40px 20px",
              perspective: "2000px",
              minHeight: 320
            }}
          >
            {visible.map((f, i) => {
              const distance = Math.abs(i - centerIdx);
              const isCenter = i === centerIdx;

              const scale = isCenter ? 1.2 : Math.max(0.72, 1 - distance * 0.14);
              const opacity = isCenter ? 1 : Math.max(0.45, 1 - distance * 0.22);
              const translateY = isCenter ? -20 : distance * 14;
              const rotateY = (i - centerIdx) * 8;
              const zIndex = 100 - distance;
              const cardWidth = isCenter ? 320 : Math.max(200, 280 - distance * 40);

              return (
                <div
                  role="listitem"
                  key={`${f.id}-${i}`}
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex,
                    width: cardWidth,
                    flexShrink: 0,
                    transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div
                    style={{
                      background: isCenter ? "#fff" : "rgba(255,255,255,0.95)",
                      color: "#1a3a7d",
                      borderRadius: 16,
                      padding: "40px 24px",
                      textAlign: "center",
                      minHeight: 220,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isCenter
                        ? "0 20px 60px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06)"
                        : "0 8px 24px rgba(0,0,0,0.12)",
                      border: isCenter ? "2px solid rgba(26,58,125,0.08)" : "none",
                      cursor: isCenter ? "default" : "pointer",
                      transition: "all 0.22s ease"
                    }}
                    // clicking a non-center card moves it to center
                    onClick={() => {
                      if (!isCenter) {
                        // find index of clicked card in original facts array and set currentIndex
                        const origIdx = facts.findIndex((x) => x.id === f.id);
                        if (origIdx >= 0) setCurrentIndex(origIdx);
                      }
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: isCenter ? 56 : 36,
                        lineHeight: 1.1,
                        color: "#1a3a7d",
                        marginBottom: 12,
                        textShadow: isCenter ? "0 2px 4px rgba(26,58,125,0.08)" : "none"
                      }}
                    >
                      {f.number}
                    </div>
                    <div
                      style={{
                        fontSize: isCenter ? 15 : 13,
                        color: isCenter ? "#1a3a7d" : "#475569",
                        fontWeight: isCenter ? 600 : 500,
                        lineHeight: 1.4,
                        maxWidth: "90%"
                      }}
                    >
                      {f.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            aria-label="Next quick fact"
            onClick={next}
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "all 0.18s ease",
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.25)";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

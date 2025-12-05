import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    id: 1,
    src: "/assets/media1.jpeg",
    title: "Library"
  },
  {
    id: 2,
    src: "/assets/media2.jpeg",
    title: "Students"
  },
  {
    id: 3,
    src: "/assets/media3.jpeg",
    title: "Laboratory"
  },
  {
    id: 4,
    src: "/assets/media4.jpeg",
    title: "Sports"
  },
  {
    id: 5,
    src: "/assets/media5.jpeg",
    title: "Ceremony"
  },
  {
    id: 6,
    src: "/assets/media6.jpeg",
    title: "Campus"
  },
  {
    id: 7,
    src: "/assets/media7.jpeg",
    title: "Aerial View"
  }
];

export function MediaGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      images.push(galleryImages[index]);
    }
    return images;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Media Gallery</h2>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center gap-4 perspective-1000">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-center gap-4 overflow-hidden py-8">
              {getVisibleImages().map((image, idx) => {
                const centerIndex = Math.floor(visibleCount / 2);
                const isCentered = idx === centerIndex;
                const distance = Math.abs(idx - centerIndex);
                
                return (
                  <div
                    key={`${image.id}-${idx}`}
                    className="transition-all duration-500 ease-out"
                    style={{
                      transform: isCentered 
                        ? 'scale(1.1) translateZ(0)' 
                        : `scale(${1 - distance * 0.15}) translateZ(-${distance * 50}px)`,
                      opacity: isCentered ? 1 : 0.7,
                      zIndex: visibleCount - distance,
                      width: '280px',
                      flexShrink: 0
                    }}
                  >
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

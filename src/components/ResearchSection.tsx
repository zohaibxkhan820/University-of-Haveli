import { BookOpen, Lightbulb, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const researchAreas = [
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Cutting-edge research facilities and collaborative spaces"
  },
  {
    icon: BookOpen,
    title: "Research Publications",
    description: "Over 500+ research papers published annually"
  },
  {
    icon: Award,
    title: "Research Grants",
    description: "Funded projects worth millions in research grants"
  },
  {
    icon: TrendingUp,
    title: "Industry Partnerships",
    description: "Collaborations with leading industries worldwide"
  }
];

export function ResearchSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Research & Innovation</h2>
          <p className="text-xl text-gray-600">Advancing knowledge and driving innovation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="/assets/research2.jpeg"
              alt="Research Lab"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <p className="text-gray-700 mb-6">
              At University of Haveli, research and innovation are at the heart of our mission. We foster an environment 
              where groundbreaking discoveries are made, and innovative solutions are developed to address 
              real-world challenges.
            </p>
            <p className="text-gray-700 mb-8">
              Our state-of-the-art research facilities, combined with our expert faculty and talented 
              students, create a dynamic ecosystem for cutting-edge research across multiple disciplines.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {researchAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div key={area.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">{area.title}</h3>
                      <p className="text-sm text-gray-600">{area.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

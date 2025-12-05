import { Clock, ArrowRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const newsItems = [
  {
    id: 1,
    title: "President AJK meets university leadership to discuss educational progress and development initiatives.",
    excerpt: "The President of Azad Jammu & Kashmir held a meeting with the Vice Chancellor of the University of Azad Jammu & Kashmir at the President’s House today. During the meeting, matters related to higher education, ongoing academic initiatives, and future development projects of the university were discussed in detail. The President appreciated the efforts being made to strengthen the academic and administrative framework of the institution, emphasizing the importance of quality education for the region’s progress. The Vice Chancellor briefed the President on recent achievements, ongoing research programs, and priority areas requiring government support. Both sides reaffirmed their commitment to enhancing educational standards and providing better opportunities for students across Azad Jammu & Kashmir.",
    date: "November 28, 2025",
    category: "Achievement",
    image: "/assets/news1.jpeg"
  },
  {
    id: 2,
    title: "MOU SIGNING CEREMONY | CISS AJK AND UNIVERSITY OF HAVELI",
    excerpt: "Participants engaged in meaningful conversation on institutional development and future academic priorities.",
    date: "November 25, 2025",
    category: "Research",
    image: "/assets/news4.jpeg"
  },
  {
    id: 3,
    title: "Vice Chancellor leads Haveli outreach program",
    excerpt: "The Vice Chancellor joined community members to share key developments, new programs, and future plans of the University of Haveli.",
    date: "November 20, 2025",
    category: "Student Life",
    image: "/assets/news5.jpeg"
  }
];

const events = [
  {
    id: 1,
    date: "25",
    month: "DEC",
    title: "Career Counseling & Guidance Fair",
    description: "A university-wide fair offer..."
  },
  {
    id: 2,
    date: "21",
    month: "JAN",
    title: "Research & Innovation Expo",
    description: "Poster presentations by researchers..."
  },
  {
    id: 3,
    date: "05",
    month: "JAN",
    title: "Seminar on AI",
    description: "Expert talk on artificial intelligence trends"
  }
];

export function NewsAndEventsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* University News - Left Side (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl text-gray-900">University News</h2>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group">
                all news
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {newsItems.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                    </div>
                    <h3 className="text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{news.excerpt}</p>
                    <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-2 group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Events - Right Side (1/3 width) */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl text-gray-900">Events</h2>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group">
                all events
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 text-white rounded-lg p-3 text-center min-w-[60px]">
                        <div className="text-2xl leading-none mb-1">{event.date}</div>
                        <div className="text-xs uppercase tracking-wide">{event.month}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600">{event.description}</p>
                      <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-2 group/btn">
                      Show More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Calendar, Users, Briefcase, FileText } from "lucide-react";

const events = [
  {
    icon: Calendar,
    title: "Events",
    description: "Upcoming campus events and activities",
    count: "24",
    color: "bg-blue-600"
  },
  {
    icon: Users,
    title: "Seminars",
    description: "Expert talks and knowledge sessions",
    count: "18",
    color: "bg-green-600"
  },
  {
    icon: Briefcase,
    title: "Workshops",
    description: "Hands-on skill development programs",
    count: "12",
    color: "bg-orange-600"
  },
  {
    icon: FileText,
    title: "Exams",
    description: "Examination schedules and results",
    count: "8",
    color: "bg-purple-600"
  }
];

export function CampusActivities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Campus Activities</h2>
          <p className="text-xl text-gray-600">Stay updated with what's happening on campus</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <div
                key={event.title}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className={`${event.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl text-gray-900">{event.count}</span>
                    <span className="text-gray-600 mb-1">Active</span>
                  </div>
                  <h3 className="text-xl text-gray-900">{event.title}</h3>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

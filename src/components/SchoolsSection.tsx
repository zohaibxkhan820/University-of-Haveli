import { Beaker, Users, Briefcase, Microscope } from "lucide-react";

const schools = [
  {
    icon: Beaker,
    name: "Natural Sciences",
    programs: "4 Programs",
    students: "2,80+",
    color: "bg-green-600"
  },
  {
    icon: Users,
    name: "Social Sciences",
    programs: "11 Programs",
    students: "2,40+",
    color: "bg-teal-600"
  },
  {
    icon: Briefcase,
    name: "Management Sciences",
    programs: "3 Programs",
    students: "150+",
    color: "bg-purple-600"
  },
  {
    icon: Microscope,
    name: "Biological Sciences",
    programs: "8 Programs",
    students: "200+",
    color: "bg-blue-600"
  }
];

export function SchoolsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Schools, Institutes & Departments</h2>
          <p className="text-xl text-gray-600">Explore our diverse academic programs</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schools.map((school) => {
            const Icon = school.icon;
            return (
              <div
                key={school.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className={`${school.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-4">{school.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Programs:</span>
                    <span className="text-gray-900">{school.programs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Students:</span>
                    <span className="text-gray-900">{school.students}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

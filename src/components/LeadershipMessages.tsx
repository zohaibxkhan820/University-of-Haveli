import { Quote } from "lucide-react";

export function LeadershipMessages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chancellor Message */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6 mb-6">
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/assets/Chancellor.jpg"
                    alt="Chancellor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-blue-900 text-white p-2 rounded-lg shadow-lg">
                  <Quote className="w-6 h-6" />
                </div>
              </div>
              
              <div>
                <span className="text-blue-600 uppercase tracking-wider text-sm">Message From</span>
                <h3 className="text-2xl mt-1 text-gray-900">Chancellor</h3>
                <div className="mt-2">
                  <p className="text-gray-900">Barrister Sultan Mahmood Chaudhry</p>
                  <p className="text-gray-600 text-sm">President of Azad Jammu and Kashmir</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                It is with great pride and honor that I welcome you to our distinguished institution. 
                As Chancellor, I have witnessed the remarkable transformation of our university into a 
                center of academic excellence and innovation.
              </p>
              <p>
                Our commitment extends beyond traditional education. We strive to create an environment 
                where every student can discover their potential and develop the skills necessary to become 
                leaders in their chosen fields and responsible global citizens.
              </p>
            </div>
          </div>

          {/* Vice Chancellor Message */}
          <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6 mb-6">
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/assets/VC.jpeg"
                    alt="Vice Chancellor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-blue-900 text-white p-2 rounded-lg shadow-lg">
                  <Quote className="w-6 h-6" />
                </div>
              </div>
              
              <div>
                <span className="text-blue-600 uppercase tracking-wider text-sm">Message From</span>
                <h3 className="text-2xl mt-1 text-gray-900">Vice Chancellor</h3>
                <div className="mt-2">
                  <p className="text-gray-900">Prof. Dr. Khawaja Farooq Ahmed</p>
                  <p className="text-gray-600 text-sm">Vice Chancellor</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Welcome to our esteemed institution, where we are committed to excellence in education, 
                research, and service to society. Our university stands as a beacon of knowledge and innovation, 
                preparing students to become leaders in their chosen fields.
              </p>
              <p>
                We believe in nurturing not just academic excellence, but also character, creativity, and 
                critical thinking. Our world-class faculty and state-of-the-art facilities create an environment 
                where students can thrive and reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

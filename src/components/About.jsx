import React from "react";
import {
  Users,
  BrainCog,
  Globe,
  ShieldCheck,
  Code2,
} from "lucide-react";
import Navbar from "./Navbar";

export default function AboutPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen mt-24 bg-gray-50 px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-indigo-600">Our Platform</span>
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Discover the mission, values, and vision behind what we do. We're committed to delivering intelligent, secure, and seamless experiences through innovation and technology.
        </p>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <BrainCog className="text-purple-600" size={28} />
              <h2 className="text-xl font-semibold text-gray-800">Intelligent Assistance</h2>
            </div>
            <p className="text-gray-600">
              Our system uses AI to offer meaningful suggestions, boost productivity, and help users make better decisions effortlessly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-blue-500" size={28} />
              <h2 className="text-xl font-semibold text-gray-800">Built for Everyone</h2>
            </div>
            <p className="text-gray-600">
              Whether you're a student, professional, or entrepreneur — our platform adapts to your needs and scales with your goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-green-600" size={28} />
              <h2 className="text-xl font-semibold text-gray-800">Privacy First</h2>
            </div>
            <p className="text-gray-600">
              We prioritize data security and user privacy, ensuring a safe and encrypted environment at every step.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-teal-500" size={28} />
              <h2 className="text-xl font-semibold text-gray-800">Global Reach</h2>
            </div>
            <p className="text-gray-600">
              Accessible from anywhere in the world, our tools empower users across continents to innovate and grow.
            </p>
          </div>
        </div>

        {/* Footer/Note */}
        <div className="mt-12 text-center">
          <Code2 className="mx-auto mb-2 text-indigo-500" size={28} />
          <p className="text-gray-500 text-sm">
            Built with ❤️ by a passionate team of developers and thinkers.
          </p>
        </div>
      </div>
    </div>
    </>
   
  );
}

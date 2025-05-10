import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquareText,
} from "lucide-react";
import Navbar from "./Navbar";

export default function ContactPage() {
  return (
    <>
   <Navbar/>
   <div className="min-h-screen bg-gray-50 mt-24 px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Get in <span className="text-indigo-600">Touch</span>
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Have questions, feedback, or a project in mind? We’d love to hear from you!
        </p>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <User size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <Mail size={18} className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <div className="flex items-start border border-gray-300 rounded px-3 py-2">
                <MessageSquareText size={18} className="text-gray-400 mt-1 mr-2" />
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full outline-none text-sm resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              <Send size={16} /> Send Message
            </button>
          </form>

          {/* Contact Info Card */}
          <div className="bg-white p-6 rounded-xl shadow space-y-6 text-gray-700">
            <div className="flex items-center gap-4">
              <Phone className="text-green-500" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-500" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-500">contact@yourdomain.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-red-500" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-gray-500">
                  123 Innovation Street,<br /> Tech City, TX 75001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
}

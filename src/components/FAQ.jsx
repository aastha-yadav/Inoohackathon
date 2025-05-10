import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Navbar from "./Navbar";


const faqs = [

  {
    question: "What is this platform about?",
    answer:
      "This platform provides smart tools and features powered by AI to help users be more productive and informed in their daily tasks.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use end-to-end encryption and industry best practices to ensure your data remains private and secure.",
  },
  {
    question: "Can I use this for free?",
    answer:
      "We offer a free plan with core features. Premium plans are available for users needing more power and customization.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach out via the contact form, or email us directly at support@yourdomain.com. We’re happy to help!",
  },
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <Navbar/>
    <div className="bg-white py-12 px-6 mt-24 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <HelpCircle size={28} className="text-indigo-500" /> Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-8">
          Here are some of the common questions our users ask. Still curious? Feel free to reach out.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-indigo-500" />
                ) : (
                  <ChevronDown size={20} className="text-indigo-500" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  
  );
}

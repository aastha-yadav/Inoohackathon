import React, { useState } from "react";
import {
  CalendarDays,
  MessageSquareText,
  Clock3,
  RefreshCcw,
  Trash,
  Share,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const historyData = [
  {
    date: "Today",
    items: [
      {
        id: 1,
        title: "Resume Feedback from AI",
        time: "10:45 AM",
        content: "Here's a clean format you can follow...",
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        id: 2,
        title: "Top CSS Frameworks for 2025",
        time: "4:30 PM",
        content: "Tailwind CSS continues to dominate...",
      },
    ],
  },
];

export default function HistoryPanel() {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800">
        <Clock3 className="text-indigo-600" /> Activity History
      </h2>

      {historyData.map((section) => (
        <div key={section.date} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-4 flex items-center gap-2">
            <CalendarDays className="text-blue-500" size={20} />
            {section.date}
          </h3>
          <div className="space-y-4">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
              >
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="space-y-1">
                    <p className="flex items-center gap-2 font-medium text-gray-800 text-base md:text-lg">
                      <MessageSquareText className="text-purple-600" size={20} />
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock3 size={14} /> {item.time}
                    </p>
                  </div>
                  {expandedIds.includes(item.id) ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </div>

                {expandedIds.includes(item.id) && (
                  <div className="mt-4 border-t pt-3 text-gray-700 text-sm md:text-base">
                    <p className="mb-4">{item.content}</p>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <button className="flex items-center gap-1 hover:text-indigo-700 transition">
                        <RefreshCcw size={16} /> Reload
                      </button>
                      <button className="flex items-center gap-1 hover:text-red-600 transition">
                        <Trash size={16} /> Delete
                      </button>
                      <button className="flex items-center gap-1 hover:text-green-600 transition">
                        <Share size={16} /> Share
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

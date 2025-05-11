import { useEffect, useState } from "react";
import {
  Menu,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
  Bell,
  Users,
  DollarSign,
  History,
  TrendingUp,
  Search,
  MessageSquareMore,
  CalendarCheck,
  Plus,
  FileText,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { isUser } from "../../store/Action/AuthReducer";
import HistoryPanel from "../History/History";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
const {user} = useSelector((state)=>state.Auth)
const dispatch = useDispatch();
const [selected, setselected] = useState("")
useEffect(() => {
dispatch(isUser())
}, [])

   return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:static z-30 inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-white w-64 shadow-lg`}
      >
        <div className="p-4 border-b">
          <div className="flex flex-col items-center">
            <img
              src="/pic.avif"
              alt="avatar"
              className="w-20 h-20 rounded-full border-4 border-blue-500"
            />
            <h3 className="mt-2 text-lg font-semibold text-gray-800">
             {
              user?.firstname
             }
             </h3>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </div>
        </div>

        <nav className="mt-6 space-y-2 px-4">
          <NavItem icon={<LayoutDashboard />} label="Dashboard" />
          <NavItem icon={<User />} label="Profile" 
           onClick={() => setselected("Profile")}
        active={selected === "Profile"}
          />
          <NavItem icon={<History     onClick={() => setselected("History")}
        active={selected === "History"}/>} label="History" />
          <NavItem icon={<Bell />} label="Notifications" />
          <NavItem icon={<Settings />} label="Settings" />
          <NavItem icon={<LogOut />} label="Logout" danger />
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden z-20"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-white p-4 shadow-md">
          <div className="flex items-center gap-3">
            <button onClick={toggleSidebar} className="md:hidden">
              <Menu />
            </button>
            {/* <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div> */}
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 mr-4" />
              <span className="absolute top-0 right-0 mr-5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </div>
            {/* <img
              src="/pic.avif"
              alt="avatar"
              className="w-9 h-9 rounded-full border-2 border-blue-500"
            /> */}
          </div>
        </header>

        <main className="p-6 overflow-y-auto">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Welcome back, {user?.firstname} 👋
          </h2>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={<Users className="text-blue-500" />}
              label="Users"
              value="1,245"
            />
            <StatCard
              icon={<DollarSign className="text-green-500" />}
              label="Revenue"
              value="$34,000"
            />
            <StatCard
              icon={<TrendingUp className="text-purple-500" />}
              label="Growth"
              value="18%"
            />
            <StatCard
              icon={<MessageSquareMore className="text-yellow-500" />}
              label="Messages"
              value="320"
            />
          </div> */}

          {/* Quick Actions */}
          {
            selected === "History" &&
            <HistoryPanel/>
          }
          <section className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Quick Actions
            </h3>
            <div className="flex gap-6 flex-wrap">
              <ActionButton icon={<Plus />} label="New Task" />
              <ActionButton icon={<CalendarCheck />} label="Schedule" />
              <ActionButton icon={<FileText />} label="Generate Report" />
            </div>
          </section>

          {/* Table */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Recent Activity
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Action</th>
                    <th className="py-2 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Alice", action: "Logged in", date: "2025-05-09" },
                    {
                      name: "Bob",
                      action: "Updated profile",
                      date: "2025-05-08",
                    },
                    {
                      name: "Charlie",
                      action: "Made a purchase",
                      date: "2025-05-07",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">{item.action}</td>
                      <td className="py-2 px-4">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, danger = false, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        danger
          ? "text-red-600 hover:bg-red-100"
          : active
          ? "bg-gray-200 text-blue-600"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

// Stat Card
function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
      <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h4 className="text-xl font-bold text-gray-800">{value}</h4>
      </div>
    </div>
  );
}

// Action Button
function ActionButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition text-sm font-medium">
      {icon}
      {label}
    </button>
  );
}

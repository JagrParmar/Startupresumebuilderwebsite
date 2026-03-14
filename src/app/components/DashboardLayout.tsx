import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { 
  Plus, 
  FileText, 
  LogOut,
  Settings,
  User,
  LayoutDashboard,
  Target,
  Layout,
  FileImage
} from "lucide-react";
import { Button } from "./ui/button";
import CreateResumeModal from "./CreateResumeModal";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [createResumeDialogOpen, setCreateResumeDialogOpen] = useState(false);
  const location = useLocation();

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    plan: "Pro",
  };

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "ATS Score Check", icon: Target, path: "/dashboard/ats-check" },
    { name: "Browse Templates", icon: Layout, path: "/templates" },
    { name: "Create Cover Letter", icon: FileImage, path: "/dashboard/cover-letter" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r shadow-lg flex flex-col sticky top-0 h-screen">
        {/* Sidebar Logo */}
        <div className="p-6 border-b bg-gradient-to-br from-purple-50 to-pink-50">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                ResumeAI
              </span>
              <span className="text-xs text-gray-500">Build. Optimize. Succeed.</span>
            </div>
          </Link>
        </div>

        {/* Create New Resume Button */}
        <div className="p-6">
          <Button 
            onClick={() => setCreateResumeDialogOpen(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all h-12 text-base font-semibold"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Resume
          </Button>
        </div>

        {/* Navigation Section */}
        <div className="px-4 mb-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
            Navigation
          </h3>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold shadow-md"
                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm font-medium"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isActive 
                      ? "bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg" 
                      : "bg-gray-100"
                  }`}>
                    <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-600"}`} />
                  </div>
                  <span className="text-sm">{item.name}</span>
                </button>
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="px-6 py-3">
          <div className="border-t"></div>
        </div>

        {/* User Section */}
        <div className="p-4 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/70 transition-all border border-transparent hover:border-purple-200 hover:shadow-md"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="px-2 py-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                    <span className="text-xs font-semibold text-white">{user.plan}</span>
                  </div>
                </div>
              </div>
              <Settings className="w-4 h-4 text-gray-400" />
            </button>

            {userMenuOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-xl shadow-2xl border py-2 z-50">
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                </div>
                <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-purple-50 flex items-center gap-3 transition-colors">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="font-medium">Profile</span>
                </button>
                <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-purple-50 flex items-center gap-3 transition-colors">
                  <Settings className="w-4 h-4 text-gray-600" />
                  <span className="font-medium">Settings</span>
                </button>
                <div className="border-t my-2"></div>
                <Link to="/">
                  <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-red-50 flex items-center gap-3 text-red-600 transition-colors">
                    <LogOut className="w-4 h-4" />
                    <span className="font-medium">Logout</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {children ? children : <Outlet />}
      </div>

      {/* Create Resume Modal */}
      <CreateResumeModal 
        isOpen={createResumeDialogOpen} 
        onClose={() => setCreateResumeDialogOpen(false)} 
      />
    </div>
  );
}

export default DashboardLayout;
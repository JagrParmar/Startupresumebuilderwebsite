import { useState } from "react";
import { Link } from "react-router";
import { 
  FileText, 
  Download, 
  Eye, 
  Edit, 
  MoreVertical,
  Search,
  Target,
  Layout,
  TrendingUp,
  Calendar,
  Plus,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import DashboardLayout from "../components/DashboardLayout";
import CreateResumeModal from "../components/CreateResumeModal";

interface Resume {
  id: string;
  title: string;
  lastModified: string;
  template: string;
  atsScore: number;
  status: "draft" | "complete";
}

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [createResumeDialogOpen, setCreateResumeDialogOpen] = useState(false);

  // Mock user data - Dashboard for managing resumes
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    plan: "Pro",
  };

  // Mock resume data
  const [resumes] = useState<Resume[]>([
    {
      id: "1",
      title: "Software Engineer Resume",
      lastModified: "2 hours ago",
      template: "Modern Professional",
      atsScore: 92,
      status: "complete",
    },
    {
      id: "2",
      title: "Senior Developer Position",
      lastModified: "1 day ago",
      template: "Tech Savvy",
      atsScore: 88,
      status: "complete",
    },
    {
      id: "3",
      title: "Product Manager Resume",
      lastModified: "3 days ago",
      template: "Executive Classic",
      atsScore: 85,
      status: "draft",
    },
    {
      id: "4",
      title: "Frontend Developer",
      lastModified: "1 week ago",
      template: "Creative Bold",
      atsScore: 78,
      status: "draft",
    },
  ]);

  const stats = [
    { label: "Total Resumes", value: resumes.length, icon: FileText, color: "from-purple-500 to-pink-500" },
    { label: "Avg ATS Score", value: Math.round(resumes.reduce((acc, r) => acc + r.atsScore, 0) / resumes.length), icon: Target, color: "from-blue-500 to-cyan-500" },
    { label: "Templates Used", value: new Set(resumes.map(r => r.template)).size, icon: Layout, color: "from-green-500 to-emerald-500" },
    { label: "This Month", value: resumes.filter(r => r.lastModified.includes("day") || r.lastModified.includes("hour")).length, icon: TrendingUp, color: "from-orange-500 to-red-500" },
  ];

  const filteredResumes = resumes.filter(resume =>
    resume.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50";
    if (score >= 80) return "text-blue-600 bg-blue-50";
    if (score >= 70) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <DashboardLayout>
      {/* Dashboard Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                Welcome back, {user.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage your resumes and track your job search progress
              </p>
            </div>
            <Link to="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 overflow-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resumes Section */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">My Resumes</h2>
            <p className="text-sm text-gray-600 mt-1">Click on any resume to view, edit, or download</p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search resumes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {filteredResumes.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-300">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">No resumes found</p>
            <p className="text-gray-400 text-sm">Create your first resume to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Create New Resume Card */}
            <button
              onClick={() => setCreateResumeDialogOpen(true)}
              className="group bg-white rounded-xl border-2 border-dashed border-gray-300 hover:border-purple-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Preview Area */}
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 aspect-[8.5/11] border-b-2 border-dashed overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform shadow-lg">
                    <Plus className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-600 font-semibold text-sm px-4">Create New Resume</p>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-300"></div>
              </div>

              {/* Card Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-700 mb-2 text-center">
                  Start Fresh
                </h3>
                <p className="text-xs text-gray-500 text-center">
                  Choose a template or upload an existing resume
                </p>
              </div>
            </button>

            {/* Existing Resume Cards */}
            {filteredResumes.map((resume) => (
              <div key={resume.id} className="group">
                <div className="bg-white rounded-xl border-2 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Resume Preview Thumbnail */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-[8.5/11] border-b-2 overflow-hidden">
                    {/* Simulated Resume Document Preview */}
                    <div className="absolute inset-0 p-6 scale-[0.45] origin-top-left" style={{ width: '222%', height: '222%' }}>
                      <div className="w-full h-full bg-white shadow-lg p-8">
                        {/* Header Section */}
                        <div className="mb-4 pb-3 border-b-2 border-gray-300">
                          <div className="h-6 w-48 bg-gray-800 mb-2"></div>
                          <div className="h-3 w-40 bg-gray-600 mb-1"></div>
                          <div className="h-3 w-36 bg-gray-600"></div>
                        </div>
                        {/* Content Sections */}
                        <div className="space-y-4">
                          <div>
                            <div className="h-4 w-24 bg-purple-600 mb-2"></div>
                            <div className="h-2 w-full bg-gray-300 mb-1"></div>
                            <div className="h-2 w-full bg-gray-300 mb-1"></div>
                            <div className="h-2 w-3/4 bg-gray-300"></div>
                          </div>
                          <div>
                            <div className="h-4 w-28 bg-purple-600 mb-2"></div>
                            <div className="h-2 w-full bg-gray-300 mb-1"></div>
                            <div className="h-2 w-full bg-gray-300 mb-1"></div>
                            <div className="h-2 w-5/6 bg-gray-300"></div>
                          </div>
                          <div>
                            <div className="h-4 w-20 bg-purple-600 mb-2"></div>
                            <div className="flex gap-2 mb-1">
                              <div className="h-2 w-16 bg-gray-400"></div>
                              <div className="h-2 w-16 bg-gray-400"></div>
                              <div className="h-2 w-16 bg-gray-400"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300"></div>
                  </div>

                  {/* Resume Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate mb-1">
                          {resume.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>{resume.lastModified}</span>
                        </div>
                      </div>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mb-3 p-2.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                      <span className="text-xs font-medium text-gray-700">ATS Score</span>
                      <span className={`text-sm font-bold px-2.5 py-1 rounded-full ${getScoreColor(resume.atsScore)}`}>
                        {resume.atsScore}%
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={resume.status === "complete" ? "default" : "secondary"} className="text-xs">
                        {resume.status === "complete" ? "Complete" : "Draft"}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {resume.template}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      <Button variant="outline" size="sm" className="text-xs px-2">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs px-2">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs px-2">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Create Resume Modal */}
      <CreateResumeModal
        isOpen={createResumeDialogOpen}
        onClose={() => setCreateResumeDialogOpen(false)}
      />
    </DashboardLayout>
  );
}
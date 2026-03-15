import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Download,
  Plus,
  Trash2,
  Sparkles,
  Eye,
  Save,
  Palette,
  Briefcase,
  GraduationCap,
  Code,
  FolderKanban,
  X,
} from "lucide-react";
import { useNavigate } from "react-router";
import ATSFriendlyTemplate from "../components/templates/ATSFriendlyTemplate";
import JakeRyanTemplate from "../components/templates/JakeRyanTemplate";
import ModernProfessionalTemplate from "../components/templates/ModernProfessionalTemplate";
import ExecutiveClassicTemplate from "../components/templates/ExecutiveClassicTemplate";
import TechSavvyTemplate from "../components/templates/TechSavvyTemplate";
import MinimalistTemplate from "../components/templates/MinimalistTemplate";
import "../../styles/resume-print.css";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
}

const templateNames: { [key: string]: string } = {
  "ats-optimized": "ATS Optimized",
  "jake-ryan": "Jake Ryan",
  "modern-professional": "Modern Professional",
  "tech-savvy": "Tech Savvy",
  "executive-classic": "Executive Classic",
  "minimalist": "Minimalist",
};

export default function Builder() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("edit");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    summary: "",
  });

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState("");

  // Load data from sessionStorage on mount
  useEffect(() => {
    const storedJobTitle = sessionStorage.getItem("jobTitle");
    const storedJobDescription = sessionStorage.getItem("jobDescription");
    const storedFileName = sessionStorage.getItem("uploadedFileName");
    const storedTemplateId = sessionStorage.getItem("selectedTemplateId");
    const creationOption = sessionStorage.getItem("creationOption");

    if (storedJobTitle) setJobTitle(storedJobTitle);
    if (storedJobDescription) setJobDescription(storedJobDescription);
    if (storedFileName) setUploadedFileName(storedFileName);
    if (storedTemplateId) setSelectedTemplateId(storedTemplateId);

    if (creationOption === "upload" && storedFileName) {
      // Mock auto-fill from uploaded resume
      mockParseResume();
    }
  }, []);

  // Mock function to simulate parsing uploaded resume
  const mockParseResume = () => {
    setPersonalInfo({
      fullName: "John Doe",
      email: "john.doe@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe",
      portfolio: "johndoe.dev",
      summary: "Results-driven professional with 5+ years of experience in software development and team leadership.",
    });

    setExperiences([
      {
        id: "1",
        title: "Senior Software Engineer",
        company: "Tech Corp",
        location: "San Francisco, CA",
        startDate: "2021-01",
        endDate: "Present",
        description: "• Led development of microservices architecture serving 1M+ users\n• Reduced system latency by 40% through optimization initiatives\n• Mentored team of 5 junior developers",
      },
    ]);

    setEducation([
      {
        id: "1",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California",
        location: "Berkeley, CA",
        graduationDate: "2019",
      },
    ]);

    setProjects([
      {
        id: "1",
        name: "E-commerce Platform",
        description: "Built a full-stack e-commerce platform with React, Node.js, and PostgreSQL",
        technologies: "React, Node.js, PostgreSQL, AWS",
        link: "github.com/johndoe/ecommerce",
      },
    ]);

    setSkills("JavaScript, TypeScript, Python, Java, React, Node.js, Express, Django, Git, Docker, Jenkins, AWS, PostgreSQL, MongoDB, Redis");
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setExperiences([...experiences, newExp]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      degree: "",
      institution: "",
      location: "",
      graduationDate: "",
    };
    setEducation([...education, newEdu]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const addProject = () => {
    const newProj: Project = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: "",
      link: "",
    };
    setProjects([...projects, newProj]);
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  // Get the template component based on selected template ID
  const renderSelectedTemplate = () => {
    const resumeData = {
      personalInfo,
      experiences,
      education,
      projects,
      skills,
    };

    switch (selectedTemplateId) {
      case "ats-optimized":
        return <ATSFriendlyTemplate data={resumeData} scale={0.75} />;
      case "jake-ryan":
        return <JakeRyanTemplate data={resumeData} scale={0.75} />;
      case "modern-professional":
        return <ModernProfessionalTemplate data={resumeData} scale={0.75} />;
      case "tech-savvy":
        return <TechSavvyTemplate data={resumeData} scale={0.75} />;
      case "executive-classic":
        return <ExecutiveClassicTemplate data={resumeData} scale={0.75} />;
      case "minimalist":
        return <MinimalistTemplate data={resumeData} scale={0.75} />;
      default:
        // Fallback to ATS template if no template selected
        return <ATSFriendlyTemplate data={resumeData} scale={0.75} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl">Resume Builder</h1>
              <p className="text-sm text-gray-600">Last saved: just now</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300">
                <Palette className="w-4 h-4 mr-2" />
                Template
              </Button>
              <Button variant="outline" size="sm" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Template Banner - Show selected template */}
        {selectedTemplateId && (
          <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Selected Template:</p>
                <p className="font-semibold text-blue-700">{templateNames[selectedTemplateId] || selectedTemplateId}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/template-selector')}
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              Change Template
            </Button>
          </div>
        )}

        {/* Job Details Banner - Show if job info exists */}
        {(jobTitle || jobDescription) && (
          <div className="mb-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Tailoring Resume For:
                </h3>
                {jobTitle && (
                  <p className="text-md font-medium text-purple-700">{jobTitle}</p>
                )}
              </div>
              {uploadedFileName && (
                <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-md border border-purple-300">
                  <Briefcase className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-700">Uploaded: {uploadedFileName}</span>
                </div>
              )}
            </div>
            {jobDescription && (
              <details className="group">
                <summary className="cursor-pointer text-sm font-medium text-purple-700 hover:text-purple-800 flex items-center gap-2">
                  View Job Description
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-3 p-4 bg-white rounded-md border border-purple-200">
                  <p className="text-sm text-gray-600 whitespace-pre-wrap">{jobDescription}</p>
                </div>
              </details>
            )}
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="edit">Edit Resume</TabsTrigger>
            <TabsTrigger value="preview">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="edit" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Editor Panel */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl flex items-center justify-between">
                      Personal Information
                      <Button variant="ghost" size="sm">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI Enhance
                      </Button>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-1">Full Name</label>
                        <Input
                          value={personalInfo.fullName}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, fullName: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Email</label>
                        <Input
                          type="email"
                          value={personalInfo.email}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, email: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Phone</label>
                        <Input
                          value={personalInfo.phone}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Location</label>
                        <Input
                          value={personalInfo.location}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, location: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">LinkedIn</label>
                        <Input
                          value={personalInfo.linkedin}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, linkedin: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Portfolio</label>
                        <Input
                          value={personalInfo.portfolio}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, portfolio: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Professional Summary</label>
                      <Textarea
                        rows={4}
                        value={personalInfo.summary}
                        onChange={(e) =>
                          setPersonalInfo({ ...personalInfo, summary: e.target.value })
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Experience */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl">Work Experience</h2>
                      <Button variant="outline" size="sm" onClick={addExperience}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>

                    {experiences.map((exp, index) => (
                      <div key={exp.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Experience {index + 1}</span>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeExperience(exp.id)}
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm mb-1">Job Title</label>
                            <Input
                              value={exp.title}
                              onChange={(e) => {
                                const updated = [...experiences];
                                updated[index].title = e.target.value;
                                setExperiences(updated);
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Company</label>
                            <Input
                              value={exp.company}
                              onChange={(e) => {
                                const updated = [...experiences];
                                updated[index].company = e.target.value;
                                setExperiences(updated);
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Location</label>
                            <Input
                              value={exp.location}
                              onChange={(e) => {
                                const updated = [...experiences];
                                updated[index].location = e.target.value;
                                setExperiences(updated);
                              }}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-sm mb-1">Start Date</label>
                              <Input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => {
                                  const updated = [...experiences];
                                  updated[index].startDate = e.target.value;
                                  setExperiences(updated);
                                }}
                              />
                            </div>
                            <div>
                              <label className="block text-sm mb-1">End Date</label>
                              <Input
                                value={exp.endDate}
                                onChange={(e) => {
                                  const updated = [...experiences];
                                  updated[index].endDate = e.target.value;
                                  setExperiences(updated);
                                }}
                                placeholder="Present"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="block text-sm">Description</label>
                            <Button variant="ghost" size="sm">
                              <Sparkles className="w-3 h-3 mr-1" />
                              AI Suggestions
                            </Button>
                          </div>
                          <Textarea
                            rows={5}
                            value={exp.description}
                            onChange={(e) => {
                              const updated = [...experiences];
                              updated[index].description = e.target.value;
                              setExperiences(updated);
                            }}
                            onFocus={(e) => {
                              // If empty, start with a bullet
                              if (!e.currentTarget.value) {
                                const textarea = e.currentTarget;
                                const updated = [...experiences];
                                updated[index].description = "• ";
                                setExperiences(updated);
                                setTimeout(() => {
                                  if (textarea) {
                                    textarea.selectionStart = 2;
                                    textarea.selectionEnd = 2;
                                  }
                                }, 0);
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                const textarea = e.currentTarget;
                                const updated = [...experiences];
                                const cursorPosition = textarea.selectionStart;
                                const textBefore = updated[index].description.substring(0, cursorPosition);
                                const textAfter = updated[index].description.substring(cursorPosition);
                                updated[index].description = textBefore + "\n• " + textAfter;
                                setExperiences(updated);
                                
                                // Set cursor position after the bullet
                                setTimeout(() => {
                                  if (textarea) {
                                    textarea.selectionStart = cursorPosition + 3;
                                    textarea.selectionEnd = cursorPosition + 3;
                                  }
                                }, 0);
                              }
                            }}
                            placeholder="Press Enter to add new bullet points"
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Education */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl">Education</h2>
                      <Button variant="outline" size="sm" onClick={addEducation}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Education
                      </Button>
                    </div>

                    {education.map((edu, index) => (
                      <div key={edu.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Education {index + 1}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEducation(edu.id)}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <label className="block text-sm mb-1">Degree</label>
                            <Input
                              value={edu.degree}
                              onChange={(e) => {
                                const updated = [...education];
                                updated[index].degree = e.target.value;
                                setEducation(updated);
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Institution</label>
                            <Input
                              value={edu.institution}
                              onChange={(e) => {
                                const updated = [...education];
                                updated[index].institution = e.target.value;
                                setEducation(updated);
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Location</label>
                            <Input
                              value={edu.location}
                              onChange={(e) => {
                                const updated = [...education];
                                updated[index].location = e.target.value;
                                setEducation(updated);
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Graduation Date</label>
                            <Input
                              value={edu.graduationDate}
                              onChange={(e) => {
                                const updated = [...education];
                                updated[index].graduationDate = e.target.value;
                                setEducation(updated);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Projects */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl">Projects</h2>
                      <Button variant="outline" size="sm" onClick={addProject}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Project
                      </Button>
                    </div>

                    {projects.map((proj, index) => (
                      <div key={proj.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Project {index + 1}</span>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeProject(proj.id)}
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm mb-1">Name</label>
                            <Input
                              value={proj.name}
                              onChange={(e) => {
                                const updated = [...projects];
                                updated[index].name = e.target.value;
                                setProjects(updated);
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Description</label>
                            <Textarea
                              rows={3}
                              value={proj.description}
                              onChange={(e) => {
                                const updated = [...projects];
                                updated[index].description = e.target.value;
                                setProjects(updated);
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Technologies</label>
                            <Input
                              value={proj.technologies}
                              onChange={(e) => {
                                const updated = [...projects];
                                updated[index].technologies = e.target.value;
                                setProjects(updated);
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Link</label>
                            <Input
                              value={proj.link}
                              onChange={(e) => {
                                const updated = [...projects];
                                updated[index].link = e.target.value;
                                setProjects(updated);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl">Skills</h2>
                    <div>
                      <label className="block text-sm mb-1">Skills (comma-separated)</label>
                      <Textarea
                        rows={3}
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="JavaScript, TypeScript, React, Node.js, Python, AWS, Docker, Git"
                      />
                      <p className="text-xs text-gray-500 mt-1">Separate each skill with a comma and space</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Preview Panel */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="bg-white shadow-xl">
                    <CardContent className="p-8 space-y-6">
                      <div className="text-center border-b pb-4">
                        <h2 className="text-2xl mb-2">{personalInfo.fullName}</h2>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>{personalInfo.email}</p>
                          <p>{personalInfo.phone}</p>
                          <p>{personalInfo.location}</p>
                          {personalInfo.linkedin && <p>{personalInfo.linkedin}</p>}
                          {personalInfo.portfolio && <p>{personalInfo.portfolio}</p>}
                        </div>
                      </div>

                      {personalInfo.summary && (
                        <div>
                          <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-700">
                            Summary
                          </h3>
                          <p className="text-sm text-gray-600">{personalInfo.summary}</p>
                        </div>
                      )}

                      {experiences.length > 0 && (
                        <div>
                          <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-700">
                            Experience
                          </h3>
                          <div className="space-y-4">
                            {experiences.map((exp) => (
                              <div key={exp.id} className="text-sm">
                                <p className="font-semibold">{exp.title}</p>
                                <p className="text-gray-600">{exp.company}</p>
                                <p className="text-xs text-gray-500 mb-1">
                                  {exp.startDate} - {exp.endDate || "Present"}
                                </p>
                                <p className="text-xs text-gray-600 whitespace-pre-line">
                                  {exp.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {education.length > 0 && (
                        <div>
                          <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-700">
                            Education
                          </h3>
                          <div className="space-y-3">
                            {education.map((edu) => (
                              <div key={edu.id} className="text-sm">
                                <p className="font-semibold">{edu.degree}</p>
                                <p className="text-gray-600">{edu.institution}</p>
                                <p className="text-xs text-gray-500">{edu.graduationDate}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {projects.length > 0 && (
                        <div>
                          <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-700">
                            Projects
                          </h3>
                          <div className="space-y-3">
                            {projects.map((proj) => (
                              <div key={proj.id} className="text-sm">
                                <p className="font-semibold">{proj.name}</p>
                                <p className="text-gray-600">{proj.description}</p>
                                <p className="text-xs text-gray-500">{proj.technologies}</p>
                                <p className="text-xs text-gray-500">{proj.link}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {skills && (
                        <div>
                          <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-700">
                            Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.split(", ").map((skill, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview">
            <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg space-y-4">
              {/* Page break indicator */}
              <div className="relative w-full max-w-[850px]">
                {/* Page 1 indicator line */}
                <div 
                  className="absolute left-0 right-0 border-t-2 border-dashed border-red-400 z-10"
                  style={{ top: `${11 * 0.75}in` }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-400 text-white text-xs px-2 py-0.5 rounded">
                    Page Break - Content below will appear on Page 2
                  </div>
                </div>
                
                {renderSelectedTemplate()}
              </div>
              
              {/* Helper text */}
              <p className="text-sm text-gray-600 max-w-2xl text-center">
                💡 The red dashed line shows where the first page ends. Any content below this line will appear on a second page when you download the PDF.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
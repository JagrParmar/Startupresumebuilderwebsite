import { useState } from "react";
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
} from "lucide-react";

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

export default function Builder() {
  const [activeTab, setActiveTab] = useState("edit");
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "John Doe",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    summary: "Results-driven professional with 5+ years of experience in software development and team leadership.",
  });

  const [experiences, setExperiences] = useState<Experience[]>([
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

  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California",
      location: "Berkeley, CA",
      graduationDate: "2019",
    },
  ]);

  const [skills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
  ]);

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
                            placeholder="• Bullet point 1&#10;• Bullet point 2&#10;• Bullet point 3"
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

                      {skills.length > 0 && (
                        <div>
                          <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-700">
                            Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
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
            <Card className="max-w-4xl mx-auto bg-white shadow-2xl">
              <CardContent className="p-12 space-y-8">
                <div className="text-center border-b pb-6">
                  <h1 className="text-4xl mb-4">{personalInfo.fullName}</h1>
                  <div className="text-gray-600 space-y-1">
                    <p>{personalInfo.email} • {personalInfo.phone}</p>
                    <p>{personalInfo.location}</p>
                  </div>
                </div>

                {personalInfo.summary && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3 uppercase tracking-wide text-gray-700 border-b pb-2">
                      Professional Summary
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{personalInfo.summary}</p>
                  </div>
                )}

                {experiences.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide text-gray-700 border-b pb-2">
                      Work Experience
                    </h2>
                    <div className="space-y-6">
                      {experiences.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <h3 className="text-lg font-semibold">{exp.title}</h3>
                              <p className="text-gray-700">{exp.company} • {exp.location}</p>
                            </div>
                            <p className="text-sm text-gray-500 whitespace-nowrap">
                              {exp.startDate} - {exp.endDate || "Present"}
                            </p>
                          </div>
                          <p className="text-gray-600 whitespace-pre-line mt-2">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {education.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide text-gray-700 border-b pb-2">
                      Education
                    </h2>
                    <div className="space-y-4">
                      {education.map((edu) => (
                        <div key={edu.id}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold">{edu.degree}</h3>
                              <p className="text-gray-700">{edu.institution} • {edu.location}</p>
                            </div>
                            <p className="text-sm text-gray-500">{edu.graduationDate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {skills.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3 uppercase tracking-wide text-gray-700 border-b pb-2">
                      Skills
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
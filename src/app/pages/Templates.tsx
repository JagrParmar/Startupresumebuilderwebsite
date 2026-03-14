import { useState } from "react";
import { Eye, Download, Star, ArrowLeft, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import DashboardLayout from "../components/DashboardLayout";
import ATSFriendlyTemplate from "../components/templates/ATSFriendlyTemplate";
import JakeRyanTemplate from "../components/templates/JakeRyanTemplate";
import ModernProfessionalTemplate from "../components/templates/ModernProfessionalTemplate";
import ExecutiveClassicTemplate from "../components/templates/ExecutiveClassicTemplate";
import TechSavvyTemplate from "../components/templates/TechSavvyTemplate";
import MinimalistTemplate from "../components/templates/MinimalistTemplate";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  atsScore: number;
  popular: boolean;
  recommended?: boolean;
  component: React.ComponentType;
}

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const templates: Template[] = [
    {
      id: "ats-optimized",
      name: "ATS Optimized",
      description: "Our #1 recommended template. Clean, simple format specifically designed for maximum ATS compatibility and parsing accuracy.",
      category: "Professional",
      atsScore: 98,
      popular: true,
      recommended: true,
      component: ATSFriendlyTemplate,
    },
    {
      id: "jake-ryan",
      name: "Jake Ryan",
      description: "Clean, ATS-friendly template perfect for tech professionals. Features clear section headers and optimized formatting.",
      category: "Professional",
      atsScore: 98,
      popular: true,
      component: JakeRyanTemplate,
    },
    {
      id: "modern-professional",
      name: "Modern Professional",
      description: "Contemporary design with subtle accents for creative professionals.",
      category: "Modern",
      atsScore: 92,
      popular: true,
      component: ModernProfessionalTemplate,
    },
    {
      id: "tech-savvy",
      name: "Tech Savvy",
      description: "Bold and modern template designed for developers and engineers.",
      category: "Technical",
      atsScore: 88,
      popular: false,
      component: TechSavvyTemplate,
    },
    {
      id: "executive-classic",
      name: "Executive Classic",
      description: "Traditional format ideal for senior positions and executives.",
      category: "Executive",
      atsScore: 95,
      popular: true,
      component: ExecutiveClassicTemplate,
    },
    {
      id: "minimalist",
      name: "Minimalist",
      description: "Simple and elegant template focusing on content over design.",
      category: "Minimal",
      atsScore: 94,
      popular: false,
      component: MinimalistTemplate,
    },
  ];

  const [filterCategory, setFilterCategory] = useState<string>("All");
  const categories = ["All", "Professional", "Modern", "Technical", "Executive", "Minimal"];

  const filteredTemplates = filterCategory === "All" 
    ? templates 
    : templates.filter(t => t.category === filterCategory);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50";
    if (score >= 80) return "text-blue-600 bg-blue-50";
    if (score >= 70) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  if (selectedTemplate) {
    const TemplateComponent = selectedTemplate.component;
    return (
      <DashboardLayout>
        {/* Preview Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setSelectedTemplate(null)}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Templates
              </Button>

              <div className="flex items-center gap-4">
                <Badge className={`${getScoreColor(selectedTemplate.atsScore)} border-0`}>
                  ATS Score: {selectedTemplate.atsScore}%
                </Badge>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 gap-2">
                  Use This Template
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Template Preview */}
        <main className="flex-1 px-8 py-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{selectedTemplate.name}</h1>
            <p className="text-gray-600">{selectedTemplate.description}</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
            <div className="transform scale-75 origin-top">
              <TemplateComponent />
            </div>
          </div>
        </main>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Page Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              Professional Resume Templates
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Choose from our collection of ATS-optimized templates designed to help you land your dream job
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 overflow-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filterCategory === category ? "default" : "outline"}
              onClick={() => setFilterCategory(category)}
              className={
                filterCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className="border-2 hover:shadow-2xl hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <CardContent className="p-6">
                {/* Template Preview Placeholder */}
                <div className="aspect-[8.5/11] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <Eye className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-700">Click to Preview</p>
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-gray-300">{template.name.charAt(0)}</div>
                </div>

                {/* Template Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{template.name}</h3>
                      <Badge variant="outline" className="text-xs mb-2">
                        {template.category}
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      {template.recommended && (
                        <div className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full">
                          <Award className="w-3 h-3 fill-current" />
                          <span className="text-xs font-semibold">Recommended</span>
                        </div>
                      )}
                      {template.popular && !template.recommended && (
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-xs font-semibold">Popular</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{template.description}</p>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-xs text-gray-600">ATS Score</span>
                    <Badge className={`${getScoreColor(template.atsScore)} border-0`}>
                      {template.atsScore}%
                    </Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      Use Template
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Can't find what you're looking for?</h2>
              <p className="text-gray-600 mb-4 max-w-xl mx-auto">
                Our AI-powered resume builder can help you create a custom resume tailored to your needs
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Create Custom Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </DashboardLayout>
  );
}
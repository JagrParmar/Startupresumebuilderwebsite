import { useState } from "react";
import { Eye, ArrowLeft, Award, Star, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useNavigate } from "react-router";
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

export default function TemplateSelector() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

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

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50";
    if (score >= 80) return "text-blue-600 bg-blue-50";
    if (score >= 70) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const handleSelectTemplate = (template: Template) => {
    // Store selected template ID in sessionStorage
    sessionStorage.setItem("selectedTemplateId", template.id);
    // Navigate to builder
    navigate("/builder");
  };

  // Preview Mode
  if (previewTemplate) {
    const TemplateComponent = previewTemplate.component;
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Preview Header */}
        <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <Button
                variant="ghost"
                onClick={() => setPreviewTemplate(null)}
                className="gap-2 hover:bg-purple-50"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Templates
              </Button>

              <div className="flex items-center gap-4">
                <Badge className={`${getScoreColor(previewTemplate.atsScore)} border-0`}>
                  ATS Score: {previewTemplate.atsScore}%
                </Badge>
                <Button
                  onClick={() => handleSelectTemplate(previewTemplate)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Check className="w-4 h-4" />
                  Use This Template
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Template Preview */}
        <main className="px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{previewTemplate.name}</h1>
              <p className="text-gray-600">{previewTemplate.description}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-200 flex justify-center">
              <div className="transform scale-90 origin-top">
                <TemplateComponent />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Selection Mode
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Page Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-8 py-6 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              Choose Your Resume Template
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Select from our collection of ATS-optimized templates. You can customize it in the next step.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group relative ${
                  selectedTemplate?.id === template.id
                    ? "border-purple-500 shadow-xl ring-4 ring-purple-200"
                    : "border-gray-200 hover:border-purple-400"
                }`}
                onClick={() => setSelectedTemplate(template)}
              >
                {selectedTemplate?.id === template.id && (
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                )}

                <CardContent className="p-6">
                  {/* Template Preview Placeholder */}
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                    <p className="text-sm text-gray-600 line-clamp-3">{template.description}</p>

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
                        className="flex-1 border-purple-300 hover:bg-purple-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewTemplate(template);
                        }}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectTemplate(template);
                        }}
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Button - Only show if template is selected */}
          {selectedTemplate && (
            <div className="mt-12 text-center">
              <div className="inline-block p-6 bg-white rounded-xl shadow-xl border-2 border-purple-200">
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold text-purple-600">{selectedTemplate.name}</span> template selected
                </p>
                <Button
                  onClick={() => handleSelectTemplate(selectedTemplate)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Continue to Resume Builder
                  <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import TemplateModernProfessional from "../components/templates/TemplateModernProfessional";
import TemplateCreative from "../components/templates/TemplateCreative";
import TemplateExecutive from "../components/templates/TemplateExecutive";
import TemplateTech from "../components/templates/TemplateTech";
import { sampleResumeData, techResumeData } from "../data/sampleResumeData";
import { Download, Palette, CheckCircle } from "lucide-react";

export default function TemplateShowcase() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [selectedData, setSelectedData] = useState<"product" | "tech">("product");

  const templates = [
    {
      id: 0,
      name: "Modern Professional",
      description: "Clean and minimal design perfect for any industry",
      component: TemplateModernProfessional,
      color: "from-gray-500 to-gray-700",
      preview: "Clean single-column layout with clear hierarchy",
    },
    {
      id: 1,
      name: "Creative",
      description: "Stand out with color accents and modern styling",
      component: TemplateCreative,
      color: "from-purple-500 to-pink-500",
      preview: "Two-column layout with vibrant sidebar",
    },
    {
      id: 2,
      name: "Executive",
      description: "Traditional and elegant for senior positions",
      component: TemplateExecutive,
      color: "from-gray-700 to-gray-900",
      preview: "Centered, formal layout with emphasis on experience",
    },
    {
      id: 3,
      name: "Tech",
      description: "Modern tech-focused design with accent colors",
      component: TemplateTech,
      color: "from-blue-500 to-cyan-500",
      preview: "Two-column with technical skills sidebar",
    },
  ];

  const CurrentTemplate = templates[selectedTemplate].component;
  const currentData = selectedData === "product" ? sampleResumeData : techResumeData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Professional Resume Templates</h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Choose from our collection of ATS-optimized templates designed by industry experts. 
            All templates are fully customizable and print-ready.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Template Selection */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Select Template</h2>
            <div className="flex gap-2">
              <Button
                variant={selectedData === "product" ? "default" : "outline"}
                onClick={() => setSelectedData("product")}
                className={selectedData === "product" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}
              >
                Product Manager
              </Button>
              <Button
                variant={selectedData === "tech" ? "default" : "outline"}
                onClick={() => setSelectedData("tech")}
                className={selectedData === "tech" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}
              >
                Developer
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  selectedTemplate === template.id
                    ? "border-2 border-purple-500 shadow-2xl shadow-purple-500/20"
                    : "border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl"
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <CardContent className="p-4">
                  <div className={`h-32 bg-gradient-to-br ${template.color} rounded-lg mb-3 flex items-center justify-center relative overflow-hidden`}>
                    <Palette className="w-12 h-12 text-white opacity-30" />
                    {selectedTemplate === template.id && (
                      <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                  <p className="text-xs text-gray-500">{template.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="border-2 border-purple-200">
            <CardContent className="p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">ATS-Optimized</h3>
                <p className="text-sm text-gray-600">Passes all Applicant Tracking Systems</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-purple-200">
            <CardContent className="p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Fully Customizable</h3>
                <p className="text-sm text-gray-600">Change colors, fonts, and layouts easily</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-purple-200">
            <CardContent className="p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Print-Ready</h3>
                <p className="text-sm text-gray-600">Perfectly formatted for PDF export</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl">Preview</h2>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg overflow-auto">
            <div className="inline-block" style={{ transform: 'scale(0.85)', transformOrigin: 'top left' }}>
              <CurrentTemplate data={currentData} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl mb-4">Ready to Build Your Resume?</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Get started with our resume builder and create a professional resume in minutes. 
              All templates include AI-powered suggestions and ATS optimization.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300">
              Start Building Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

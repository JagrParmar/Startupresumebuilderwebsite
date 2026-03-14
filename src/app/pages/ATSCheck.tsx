import { useState } from "react";
import { Upload, FileText, Target, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import DashboardLayout from "../components/DashboardLayout";

export default function ATSCheck() {
  const [uploadedFile, setUploadedFile] = useState(false);

  return (
    <DashboardLayout>
      {/* Page Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              ATS Score Check
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Upload your resume to get an instant ATS compatibility score and optimization tips
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 overflow-auto">
        {!uploadedFile ? (
          <div className="max-w-4xl mx-auto">
            {/* Upload Section */}
            <Card className="border-2 border-dashed border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Upload className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Upload Your Resume</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Upload your resume in PDF or DOCX format to receive a detailed ATS compatibility analysis
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={() => setUploadedFile(true)}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Choose File
                    </Button>
                    <Button variant="outline">
                      Browse Templates Instead
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Supported formats: PDF, DOCX (Max 5MB)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">ATS Score</h3>
                  <p className="text-sm text-gray-600">Get an instant compatibility score from 0-100</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Detailed Analysis</h3>
                  <p className="text-sm text-gray-600">Receive specific suggestions for improvement</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Keyword Matching</h3>
                  <p className="text-sm text-gray-600">See which keywords are missing or underutilized</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Score Card */}
            <Card className="border-2 mb-8">
              <CardHeader>
                <CardTitle className="text-center">Your ATS Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
                    <span className="text-5xl font-bold text-white">85</span>
                  </div>
                  <p className="text-lg text-gray-600">Good Score - Room for Improvement</p>
                </div>

                {/* Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-900">Formatting</span>
                    </div>
                    <p className="text-2xl font-bold text-green-700">95%</p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                      <span className="font-semibold text-yellow-900">Keywords</span>
                    </div>
                    <p className="text-2xl font-bold text-yellow-700">78%</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-900">Structure</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-700">92%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-1">Great Formatting</h4>
                      <p className="text-sm text-green-700">Your resume uses clear section headers and consistent formatting that ATS systems can easily parse.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-1">Add More Keywords</h4>
                      <p className="text-sm text-yellow-700">Consider adding industry-specific keywords like "project management", "stakeholder engagement", and "agile methodologies".</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Remove Graphics</h4>
                      <p className="text-sm text-red-700">The image in your header may not be readable by ATS systems. Consider replacing it with text.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Good Section Structure</h4>
                      <p className="text-sm text-blue-700">Your resume includes all essential sections: Experience, Education, and Skills.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline"
                onClick={() => setUploadedFile(false)}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Another Resume
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Optimize with ResumeAI
              </Button>
            </div>
          </div>
        )}
      </main>
    </DashboardLayout>
  );
}
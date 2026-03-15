import { X, PenTool, Upload, FileText } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

interface CreateResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateResumeModal({ isOpen, onClose }: CreateResumeModalProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<"choice" | "job-details">("choice");
  const [selectedOption, setSelectedOption] = useState<"scratch" | "upload" | null>(null);
  const [tailorToJob, setTailorToJob] = useState<boolean | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleContinueFromChoice = () => {
    // Validation: must have option selected and tailor question answered
    // If upload option selected, must have file uploaded
    if (!selectedOption || tailorToJob === null) return;
    if (selectedOption === "upload" && !uploadedFile) return;
    
    if (tailorToJob) {
      setStep("job-details");
    } else {
      handleClose();
      // Store the creation option in sessionStorage
      sessionStorage.setItem("creationOption", selectedOption);
      if (selectedOption === "upload" && uploadedFile) {
        sessionStorage.setItem("uploadedFileName", uploadedFile.name);
      }
      // Navigate to template selector
      navigate('/template-selector');
    }
  };

  const handleBack = () => {
    setStep("choice");
  };

  const handleContinue = () => {
    // Store job details in sessionStorage or state management
    sessionStorage.setItem("jobTitle", jobTitle);
    sessionStorage.setItem("jobDescription", jobDescription);
    // Store the creation option in sessionStorage
    sessionStorage.setItem("creationOption", selectedOption || "");
    if (selectedOption === "upload" && uploadedFile) {
      sessionStorage.setItem("uploadedFileName", uploadedFile.name);
    }
    
    onClose();
    
    // Navigate to template selector
    navigate('/template-selector');
    
    // Reset state
    setStep("choice");
    setSelectedOption(null);
    setTailorToJob(null);
    setUploadedFile(null);
    setJobTitle("");
    setJobDescription("");
  };

  const handleClose = () => {
    onClose();
    // Reset state when closing
    setStep("choice");
    setSelectedOption(null);
    setTailorToJob(null);
    setUploadedFile(null);
    setJobTitle("");
    setJobDescription("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 animate-in fade-in"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 p-6 animate-in zoom-in-95 fade-in duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {step === "choice" ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Create New Resume
              </h2>
              <p className="text-gray-600 text-sm">
                Choose how you'd like to get started with your resume
              </p>
            </div>

            {/* Options */}
            <div className="grid gap-4">
              {/* Create from Scratch Option */}
              <button
                onClick={() => setSelectedOption("scratch")}
                className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all hover:shadow-lg hover:-translate-y-1 ${
                  selectedOption === "scratch"
                    ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50"
                    : "border-purple-200 hover:border-purple-400"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <PenTool className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      Create from Scratch
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Start with a professional template and build your resume step-by-step with our AI-powered builder
                    </p>
                  </div>
                  {selectedOption === "scratch" && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>

              {/* Upload Existing Resume Option */}
              <button
                onClick={() => setSelectedOption("upload")}
                className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all hover:shadow-lg hover:-translate-y-1 ${
                  selectedOption === "upload"
                    ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50"
                    : "border-purple-200 hover:border-purple-400"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <Upload className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      Upload Existing Resume
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Upload your current resume to analyze, optimize, and improve your ATS compatibility score
                    </p>
                  </div>
                  {selectedOption === "upload" && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* Tailor to Job Yes/No Options */}
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Tailor resume to job description? <span className="text-red-500">*</span>
              </p>
              <p className="text-xs text-gray-600 mb-4">
                Enter job details to optimize your resume for ATS compatibility and keyword matching
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setTailorToJob(true)}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 font-semibold text-sm transition-all ${
                    tailorToJob === true
                      ? "border-purple-600 bg-purple-600 text-white shadow-md"
                      : "border-gray-300 bg-white text-gray-700 hover:border-purple-400"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setTailorToJob(false)}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 font-semibold text-sm transition-all ${
                    tailorToJob === false
                      ? "border-purple-600 bg-purple-600 text-white shadow-md"
                      : "border-gray-300 bg-white text-gray-700 hover:border-purple-400"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* File Upload Section - Only show if Upload option selected */}
            {selectedOption === "upload" && (
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Upload Resume <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex flex-col items-center justify-center w-full px-6 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-all"
                  >
                    {uploadedFile ? (
                      <div className="flex items-center gap-3 text-purple-600">
                        <FileText className="w-8 h-8" />
                        <div className="text-left">
                          <p className="font-semibold text-sm">{uploadedFile.name}</p>
                          <p className="text-xs text-gray-500">
                            {(uploadedFile.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 text-gray-400 mb-3" />
                        <p className="text-sm font-semibold text-gray-700 mb-1">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, or DOCX (Max 10MB)
                        </p>
                      </>
                    )}
                  </label>
                  {uploadedFile && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setUploadedFile(null);
                      }}
                      className="absolute top-2 right-2 p-1.5 bg-red-100 hover:bg-red-200 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-red-600" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Continue Button */}
            <div className="mt-6">
              <button
                onClick={handleContinueFromChoice}
                disabled={
                  !selectedOption || 
                  tailorToJob === null || 
                  (selectedOption === "upload" && !uploadedFile)
                }
                className={`w-full px-6 py-3 rounded-lg font-semibold shadow-lg transition-all ${
                  selectedOption && 
                  tailorToJob !== null && 
                  (selectedOption === "scratch" || uploadedFile)
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-xl"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Job Details Form */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Job Details
              </h2>
              <p className="text-gray-600 text-sm">
                Enter the job details to tailor your resume for the best ATS match
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {/* Job Title Input */}
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g., Senior Software Engineer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Job Description Textarea */}
              <div>
                <label htmlFor="jobDescription" className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description
                </label>
                <textarea
                  id="jobDescription"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job description here to help us optimize your resume for ATS compatibility..."
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Continue
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
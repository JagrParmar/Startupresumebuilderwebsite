import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Sparkles, 
  Edit3, 
  Target, 
  Layout, 
  Palette, 
  Shield, 
  Zap,
  Save,
  Download,
  Brain,
  Award,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import TemplateModernProfessional from "../components/templates/TemplateModernProfessional";
import TemplateCreative from "../components/templates/TemplateCreative";
import TemplateExecutive from "../components/templates/TemplateExecutive";
import TemplateTech from "../components/templates/TemplateTech";
import { sampleResumeData, softwareEngineerData, marketingManagerData, techResumeData } from "../data/sampleResumeData";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const stats = [
    { value: "100K+", label: "Resumes Created" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Templates" },
    { value: "4.9/5", label: "User Rating" },
  ];

  const testimonials = [
    {
      quote: "I landed my dream job within 2 weeks of using ResumeAI. The AI suggestions were spot-on!",
      author: "Sarah Johnson",
      role: "Software Engineer at Google",
    },
    {
      quote: "The ATS scoring feature helped me optimize my resume. I started getting 3x more interview calls.",
      author: "Michael Chen",
      role: "Marketing Manager",
    },
    {
      quote: "Best investment I made in my career. The templates are professional and modern.",
      author: "Emily Rodriguez",
      role: "Product Designer",
    },
  ];

  const templates = [
    { 
      name: "Modern Professional", 
      jobTitle: "Software Engineer",
      style: "Clean and minimal design", 
      color: "from-gray-500 to-gray-700",
      component: TemplateModernProfessional,
      data: softwareEngineerData
    },
    { 
      name: "Creative Bold", 
      jobTitle: "Marketing Manager",
      style: "Stand out with color", 
      color: "from-purple-500 to-pink-500",
      component: TemplateCreative,
      data: marketingManagerData
    },
    { 
      name: "Executive Classic", 
      jobTitle: "Product Manager",
      style: "Traditional and elegant", 
      color: "from-gray-700 to-gray-900",
      component: TemplateExecutive,
      data: sampleResumeData
    },
    { 
      name: "Tech Savvy", 
      jobTitle: "Full Stack Developer",
      style: "Modern tech-focused", 
      color: "from-blue-500 to-cyan-500",
      component: TemplateTech,
      data: techResumeData
    },
  ];

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out our platform",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "1 resume",
        "3 basic templates",
        "PDF export",
        "Basic AI suggestions",
        "Community support",
      ],
      limitations: [
        "Watermark on exports",
        "Limited customization",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Professional",
      description: "For serious job seekers",
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        "Unlimited resumes",
        "50+ premium templates",
        "All export formats (PDF, Word, TXT)",
        "Advanced AI writing assistance",
        "Cover letter builder",
        "Resume score & optimization",
        "ATS compatibility check",
        "Multiple language support",
        "Priority email support",
        "No watermarks",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and organizations",
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "Everything in Professional",
        "Team collaboration tools",
        "Centralized billing",
        "Admin dashboard",
        "Custom branding",
        "API access",
        "LinkedIn integration",
        "Dedicated account manager",
        "Custom templates",
        "Advanced analytics",
        "SSO authentication",
        "24/7 phone support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-pink-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm mb-6 hover:shadow-lg transition-shadow duration-300">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Resume Builder</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                Build Your Dream Resume in Minutes
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create professional, ATS-friendly resumes with our AI-powered platform. 
                Stand out from the competition and land more interviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
                    Start Building Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="#pricing">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 hover:text-purple-700 transform hover:-translate-y-0.5 transition-all duration-300">
                    View Pricing
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1618410325698-018bb3eb2318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZXN1bWUlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzczNDQ5MjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 hidden lg:block hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-semibold">Resume Complete!</p>
                    <p className="text-sm text-gray-600">Ready to download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="border-2 border-white/20 hover:border-white hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group bg-white/10 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-purple-100 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Builder Section */}
      <section id="builder" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300">
                <Edit3 className="w-8 h-8" />
              </div>
              <h2 className="text-4xl lg:text-5xl mb-6">Intuitive Resume Builder</h2>
              <p className="text-lg text-gray-600 mb-6">
                Create stunning resumes with our drag-and-drop interface. No design skills required. 
                Our AI-powered suggestions help you write compelling content that gets noticed.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Real-time Preview:</strong> See your changes instantly as you build
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>AI Writing Assistant:</strong> Get smart suggestions for every section
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Custom Sections:</strong> Add unlimited sections tailored to your experience
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Auto-Save:</strong> Never lose your work with automatic cloud backup
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
                Try Builder Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/30 transition-shadow duration-500">
                <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Save className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-gray-600">Auto-saved 2s ago</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-8 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    
                    <div className="pt-4">
                      <div className="h-6 bg-purple-100 rounded w-1/2 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-full mb-1"></div>
                      <div className="h-3 bg-gray-100 rounded w-full mb-1"></div>
                      <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="h-6 bg-purple-100 rounded w-1/2 mb-2"></div>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <div className="h-3 w-3 bg-purple-500 rounded-full mt-1"></div>
                          <div className="flex-1 h-3 bg-gray-100 rounded"></div>
                        </div>
                        <div className="flex gap-2">
                          <div className="h-3 w-3 bg-purple-500 rounded-full mt-1"></div>
                          <div className="flex-1 h-3 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Suggestion Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-3 hidden lg:block animate-pulse">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">AI Suggestion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATS Scoring Section */}
      <section id="ats-scoring" className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-4xl lg:text-5xl mb-6">Beat the ATS System</h2>
              <p className="text-lg text-gray-600 mb-6">
                90% of companies use Applicant Tracking Systems to filter resumes. Our ATS scoring 
                ensures your resume gets past the bots and into human hands.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Real-time ATS Score:</strong> Get instant feedback on ATS compatibility
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Keyword Optimization:</strong> Match job descriptions automatically
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Format Checking:</strong> Ensure formatting doesn't break ATS parsing
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Actionable Insights:</strong> Get specific tips to improve your score
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
                Check Your Score
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="lg:order-1">
              <Card className="border-2 border-purple-200 shadow-2xl hover:shadow-purple-500/30 transition-shadow duration-500">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      94/100
                    </div>
                    <p className="text-gray-600">ATS Compatibility Score</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700">Keywords</span>
                        <span className="font-semibold text-green-600">Excellent</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-600 w-[95%]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700">Formatting</span>
                        <span className="font-semibold text-green-600">Great</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-yellow-500 w-[88%]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700">Section Headings</span>
                        <span className="font-semibold text-green-600">Perfect</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-600 w-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700">Contact Info</span>
                        <span className="font-semibold text-yellow-600">Good</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 w-[75%]"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <strong className="text-purple-900">Pro Tip:</strong>
                        <p className="text-purple-700">Add more industry-specific keywords to reach 100%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">50+ Professional Templates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of ATS-friendly templates designed by industry experts. 
              Each template is fully customizable to match your personal brand.
            </p>
          </div>

          {/* Template Preview */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {templates.map((template, index) => {
                const TemplateComponent = template.component;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer border-2 border-gray-200 hover:border-purple-500">
                    <div className="p-2 bg-gray-50 border-b">
                      <p className="text-xs font-semibold text-center text-gray-700">{template.jobTitle}</p>
                    </div>
                    <div className="bg-gray-50 p-2">
                      <div className="bg-white shadow-sm" style={{ 
                        height: '500px',
                        overflow: 'hidden',
                        transformOrigin: 'top center'
                      }}>
                        <div style={{ 
                          transform: 'scale(0.42)', 
                          transformOrigin: 'top left',
                          width: '238%',
                          height: '238%'
                        }}>
                          <TemplateComponent data={template.data} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8"  >
            <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-2">Fully Customizable</h3>
                <p className="text-gray-600">Change colors, fonts, spacing, and layouts to match your style</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-2">ATS-Optimized</h3>
                <p className="text-gray-600">Every template is tested to pass Applicant Tracking Systems</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-2">Industry-Specific</h3>
                <p className="text-gray-600">Templates tailored for tech, creative, business, and more</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
              See All Templates
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">Loved by Job Seekers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users have to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that works best for you. All plans include a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white rounded-full p-1 shadow-lg">
              <button
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                  billingCycle === "annual"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setBillingCycle("annual")}
              >
                Annual
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white border-0">
                  Save 17%
                </Badge>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transform transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-purple-500 shadow-2xl shadow-purple-500/20 scale-105"
                    : "border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1 inline" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                    {billingCycle === "annual" && plan.annualPrice > 0 && (
                      <div className="text-sm text-green-600 mt-1">
                        Save ${plan.monthlyPrice * 12 - plan.annualPrice} per year
                      </div>
                    )}
                  </div>

                  <Button
                    className={`w-full mb-6 transform hover:-translate-y-0.5 transition-all duration-300 ${
                      plan.popular 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50" 
                        : "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations?.map((limitation, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-500">
                        <CheckCircle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Ready to Build Your Perfect Resume?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of job seekers who have landed their dream jobs with ResumeAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="#pricing">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-white border-2 border-white hover:bg-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                See Pricing
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
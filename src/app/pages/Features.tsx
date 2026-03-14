import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Sparkles,
  FileText,
  Download,
  PenTool,
  Zap,
  Shield,
  Globe,
  Palette,
  BarChart,
  Users,
  Clock,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Content Generation",
      description:
        "Our advanced AI analyzes your experience and generates compelling, achievement-focused bullet points that highlight your impact. Simply input your role and responsibilities, and watch as our AI crafts professional descriptions that resonate with recruiters.",
      benefits: [
        "Context-aware suggestions based on your industry",
        "Action-oriented language that showcases results",
        "Keyword optimization for ATS systems",
        "Multiple variations to choose from",
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Professional Templates Library",
      description:
        "Choose from over 50 professionally designed templates created by recruitment experts and hiring managers. Each template is ATS-friendly and optimized for different industries and career levels.",
      benefits: [
        "Modern, minimalist designs",
        "Industry-specific templates",
        "One-column and two-column layouts",
        "Customizable colors and fonts",
      ],
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Intuitive Drag-and-Drop Editor",
      description:
        "Build your resume with ease using our intuitive editor. Drag sections to reorder, click to edit, and see real-time previews. No design skills required.",
      benefits: [
        "Real-time preview as you type",
        "Reorder sections with drag-and-drop",
        "Rich text formatting options",
        "Undo/redo functionality",
      ],
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Multi-Format Export",
      description:
        "Download your resume in multiple formats with pixel-perfect quality. Whether you need a PDF for applications or a Word document for further editing, we've got you covered.",
      benefits: [
        "High-quality PDF export",
        "Microsoft Word (.docx) format",
        "Plain text for online applications",
        "HTML format for portfolios",
      ],
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Resume Score & Optimization",
      description:
        "Get instant feedback on your resume with our AI-powered scoring system. Receive actionable suggestions to improve your resume's effectiveness and increase your chances of getting interviews.",
      benefits: [
        "Real-time resume scoring",
        "ATS compatibility check",
        "Keyword optimization suggestions",
        "Content improvement tips",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multiple Language Support",
      description:
        "Create resumes in multiple languages with proper formatting and cultural considerations. Perfect for international job applications.",
      benefits: [
        "Support for 20+ languages",
        "RTL language support",
        "Localized date and number formats",
        "Cultural formatting guidelines",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy & Security",
      description: "Bank-level encryption and GDPR compliance ensure your data stays safe.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cover Letter Builder",
      description: "Create matching cover letters with the same professional design.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Version History",
      description: "Track changes and revert to previous versions anytime.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Job-Specific Tailoring",
      description: "Customize your resume for each job application with one click.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "LinkedIn Import",
      description: "Import your LinkedIn profile to jumpstart your resume.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Custom Sections",
      description: "Add unlimited custom sections to showcase your unique achievements.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 via-pink-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              Powerful Features for Your Success
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to create a standout resume that gets you hired. 
              Our comprehensive suite of tools makes resume building effortless.
            </p>
            <Link to="/builder">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
                Try It Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 hover:shadow-purple-500/30 transition-shadow duration-500">
                    <ImageWithFallback
                      src={
                        index % 2 === 0
                          ? "https://images.unsplash.com/photo-1768659347532-74d3b1efb0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzM0MTk3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          : "https://images.unsplash.com/photo-1642665358815-310df20dc8dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzayUyMGNsZWFufGVufDF8fHx8MTc3MzQ0OTI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      }
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">And So Much More</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover additional features that make ResumeAI the most comprehensive resume builder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl mb-6">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Start building your professional resume today with all features unlocked in our free trial
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/builder">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent text-white border-2 border-white hover:bg-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
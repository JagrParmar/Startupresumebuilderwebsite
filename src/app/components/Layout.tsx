import { Outlet, Link } from "react-router";
import { Button } from "./ui/button";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Resume Builder", href: "#builder" },
    { name: "ATS Scoring", href: "#ats-scoring" },
    { name: "Templates", href: "#templates" },
    { name: "Pricing", href: "#pricing" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ResumeAI
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="transition-all duration-300 relative group text-gray-700 hover:text-purple-600"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 w-0 group-hover:w-full" />
                </a>
              ))}
              <div className="flex items-center gap-3">
                <Link to="/signin">
                  <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 hover:text-purple-700 transform hover:-translate-y-0.5 transition-all duration-300">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-3">
                <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4 group">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg transform transition-all duration-300 group-hover:scale-110">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ResumeAI
                </span>
              </div>
              <p className="text-sm">
                Build professional resumes with AI-powered tools and templates.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#builder" onClick={(e) => scrollToSection(e, '#builder')} className="hover:text-purple-400 transition-colors">Resume Builder</a></li>
                <li><a href="#ats-scoring" onClick={(e) => scrollToSection(e, '#ats-scoring')} className="hover:text-purple-400 transition-colors">ATS Scoring</a></li>
                <li><a href="#templates" onClick={(e) => scrollToSection(e, '#templates')} className="hover:text-purple-400 transition-colors">Templates</a></li>
                <li><a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-purple-400 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2026 ResumeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
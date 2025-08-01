import { SiteHeader } from "@/components/site-header";
import { SponsorBanner } from "@/components/sponsor-banner";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DocumentCard } from "@/components/document-card";
import { TooltipWithShortcut } from "@/components/ui/tooltip";
import {
  File as FileIcon,
  FileText,
  Presentation as LayoutPresentation,
  Mail,
  Github,
  Twitter,
  Linkedin,
  HelpCircle,
  BookOpen,
  Users,
  Sparkles,
  Heart,
  Zap,
  Star,
  ArrowDown,
  Wand2,
  Shield,
  Globe,
  Coffee,
} from "lucide-react";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SponsorBanner />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />

        {/* Professional Document Types Section */}
        <section
          id="document-types"
          className="py-16 sm:py-24 lg:py-32 relative overflow-hidden section-header"
        >
          {/* Animated background elements matching hero */}
          <div className="absolute inset-0 mesh-gradient opacity-20"></div>

          {/* Floating orbs - matching hero section */}
          <div className="floating-orb w-40 h-40 sm:w-64 sm:h-64 bolt-gradient opacity-15 top-20 -left-20 sm:-left-32"></div>
          <div className="floating-orb w-32 h-32 sm:w-48 sm:h-48 bolt-gradient opacity-20 -top-10 right-10 sm:right-20"></div>
          <div className="floating-orb w-48 h-48 sm:w-72 sm:h-72 bolt-gradient opacity-10 bottom-10 left-1/3"></div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='1'%3e%3ccircle cx='30' cy='30' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
            }}
          />

          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            {/* Section transition indicator with tooltip */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <TooltipWithShortcut content="Scroll down to explore document types">
                <div className="glass-effect p-3 rounded-full animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300">
                  <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 bolt-gradient-text" />
                </div>
              </TooltipWithShortcut>
            </div>

            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              {/* Badge matching hero style */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-effect mb-6 sm:mb-8 shimmer">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 animate-pulse" />
                <span className="text-sm sm:text-base font-medium">
                  Document Types
                </span>
                <Wand2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 animate-bounce" />
              </div>

              {/* Modern heading matching hero typography */}
              <h2 className="modern-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6 sm:mb-8">
                Choose Your{" "}
                <span className="bolt-gradient-text relative inline-block">
                  Document Type
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2">
                    <Star
                      className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-yellow-500 animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                </span>
              </h2>

              {/* Modern subtitle matching hero style */}
              <p className="modern-body text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
                Select from our{" "}
                <span className="font-semibold text-yellow-600">
                  AI-powered
                </span>{" "}
                document generators to create{" "}
                <span className="font-semibold text-blue-600">
                  professional content
                </span>{" "}
                in seconds with{" "}
                <span className="font-semibold bolt-gradient-text">
                  magical precision
                </span>
              </p>

              {/* Stats bar with tooltips */}
              <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8">
                <TooltipWithShortcut content="We support 4 different types of professional documents">
                  <div className="glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <span className="bolt-gradient-text font-bold text-sm sm:text-base">
                      4
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm ml-1">
                      Document Types
                    </span>
                  </div>
                </TooltipWithShortcut>
                <TooltipWithShortcut content="All documents are generated using advanced AI technology">
                  <div className="glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <span className="bolt-gradient-text font-bold text-sm sm:text-base">
                      AI
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm ml-1">
                      Powered
                    </span>
                  </div>
                </TooltipWithShortcut>
                <TooltipWithShortcut content="Unlimited customization and infinite creative possibilities">
                  <div className="glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <span className="bolt-gradient-text font-bold text-sm sm:text-base">
                      ∞
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm ml-1">
                      Possibilities
                    </span>
                  </div>
                </TooltipWithShortcut>
              </div>
            </div>

            {/* Enhanced document cards grid with tooltips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
              <div className="animate-bounce-in delay-100 will-change-transform">
                <TooltipWithShortcut content="Create professional resumes optimized for ATS systems">
                  <DocumentCard
                    title="Resume"
                    description="Craft a professional resume for your desired role and company with AI assistance and smart formatting"
                    icon={<FileIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
                    href="/resume"
                  />
                </TooltipWithShortcut>
              </div>
              <div className="animate-bounce-in delay-200 will-change-transform">
                <TooltipWithShortcut content="Generate stunning presentations with automatic layouts and charts">
                  <DocumentCard
                    title="Presentation"
                    description="Generate beautiful slide decks from simple text prompts with smart layouts and stunning visuals"
                    icon={
                      <LayoutPresentation className="h-5 w-5 sm:h-6 sm:w-6" />
                    }
                    href="/presentation"
                  />
                </TooltipWithShortcut>
              </div>
              <div className="animate-bounce-in delay-300 will-change-transform">
                <TooltipWithShortcut content="Build comprehensive CVs for academic and research positions">
                  <DocumentCard
                    title="CV"
                    description="Build a comprehensive curriculum vitae highlighting your achievements and career progression"
                    icon={<FileText className="h-5 w-5 sm:h-6 sm:w-6" />}
                    href="/cv"
                  />
                </TooltipWithShortcut>
              </div>
              <div className="animate-bounce-in delay-400 will-change-transform">
                <TooltipWithShortcut content="Draft cover letters and professional correspondence instantly">
                  <DocumentCard
                    title="Letter"
                    description="Draft professional letters for any purpose in seconds with perfect formatting and tone"
                    icon={<Mail className="h-5 w-5 sm:h-6 sm:w-6" />}
                    href="/letter"
                  />
                </TooltipWithShortcut>
              </div>
            </div>

            {/* Professional call to action with tooltips */}
            <div className="text-center mt-12 sm:mt-16 lg:mt-20">
              <div className="professional-card p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                {/* Background shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-30"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 animate-pulse" />
                    <span className="font-semibold bolt-gradient-text text-lg sm:text-xl">
                      Ready to create magic?
                    </span>
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 animate-pulse" />
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base mb-6">
                    Join thousands of professionals who trust DocMagic for their
                    document creation needs
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <TooltipWithShortcut content="Over 10,000 documents have been successfully created by our users">
                      <div className="professional-card px-4 py-2 rounded-full text-xs sm:text-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <Star className="inline h-3 w-3 sm:h-4 sm:w-4 text-amber-500 mr-1" />
                        <span className="bolt-gradient-text font-semibold">
                          10K+ Documents Created
                        </span>
                      </div>
                    </TooltipWithShortcut>
                    <TooltipWithShortcut content="98% of our users achieve their goals with DocMagic-generated documents">
                      <div className="professional-card px-4 py-2 rounded-full text-xs sm:text-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <Zap className="inline h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-1" />
                        <span className="bolt-gradient-text font-semibold">
                          98% Success Rate
                        </span>
                      </div>
                    </TooltipWithShortcut>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <TestimonialsSection />
        <ScrollToTop /> 
        {/* added ScrollToTop component */}
      </main>

      {/* Professional Footer with tooltips */}
      <footer className="relative overflow-hidden footer-professional">
        {/* Background elements matching hero */}
        <div className="absolute inset-0 mesh-gradient opacity-10"></div>
        <div className="floating-orb w-32 h-32 sm:w-48 sm:h-48 bolt-gradient opacity-10 top-10 -left-16"></div>
        <div className="floating-orb w-24 h-24 sm:w-36 sm:h-36 bolt-gradient opacity-15 bottom-10 -right-12"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='1'%3e%3ccircle cx='30' cy='30' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        />

        <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mx-auto relative z-10">
          {/* Footer content with enhanced styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand Column - Enhanced with tooltips */}
            <div className="space-y-6 text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <div className="relative">
                  <FileText className="h-6 w-6 sm:h-7 sm:w-7 bolt-gradient-text group-hover:scale-110 transition-transform duration-300" />
                  <Sparkles className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 animate-pulse" />
                </div>
                <span className="font-bold text-lg sm:text-xl bolt-gradient-text">
                  DocMagic
                </span>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                Create professional documents in minutes with our AI-powered
                tools. Transform your ideas into polished content with{" "}
                <span className="bolt-gradient-text font-semibold">
                  magical precision
                </span>
                .
              </p>

              <div className="flex justify-center sm:justify-start space-x-4">
                <TooltipWithShortcut content="Follow us on Twitter for updates and tips">
                  <a
                    href="https://x.com/docmagictech"
                    className="text-muted-foreground hover:bolt-gradient-text transition-all duration-300 hover:scale-110 glass-effect p-2 rounded-full"
                  >
                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </TooltipWithShortcut>
                <TooltipWithShortcut content="Connect with us on LinkedIn">
                  <a
                    href="https://www.linkedin.com/company/docmagic/"
                    className="text-muted-foreground hover:bolt-gradient-text transition-all duration-300 hover:scale-110 glass-effect p-2 rounded-full"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </TooltipWithShortcut>
                <TooltipWithShortcut content="View our open source code on GitHub">
                  <a
                    href="https://github.com/Muneerali199/DocMagic"
                    className="text-muted-foreground hover:bolt-gradient-text transition-all duration-300 hover:scale-110 glass-effect p-2 rounded-full"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </TooltipWithShortcut>
              </div>
            </div>

            {/* Product Column - Enhanced with tooltips */}
            <div className="space-y-6 text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Zap className="h-4 w-4 text-blue-500" />
                <h3 className="text-sm sm:text-base font-semibold bolt-gradient-text">
                  PRODUCT
                </h3>
              </div>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <TooltipWithShortcut content={getProductTooltip(link)}>
                      <a
                        href="#"
                        className="text-sm sm:text-base text-muted-foreground hover:bolt-gradient-text transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </TooltipWithShortcut>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column - Enhanced with tooltips */}
            <div className="space-y-6 text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <BookOpen className="h-4 w-4 text-green-500" />
                <h3 className="text-sm sm:text-base font-semibold bolt-gradient-text">
                  RESOURCES
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-center sm:justify-start space-x-2 group/item">
                  <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground group-hover/item:text-blue-500 transition-colors" />
                  <TooltipWithShortcut content="Complete API documentation and guides">
                    <a
                      href="/documentation"
                      className="text-sm sm:text-base text-muted-foreground hover:bolt-gradient-text transition-all duration-300"
                    >
                      Documentation
                    </a>
                  </TooltipWithShortcut>
                </li>
                <li className="flex items-center justify-center sm:justify-start space-x-2 group/item">
                  <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground group-hover/item:text-yellow-500 transition-colors" />
                  <TooltipWithShortcut content="Get help and support from our team">
                    <a
                      href="#"
                      className="text-sm sm:text-base text-muted-foreground hover:bolt-gradient-text transition-all duration-300"
                    >
                      Help Center
                    </a>
                  </TooltipWithShortcut>
                </li>
                <li className="flex items-center justify-center sm:justify-start space-x-2 group/item">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground group-hover/item:text-purple-500 transition-colors" />
                  <TooltipWithShortcut content="Join our community of users and creators">
                    <a
                      href="#"
                      className="text-sm sm:text-base text-muted-foreground hover:bolt-gradient-text transition-all duration-300"
                    >
                      Community
                    </a>
                  </TooltipWithShortcut>
                </li>
              </ul>
            </div>

            {/* Company Column - Enhanced with tooltips */}
            <div className="space-y-6 text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Globe className="h-4 w-4 text-purple-500" />
                <h3 className="text-sm sm:text-base font-semibold bolt-gradient-text">
                  COMPANY
                </h3>
              </div>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <TooltipWithShortcut content={getCompanyTooltip(link.name)}>
                      <a
                        href={link.href}
                        className="text-sm sm:text-base text-muted-foreground hover:bolt-gradient-text transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </TooltipWithShortcut>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional bottom section with tooltips */}
          <div className="border-t border-border pt-8 sm:pt-12">
            {/* Professional Stats section with tooltips */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
              <TooltipWithShortcut content="Your data is encrypted and kept completely secure">
                <div className="professional-card px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs sm:text-sm font-medium professional-text">
                      Secure & Private
                    </span>
                  </div>
                </div>
              </TooltipWithShortcut>
              <TooltipWithShortcut content="Generate documents in seconds with AI-powered speed">
                <div className="professional-card px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span className="text-xs sm:text-sm font-medium professional-text">
                      Lightning Fast
                    </span>
                  </div>
                </div>
              </TooltipWithShortcut>
              <TooltipWithShortcut content="Rated 5 stars by thousands of satisfied users">
                <div className="professional-card px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-500" />
                    <span className="text-xs sm:text-sm font-medium professional-text">
                      5-Star Rated
                    </span>
                  </div>
                </div>
              </TooltipWithShortcut>
            </div>

            {/* Copyright and links with tooltips */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} DocMagic. Made with
                </p>
                <TooltipWithShortcut content="Built with passion for great user experience">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse cursor-pointer" />
                </TooltipWithShortcut>
                <p className="text-xs sm:text-sm text-muted-foreground">and</p>
                <TooltipWithShortcut content="Fueled by lots of coffee and late nights">
                  <Coffee className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600 animate-bounce cursor-pointer" />
                </TooltipWithShortcut>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  for the community
                </p>
              </div>

              <div className="flex space-x-4 sm:space-x-6">
                <TooltipWithShortcut content="Read our privacy policy and data handling practices">
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-muted-foreground hover:bolt-gradient-text transition-all duration-300 hover:scale-105"
                  >
                    Privacy
                  </a>
                </TooltipWithShortcut>
                <TooltipWithShortcut content="View our terms of service and usage guidelines">
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-muted-foreground hover:bolt-gradient-text transition-all duration-300 hover:scale-105"
                  >
                    Terms
                  </a>
                </TooltipWithShortcut>
                <TooltipWithShortcut content="Learn about our cookie policy and preferences">
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-muted-foreground hover:bolt-gradient-text transition-all duration-300 hover:scale-105"
                  >
                    Cookies
                  </a>
                </TooltipWithShortcut>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper functions for tooltip content
function getProductTooltip(productName: string): string {
  const tooltips = {
    Features: "Explore all the powerful features DocMagic offers",
    Pricing: "View our flexible pricing plans and options",
    Templates: "Browse our collection of professional templates",
    Integrations: "Connect DocMagic with your favorite tools",
  };
  return (
    tooltips[productName as keyof typeof tooltips] ||
    `Learn more about ${productName}`
  );
}

function getCompanyTooltip(companyName: string): string {
  const tooltips = {
    "About Us": "Learn about our mission, vision, and team",
    Careers: "Join our team and help shape the future of document creation",
    Blog: "Read our latest insights, tips, and updates",
    Contact: "Get in touch with our team for support or partnerships",
  };
  return (
    tooltips[companyName as keyof typeof tooltips] ||
    `Learn more about ${companyName}`
  );
}

const productLinks = ["Features", "Pricing", "Templates", "Integrations"];
const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

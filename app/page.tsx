"use client"

import { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  Code,
  Smartphone,
  Layout,
  Cloud,
  TrendingUp,
  MessageSquare,
  Rocket,
  FileText,
  CheckCircle,
  ArrowRight,
  Send,
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(6).fill(false))
  const servicesRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const [visibleProcessCards, setVisibleProcessCards] = useState<boolean[]>(new Array(4).fill(false))
  const [visiblePricingCards, setVisiblePricingCards] = useState<boolean[]>(new Array(3).fill(false))
  const [visibleContactCards, setVisibleContactCards] = useState<boolean[]>(new Array(3).fill(false))
  const [visibleFooterSections, setVisibleFooterSections] = useState<boolean[]>(new Array(4).fill(false))
  const processCardRefs = useRef<(HTMLDivElement | null)[]>([])
  const pricingCardRefs = useRef<(HTMLDivElement | null)[]>([])
  const contactCardRefs = useRef<(HTMLDivElement | null)[]>([])
  const footerSectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Service cards
            const serviceIndex = cardRefs.current.findIndex((ref) => ref === entry.target)
            if (serviceIndex !== -1) {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[serviceIndex] = true
                return newVisible
              })
            }

            // Process cards
            const processIndex = processCardRefs.current.findIndex((ref) => ref === entry.target)
            if (processIndex !== -1) {
              setVisibleProcessCards((prev) => {
                const newVisible = [...prev]
                newVisible[processIndex] = true
                return newVisible
              })
            }

            // Pricing cards
            const pricingIndex = pricingCardRefs.current.findIndex((ref) => ref === entry.target)
            if (pricingIndex !== -1) {
              setVisiblePricingCards((prev) => {
                const newVisible = [...prev]
                newVisible[pricingIndex] = true
                return newVisible
              })
            }

            // Contact cards
            const contactIndex = contactCardRefs.current.findIndex((ref) => ref === entry.target)
            if (contactIndex !== -1) {
              setVisibleContactCards((prev) => {
                const newVisible = [...prev]
                newVisible[contactIndex] = true
                return newVisible
              })
            }

            // Footer sections
            const footerIndex = footerSectionRefs.current.findIndex((ref) => ref === entry.target)
            if (footerIndex !== -1) {
              setVisibleFooterSections((prev) => {
                const newVisible = [...prev]
                newVisible[footerIndex] = true
                return newVisible
              })
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all elements
    const allRefs = [
      ...cardRefs.current,
      ...processCardRefs.current,
      ...pricingCardRefs.current,
      ...contactCardRefs.current,
      ...footerSectionRefs.current,
    ]

    allRefs.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      allRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [mounted])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Prevent hydration issues by ensuring component is mounted
  if (!mounted) {
    return (
      <div className="font-sans bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text leading-relaxed w-full overflow-x-hidden min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-primary/20 rounded-full mb-4"></div>
          <div className="text-primary">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="font-sans bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text leading-relaxed w-full overflow-x-hidden">
      {/* Enhanced Header */}
      <header className="bg-light-bg/95 dark:bg-dark-bg/95 sticky top-0 z-50 py-5 border-b border-supporting-1/30 backdrop-blur-md transition-all duration-300 animate-slide-down">
        <div className="container max-w-6xl mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center animate-fade-in-left">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-supporting-1 rounded-lg flex items-center justify-center text-white text-xl shadow-[0_0_15px_rgba(18,165,148,0.4)] hover:scale-110 transition-all duration-300 hover:rotate-12">
              <Code className="w-5 h-5 transition-transform duration-300" />
            </div>
            <h1 className="text-[28px] font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent ml-2.5 hover:scale-105 transition-transform duration-300">
              Vynix Digital
            </h1>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 animate-fade-in-right">
            <ul className="flex list-none gap-8">
              {["Home", "Services", "Process", "Pricing", "Testimonials", "Contact"].map((item, index) => (
                <li key={item} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-light-text dark:text-dark-text no-underline font-medium text-base transition-all duration-300 relative hover:text-primary hover:scale-105 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center text-light-text dark:text-dark-text hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-90"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-md border-t border-supporting-1/30 shadow-lg z-40">
              <nav className="container max-w-6xl mx-auto px-5 py-4">
                <ul className="flex flex-col gap-4">
                  {["Home", "Services", "Process", "Pricing", "Testimonials", "Contact"].map((item, index) => (
                    <li key={item} className="animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-light-text dark:text-dark-text no-underline font-medium text-base py-2 px-4 rounded-md transition-all duration-300 hover:text-primary hover:bg-primary/10 hover:translate-x-2"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section
        className="min-h-[600px] flex items-center relative overflow-hidden bg-light-bg dark:bg-dark-bg before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_20%,_rgba(18,165,148,0.05)_0%,_transparent_50%),radial-gradient(circle_at_90%_80%,_rgba(8,72,67,0.1)_0%,_transparent_40%)] before:z-0"
        id="home"
      >
        <div className="container max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center relative z-10">
          <div className="flex-1 md:pr-10 text-center md:text-left animate-fade-in-left">
            <h2 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold mb-5 leading-tight animate-fade-in-up">
              Next-Gen
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent ml-2 mr-2">
                Digital Solutions
              </span>
              For Your Business
            </h2>
            <p className="text-lg text-light-text-muted dark:text-dark-text-muted mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in-up animate-delay-200">
              We build cutting-edge software solutions that transform businesses and drive innovation. Our team of
              experts delivers custom applications tailored to your unique needs.
            </p>
            <a
              href="#contact"
              className="inline-block py-3.5 px-8 bg-gradient-to-br from-primary to-supporting-1 text-white rounded-md text-base font-medium cursor-pointer no-underline transition-all duration-500 shadow-[0_4px_15px_rgba(18,165,148,0.3)] relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(18,165,148,0.4)] hover:scale-105 animate-fade-in-up animate-delay-400 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Get Started</span>
            </a>
          </div>

          {/* Enhanced Hero Animation */}
          <div className="flex-1 relative h-[300px] md:h-[400px] lg:h-[500px] w-full mt-8 md:mt-0 animate-fade-in-right animate-delay-300 px-4 md:px-0">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Animated circles with enhanced effects */}
              <div
                className="absolute rounded-full border-2 border-primary/30 shadow-[0_0_30px_rgba(18,165,148,0.1)] w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] animate-spin hover-glow"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute rounded-full border-2 border-primary/30 shadow-[0_0_30px_rgba(18,165,148,0.1)] w-[140px] h-[140px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] animate-spin hover-glow"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              ></div>
              <div
                className="absolute rounded-full border-2 border-primary/30 shadow-[0_0_30px_rgba(18,165,148,0.1)] w-[260px] h-[260px] md:w-[330px] md:h-[330px] lg:w-[400px] lg:h-[400px] border-dashed animate-spin hover-glow"
                style={{ animationDuration: "30s" }}
              ></div>

              {/* Enhanced floating dots */}
              {[
                { top: "20%", left: "30%" },
                { top: "70%", left: "20%" },
                { top: "40%", left: "80%" },
                { top: "80%", left: "60%" },
              ].map((pos, index) => (
                <div
                  key={index}
                  className="absolute w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_theme(colors.primary)] animate-pulse-slow hover:scale-150 transition-transform duration-300"
                  style={{ ...pos, animationDelay: `${index * 0.5}s` }}
                ></div>
              ))}

              {/* Enhanced gradient lines */}
              <div
                className="absolute bg-gradient-to-r from-transparent via-primary to-transparent h-px animate-pulse-slow"
                style={{ top: "30%", left: "20%", width: "60%", transform: "rotate(30deg)" }}
              ></div>
              <div
                className="absolute bg-gradient-to-r from-transparent via-primary to-transparent h-px animate-pulse-slow"
                style={{ top: "60%", left: "10%", width: "80%", transform: "rotate(-20deg)", animationDelay: "1s" }}
              ></div>

              {/* Enhanced floating icons */}
              {[
                { icon: <Code className="w-4 h-4 md:w-6 md:h-6" />, pos: { top: "20%", left: "50%" }, delay: "4s" },
                { icon: <FileText className="w-4 h-4 md:w-6 md:h-6" />, pos: { top: "60%", left: "30%" }, delay: "5s" },
                { icon: <Cloud className="w-4 h-4 md:w-6 md:h-6" />, pos: { top: "40%", left: "70%" }, delay: "4.5s" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="absolute w-[35px] h-[35px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] flex items-center justify-center bg-light-card dark:bg-dark-card rounded-xl shadow-lg shadow-black/30 text-primary text-lg md:text-2xl animate-bounce hover-lift hover:rotate-12 transition-all duration-300 group"
                  style={{ ...item.pos, animationDuration: item.delay, animationDelay: `${index * 0.5}s` }}
                >
                  <div className="group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        ref={servicesRef}
        className="py-24 bg-light-bg dark:bg-dark-bg relative animate-fade-in-up"
        id="services"
      >
        <div className="container max-w-6xl mx-auto px-5">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl mb-4 relative inline-block font-bold after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary text-light-text dark:text-dark-text after:animate-scale-in after:animate-delay-300">
              Our Services
            </h2>
            <p className="text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Web Application",
                description:
                  "Custom web applications built with modern frameworks and responsive design principles to deliver exceptional user experiences.",
                filename: "web-application.js",
                animation: "slide-in-from-left",
                delay: 0,
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile App",
                description:
                  "Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices.",
                filename: "mobile-app.swift",
                animation: "slide-in-from-top",
                delay: 200,
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Custom Software Solution",
                description:
                  "Tailored software solutions designed to address your specific business challenges and optimize your operations.",
                filename: "custom-solution.py",
                animation: "slide-in-from-right",
                delay: 400,
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "UI/UX Design",
                description:
                  "User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.",
                filename: "ui-design.sketch",
                animation: "slide-in-from-bottom",
                delay: 600,
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Solutions",
                description:
                  "Scalable and secure cloud infrastructure that enables your business to operate efficiently and adapt to changing demands.",
                filename: "cloud-config.yaml",
                animation: "slide-in-from-bottom",
                delay: 800,
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "SEO Optimization",
                description:
                  "Data-driven SEO strategies that improve your online visibility, drive organic traffic, and boost your search engine rankings.",
                filename: "seo-strategy.json",
                animation: "slide-in-from-right",
                delay: 1000,
              },
            ].map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group bg-light-card dark:bg-dark-card rounded-xl p-8 transition-all duration-500 border border-light-border dark:border-dark-border relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 hover:bg-light-card-hover dark:hover:bg-dark-card-hover hover:border-primary/30 flex flex-col opacity-0 transform ${
                  visibleCards[index]
                    ? `${service.animation} opacity-100`
                    : service.animation === "slide-in-from-left"
                      ? "translate-x-[-100px]"
                      : service.animation === "slide-in-from-right"
                        ? "translate-x-[100px]"
                        : service.animation === "slide-in-from-top"
                          ? "translate-y-[-100px]"
                          : "translate-y-[100px]"
                }`}
                style={{
                  animationDelay: visibleCards[index] ? `${service.delay}ms` : "0ms",
                  transitionDelay: visibleCards[index] ? `${service.delay}ms` : "0ms",
                }}
              >
                {/* Enhanced top bar animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-supporting-1 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-supporting-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Enhanced file header */}
                <div className="flex items-center mb-4 font-mono text-xs text-light-text-muted dark:text-dark-text-muted relative z-10">
                  <div className="w-2.5 h-2.5 rounded-full mr-1.5 bg-[#FF5F56] group-hover:animate-pulse"></div>
                  <div
                    className="w-2.5 h-2.5 rounded-full mr-1.5 bg-[#FFBD2E] group-hover:animate-pulse"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2.5 h-2.5 rounded-full mr-1.5 bg-[#27C93F] group-hover:animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div className="ml-2.5 flex-1 group-hover:text-primary transition-colors duration-300">
                    {service.filename}
                  </div>
                </div>

                {/* Enhanced icon with multiple animations */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary text-3xl relative z-10 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 hover-glow">
                  <div className="group-hover:scale-125 transition-transform duration-300">{service.icon}</div>
                </div>

                <h3 className="text-2xl mb-4 text-light-text dark:text-dark-text font-medium relative z-10 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-light-text-muted dark:text-dark-text-muted mb-5 text-base flex-grow relative z-10 group-hover:text-light-text dark:group-hover:text-dark-text transition-colors duration-300">
                  {service.description}
                </p>

                {/* Enhanced CTA button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-x-2 py-2.5 px-5 bg-primary/10 text-primary rounded-md text-sm font-medium cursor-pointer no-underline transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:-translate-y-1 mt-auto relative z-10 group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section
        className="py-24 bg-gray-50 dark:bg-[#151515] relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_80%_20%,_rgba(18,165,148,0.05)_0%,_transparent_50%),radial-gradient(circle_at_20%_80%,_rgba(8,72,67,0.1)_0%,_transparent_40%)] before:z-0 animate-fade-in-up"
        id="process"
      >
        <div className="container max-w-6xl mx-auto px-5">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl mb-4 relative inline-block font-bold after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary text-light-text dark:text-dark-text after:animate-scale-in after:animate-delay-300">
              Our Development Process
            </h2>
            <p className="text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              We follow a structured approach to deliver high-quality solutions that meet your business objectives.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-y-12 md:gap-y-0">
            {[
              {
                number: 1,
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Discovery",
                description:
                  "We analyze your requirements and understand your business goals to define the project scope.",
                animation: "slide-in-from-left",
                delay: 0,
              },
              {
                number: 2,
                icon: <FileText className="w-8 h-8" />,
                title: "Planning",
                description:
                  "We create a detailed roadmap with timelines, milestones, and resource allocation for your project.",
                animation: "slide-in-from-top",
                delay: 200,
              },
              {
                number: 3,
                icon: <Code className="w-8 h-8" />,
                title: "Development",
                description:
                  "Our expert team builds your solution using agile methodologies and cutting-edge technologies.",
                animation: "slide-in-from-top",
                delay: 400,
              },
              {
                number: 4,
                icon: <Rocket className="w-8 h-8" />,
                title: "Deployment",
                description:
                  "We launch your solution, provide training, and ensure a smooth transition to the new system.",
                animation: "slide-in-from-right",
                delay: 600,
              },
            ].map((step, index) => (
              <div
                key={index}
                ref={(el) => (processCardRefs.current[index] = el)}
                className={`flex-1 text-center px-5 relative group opacity-0 transform ${
                  visibleProcessCards[index]
                    ? `${step.animation} opacity-100`
                    : step.animation === "slide-in-from-left"
                      ? "translate-x-[-100px]"
                      : step.animation === "slide-in-from-right"
                        ? "translate-x-[100px]"
                        : "translate-y-[-100px]"
                } ${index < 3 ? "md:after:content-[''] md:after:absolute md:after:top-10 md:after:right-[-50px] md:after:w-[100px] md:after:h-0.5 md:after:bg-gradient-to-r md:after:from-primary md:after:to-transparent md:after:animate-pulse-slow" : ""}`}
                style={{
                  animationDelay: visibleProcessCards[index] ? `${step.delay}ms` : "0ms",
                  transitionDelay: visibleProcessCards[index] ? `${step.delay}ms` : "0ms",
                  transitionDuration: "800ms",
                }}
              >
                {/* Enhanced number circle */}
                <div className="w-20 h-20 bg-gradient-to-br from-supporting-1 to-supporting-2 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl font-bold text-white relative shadow-[0_5px_15px_rgba(8,72,67,0.3)] group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(8,72,67,0.4)] transition-all duration-500 hover-glow">
                  <div
                    className="absolute w-[90px] h-[90px] border border-dashed border-primary/50 rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ animationDuration: "20s" }}
                  />
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Enhanced icon */}
                <div className="text-3xl text-primary mb-4 group-hover:scale-110 group-hover:text-primary-light transition-all duration-300 flex justify-center">
                  {step.icon}
                </div>

                <h3 className="text-xl mb-2.5 font-medium text-light-text dark:text-dark-text group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-light-text-muted dark:text-dark-text-muted text-base group-hover:text-light-text dark:group-hover:text-dark-text transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-24 bg-light-bg dark:bg-dark-bg animate-fade-in-up" id="pricing">
        <div className="container max-w-6xl mx-auto px-5">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl mb-4 relative inline-block font-bold after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary after:animate-scale-in after:animate-delay-300">
              Pricing Plans
            </h2>
            <p className="text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Choose the perfect plan that fits your business needs and budget.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-start gap-8">
            {[
              {
                name: "Starter",
                price: "$999",
                description: "Perfect for small businesses and startups",
                features: [
                  { name: "Basic website development", included: true },
                  { name: "Mobile responsive design", included: true },
                  { name: "Content management system", included: true },
                  { name: "Basic SEO setup", included: true },
                  { name: "Custom functionality", included: false },
                  { name: "Advanced integrations", included: false },
                ],
                popular: false,
                animation: "slide-in-from-left",
                delay: 0,
              },
              {
                name: "Pro",
                price: "$2,499",
                description: "Ideal for growing businesses",
                features: [
                  { name: "Advanced website/app development", included: true },
                  { name: "Responsive design across all devices", included: true },
                  { name: "Advanced CMS with custom fields", included: true },
                  { name: "Comprehensive SEO package", included: true },
                  { name: "Custom functionality", included: true },
                  { name: "Enterprise-level integrations", included: false },
                ],
                popular: true,
                animation: "slide-in-from-bottom",
                delay: 200,
              },
              {
                name: "Enterprise",
                price: "$5,999",
                description: "For large-scale business needs",
                features: [
                  { name: "Enterprise-level development", included: true },
                  { name: "Multi-platform optimization", included: true },
                  { name: "Advanced CMS with workflow", included: true },
                  { name: "Enterprise SEO strategy", included: true },
                  { name: "Advanced custom functionality", included: true },
                  { name: "Enterprise integrations", included: true },
                ],
                popular: false,
                animation: "slide-in-from-right",
                delay: 400,
              },
            ].map((plan, index) => (
              <div
                key={index}
                ref={(el) => (pricingCardRefs.current[index] = el)}
                className={`group bg-light-card dark:bg-dark-card rounded-xl p-8 flex-1 w-full max-w-sm transition-all duration-500 relative hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/20 opacity-0 transform ${
                  visiblePricingCards[index]
                    ? `${plan.animation} opacity-100`
                    : plan.animation === "slide-in-from-left"
                      ? "translate-x-[-100px]"
                      : plan.animation === "slide-in-from-right"
                        ? "translate-x-[100px]"
                        : "translate-y-[100px]"
                } ${
                  plan.popular
                    ? "border-2 border-primary scale-105 hover:scale-110 mt-3"
                    : "border border-light-border dark:border-dark-border hover:border-primary/30"
                }`}
                style={{
                  animationDelay: visiblePricingCards[index] ? `${plan.delay}ms` : "0ms",
                  transitionDelay: visiblePricingCards[index] ? `${plan.delay}ms` : "0ms",
                  transitionDuration: "800ms",
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-supporting-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary-light text-white py-1.5 px-4 rounded-full text-xs font-bold shadow-lg z-30 whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8 pb-5 border-b border-light-border dark:border-dark-border relative z-10">
                  <h3 className="text-2xl mb-4 font-medium group-hover:text-primary transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <div className="text-5xl font-bold text-light-text dark:text-dark-text mb-1.5 group-hover:scale-105 transition-transform duration-300">
                    {plan.price}
                    <span className="text-base text-light-text-muted dark:text-dark-text-muted font-normal">
                      /project
                    </span>
                  </div>
                  <p className="text-light-text-muted dark:text-dark-text-muted text-sm">{plan.description}</p>
                </div>
                <div className="mb-8 space-y-4 relative z-10">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center animate-fade-in-left"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                    >
                      <div
                        className={`mr-2.5 text-lg transition-all duration-300 ${feature.included ? "text-primary group-hover:scale-110" : "text-light-text-muted dark:text-dark-text-muted"}`}
                      >
                        {feature.included ? <CheckCircle className="w-5 h-5" /> : <X className="w-5 h-5" />}
                      </div>
                      <div
                        className={`text-base transition-colors duration-300 ${feature.included ? "group-hover:text-light-text dark:group-hover:text-dark-text" : "text-light-text-muted dark:text-dark-text-muted"}`}
                      >
                        {feature.name}
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`block w-full py-3.5 text-center rounded-md font-medium transition-all duration-500 hover:-translate-y-1 hover:scale-105 relative z-10 overflow-hidden group/btn ${
                    plan.popular
                      ? "bg-gradient-to-br from-primary to-supporting-1 text-white shadow-[0_4px_15px_rgba(18,165,148,0.3)] hover:shadow-[0_8px_25px_rgba(18,165,148,0.4)]"
                      : "bg-transparent text-primary border border-primary hover:bg-primary/10 hover:border-primary-light"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">Get Started</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section
        className="py-24 bg-gray-50 dark:bg-[#151515] relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_10%,_rgba(18,165,148,0.05)_0%,_transparent_50%),radial-gradient(circle_at_90%_90%,_rgba(8,72,67,0.1)_0%,_transparent_40%)] before:z-0 animate-fade-in-up"
        id="testimonials"
      >
        <div className="container max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl mb-4 relative inline-block font-bold after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary text-light-text dark:text-dark-text after:animate-scale-in after:animate-delay-300">
              Client Testimonials
            </h2>
            <p className="text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              See what our clients have to say about our services and solutions.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Enhanced Footer */}
      <footer
        className="bg-gray-900 dark:bg-[#0A0A0A] pt-20 pb-8 border-t border-supporting-1/30 animate-fade-in-up"
        id="contact"
      >
        <div className="container max-w-6xl mx-auto px-5">
          <div className="flex flex-wrap justify-between mb-12 -mx-4">
            <div
              className={`w-full lg:w-1/3 px-4 mb-10 opacity-0 transform transition-all duration-800 ${
                visibleFooterSections[0] ? "slide-in-from-left opacity-100" : "translate-x-[-100px]"
              }`}
              ref={(el) => (footerSectionRefs.current[0] = el)}
            >
              <h3 className="text-lg mb-5 relative pb-2.5 font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary text-white dark:text-white after:animate-scale-in">
                About Vynix
              </h3>
              <p className="text-gray-300 dark:text-dark-text-muted mb-5 text-sm">
                Vynix Digital is a leading software development agency specializing in creating innovative digital
                solutions that help businesses thrive in the digital age.
              </p>
              <div className="flex gap-x-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-110 hover:rotate-12"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div
              className={`w-1/2 lg:w-1/6 px-4 mb-10 opacity-0 transform transition-all duration-800 ${
                visibleFooterSections[1] ? "slide-in-from-bottom opacity-100" : "translate-y-[100px]"
              }`}
              ref={(el) => (footerSectionRefs.current[1] = el)}
            >
              <h3 className="text-lg mb-5 relative pb-2.5 font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary text-white dark:text-white after:animate-scale-in">
                Quick Links
              </h3>
              <ul className="list-none space-y-3">
                {["Home", "Services", "Process", "Pricing", "Testimonials"].map((link, index) => (
                  <li key={link} className="animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 dark:text-dark-text-muted no-underline text-sm transition-all duration-300 flex items-center hover:text-primary hover:translate-x-2"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 transition-transform duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`w-1/2 lg:w-1/6 px-4 mb-10 opacity-0 transform transition-all duration-800 ${
                visibleFooterSections[2] ? "slide-in-from-bottom opacity-100" : "translate-y-[100px]"
              }`}
              ref={(el) => (footerSectionRefs.current[2] = el)}
            >
              <h3 className="text-lg mb-5 relative pb-2.5 font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary text-white dark:text-white after:animate-scale-in">
                Services
              </h3>
              <ul className="list-none space-y-3">
                {["Web Application", "Mobile App", "Custom Software", "UI/UX Design", "Cloud Solutions"].map(
                  (service, index) => (
                    <li key={service} className="animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                      <a
                        href="#"
                        className="text-gray-300 dark:text-dark-text-muted no-underline text-sm transition-all duration-300 flex items-center hover:text-primary hover:translate-x-2"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 transition-transform duration-300" />
                        {service}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div
              className={`w-full lg:w-1/3 px-4 mb-10 opacity-0 transform transition-all duration-800 ${
                visibleFooterSections[3] ? "slide-in-from-right opacity-100" : "translate-x-[100px]"
              }`}
              ref={(el) => (footerSectionRefs.current[3] = el)}
            >
              <h3 className="text-lg mb-5 relative pb-2.5 font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary text-white dark:text-white after:animate-scale-in">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start animate-fade-in-left animate-delay-100">
                  <div className="text-primary mr-2.5 text-lg mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-gray-300 dark:text-dark-text-muted text-sm">
                    123 Tech Street, Silicon Valley, CA 94043
                  </div>
                </div>
                <div className="flex items-start animate-fade-in-left animate-delay-200">
                  <div className="text-primary mr-2.5 text-lg mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-gray-300 dark:text-dark-text-muted text-sm">+1 (555) 123-4567</div>
                </div>
                <div className="flex items-start animate-fade-in-left animate-delay-300">
                  <div className="text-primary mr-2.5 text-lg mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-gray-300 dark:text-dark-text-muted text-sm">info@vynixdigital.com</div>
                </div>
              </div>
              <div className="mt-5 animate-fade-in-up animate-delay-500">
                <h4 className="font-medium text-base text-white dark:text-white">Subscribe to our newsletter</h4>
                <form className="flex mt-3 group">
                  <input
                    type="email"
                    className="flex-1 py-3 px-4 bg-white/5 border border-gray-600 dark:border-dark-border rounded-l-md text-white dark:text-dark-text text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 focus:bg-white/10"
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="py-3 px-5 bg-primary text-white border-none rounded-r-md cursor-pointer transition-all duration-300 hover:bg-primary-dark hover:scale-105 hover:-translate-y-1 group-hover:shadow-lg"
                  >
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border-color text-gray-300 dark:text-dark-text-muted text-sm animate-fade-in-up animate-delay-600">
            <p className="flex items-center justify-center gap-2">
              © 2023 Vynix Digital. All rights reserved. | Designed with{" "}
              <Heart className="w-4 h-4 text-primary inline-block align-middle fill-current animate-pulse" /> by Vynix
              Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// MessageSquote component for testimonials quote icon
function MessageSquote({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  )
}

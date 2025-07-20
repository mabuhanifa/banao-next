"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Vynix Digital transformed our outdated systems into a streamlined digital solution. Their team was professional, responsive, and delivered beyond our expectations. The new platform has significantly improved our operational efficiency.",
    name: "John Doe",
    title: "CEO, TechCorp",
    initials: "JD",
    rating: 5,
  },
  {
    quote:
      "Working with Vynix Digital was a game-changer for our e-commerce business. Their custom solution increased our conversion rates by 45% and provided valuable insights into customer behavior. Highly recommended!",
    name: "Sarah Johnson",
    title: "Marketing Director, ShopEase",
    initials: "SJ",
    rating: 4.5,
  },
  {
    quote:
      "The mobile app developed by Vynix Digital has revolutionized how we engage with our customers. The team's attention to detail and commitment to quality resulted in a product that exceeded our expectations.",
    name: "Robert Lee",
    title: "Product Manager, FitLife",
    initials: "RL",
    rating: 5,
  },
  {
    quote:
      "Outstanding service and exceptional results! Vynix Digital delivered our project on time and within budget. Their expertise in cloud solutions helped us scale our infrastructure seamlessly.",
    name: "Emily Chen",
    title: "CTO, CloudTech Solutions",
    initials: "EC",
    rating: 5,
  },
  {
    quote:
      "The UI/UX design work was phenomenal. Our user engagement increased by 60% after the redesign. The team truly understands modern design principles and user psychology.",
    name: "Michael Rodriguez",
    title: "Head of Design, CreativeHub",
    initials: "MR",
    rating: 4.5,
  },
  {
    quote:
      "Vynix Digital's SEO optimization strategies boosted our organic traffic by 200% in just 6 months. Their data-driven approach and continuous optimization delivered incredible results.",
    name: "Amanda Foster",
    title: "Marketing Manager, GrowthCo",
    initials: "AF",
    rating: 5,
  },
  {
    quote:
      "The custom software solution they built for us automated 80% of our manual processes. The ROI was evident within the first quarter of implementation. Truly exceptional work!",
    name: "David Kim",
    title: "Operations Director, AutoFlow",
    initials: "DK",
    rating: 5,
  },
  {
    quote:
      "Professional, innovative, and reliable. Vynix Digital helped us modernize our entire digital presence. The results speak for themselves - increased sales and improved customer satisfaction.",
    name: "Lisa Thompson",
    title: "Founder, ModernRetail",
    initials: "LT",
    rating: 4.5,
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    handleResize() // Set initial state
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 150)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getVisibleTestimonials = () => {
    const visible = []
    // Show 1 testimonial on mobile, 2 on tablet, 3 on desktop
    const itemsToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  const goToPrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setIsTransitioning(false)
    }, 150)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className={`grid transition-all duration-500 ease-in-out gap-4 md:gap-6 lg:gap-8 ${
          isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"
        } ${isTransitioning ? "opacity-90 scale-[0.98]" : "opacity-100 scale-100"}`}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={`${currentIndex}-${index}`}
            className="group bg-light-card dark:bg-dark-card rounded-xl p-4 md:p-6 lg:p-8 border border-light-border dark:border-dark-border relative hover-lift hover:border-primary/30 transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-supporting-1/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Quote icon with animation */}
            <div className="absolute top-5 right-5 text-4xl text-primary/10 group-hover:text-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <MessageSquote className="w-8 h-8" />
            </div>

            {/* Quote text with stagger animation */}
            <div className="mb-4 md:mb-5 text-sm md:text-base leading-relaxed text-light-text dark:text-dark-text relative z-10 group-hover:text-light-text dark:group-hover:text-dark-text transition-colors duration-300">
              "{testimonial.quote}"
            </div>

            {/* Author section with enhanced animations */}
            <div className="flex items-center relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-supporting-1 flex items-center justify-center mr-3 md:mr-4 text-white font-bold text-sm md:text-lg group-hover:scale-110 transition-all duration-300 hover-glow">
                {testimonial.initials}
              </div>
              <div className="flex-1">
                <h4 className="text-base md:text-lg mb-1 font-medium text-light-text dark:text-dark-text group-hover:text-primary transition-colors duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-light-text-muted dark:text-dark-text-muted text-xs md:text-sm group-hover:text-light-text dark:group-hover:text-dark-text transition-colors duration-300">
                  {testimonial.title}
                </p>
                <div className="mt-2 md:mt-2.5 text-yellow-400 text-sm md:text-base flex gap-1">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 md:w-4 md:h-4 fill-current transition-all duration-300 hover:scale-125"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current opacity-50 transition-all duration-300" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Buttons */}
      <div className="flex justify-center items-center mt-6 md:mt-8 gap-3 md:gap-4">
        <button
          onClick={goToPrevious}
          className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover-glow relative overflow-hidden"
          aria-label="Previous testimonial"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:-translate-x-0.5 transition-transform duration-300" />
        </button>

        {/* Enhanced Indicators */}
        <div className="flex gap-1.5 md:gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsTransitioning(false)
                }, 150)
              }}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-500 hover:scale-125 ${
                index === currentIndex
                  ? "bg-primary w-6 md:w-8 shadow-lg shadow-primary/30"
                  : "bg-light-text-muted dark:bg-dark-text-muted w-1.5 md:w-2 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover-glow relative overflow-hidden"
          aria-label="Next testimonial"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}

// Enhanced MessageSquote component
function MessageSquote({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  )
}

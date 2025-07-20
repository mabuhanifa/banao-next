"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const [visibleContactCards, setVisibleContactCards] = useState<boolean[]>(new Array(3).fill(false))
  const contactCardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = contactCardRefs.current.findIndex((ref) => ref === entry.target)
            if (cardIndex !== -1) {
              setVisibleContactCards((prev) => {
                const newVisible = [...prev]
                newVisible[cardIndex] = true
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

    contactCardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      contactCardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg animate-fade-in-up" id="contact-form">
      <div className="container max-w-4xl mx-auto px-5">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl mb-4 relative inline-block font-bold after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary text-light-text dark:text-dark-text after:animate-scale-in after:animate-delay-300">
            Get In Touch
          </h2>
          <p className="text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Ready to transform your business with cutting-edge digital solutions? Let's discuss your project and bring
            your vision to life.
          </p>
        </div>

        <div className="bg-light-card dark:bg-dark-card rounded-2xl p-8 md:p-12 border border-light-border dark:border-dark-border shadow-xl hover-lift animate-scale-in animate-delay-300 group relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-supporting-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2 animate-fade-in-left animate-delay-400">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-light-text dark:text-dark-text mb-2 transition-colors duration-300"
                >
                  Full Name *
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-primary">
                    <User className="h-5 w-5 text-light-text-muted dark:text-dark-text-muted group-focus-within:text-primary transition-colors duration-300" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text placeholder-light-text-muted dark:placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/30"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2 animate-fade-in-right animate-delay-400">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light-text dark:text-dark-text mb-2 transition-colors duration-300"
                >
                  Email Address *
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-primary">
                    <Mail className="h-5 w-5 text-light-text-muted dark:text-dark-text-muted group-focus-within:text-primary transition-colors duration-300" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text placeholder-light-text-muted dark:placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/30"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2 animate-fade-in-up animate-delay-500">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-light-text dark:text-dark-text mb-2 transition-colors duration-300"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="block w-full px-3 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/30"
              >
                <option value="">Select a subject</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="custom-software">Custom Software Solution</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="seo-optimization">SEO Optimization</option>
                <option value="consultation">General Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="space-y-2 animate-fade-in-up animate-delay-600">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-light-text dark:text-dark-text mb-2 transition-colors duration-300"
              >
                Message *
              </label>
              <div className="relative group">
                <div className="absolute top-3 left-3 pointer-events-none transition-colors duration-300 group-focus-within:text-primary">
                  <MessageSquare className="h-5 w-5 text-light-text-muted dark:text-dark-text-muted group-focus-within:text-primary transition-colors duration-300" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="block w-full pl-10 pr-3 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text placeholder-light-text-muted dark:placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical hover:border-primary/30"
                  placeholder="Tell us about your project, requirements, timeline, and any specific details..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in-up animate-delay-700">
              <div className="flex-1">
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 animate-fade-in-left">
                    <CheckCircle className="w-5 h-5 animate-scale-in" />
                    <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 animate-fade-in-left">
                    <AlertCircle className="w-5 h-5 animate-scale-in" />
                    <span className="text-sm">Failed to send message. Please try again.</span>
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2 py-3 px-8 bg-gradient-to-br from-primary to-supporting-1 text-white rounded-lg text-base font-medium cursor-pointer transition-all duration-500 shadow-[0_4px_15px_rgba(18,165,148,0.3)] relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(18,165,148,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Enhanced Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <Mail className="w-6 h-6 text-primary" />,
              title: "Email Us",
              description: "Get in touch via email for detailed discussions",
              action: "info@vynixdigital.com",
              href: "mailto:info@vynixdigital.com",
              animation: "slide-in-from-left",
              delay: 0,
            },
            {
              icon: <MessageSquare className="w-6 h-6 text-primary" />,
              title: "Live Chat",
              description: "Chat with our team for quick questions",
              action: "Start Chat",
              href: "#",
              animation: "slide-in-from-bottom",
              delay: 200,
            },
            {
              icon: <User className="w-6 h-6 text-primary" />,
              title: "Schedule Call",
              description: "Book a consultation with our experts",
              action: "Book Now",
              href: "#",
              animation: "slide-in-from-right",
              delay: 400,
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (contactCardRefs.current[index] = el)}
              className={`group text-center p-6 bg-light-card dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border hover-lift hover:border-primary/30 transition-all duration-500 relative overflow-hidden opacity-0 transform ${
                visibleContactCards[index]
                  ? `${item.animation} opacity-100`
                  : item.animation === "slide-in-from-left"
                    ? "translate-x-[-100px]"
                    : item.animation === "slide-in-from-right"
                      ? "translate-x-[100px]"
                      : "translate-y-[100px]"
              }`}
              style={{
                animationDelay: visibleContactCards[index] ? `${item.delay}ms` : "0ms",
                transitionDelay: visibleContactCards[index] ? `${item.delay}ms` : "0ms",
                transitionDuration: "800ms",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-supporting-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 relative z-10">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-light-text dark:text-dark-text group-hover:text-primary transition-colors duration-300 relative z-10">
                {item.title}
              </h3>
              <p className="text-light-text-muted dark:text-dark-text-muted text-sm mb-2 relative z-10">
                {item.description}
              </p>
              <a
                href={item.href}
                className="text-primary hover:text-primary-dark transition-all duration-300 font-medium relative z-10 hover:underline"
              >
                {item.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

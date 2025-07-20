"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Only access browser APIs after component mounts
    if (typeof window !== "undefined") {
      // Check for saved theme preference or default to dark
      const savedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

      if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
        setIsDark(false)
        document.documentElement.classList.remove("dark")
      } else {
        setIsDark(true)
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window === "undefined") return

    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-primary/10 animate-pulse" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="group w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-500 hover:scale-110 hover:rotate-12 relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <div className="relative z-10 transition-all duration-300">
        {isDark ? (
          <Sun className="w-5 h-5 transition-all duration-300 group-hover:rotate-90" />
        ) : (
          <Moon className="w-5 h-5 transition-all duration-300 group-hover:-rotate-12" />
        )}
      </div>
    </button>
  )
}

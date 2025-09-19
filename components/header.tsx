"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleTryNow = () => {
    // Navigate to sign-up page - you can replace this with actual routing
    window.location.href = "/signup"
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "#3b82f6 !important",
                background: "#3b82f6 !important",
              }}
            >
              <span className="font-bold text-sm" style={{ color: "#ffffff !important" }}>
                PS
              </span>
            </div>
            <span className="text-xl font-bold text-gray-900">Podcast Scripter</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
              Login
            </button>
            <button
              onClick={handleTryNow}
              className="px-6 py-2 rounded-xl transition-all duration-200 transform hover:scale-105 cursor-pointer font-medium"
              style={{
                backgroundColor: "#3b82f6 !important",
                background: "#3b82f6 !important",
                color: "#ffffff !important",
                border: "none !important",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb !important"
                e.currentTarget.style.background = "#2563eb !important"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3b82f6 !important"
                e.currentTarget.style.background = "#3b82f6 !important"
              }}
            >
              Try Now
            </button>
            <button
              className="px-6 py-2 rounded-xl transition-all duration-200 transform hover:scale-105 cursor-pointer font-medium"
              style={{
                backgroundColor: "#8b5cf6 !important",
                background: "#8b5cf6 !important",
                color: "#ffffff !important",
                border: "none !important",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#7c3aed !important"
                e.currentTarget.style.background = "#7c3aed !important"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#8b5cf6 !important"
                e.currentTarget.style.background = "#8b5cf6 !important"
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left cursor-pointer"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left cursor-pointer"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left cursor-pointer"
              >
                Contact
              </button>
              <hr className="border-gray-200" />
              <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left cursor-pointer">
                Login
              </button>
              <button
                onClick={handleTryNow}
                className="px-6 py-2 rounded-xl transition-all duration-200 cursor-pointer font-medium"
                style={{
                  backgroundColor: "#3b82f6 !important",
                  background: "#3b82f6 !important",
                  color: "#ffffff !important",
                  border: "none !important",
                }}
              >
                Try Now
              </button>
              <button
                className="px-6 py-2 rounded-xl transition-all duration-200 cursor-pointer font-medium"
                style={{
                  backgroundColor: "#8b5cf6 !important",
                  background: "#8b5cf6 !important",
                  color: "#ffffff !important",
                  border: "none !important",
                }}
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

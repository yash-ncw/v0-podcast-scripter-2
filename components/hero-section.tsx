"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Mic, AudioWaveform as Waveform } from "lucide-react"

export function HeroSection() {
  const [animatedBars, setAnimatedBars] = useState<number[]>([])

  useEffect(() => {
    // Initialize animated waveform bars
    const bars = Array.from({ length: 20 }, () => Math.random() * 100)
    setAnimatedBars(bars)

    // Animate waveform bars
    const interval = setInterval(() => {
      setAnimatedBars((prev) => prev.map(() => Math.random() * 100))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turn Podcasts into{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Insights
                </span>{" "}
                – Instantly.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Automatically transcribe, summarize, and analyze your podcast episodes with AI-powered precision.
                Transform hours of audio into actionable insights in minutes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("features")}
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>99.9% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <span>50+ Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-700"></div>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Illustration */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
              {/* Mock podcast player interface */}
              <div className="space-y-6">
                {/* Player header */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">The Tech Podcast</h3>
                    <p className="text-sm text-gray-500">Episode 42: AI Revolution</p>
                  </div>
                </div>

                {/* Animated waveform */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">2:34</span>
                    <span className="text-sm text-gray-500">45:12</span>
                  </div>

                  <div className="flex items-end justify-center space-x-1 h-20 bg-gray-50 rounded-lg p-4">
                    {animatedBars.map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-full transition-all duration-500 ease-in-out"
                        style={{
                          width: "4px",
                          height: `${Math.max(height * 0.6, 10)}%`,
                          opacity: index < 8 ? 1 : 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* AI Analysis Preview */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <Waveform className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">AI Analysis</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-pulse"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600">
                      Key topics: Artificial Intelligence, Machine Learning, Future of Work
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

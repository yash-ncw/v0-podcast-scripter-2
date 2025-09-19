"use client"

import { FileText, Brain, BarChart3, Zap, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Accurate Transcription",
    description: "Convert audio to text with 99.9% accuracy using advanced AI speech recognition technology.",
    color: "from-blue-500 to-blue-400",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    icon: Brain,
    title: "AI-Powered Summaries",
    description: "Get intelligent highlights and key takeaways automatically extracted from your episodes.",
    color: "from-purple-500 to-purple-400",
    bgColor: "from-purple-50 to-purple-100",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Understand listener trends, topic analysis, and engagement metrics with comprehensive insights.",
    color: "from-teal-500 to-teal-400",
    bgColor: "from-teal-50 to-teal-100",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process hours of audio in minutes with our optimized AI infrastructure and cloud processing.",
    color: "from-yellow-500 to-orange-400",
    bgColor: "from-yellow-50 to-orange-100",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data is protected with enterprise-grade security, GDPR compliance, and encrypted storage.",
    color: "from-green-500 to-green-400",
    bgColor: "from-green-50 to-green-100",
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description: "Support for over 50 languages and dialects with automatic language detection capabilities.",
    color: "from-indigo-500 to-indigo-400",
    bgColor: "from-indigo-50 to-indigo-100",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              transform
            </span>{" "}
            your podcasts
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful AI tools designed to help content creators, researchers, and businesses extract maximum value from
            their audio content.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center text-sm font-medium text-transparent group-hover:text-blue-600 transition-colors duration-300">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-200 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-400"></div>
            </div>
            <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ content creators worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Upload, Cpu, FileText } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Your Podcast",
    description: "Simply drag and drop your audio file or paste a URL. We support MP3, WAV, M4A, and more formats.",
    color: "from-blue-500 to-blue-400",
    bgColor: "bg-blue-50",
  },
  {
    icon: Cpu,
    title: "AI Processes Episode",
    description:
      "Our advanced AI analyzes your audio, extracting speech patterns, topics, and key insights in real-time.",
    color: "from-purple-500 to-purple-400",
    bgColor: "bg-purple-50",
  },
  {
    icon: FileText,
    title: "Get Results Instantly",
    description: "Receive accurate transcripts, intelligent summaries, and detailed analytics within minutes.",
    color: "from-teal-500 to-teal-400",
    bgColor: "bg-teal-50",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How it{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your podcasts into actionable insights in just three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 0

            return (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-32 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2 hidden lg:block"></div>
                )}

                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                        <span className="text-lg font-bold text-gray-600">{index + 1}</span>
                      </div>
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Progress indicator */}
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {steps.map((_, stepIndex) => (
                          <div
                            key={stepIndex}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              stepIndex <= index ? "bg-blue-500" : "bg-gray-300"
                            }`}
                          ></div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        Step {index + 1} of {steps.length}
                      </span>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? "" : "lg:col-start-1"}`}>
                    <div
                      className={`relative ${step.bgColor} rounded-3xl p-8 transform hover:scale-105 transition-all duration-500`}
                    >
                      {/* Mock interface based on step */}
                      {index === 0 && (
                        <div className="space-y-4">
                          <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">
                            <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <p className="text-blue-600 font-medium">Drop your podcast file here</p>
                            <p className="text-sm text-blue-400 mt-2">or click to browse</p>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Supported: MP3, WAV, M4A</span>
                            <span>Max: 500MB</span>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-4">
                          <div className="bg-white rounded-xl p-6">
                            <div className="flex items-center space-x-3 mb-4">
                              <Cpu className="w-6 h-6 text-purple-500 animate-spin" />
                              <span className="font-medium text-gray-700">Processing audio...</span>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Speech Recognition</span>
                                <span className="text-green-600">✓ Complete</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Topic Analysis</span>
                                <span className="text-blue-600">Processing...</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Summary Generation</span>
                                <span className="text-gray-400">Pending</span>
                              </div>
                            </div>
                            <div className="mt-4 bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full w-2/3 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-4">
                          <div className="bg-white rounded-xl p-6">
                            <div className="flex items-center space-x-3 mb-4">
                              <FileText className="w-6 h-6 text-teal-500" />
                              <span className="font-medium text-gray-700">Results Ready!</span>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-teal-50 rounded-lg p-3">
                                <p className="text-sm text-teal-700 font-medium">Transcript (98.5% accuracy)</p>
                                <p className="text-xs text-teal-600 mt-1">45 minutes • 8,234 words</p>
                              </div>
                              <div className="bg-blue-50 rounded-lg p-3">
                                <p className="text-sm text-blue-700 font-medium">AI Summary</p>
                                <p className="text-xs text-blue-600 mt-1">Key insights • Action items</p>
                              </div>
                              <div className="bg-purple-50 rounded-lg p-3">
                                <p className="text-sm text-purple-700 font-medium">Analytics</p>
                                <p className="text-xs text-purple-600 mt-1">Topics • Sentiment • Trends</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Floating elements */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce delay-300"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-bounce delay-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

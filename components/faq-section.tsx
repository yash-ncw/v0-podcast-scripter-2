"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How accurate is the transcription?",
    answer:
      "Our AI-powered transcription achieves up to 99.9% accuracy, depending on audio quality and plan. We use advanced speech recognition technology that continuously improves with machine learning.",
  },
  {
    question: "What audio formats do you support?",
    answer:
      "We support all major audio formats including MP3, WAV, M4A, FLAC, OGG, and more. You can also provide direct URLs from podcast platforms or cloud storage services.",
  },
  {
    question: "How long does it take to process an episode?",
    answer:
      "Processing time depends on the length of your audio file. Typically, a 1-hour episode takes 3-5 minutes to transcribe and analyze. Longer episodes may take proportionally more time.",
  },
  {
    question: "Can I edit the transcriptions?",
    answer:
      "Yes! Our platform includes a built-in editor where you can make corrections, add speaker labels, and format the text. All edits are saved automatically and can be exported in multiple formats.",
  },
  {
    question: "Do you offer API access?",
    answer:
      "API access is available on Pro and Business plans. Our RESTful API allows you to integrate transcription and analysis capabilities directly into your existing workflows and applications.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. We use enterprise-grade encryption, are GDPR compliant, and never share your content with third parties. Your audio files and transcriptions are stored securely and can be deleted at any time.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. You'll continue to have access to your account until the end of your current billing period.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Podcast Scripter. Can't find the answer you're looking for? Contact our
            support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-500 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 transform transition-transform duration-300" />
                  )}
                </div>
              </button>

              {/* Answer with smooth animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact support */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our support team is here to help you get the most out of Podcast Scripter.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

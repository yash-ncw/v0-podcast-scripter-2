"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Podcast Host",
    company: "Tech Talk Weekly",
    avatar: "/professional-woman-with-short-black-hair.jpg",
    content:
      "Podcast Scripter has revolutionized my workflow. What used to take me hours of manual transcription now happens in minutes with incredible accuracy.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Manager",
    company: "Digital Marketing Pro",
    avatar: "/professional-bearded-man.png",
    content:
      "The AI summaries are spot-on and save me so much time. I can quickly identify the key points from any episode and create content around them.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Research Analyst",
    company: "Innovation Labs",
    avatar: "/professional-blonde-woman.png",
    content:
      "The analytics feature helps me understand trends across multiple podcasts. It's like having a research assistant that never sleeps.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "StartupStories",
    avatar: "/professional-asian-man-with-dark-hair.jpg",
    content:
      "As someone who interviews dozens of entrepreneurs, having accurate transcripts and summaries is invaluable for follow-up content.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Education Director",
    company: "Learning Hub",
    avatar: "/professional-woman-with-curly-brown-hair.jpg",
    content:
      "We use Podcast Scripter to make our educational content more accessible. The transcription quality is outstanding.",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    role: "Content Creator",
    company: "Creative Minds",
    avatar: "/professional-person-with-short-brown-hair.jpg",
    content:
      "The multi-language support is fantastic. I can now transcribe interviews in different languages with the same high quality.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">creators</span>{" "}
            worldwide
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of content creators, researchers, and businesses who trust Podcast Scripter
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-purple-100 transition-all duration-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-200 rounded-full group-hover:bg-purple-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "10,000+", label: "Happy Users" },
            { number: "1M+", label: "Hours Transcribed" },
            { number: "99.9%", label: "Accuracy Rate" },
            { number: "50+", label: "Languages" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

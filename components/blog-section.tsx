"use client"

import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI in Podcast Production",
    excerpt:
      "Explore how artificial intelligence is transforming the way we create, edit, and distribute podcast content.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "/futuristic-ai-technology-podcast-studio.jpg",
    category: "Technology",
  },
  {
    title: "10 Tips for Better Podcast Transcription",
    excerpt: "Learn the best practices for getting the most accurate transcriptions from your podcast episodes.",
    author: "Marcus Rodriguez",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    image: "/podcast-microphone-with-transcription-text.jpg",
    category: "Tips & Tricks",
  },
  {
    title: "How Analytics Can Grow Your Podcast",
    excerpt:
      "Discover how podcast analytics and insights can help you understand your audience and improve your content.",
    author: "Emily Watson",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "/podcast-analytics-dashboard-with-charts.jpg",
    category: "Analytics",
  },
  {
    title: "Multi-Language Podcasting Made Easy",
    excerpt: "Breaking language barriers in podcasting with AI-powered transcription and translation tools.",
    author: "David Kim",
    date: "Dec 8, 2024",
    readTime: "4 min read",
    image: "/global-podcast-with-multiple-languages.jpg",
    category: "International",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">blog</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest insights, tips, and trends in podcast technology and content creation
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">{post.readTime}</span>
                </div>

                {/* Read more */}
                <div className="flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors duration-300">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-gray-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

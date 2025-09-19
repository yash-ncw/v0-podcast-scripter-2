"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individual creators and small podcasts",
    features: [
      "5 hours of transcription per month",
      "Basic AI summaries",
      "Standard accuracy (95%)",
      "Email support",
      "Export to TXT, PDF",
      "Basic analytics",
    ],
    buttonText: "Start Free Trial",
    popular: false,
    color: "border-gray-200",
    buttonColor: "bg-gray-900 hover:bg-gray-800",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Ideal for professional podcasters and content teams",
    features: [
      "25 hours of transcription per month",
      "Advanced AI summaries & insights",
      "Premium accuracy (99.5%)",
      "Priority support",
      "Export to multiple formats",
      "Advanced analytics & trends",
      "Custom vocabulary",
      "API access",
    ],
    buttonText: "Start Free Trial",
    popular: true,
    color: "border-gradient",
    buttonColor: "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
  },
  {
    name: "Business",
    price: "$99",
    period: "/month",
    description: "For enterprises and large content organizations",
    features: [
      "Unlimited transcription",
      "Enterprise AI features",
      "Maximum accuracy (99.9%)",
      "24/7 dedicated support",
      "All export formats",
      "Enterprise analytics",
      "Custom integrations",
      "Team collaboration",
      "White-label options",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
    popular: false,
    color: "border-gray-200",
    buttonColor: "bg-gray-900 hover:bg-gray-800",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-2 border-transparent bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl scale-105"
                  : "border border-gray-200 hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full text-base font-bold flex items-center space-x-2 shadow-lg">
                    <Star className="w-5 h-5 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Gradient border for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl p-[2px]">
                  <div className="bg-white rounded-3xl h-full w-full"></div>
                </div>
              )}

              <div className="relative z-10">
                <div className={`${plan.popular ? "pt-4" : ""}`}>
                  {/* Plan header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-xl text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.popular ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-green-500"
                          }`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${plan.buttonColor} text-white`}
                  >
                    {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                    {plan.buttonText}
                  </Button>

                  {/* Additional info */}
                  <p className="text-center text-sm text-gray-500 mt-4">
                    {plan.name === "Business" ? "Custom pricing available" : "No credit card required"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We offer enterprise solutions with custom integrations, dedicated support, and flexible pricing for large
              organizations.
            </p>
            <Button
              variant="outline"
              className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent cursor-pointer"
            >
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

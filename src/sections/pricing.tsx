"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Zap, Star, Crown, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI marketing.",
    price: "$29",
    period: "/month",
    popular: false,
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    features: [
      "Up to 1,000 contacts",
      "Basic AI insights",
      "Email campaigns",
      "Social media integration",
      "Basic analytics",
      "Email support"
    ]
  },
  {
    name: "Professional",
    description: "Advanced features for growing businesses and marketing teams.",
    price: "$99",
    period: "/month",
    popular: true,
    icon: Star,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
    features: [
      "Up to 10,000 contacts",
      "Advanced AI insights",
      "Multi-channel campaigns",
      "Advanced segmentation",
      "Real-time analytics",
      "Priority support",
      "Custom integrations",
      "A/B testing"
    ]
  },
  {
    name: "Enterprise",
    description: "Complete solution for large organizations with custom needs.",
    price: "$299",
    period: "/month",
    popular: false,
    icon: Crown,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    features: [
      "Unlimited contacts",
      "Custom AI models",
      "White-label solution",
      "Advanced automation",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom reporting",
      "API access",
      "SSO integration",
      "Advanced security"
    ]
  }
]

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Swiss-inspired background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
        
        {/* Swiss grid dots */}
        <div className="absolute top-32 left-20 w-1 h-1 bg-blue-500 rounded-full opacity-30"></div>
        <div className="absolute top-48 right-32 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-25"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-green-500 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="swiss-grid">
          {/* Header section */}
          <div className="col-span-12 text-center space-swiss-xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Simple Pricing • No Hidden Fees</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Choose Your
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Start free and scale as you grow. All plans include our core AI features 
              with Swiss precision and Apple's reliability.
            </motion.p>
          </div>

          {/* Pricing cards */}
          <div className="col-span-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    >
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                        Most Popular
                      </div>
                    </motion.div>
                  )}

                  {/* Swiss-style pricing card */}
                  <div className={`relative h-full p-8 rounded-3xl border-2 ${plan.borderColor} ${plan.bgColor} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.popular ? 'scale-105 shadow-xl' : 'hover:scale-105'}`}>
                    {/* Swiss-inspired header */}
                    <div className="text-center mb-8">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <plan.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {plan.name}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Swiss-style pricing */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500 ml-2">{plan.period}</span>
                      </div>
                      <p className="text-sm text-gray-500">Billed monthly</p>
                    </div>

                    {/* Swiss-style features list */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Swiss-style CTA button */}
                    <Button 
                      className={`w-full py-4 text-lg font-medium rounded-2xl transition-all duration-300 group-hover:scale-105 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
                          : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {plan.popular ? 'Start Free Trial' : 'Get Started'}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    {/* Apple-style hover overlay */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className="col-span-12 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Swiss-style trust indicators */}
              <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-white border-2 border-gray-200 shadow-lg">
                <div className="space-swiss-xl">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Need a Custom Solution?
                  </h3>
                  
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Contact our sales team for custom pricing and enterprise features 
                    tailored to your specific needs.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                    >
                      Contact Sales
                    </Button>
                    
                    <Button 
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Schedule Demo
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>

                  {/* Swiss-style trust badges */}
                  <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">30-day free trial</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">No setup fees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
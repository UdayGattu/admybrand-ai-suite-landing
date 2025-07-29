"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Target, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms analyze your data to provide actionable marketing insights.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach your ideal audience with Swiss precision using our advanced segmentation tools.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor campaign performance with Apple-style clarity and Swiss accuracy.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: Users,
    title: "Customer Intelligence",
    description: "Understand your customers deeply with behavioral analysis and predictive modeling.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline your marketing processes with intelligent automation that works 24/7.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with Swiss reliability and Apple's privacy standards.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Scale your campaigns globally with multi-language support and regional optimization.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuously improve your campaigns with AI-driven optimization algorithms.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description: "Built-in compliance with GDPR, CCPA, and other global privacy regulations.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  }
]

export function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Swiss-inspired background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-gray-200 to-transparent"></div>
        
        {/* Swiss grid dots */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-blue-500 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-green-500 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-purple-500 rounded-full opacity-20"></div>
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
              className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Swiss Precision • Apple Elegance</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Powerful Features
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Built for Scale
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Every feature is designed with Swiss precision and Apple&apos;s human-centered approach 
              to deliver exceptional user experience and business results.
            </motion.p>
          </div>

          {/* Features grid */}
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Swiss-style feature card */}
                  <div className={`relative p-8 rounded-2xl border-2 ${feature.borderColor} ${feature.bgColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                    {/* Swiss-inspired icon container */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Swiss typography */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Swiss-style indicator */}
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                      <span className="text-sm font-medium text-gray-700">Learn More</span>
                    </div>

                    {/* Apple-style hover effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
              {/* Swiss-style CTA card */}
              <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
                <div className="space-swiss-xl">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Ready to Transform Your Marketing?
                  </h3>
                  
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Join thousands of brands using ADmyBRAND AI Suite to scale their marketing 
                    with Swiss precision and Apple elegance.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                    >
                      View All Features
                    </Button>
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
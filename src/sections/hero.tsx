"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, Target, TrendingUp, BarChart3, Users, Globe } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Swiss-inspired geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Swiss grid dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-500 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-purple-500 rounded-full opacity-20"></div>
        
        {/* Swiss-inspired lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
        
        {/* Apple-style floating elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-100 rounded-2xl opacity-60"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-green-100 rounded-xl opacity-50"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="swiss-grid">
          {/* Main content - spans 8 columns on desktop */}
          <div className="col-span-12 lg:col-span-8 space-swiss-xl">
            {/* Swiss-style badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">AI-Powered Marketing Suite</span>
            </motion.div>

            {/* Swiss typography hierarchy */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Brand with AI
              </span>
            </motion.h1>

            {/* Swiss-style subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed"
            >
              ADmyBRAND AI Suite combines Swiss precision with Apple&apos;s elegance to deliver 
              intelligent marketing solutions that scale your business.
            </motion.p>

            {/* Swiss-inspired stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Brands Transformed</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">3.2x</div>
                  <div className="text-sm text-gray-600">ROI Increase</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">AI Support</div>
                </div>
              </div>
            </motion.div>

            {/* Swiss-style CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-12"
            >
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
                className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 group"
                onClick={() => {
                  // Demo video functionality
                  alert("Demo video would play here! 🎥")
                }}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Visual element - spans 4 columns on desktop */}
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Apple-style floating card with demo content */}
              <div className="relative w-80 h-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Swiss-inspired header */}
                <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                
                {/* Demo dashboard content */}
                <div className="p-6 space-y-4">
                  {/* Header stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Live Analytics</span>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="h-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">2.4k</div>
                      <div className="text-xs text-gray-500">Visitors</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">89%</div>
                      <div className="text-xs text-gray-500">Conversion</div>
                    </div>
                  </div>
                  
                  {/* AI Status */}
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">AI Active</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-green-100 rounded-2xl border border-green-200 flex items-center justify-center"
              >
                <Users className="w-6 h-6 text-green-600" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-100 rounded-3xl border border-blue-200 flex items-center justify-center"
              >
                <Globe className="w-8 h-8 text-blue-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Swiss-inspired scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-px h-8 bg-gray-400"></div>
          <div className="text-xs text-gray-500 font-medium tracking-wider">SCROLL</div>
        </motion.div>
      </motion.div>
    </section>
  )
} 
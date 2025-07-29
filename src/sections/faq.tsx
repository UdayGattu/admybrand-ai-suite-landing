"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer: "ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your customer data, identify patterns, and automatically optimize your marketing campaigns. It learns from your audience's behavior to deliver personalized content and improve conversion rates over time."
  },
  {
    question: "What makes your AI different from other marketing tools?",
    answer: "Our AI is specifically trained on marketing data and continuously learns from billions of customer interactions. Unlike generic tools, we focus exclusively on marketing optimization, providing deeper insights and more accurate predictions for your specific industry and audience."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most customers see measurable improvements within the first 30 days. Our AI starts learning from day one and typically shows significant ROI improvements within 2-3 months. The more data you provide, the faster and more accurate the results become."
  },
  {
    question: "Is my data secure with ADmyBRAND AI Suite?",
    answer: "Absolutely. We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and strict data privacy controls. Your data never leaves our secure infrastructure and we never share or sell your information to third parties."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Yes! We offer seamless integrations with popular platforms like Google Analytics, Facebook Ads, Mailchimp, HubSpot, and many more. Our API also allows custom integrations with any tool that supports webhooks or REST APIs."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 live chat, email support, video tutorials, and dedicated account managers for enterprise customers. Our team of marketing and AI experts is always ready to help you succeed."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 30-day free trial with full access to all features. No credit card required to start. You can explore the platform, run campaigns, and see real results before deciding to upgrade to a paid plan."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time with no penalties or hidden fees. Your account will remain active until the end of your current billing period, and you can reactivate anytime."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can't find the answer you're looking for? 
            Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 ml-12">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-colors">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-accent/20 rounded-xl font-medium hover:bg-accent/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
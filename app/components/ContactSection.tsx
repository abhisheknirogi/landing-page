"use client"

import { useState } from "react"
import { Mail, Send, CheckCircle2 } from "lucide-react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-white to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="space-y-6 lg:pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
              <Mail className="h-4 w-4" />
              <span>Get in Touch</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Let's Talk About Your Productivity Goals
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Have questions about our platform or need help getting started? Our team is here to support you every step of the way.
              </p>
            </div>

            {/* Additional info */}
            <div className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quick Response Time</h3>
                  <p className="text-sm text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expert Support</h3>
                  <p className="text-sm text-gray-600">Connect with our experienced team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="p-8 border-2 shadow-lg relative overflow-hidden bg-white rounded">
            {/* Success overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-base font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                  className="w-full border p-3 rounded text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-base font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  disabled={isSubmitting}
                  className="w-full border p-3 rounded text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-base font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full border p-3 rounded text-base resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-blue-600 text-white rounded text-base font-semibold disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-center text-gray-500">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

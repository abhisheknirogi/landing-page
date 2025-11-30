"use client"

const testimonials = [
  {
    name: "Marcus",
    quote:
      "I used to juggle five different apps to stay organized. Now I have everything in one place and actually finish what I start!",
  },
  {
    name: "Elena",
    quote:
      "This app helped me reclaim 10 hours a week by eliminating the chaos of scattered to-do lists. It's been a total game-changer for my workflow.",
  },
  {
    name: "Jordan",
    quote:
      "Simple, clean, and exactly what I needed. My team and I can finally collaborate without endless email threads!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by productive teams
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how teams are transforming their workflow and getting more done every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <blockquote className="text-gray-800 text-lg mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified User</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

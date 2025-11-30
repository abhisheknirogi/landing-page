import { CheckCircle, Zap, Users } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance that keeps you moving forward without delays.",
    },
    {
      icon: CheckCircle,
      title: "Simple & Intuitive",
      description: "Navigate effortlessly with our user-friendly interface designed for efficiency.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team in real-time, no matter where they are.",
    },
  ]

  return (
    <section className="w-full bg-slate-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-800">{feature.title}</h3>
                <p className="leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

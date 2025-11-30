import Hero from "./components/Hero"          // default export
import FeaturesSection from "./components/features-section"  // default export
import { TestimonialsSection } from "./components/testimonials-section"
import ContactSection from "./components/ContactSection"    // default export
import Footer from "./components/Footer"      // default export

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

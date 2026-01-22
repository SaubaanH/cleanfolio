import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectGrid } from "@/components/project-grid"
import { Interests } from "@/components/interests"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#FAFAFA] relative">
      <CursorGlow />
      <Navigation />
      <Hero />
      <About />
      <ExperienceTimeline />
      <ProjectGrid />
      <Interests />
      <Contact />
      <Footer />
    </main>
  )
}

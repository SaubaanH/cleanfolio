"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import { Github, ExternalLink, X } from "lucide-react"

const projects = [
  {
    id: "cluo",
    title: "Cluo",
    tagline: "Remote desktop platform for any device",
    description:
      "Subscription-based remote desktop platform delivering full PC environments to Firesticks and low-end devices. Built with WebRTC for real-time streaming and AWS infrastructure for scalability.",
    highlights: [
      "Real-time streaming with < 50ms latency",
      "Handles 1000+ concurrent sessions",
    ],
    tech: ["React", "Node.js", "AWS", "WebRTC"],
    github: null,
    live: "https://www.mazzzing.com/cluoapp",
  },
  {
    id: "snipr",
    title: "Snipr",
    tagline: "AI-powered grocery savings app",
    description:
      "Mobile app using Core ML image recognition to identify grocery products and automatically match them with better deals from local flyer data.",
    highlights: [
      "95% product recognition accuracy",
      "Saved users $200+ monthly on average",
    ],
    tech: ["Swift", "CoreML", "Firebase", "Python"],
    github: null,
    live: "https://sniprdeals.com/",
  },
  {
    id: "launchit",
    title: "Launchit",
    tagline: "AI platform that builds your startup",
    description:
      "AI platform that transforms a simple idea into the foundation of a startup. Creates websites, product docs, marketing emails, and social campaigns powered by a virtual team of AI agents collaborating as your startup team.",
    highlights: [
      "Multi-agent orchestration with Cohere",
      "Full startup toolkit in 36 hours",
    ],
    tech: ["Next.js", "TypeScript", "Cohere", "Tailwind"],
    github: null,
    live: "https://devpost.com/software/launch-it",
  },
  {
    id: "ock",
    title: "Ock",
    tagline: "AI teaching assistant that sees your screen",
    description:
      "Always-available, course-trained TA that watches your screen while you study and answers questions using your exact notes and course materials. Voice-first with natural conversational explanations.",
    highlights: [
      "Screen-aware context understanding",
      "Voice-first multimodal experience",
    ],
    tech: ["Gemini", "ElevenLabs", "Wispr Flow", "RAG"],
    github: null,
    live: "https://devpost.com/software/ock",
  },
  {
    id: "homiehub",
    title: "HomieHub",
    tagline: "Personality-matched video chat",
    description:
      "Video chat platform that matches users based on personality compatibility scores derived from a quick onboarding quiz.",
    highlights: [
      "Smart matching algorithm",
      "10K+ matches facilitated",
    ],
    tech: ["React Native", "Firebase", "Agora", "Node.js"],
    github: null,
    live: "https://devpost.com/software/homie-hub",
  },
  {
    id: "fitability",
    title: "Fitability",
    tagline: "Accessible fitness planning with AI",
    description:
      "Accessibility-first workout calendar that generates personalized routines based on user goals, equipment availability, and physical limitations.",
    highlights: [
      "WCAG 2.1 AA compliant",
      "Voice-controlled workout logging",
    ],
    tech: ["React", "Node.js", "OpenAI", "MongoDB"],
    github: null,
    live: "https://devpost.com/software/fitability",
  },
]

type Project = (typeof projects)[0]

function ProjectCard({
  project,
  index,
  isSelected,
  onSelect,
}: {
  project: Project
  index: number
  isSelected: boolean
  onSelect: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1,
      }}
      onClick={onSelect}
      style={{ 
        opacity: isSelected ? 0 : 1,
        pointerEvents: isSelected ? "none" : "auto"
      }}
      className="relative h-[160px] cursor-pointer p-5 bg-[#111] border border-[#1a1a1a] rounded-xl flex flex-col justify-between hover:bg-[#151515] hover:border-[#262626] transition-colors duration-200"
    >
      <div>
        <h3 className="text-base font-medium text-[#fafafa] mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-[#666] leading-relaxed line-clamp-2">
          {project.tagline}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-[11px] text-[#555] bg-[#0d0d0d] px-2 py-0.5 rounded border border-[#1a1a1a]"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="text-[11px] text-[#444] px-1.5 py-0.5">
            +{project.tech.length - 3}
          </span>
        )}
      </div>
    </motion.div>
  )
}

function ExpandedCard({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsFlipped(true), 50)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [])

  const handleClose = useCallback(() => {
    setIsFlipped(false)
    setTimeout(onClose, 400)
  }, [onClose])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-[#050505]/95 backdrop-blur-sm z-40"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <motion.div
          layoutId={`card-${project.id}`}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="pointer-events-auto"
          style={{ perspective: 1200 }}
        >
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* Front - matches the card exactly */}
            <div
              className="w-[340px] h-[160px] p-5 bg-[#111] border border-[#1a1a1a] rounded-xl flex flex-col justify-between"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div>
                <h3 className="text-base font-medium text-[#fafafa] mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-[#555] bg-[#0d0d0d] px-2 py-0.5 rounded border border-[#1a1a1a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Back - detailed info, fixed size no scroll */}
            <div
              className="absolute top-1/2 left-1/2 w-[360px] p-6 bg-[#111] border border-[#1a1a1a] rounded-xl"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg) translate(50%, -50%)",
              }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 text-[#444] hover:text-[#fafafa] transition-colors rounded-md hover:bg-[#1a1a1a]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-lg font-medium text-[#fafafa] mb-0.5 pr-8">
                {project.title}
              </h3>
              <p className="text-xs text-[#555] mb-4">{project.tagline}</p>

              <p className="text-sm text-[#888] leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-[10px] text-[#444] uppercase tracking-wider mb-2 font-medium">
                  Highlights
                </p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-[#777] flex items-start gap-2">
                      <span className="w-1 h-1 bg-[#444] rounded-full mt-1.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-[10px] text-[#444] uppercase tracking-wider mb-2 font-medium">
                  Tech
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] text-[#666] bg-[#0d0d0d] px-2 py-0.5 rounded border border-[#1a1a1a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-[#1a1a1a]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs text-[#555] hover:text-[#fafafa] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs text-[#555] hover:text-[#fafafa] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export function ProjectGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedProject = projects.find((p) => p.id === selectedId) || null

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-sm font-medium text-[#555] uppercase tracking-widest mb-12"
        >
          Selected Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isSelected={selectedId === project.id}
              onSelect={() => setSelectedId(project.id)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ExpandedCard
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

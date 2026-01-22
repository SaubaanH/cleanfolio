"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "TextNow",
    period: "May 2025 – Present",
    bullets: [
      "Pioneered an in-app Games Hub using Kotlin Jetpack Compose; served HTML5 games via signed Amazon S3 URLs → 6M+ users, $500K annual revenue, +45% session length",
      "Engineered a Trust & Safety device-fingerprint system combining MediaDRM hardware IDs with a Golang rate limiter → 15K malicious accounts/day removed, 28% fraud reduction",
      "Built a Loyalty Points Wallet with offline caching → +33% time-in-app, +24% primary-user acquisition",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Mazzzing Inc.",
    period: "Jan 2025 – Apr 2025",
    bullets: [
      "Optimized iOS performance using Swift, SwiftUI, and Objective-C",
      "Designed secure MySQL authentication using OpenSSL, SHA-256, and TLS 1.2",
      "Implemented async MySQL queries and WebSockets → 40% faster backend performance",
    ],
  },
  {
    title: "Software Developer",
    company: "PinkByte",
    period: "Sept 2024 – Dec 2024",
    bullets: [
      "Built a cross-platform RDP application (iOS, macOS, Android) serving 5,000+ users",
      "Implemented latency-aware server routing → 25% latency reduction",
      "Automated server scaling with Python → 40% cost reduction",
    ],
  },
  {
    title: "iOS Developer",
    company: "Apple Inc × OurWaveHub",
    period: "Jun 2022 – Aug 2022",
    bullets: [
      "Built an iOS education platform using Swift, SwiftUI, and Objective-C",
      "Integrated Core Data and CloudKit with offline support",
      "Led Agile sprints → 50% faster development cycles",
    ],
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.15,
      }}
      className="relative"
    >
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01, y: -2 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="group p-6 bg-card/50 border border-border/50 rounded-xl cursor-pointer backdrop-blur-sm hover:border-border hover:bg-card/70 transition-colors duration-300"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-lg font-medium text-foreground">
                {experience.title}
              </h3>
            </div>
            <p className="text-muted-foreground">
              {experience.company}
              <span className="text-muted-foreground/40 mx-2">·</span>
              <span className="text-sm text-muted-foreground/70">
                {experience.period}
              </span>
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{
            height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
            opacity: { duration: 0.3, delay: isExpanded ? 0.1 : 0 },
          }}
          className="overflow-hidden"
        >
          <ul className="space-y-3 pt-5 border-t border-border/30 mt-5">
            {experience.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{
                  duration: 0.3,
                  delay: isExpanded ? 0.15 + i * 0.05 : 0,
                  ease: "easeOut",
                }}
                className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-muted-foreground/30 before:rounded-full"
              >
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function ExperienceTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

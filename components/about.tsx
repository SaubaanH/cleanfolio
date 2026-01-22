"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const techStack = [
  "Kotlin",
  "Swift",
  "React",
  "Node.js",
  ".NET",
  "Firebase",
  "AWS",
  "MySQL",
  "Golang",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Mission
          </h2>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            I build things that matter.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            My goal is to create technology that genuinely improves people's lives. Whether it's democratizing phone service at TextNow because communication is a right not a privilege, giving less fortunate people access to full computer environments through Cluo, or empowering founders to bring their ideas to life with Launchit - every project I take on starts with the same question: how can this make a real difference?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {techStack.map((tech, i) => (
            <TechPill key={tech} tech={tech} index={i} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TechPill({
  tech,
  index,
  isInView,
}: {
  tech: string
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.8, y: 10 }
      }
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3 + index * 0.05,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
          className="px-3 py-1.5 text-sm text-[#666] bg-[#111] rounded-lg border border-[#1a1a1a] cursor-default transition-colors duration-300 hover:border-[#262626] hover:text-[#fafafa] hover:bg-[#151515]"
    >
      {tech}
    </motion.span>
  )
}

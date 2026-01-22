"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const interests = [
  "Consumer product engineering",
  "System design",
  "Fitness & accessibility tech",
]

export function Interests() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8"
        >
          Interests
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          {interests.map((interest) => (
            <span
              key={interest}
              className="text-sm text-muted-foreground"
            >
              {interest}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Github, Linkedin, ArrowUpRight, FileText } from "lucide-react"

const contactLinks = [
  {
    label: "Email",
    href: "mailto:saubaanhasan@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/SaubaanH",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saubaan/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
    external: true,
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="text-2xl md:text-3xl text-foreground mb-10"
        >
          {"Let's build something meaningful."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          {contactLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 px-4 py-2.5 rounded-xl border border-border/50 hover:border-border bg-card/30 hover:bg-card/50"
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
              {item.external && (
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

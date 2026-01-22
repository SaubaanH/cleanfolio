"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/20 pointer-events-none" />
      
      <div className="max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="inline-block"
            >
              Saubaan
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="inline-block"
            >
              Hasan
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-foreground mb-2">
            Full Stack Software Engineer
          </h2>
          <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Mobile · Backend · Infrastructure
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          Builder obsessed with creating consumer products that make real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 px-6 py-5"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:bg-accent transition-all duration-300 bg-transparent px-6 py-5"
            >
              <a href="#contact">Contact</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          className="flex items-center gap-5"
        >
          <motion.a
            href="https://github.com/SaubaanH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 p-2 rounded-lg hover:bg-secondary/50"
            aria-label="GitHub"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/saubaan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 p-2 rounded-lg hover:bg-secondary/50"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 p-2 rounded-lg hover:bg-secondary/50"
            aria-label="View Resume"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <FileText className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border/50 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-2 bg-muted-foreground/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

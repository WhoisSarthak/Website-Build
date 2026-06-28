'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        className="text-center max-w-3xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-balance">
            Sarthak Bhattarai
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
            Electronics Engineering Student
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg leading-relaxed mb-8 text-balance"
        >
          I enjoy building practical projects while learning electronics, embedded systems, programming, and modern web technologies. I&apos;m constantly improving my skills through coursework, personal projects, and hands-on experimentation.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <Link href="#projects">
            <button className="px-8 py-3 rounded-lg bg-foreground text-background hover:opacity-80 transition-opacity font-medium">
              View Projects
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-8 py-3 rounded-lg border border-border hover:bg-foreground/5 transition-colors font-medium">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

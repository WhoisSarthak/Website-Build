'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            Let&apos;s Work Together
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg mb-8 leading-relaxed"
          >
            I&apos;m always interested in hearing about new projects and opportunities. Whether you want to collaborate,
            discuss ideas, or just say hello, feel free to reach out.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="mailto:sarthak@example.com"
              className="px-8 py-3 rounded-lg bg-foreground text-background hover:opacity-80 transition-opacity font-medium"
            >
              Send me an email
            </a>
            <Link
              href="#"
              className="px-8 py-3 rounded-lg border border-border hover:bg-foreground/5 transition-colors font-medium"
            >
              Schedule a call
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center text-sm"
          >
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Email
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

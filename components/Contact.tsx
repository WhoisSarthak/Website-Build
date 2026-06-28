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
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg mb-8 leading-relaxed"
          >
            I&apos;d love to hear from you! Feel free to reach out if you want to chat about projects, opportunities, or anything else.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-6 mb-8"
          >
            <div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:sarthakbhattarai420@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                sarthakbhattarai420@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+977-9762691916"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                +977 9762691916
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center flex-wrap"
          >
            <Link 
              href="https://github.com/WhoisSarthak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/sarthak-bhattarai-0008a7379/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <a 
              href="mailto:sarthakbhattarai420@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

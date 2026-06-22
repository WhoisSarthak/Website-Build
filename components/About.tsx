'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a software engineer with 6+ years of experience building scalable systems and leading engineering teams.
              My journey started with a passion for problem-solving, and it&apos;s evolved into a deep expertise in designing
              systems that serve millions of users reliably.
            </p>
            <p>
              Throughout my career, I&apos;ve worn many hats—from individual contributor to tech lead. I&apos;m particularly
              passionate about system design, mentorship, and creating delightful user experiences. Whether it&apos;s optimizing
              database queries or architecting microservices, I approach every challenge with curiosity and rigor.
            </p>
            <p>
              Beyond code, I love writing about engineering challenges, contributing to open-source, and helping junior
              engineers grow. When I&apos;m not working, you can find me reading, exploring new technologies, or hiking.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 md:grid-cols-3"
        >
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100M+</div>
            <div className="text-sm text-muted-foreground">Users Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

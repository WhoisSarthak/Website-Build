'use client';

import { motion } from 'framer-motion';

export function About() {
  const interests = [
    'Embedded Systems',
    'Digital Electronics',
    'Programming',
    'Web Development',
    'Problem Solving',
  ];

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
              I&apos;m studying Electronics Engineering in Nepal. I enjoy learning through practical work and building things.
              Rather than claiming expertise, I focus on genuinely understanding concepts through hands-on projects and coursework.
            </p>
            <p>
              My interests span across embedded systems, digital electronics, programming, and web development. I&apos;m particularly excited
              about understanding how hardware and software work together, and I&apos;m constantly exploring new tools and technologies to solve real problems.
            </p>
            <p>
              This website documents my learning journey. As I progress through my studies and build more projects, this portfolio will naturally grow to
              reflect real achievements and genuine experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-lg font-semibold mb-4">My Interests</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-lg bg-foreground/5 border border-border text-sm"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

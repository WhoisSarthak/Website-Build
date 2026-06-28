'use client';

import { motion } from 'framer-motion';
import { learningNotes } from '@/data/learningNotes';

export function LearningNotes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="notes" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Learning Notes
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {learningNotes.map((note) => (
            <motion.div
              key={note.id}
              variants={itemVariants}
              className="border border-border rounded-lg p-6 hover:bg-foreground/5 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {note.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {note.excerpt}
                  </p>
                </div>
                {note.status === 'coming-soon' && (
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/10 border border-border rounded-md whitespace-nowrap">
                    Coming Soon
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground bg-foreground/5 px-3 py-1 rounded-md">
                  {note.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {note.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

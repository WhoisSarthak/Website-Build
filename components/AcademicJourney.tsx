'use client';

import { motion } from 'framer-motion';
import { academicJourney } from '@/data/learning';

export function AcademicJourney() {
  return (
    <section id="journey" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Academic Journey
        </motion.h2>

        <div className="space-y-8">
          {academicJourney.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {/* Timeline dot */}
              <div className="relative flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-foreground border-4 border-background"></div>
                {index < academicJourney.length - 1 && (
                  <div className="w-1 h-24 bg-border/50 mt-4"></div>
                )}
              </div>

              {/* Event content */}
              <div className="pb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-lg font-semibold">
                    {event.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {event.date}
                  </span>
                </div>
                {event.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

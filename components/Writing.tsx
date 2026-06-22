'use client';

import { motion } from 'framer-motion';
import { articles } from '@/data/writing';
import Link from 'next/link';

export function Writing() {
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
    <section id="writing" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Writing
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="group border-b border-border pb-6 hover:border-foreground/50 transition-colors"
            >
              <Link href={article.link} className="block">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
                  <span className="group-hover:translate-x-1 transition-transform">{article.readTime} read →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

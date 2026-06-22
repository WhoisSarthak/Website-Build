'use client';

import { motion } from 'framer-motion';

export function Hero() {
  const words = ['Software Engineer', 'System Designer', 'Builder'];
  
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
            Hi, I&apos;m Sarthak
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-xl md:text-2xl text-muted-foreground mb-3">
            I build
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {words.map((word, index) => (
              <motion.span
                key={word}
                className="text-xl md:text-2xl px-3 py-1 rounded-lg bg-foreground/5 border border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg leading-relaxed mb-8 text-balance"
        >
          Passionate about creating elegant solutions to complex problems. With expertise in full-stack development,
          system design, and cloud infrastructure, I&apos;ve helped teams scale from 0 to millions of users.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg bg-foreground text-background hover:opacity-80 transition-opacity font-medium">
            View My Work
          </button>
          <button className="px-8 py-3 rounded-lg border border-border hover:bg-foreground/5 transition-colors font-medium">
            Download Resume
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

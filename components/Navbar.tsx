'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg hover:text-muted-foreground transition-colors">
          Sarthak
        </Link>

        <div className="flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm hover:text-muted-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm hover:text-muted-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm hover:text-muted-foreground transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('writing')}
            className="text-sm hover:text-muted-foreground transition-colors"
          >
            Writing
          </button>
          <Link
            href="#contact"
            className="text-sm px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

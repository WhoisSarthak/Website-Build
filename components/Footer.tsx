'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#learning" className="hover:text-foreground transition-colors">Learning</Link></li>
              <li><Link href="#journey" className="hover:text-foreground transition-colors">Journey</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://github.com/WhoisSarthak" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/sarthak-bhattarai-0008a7379/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="mailto:sarthakbhattarai420@gmail.com" className="hover:text-foreground transition-colors">Email</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sections</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link></li>
              <li><Link href="#notes" className="hover:text-foreground transition-colors">Learning Notes</Link></li>
              <li><Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Sarthak Bhattarai</p>
          <p>Designed and built while learning.</p>
        </div>
      </div>
    </footer>
  );
}

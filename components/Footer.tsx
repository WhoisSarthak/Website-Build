'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12 bg-foreground/2">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link></li>
              <li><Link href="#writing" className="hover:text-foreground transition-colors">Writing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">GitHub</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Bluesky</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Resume</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Consulting</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Speaking</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Mentoring</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Workshops</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Sarthak. All rights reserved.</p>
          <p>Crafted with <span className="text-foreground">care</span> and <span className="text-foreground">code</span></p>
        </div>
      </div>
    </footer>
  );
}

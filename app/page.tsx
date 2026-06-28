import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { CurrentlyLearning } from '@/components/CurrentlyLearning';
import { AcademicJourney } from '@/components/AcademicJourney';
import { Skills } from '@/components/Skills';
import { LearningNotes } from '@/components/LearningNotes';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CurrentlyLearning />
      <AcademicJourney />
      <Skills />
      <LearningNotes />
      <Contact />
      <Footer />
    </main>
  );
}

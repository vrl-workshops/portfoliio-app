import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Publications } from './components/Publications';
import { Talks } from './components/Talks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Publications />
        <Talks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
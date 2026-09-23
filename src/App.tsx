import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app-root">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
};

export default App;

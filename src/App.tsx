import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Background3D } from './components/Background3D';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app-root">
        <Background3D />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ReachPage } from './pages/ReachPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CredentialsPage } from './pages/CredentialsPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/credentials" element={<CredentialsPage />} />
          <Route path="/reach" element={<ReachPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Precision Surveyor Custom Cursor */}
      <CustomCursor />

      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col antialiased selection:bg-[#C8102E] selection:text-white overflow-x-hidden">
        {/* Persistent Floating Navbar */}
        <Navbar />

        {/* Dynamic Route Pages with Animated Transition */}
        <main className="flex-1 w-full overflow-x-hidden">
          <AnimatedRoutes />
        </main>

        {/* Persistent Dark Rounded Footer */}
        <Footer />

        {/* Persistent Mobile Bottom Quick Action Bar */}
        <MobileStickyBar />
      </div>
    </BrowserRouter>
  );
};

export default App;

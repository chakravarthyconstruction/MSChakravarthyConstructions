import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
// Route code-splitting for non-home pages so initial home page loads instantly
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const CredentialsPage = React.lazy(() => import('./pages/CredentialsPage').then(m => ({ default: m.CredentialsPage })));
const ReachPage = React.lazy(() => import('./pages/ReachPage').then(m => ({ default: m.ReachPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18 }}
        className="w-full"
      >
        <React.Suspense
          fallback={
            <div className="min-h-[50vh] flex items-center justify-center text-xs font-mono text-neutral-400">
              Loading...
            </div>
          }
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
        </React.Suspense>
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

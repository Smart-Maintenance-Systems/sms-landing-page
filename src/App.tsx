import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import CodePage from './pages/CodePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FaqPage from './pages/FaqPage';
import StubPage from './pages/StubPage';

export default function App() {
  return (
    <div className="min-h-screen wb-gloss-bg flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route
            path="/privacy"
            element={<StubPage title="Privacy policy" blurb="How we handle your data." />}
          />
          <Route
            path="/terms"
            element={<StubPage title="Terms of service" blurb="The terms of using SMS Workboat." />}
          />
          {/* Any unknown path falls back to Home rather than a dead 404 in this SPA skeleton. */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

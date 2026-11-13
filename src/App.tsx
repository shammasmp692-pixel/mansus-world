import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PaymentMethods from './components/PaymentMethods';
import ScrollToTop from './components/ScrollToTop';
import { CurrencyProvider } from './context/CurrencyContext';

import HomePage from './pages/HomePage';
import TourDetailPage from './pages/TourDetailPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <CurrencyProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/packages" element={<CategoryPage />} />
            <Route path="/tours/:categorySlug" element={<CategoryPage />} />
            <Route path="/package/:slug" element={<TourDetailPage />} />
            <Route path="/tour/:slug" element={<TourDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Wildcard fallback to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <PaymentMethods />
        <Footer />
      </div>
    </CurrencyProvider>
  );
}

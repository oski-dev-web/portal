import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { SearchModal } from './components/SearchModal';
import { ArticlePage } from './pages/ArticlePage';
import { CategoryPage } from './pages/CategoryPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { SearchPage } from './pages/SearchPage';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white text-[#23272E]">
        <Header onOpenSearch={() => setSearchOpen(true)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kategoria/:slug" element={<CategoryPage />} />
            <Route path="/artykul/:slug" element={<ArticlePage />} />
            <Route path="/szukaj" element={<SearchPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

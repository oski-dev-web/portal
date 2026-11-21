import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { CATEGORY_LIST, SITE_CONFIG } from '../config/site';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenSearch: () => void;
}

export function Header({ onOpenSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const leftCategories = CATEGORY_LIST.slice(0, 2);
  const rightCategories = CATEGORY_LIST.slice(2, 4);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        onOpenSearch();
      }
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap shrink-0 text-sm font-medium transition-colors ${
      isActive ? 'text-[#23272E]' : 'text-[#5C6472] hover:text-[#23272E]'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-[#E6E8EC] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Desktop: Symmetrical 3-Column Header (Categories flanking centered logo, no Redakcja) */}
        <div className="hidden h-20 grid-cols-[1fr_auto_1fr] items-center lg:grid">
          {/* Left Zone: 2 categories neatly aligned toward center */}
          <nav
            aria-label="Kategorie — lewa strona"
            className="flex items-center justify-end gap-9 pr-10"
          >
            {leftCategories.map((category) => (
              <NavLink
                key={category.slug}
                to={`/kategoria/${category.slug}`}
                className={navLinkClass}
              >
                {category.name}
              </NavLink>
            ))}
          </nav>

          {/* Center Zone: Graphic Brand Logo */}
          <Link
            to="/"
            aria-label={`${SITE_CONFIG.name} — strona główna`}
            title={SITE_CONFIG.name}
            className="group flex shrink-0 items-center justify-center rounded-full p-1 transition-transform duration-200 hover:scale-[1.04]"
          >
            <BrandLogo className="h-11 w-11" />
          </Link>

          {/* Right Zone: 2 categories flanking center + quiet Search button on far right */}
          <div className="flex items-center justify-between pl-10">
            <nav
              aria-label="Kategorie — prawa strona"
              className="flex items-center gap-9"
            >
              {rightCategories.map((category) => (
                <NavLink
                  key={category.slug}
                  to={`/kategoria/${category.slug}`}
                  className={navLinkClass}
                >
                  {category.name}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              onClick={onOpenSearch}
              className="inline-flex whitespace-nowrap shrink-0 items-center gap-2 rounded-lg border border-[#E6E8EC] bg-[#F7F8FA] px-3.5 py-2 text-xs font-medium text-[#4E5663] transition-colors hover:border-[#D5D9E0] hover:bg-[#F1F3F5] hover:text-[#23272E]"
              aria-label="Otwórz wyszukiwarkę artykułów"
            >
              <Search className="h-3.5 w-3.5 text-[#7B8494]" />
              <span>Szukaj</span>
            </button>
          </div>
        </div>

        {/* Mobile / Tablet: Menu left, Logo center, Search right */}
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center lg:hidden">
          <div className="flex items-center justify-start">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E6E8EC] text-[#23272E] transition-colors hover:bg-[#F7F8FA]"
              aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <Link
            to="/"
            aria-label={`${SITE_CONFIG.name} — strona główna`}
            title={SITE_CONFIG.name}
            className="flex shrink-0 items-center justify-center p-1"
          >
            <BrandLogo className="h-10 w-10" />
          </Link>

          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={onOpenSearch}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E6E8EC] bg-[#F7F8FA] text-[#4E5663] transition-colors hover:bg-[#F1F3F5] hover:text-[#23272E]"
              aria-label="Otwórz wyszukiwarkę artykułów"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E6E8EC] bg-white lg:hidden">
          <nav
            aria-label="Nawigacja mobilna"
            className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6"
          >
            {CATEGORY_LIST.map((category) => (
              <NavLink
                key={category.slug}
                to={`/kategoria/${category.slug}`}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F7F8FA] text-[#23272E]'
                      : 'text-[#4E5663] hover:bg-[#F7F8FA] hover:text-[#23272E]'
                  }`
                }
              >
                {category.name}
              </NavLink>
            ))}

            <div className="my-2 border-t border-[#E6E8EC]" />

            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#F7F8FA] text-[#23272E]'
                    : 'text-[#5C6472] hover:bg-[#F7F8FA] hover:text-[#23272E]'
                }`
              }
            >
              Kontakt
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

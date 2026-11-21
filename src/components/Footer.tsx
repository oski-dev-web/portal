import { Link } from 'react-router-dom';
import { CATEGORY_LIST, SITE_CONFIG } from '../config/site';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  return (
    <footer className="border-t border-[#E6E8EC] bg-white text-[#4E5663]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-6">
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-display text-lg font-semibold tracking-[0.12em] text-[#23272E]"
            >
              <BrandLogo className="h-8 w-8" />
              <span>{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#4E5663]">
              {SITE_CONFIG.description}
            </p>
            <p className="mt-4 text-xs text-[#7B8494]">
              Kontakt:{' '}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="font-medium text-[#4E5663] transition-colors hover:text-[#23272E]"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </p>
          </div>

          {/* Categories */}
          <div className="md:col-span-3">
            <h2 className="font-display text-xs font-semibold tracking-[0.08em] text-[#23272E] uppercase">
              Kategorie
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORY_LIST.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/kategoria/${category.slug}`}
                    className="transition-colors hover:text-[#23272E]"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal Links */}
          <div className="md:col-span-3">
            <h2 className="font-display text-xs font-semibold tracking-[0.08em] text-[#23272E] uppercase">
              Serwis
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/szukaj"
                  className="transition-colors hover:text-[#23272E]"
                >
                  Wyszukiwarka
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="transition-colors hover:text-[#23272E]"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  to="/polityka-prywatnosci"
                  className="transition-colors hover:text-[#23272E]"
                >
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#E6E8EC] pt-6 text-xs text-[#7B8494] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {SITE_CONFIG.foundedYear} {SITE_CONFIG.name}. Wszelkie prawa zastrzeżone.
          </p>
          <p>{SITE_CONFIG.city} · Portal z artykułami o pielęgnacji i urodzie</p>
        </div>
      </div>
    </footer>
  );
}

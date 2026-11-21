import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { CATEGORY_LIST, SITE_CONFIG } from '../config/site';
import { useSeo } from '../hooks/useSeo';

export function NotFoundPage() {
  useSeo({
    title: 'Nie znaleziono strony (404)',
    description: `Wybrany adres nie istnieje w portalu ${SITE_CONFIG.name}.`,
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E6E8EC] bg-[#F7F8FA] p-8 text-center sm:p-12">
          <p className="font-display text-sm font-semibold tracking-[0.12em] text-[#7B8494]">
            BŁĄD 404
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#23272E]">
            Nie znaleziono takiej strony
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#4E5663]">
            Adres mógł zostać zmieniony lub zawiera literówkę. Wróć na stronę główną albo skorzystaj
            z wyszukiwarki artykułów.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3B4452] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#23272E]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Strona główna</span>
            </Link>
            <Link
              to="/szukaj"
              className="inline-flex items-center gap-2 rounded-lg border border-[#E6E8EC] bg-white px-5 py-2.5 text-sm font-medium text-[#23272E] transition-colors hover:bg-[#F1F3F5]"
            >
              <Search className="h-4 w-4 text-[#7B8494]" />
              <span>Wyszukiwarka</span>
            </Link>
          </div>

          <div className="mt-10 border-t border-[#E6E8EC] pt-6">
            <p className="text-xs text-[#7B8494]">Przejdź bezpośrednio do działu:</p>
            <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm">
              {CATEGORY_LIST.map((category) => (
                <Link
                  key={category.slug}
                  to={`/kategoria/${category.slug}`}
                  className="font-medium text-[#4E5663] transition-colors hover:text-[#23272E]"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

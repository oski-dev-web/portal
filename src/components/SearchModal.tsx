import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Search, X } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../config/site';
import { formatReadTime, normalizeSearchText } from '../utils/formatters';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTED_QUERIES = [
  'bariera hydrolipidowa',
  'równowaga PEH',
  'INCI',
  'SPF',
  'peeling skóry głowy',
  'makijaż',
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const instantResults = useMemo(() => {
    const normalized = normalizeSearchText(query.trim());
    if (!normalized) return [];
    return ARTICLES.filter((article) => {
      const haystack = normalizeSearchText(
        `${article.title} ${article.excerpt} ${article.tags.join(' ')} ${CATEGORIES[article.category].name}`
      );
      return haystack.includes(normalized);
    }).slice(0, 5);
  }, [query]);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    onClose();
    navigate(trimmed ? `/szukaj?q=${encodeURIComponent(trimmed)}` : '/szukaj');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#23272E]/35 px-4 pt-16 backdrop-blur-[2px] sm:pt-24"
      role="dialog"
      aria-modal="true"
      aria-label="Wyszukiwarka artykułów"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#E6E8EC] bg-white shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 border-b border-[#E6E8EC] bg-[#F7F8FA] px-5 py-4"
        >
          <Search className="h-5 w-5 shrink-0 text-[#7B8494]" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Szukaj artykułów, składników lub tematów..."
            className="w-full bg-transparent text-base text-[#23272E] placeholder-[#7B8494] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#7B8494] transition-colors hover:bg-[#E6E8EC]/60 hover:text-[#23272E]"
            aria-label="Zamknij wyszukiwarkę"
          >
            <X className="h-4 w-4" />
          </button>
        </form>

        <div className="max-h-[65vh] overflow-y-auto p-5">
          {query.trim() === '' ? (
            <div>
              <p className="text-xs font-medium text-[#7B8494]">
                Popularne hasła
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SUGGESTED_QUERIES.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="rounded-lg border border-[#E6E8EC] bg-[#F7F8FA] px-3 py-1.5 text-sm text-[#4E5663] transition-colors hover:border-[#D5D9E0] hover:bg-[#F1F3F5] hover:text-[#23272E]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : instantResults.length > 0 ? (
            <div>
              <p className="text-xs font-medium text-[#7B8494]">
                Pasujące publikacje
              </p>
              <ul className="mt-3 divide-y divide-[#E6E8EC]">
                {instantResults.map((article) => (
                  <li key={article.id}>
                    <Link
                      to={`/artykul/${article.slug}`}
                      onClick={onClose}
                      className="group block py-3.5 transition-colors"
                    >
                      <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#7B8494]">
                        <span className="font-medium text-[#4E5663]">
                          {CATEGORIES[article.category].name}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{formatReadTime(article.readTimeMinutes)}</span>
                      </div>
                      <h3 className="mt-1 font-display text-base font-semibold leading-snug text-[#23272E] transition-colors group-hover:text-[#3B4452]">
                        {article.title}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-sm text-[#4E5663]">
                        {article.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-[#E6E8EC] pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#3B4452] transition-colors hover:text-[#23272E]"
                >
                  <span>Zobacz wszystkie wyniki dla „{query.trim()}”</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-sm font-medium text-[#23272E]">
                Brak publikacji pasujących do hasła „{query.trim()}”.
              </p>
              <p className="mt-1 text-sm text-[#7B8494]">
                Spróbuj wpisać prostsze słowo, np. „włosy”, „skóra”, „SPF” lub „makijaż”.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

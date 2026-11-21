import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { CATEGORIES, CATEGORY_LIST, SITE_CONFIG } from '../config/site';
import { ARTICLES } from '../data/articles';
import { useSeo } from '../hooks/useSeo';
import type { CategorySlug } from '../types/editorial';
import { normalizeSearchText } from '../utils/formatters';

const QUICK_TERMS = [
  'bariera hydrolipidowa',
  'równowaga PEH',
  'INCI',
  'SPF',
  'retinoidy',
  'sen',
];

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [inputValue, setInputValue] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<'all' | CategorySlug>('all');

  const activeQuery = searchParams.get('q') ?? '';

  useSeo({
    title: activeQuery ? `Wyniki wyszukiwania: ${activeQuery}` : 'Wyszukiwarka artykułów',
    description: `Przeszukuj bazę artykułów i poradników portalu ${SITE_CONFIG.name}.`,
  });

  const results = useMemo(() => {
    const normalized = normalizeSearchText(activeQuery.trim());
    return ARTICLES.filter((article) => {
      if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }
      if (!normalized) return true;

      const sectionsText = article.sections
        .map((s) => `${s.heading} ${s.paragraphs.join(' ')}`)
        .join(' ');
      const haystack = normalizeSearchText(
        `${article.title} ${article.excerpt} ${article.tags.join(' ')} ${CATEGORIES[article.category].name} ${sectionsText}`
      );
      return haystack.includes(normalized);
    }).sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [activeQuery, selectedCategory]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      setSearchParams({ q: trimmed });
    } else {
      setSearchParams({});
    }
  };

  const applyTerm = (term: string) => {
    setInputValue(term);
    setSearchParams({ q: term });
  };

  const clearQuery = () => {
    setInputValue('');
    setSearchParams({});
  };

  return (
    <div className="bg-white">
      <section className="border-b border-[#E6E8EC] bg-[#F7F8FA]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-[#23272E]">
            Wyszukiwarka artykułów
          </h1>
          <p className="mt-2 text-sm text-[#7B8494]">
            Wpisz nazwę składnika, problem pielęgnacyjny lub temat z działów Włosy, Pielęgnacja skóry, Kosmetyki i Uroda.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7B8494]" />
              <input
                type="search"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Np. ceramidy, peeling, SPF, makijaż..."
                className="w-full rounded-lg border border-[#E6E8EC] bg-white py-3 pl-11 pr-10 text-sm text-[#23272E] placeholder-[#7B8494] focus:border-[#3B4452] focus:outline-none"
              />
              {inputValue && (
                <button
                  type="button"
                  onClick={clearQuery}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[#7B8494] hover:text-[#23272E]"
                  aria-label="Wyczyść frazę"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[#3B4452] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#23272E]"
            >
              Szukaj
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#7B8494]">Popularne tematy:</span>
            {QUICK_TERMS.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => applyTerm(term)}
                className="rounded-lg border border-[#E6E8EC] bg-white px-2.5 py-1 text-xs text-[#4E5663] transition-colors hover:border-[#D5D9E0] hover:text-[#23272E]"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-[#E6E8EC] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#4E5663]">
            {activeQuery ? (
              <>
                Znaleziono <strong className="font-semibold text-[#23272E]">{results.length}</strong>{' '}
                publikacji dla hasła „{activeQuery}”
              </>
            ) : (
              <>
                Wszystkie publikacje (<strong className="font-semibold text-[#23272E]">{results.length}</strong>)
              </>
            )}
          </p>

          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#3B4452] text-white'
                  : 'bg-[#F7F8FA] text-[#4E5663] hover:bg-[#F1F3F5] hover:text-[#23272E]'
              }`}
            >
              Wszystkie
            </button>
            {CATEGORY_LIST.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => setSelectedCategory(category.slug)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedCategory === category.slug
                    ? 'bg-[#3B4452] text-white'
                    : 'bg-[#F7F8FA] text-[#4E5663] hover:bg-[#F1F3F5] hover:text-[#23272E]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {results.length > 0 ? (
          <div className="mt-8 divide-y divide-[#E6E8EC]">
            {results.map((article) => (
              <div key={article.id} className="py-7 first:pt-2">
                <ArticleCard article={article} variant="horizontal" showAuthor />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-[#E6E8EC] bg-[#F7F8FA] p-10 text-center">
            <p className="font-display text-base font-semibold text-[#23272E]">
              Brak pasujących artykułów
            </p>
            <p className="mt-2 text-sm text-[#4E5663]">
              Spróbuj wpisać ogólniejszą frazę lub wyczyść wybrane filtry kategorii.
            </p>
            <button
              type="button"
              onClick={() => {
                clearQuery();
                setSelectedCategory('all');
              }}
              className="mt-5 rounded-lg bg-[#3B4452] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#23272E]"
            >
              Pokaż wszystkie artykuły
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

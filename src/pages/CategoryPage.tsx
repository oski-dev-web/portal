import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { CATEGORIES, CATEGORY_LIST } from '../config/site';
import { getArticlesByCategory } from '../data/articles';
import { useSeo } from '../hooks/useSeo';
import type { CategorySlug } from '../types/editorial';
import { NotFoundPage } from './NotFoundPage';

type FilterMode = 'all' | 'guides';
type SortMode = 'newest' | 'shortest' | 'longest';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [sortMode, setSortMode] = useState<SortMode>('newest');

  const isValidCategory = Boolean(slug && slug in CATEGORIES);
  const category = isValidCategory ? CATEGORIES[slug as CategorySlug] : undefined;

  useSeo({
    title: category ? category.seoTitle : 'Nie znaleziono kategorii',
    description: category
      ? category.seoDescription
      : 'Wybrana kategoria nie istnieje w portalu BEAUTIVA.',
  });

  const allCategoryArticles = useMemo(() => {
    if (!category) return [];
    return getArticlesByCategory(category.slug);
  }, [category]);

  const filteredArticles = useMemo(() => {
    let list = [...allCategoryArticles];

    if (filterMode === 'guides') {
      list = list.filter((article) => article.isGuide);
    }

    if (sortMode === 'shortest') {
      list.sort((a, b) => a.readTimeMinutes - b.readTimeMinutes);
    } else if (sortMode === 'longest') {
      list.sort((a, b) => b.readTimeMinutes - a.readTimeMinutes);
    } else {
      list.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }

    return list;
  }, [allCategoryArticles, filterMode, sortMode]);

  if (!category) {
    return <NotFoundPage />;
  }

  const otherCategories = CATEGORY_LIST.filter((item) => item.slug !== category.slug);

  return (
    <div className="bg-white">
      {/* Category Header */}
      <section className="border-b border-[#E6E8EC] bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <nav
            aria-label="Ścieżka nawigacji"
            className="flex items-center gap-1.5 text-xs text-[#7B8494]"
          >
            <Link to="/" className="transition-colors hover:text-[#23272E]">
              Strona główna
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-[#4E5663]">{category.name}</span>
          </nav>

          <div className="mt-4 max-w-3xl">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#23272E] sm:text-4xl">
              {category.name}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[#4E5663]">
              {category.editorialIntro}
            </p>
            <p className="mt-4 text-xs text-[#7B8494]">
              Liczba publikacji w dziale: {allCategoryArticles.length}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & Uniform 2-Column Article Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-[#E6E8EC] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: 'all', label: 'Wszystkie artykuły' },
                { id: 'guides', label: 'Poradniki' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterMode(tab.id)}
                className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
                  filterMode === tab.id
                    ? 'bg-[#3B4452] text-white'
                    : 'bg-[#F7F8FA] text-[#4E5663] hover:bg-[#F1F3F5] hover:text-[#23272E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5 text-xs text-[#7B8494]">
            <label htmlFor="category-sort" className="font-medium text-[#4E5663]">
              Sortowanie:
            </label>
            <select
              id="category-sort"
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              className="rounded-lg border border-[#E6E8EC] bg-white px-3 py-2 text-xs font-medium text-[#23272E] focus:border-[#3B4452] focus:outline-none"
            >
              <option value="newest">Najnowsze</option>
              <option value="shortest">Najkrótsze</option>
              <option value="longest">Najdłuższe</option>
            </select>
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-x-9 gap-y-12 md:grid-cols-2">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} showAuthor />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-[#E6E8EC] bg-[#F7F8FA] p-8 text-center">
            <p className="text-sm font-medium text-[#23272E]">
              Brak publikacji dla wybranego filtra.
            </p>
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className="mt-3 text-sm font-medium text-[#3B4452] underline-offset-4 hover:underline"
            >
              Pokaż wszystkie artykuły w tym dziale
            </button>
          </div>
        )}
      </section>

      {/* Sibling Categories */}
      <section className="border-t border-[#E6E8EC] bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-display text-lg font-semibold text-[#23272E]">
            Pozostałe działy
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {otherCategories.map((item) => (
              <Link
                key={item.slug}
                to={`/kategoria/${item.slug}`}
                className="group rounded-xl border border-[#E6E8EC] bg-white p-5 transition-colors hover:border-[#D5D9E0]"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-[#23272E]">
                    {item.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-[#7B8494] transition-transform group-hover:translate-x-0.5 group-hover:text-[#23272E]" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#4E5663]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import { CATEGORIES, CATEGORY_LIST, SITE_CONFIG } from '../config/site';
import { AUTHORS } from '../data/authors';
import {
  ARTICLES,
  getArticlesByCategory,
  getFeaturedArticle,
  getGuideArticles,
  getLatestArticles,
  getPopularArticles,
} from '../data/articles';
import { useSeo } from '../hooks/useSeo';
import type { CategorySlug } from '../types/editorial';
import { formatPolishDate, formatReadTime } from '../utils/formatters';

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | CategorySlug>('all');

  useSeo({
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  });

  const featuredArticle = getFeaturedArticle();
  const featuredAuthor = AUTHORS[featuredArticle.authorId];
  const featuredCategory = CATEGORIES[featuredArticle.category];

  const popularArticles = getPopularArticles(5);
  const guideArticles = getGuideArticles(4);

  const latestFeed = useMemo(() => {
    if (selectedCategory === 'all') {
      return getLatestArticles(featuredArticle.slug, 4);
    }
    return ARTICLES.filter(
      (article) => article.category === selectedCategory && article.slug !== featuredArticle.slug
    )
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 4);
  }, [featuredArticle.slug, selectedCategory]);

  return (
    <div className="bg-white">
      {/* 1. STRONA TYTUŁOWA: DUŻY ARTYKUŁ PO LEWEJ + PIONOWY FEED NAJNOWSZYCH PO PRAWEJ */}
      <section className="border-b border-[#E6E8EC] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
            {/* Lewa kolumna (7/12): Główny artykuł w układzie pionowym */}
            <article className="group lg:col-span-7 lg:border-r lg:border-[#E6E8EC] lg:pr-10">
              <Link
                to={`/artykul/${featuredArticle.slug}`}
                className="block"
                aria-label={featuredArticle.title}
              >
                <EditorialImage
                  src={featuredArticle.image}
                  alt={featuredArticle.imageAlt}
                  aspectClass="aspect-[16/9]"
                  priority
                />
              </Link>

              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#7B8494]">
                  <Link
                    to={`/kategoria/${featuredCategory.slug}`}
                    className="font-medium text-[#4E5663] transition-colors hover:text-[#23272E]"
                  >
                    {featuredCategory.name}
                  </Link>
                  <span aria-hidden="true">·</span>
                  <time dateTime={featuredArticle.publishedAt}>
                    {formatPolishDate(featuredArticle.publishedAt)}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{formatReadTime(featuredArticle.readTimeMinutes)}</span>
                </div>

                <h1 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-[#23272E] sm:text-3xl lg:text-[2.1rem] lg:leading-[1.2]">
                  <Link
                    to={`/artykul/${featuredArticle.slug}`}
                    className="transition-colors hover:text-[#3B4452]"
                  >
                    {featuredArticle.title}
                  </Link>
                </h1>

                <p className="mt-3.5 max-w-2xl text-base leading-relaxed text-[#4E5663]">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E6E8EC] pt-5">
                  {featuredAuthor && (
                    <span className="text-xs font-medium text-[#7B8494]">
                      Autor: <span className="text-[#4E5663]">{featuredAuthor.name}</span>
                    </span>
                  )}

                  <Link
                    to={`/artykul/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#23272E] transition-colors hover:text-[#3B4452]"
                  >
                    <span>Czytaj artykuł</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Prawa kolumna (5/12): Najnowsze publikacje w układzie listy z miniaturami */}
            <div className="flex flex-col lg:col-span-5 lg:pl-10">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="font-display text-lg font-semibold tracking-tight text-[#23272E]">
                  Najnowsze
                </h2>
                <Link
                  to="/szukaj"
                  className="text-xs font-medium text-[#7B8494] transition-colors hover:text-[#23272E]"
                >
                  Wszystkie teksty
                </Link>
              </div>

              {/* Kompaktowy filtr kategorii dla listy Najnowsze */}
              <div
                role="tablist"
                aria-label="Filtruj najnowsze artykuły"
                className="mt-4 flex flex-wrap gap-1.5 border-b border-[#E6E8EC] pb-4"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === 'all'}
                  onClick={() => setSelectedCategory('all')}
                  className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
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
                    role="tab"
                    aria-selected={selectedCategory === category.slug}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                      selectedCategory === category.slug
                        ? 'bg-[#3B4452] text-white'
                        : 'bg-[#F7F8FA] text-[#4E5663] hover:bg-[#F1F3F5] hover:text-[#23272E]'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Lista najnowszych artykułów z miniaturą po prawej */}
              <div className="flex-1 divide-y divide-[#E6E8EC]">
                {latestFeed.map((article) => (
                  <article key={article.id} className="group py-5 first:pt-5 last:pb-0">
                    <Link
                      to={`/artykul/${article.slug}`}
                      className="grid grid-cols-[1fr_88px] items-start gap-4 sm:grid-cols-[1fr_96px]"
                    >
                      <div>
                        <p className="text-xs text-[#7B8494]">
                          <span className="font-medium text-[#4E5663]">
                            {CATEGORIES[article.category].name}
                          </span>{' '}
                          · {formatReadTime(article.readTimeMinutes)}
                        </p>
                        <h3 className="mt-1.5 font-display text-[15px] font-semibold leading-snug text-[#23272E] transition-colors group-hover:text-[#3B4452]">
                          {article.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-[#7B8494]">
                          {formatPolishDate(article.publishedAt)}
                        </p>
                      </div>

                      <EditorialImage
                        src={article.image}
                        alt={article.imageAlt}
                        aspectClass="aspect-square"
                      />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ROZDZIAŁY KATEGORII: UKŁAD DWUKOLUMNOWY (LEWY OPIS DZIAŁU + PRAWY UKŁAD 1+3) */}
      <div>
        {CATEGORY_LIST.map((category, idx) => {
          const categoryArticles = getArticlesByCategory(category.slug).slice(0, 4);
          const leadArticle = categoryArticles[0];
          const secondaryArticles = categoryArticles.slice(1, 4);
          const isTinted = idx % 2 === 0;

          if (!leadArticle) return null;

          return (
            <section
              key={category.slug}
              className={`border-b border-[#E6E8EC] ${isTinted ? 'bg-[#F7F8FA]' : 'bg-white'}`}
            >
              <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-12">
                  {/* Lewa kolumna działu (4/12): numer, tytuł, opis, przycisk */}
                  <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-28">
                      <span className="font-display text-xs font-semibold tracking-[0.12em] text-[#7B8494]">
                        DZIAŁ {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#23272E] sm:text-[1.75rem]">
                        {category.name}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-[#4E5663]">
                        {category.editorialIntro}
                      </p>

                      <div className="mt-6">
                        <Link
                          to={`/kategoria/${category.slug}`}
                          className={`inline-flex items-center gap-2 rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm font-medium text-[#23272E] transition-colors hover:border-[#D5D9E0] ${
                            isTinted ? 'bg-white hover:bg-[#F1F3F5]' : 'bg-[#F7F8FA] hover:bg-[#F1F3F5]'
                          }`}
                        >
                          <span>Zobacz wszystkie</span>
                          <ArrowRight className="h-4 w-4 text-[#7B8494]" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Prawa kolumna działu (8/12): 1 wyróżniony poziomo + 3 równe karty pod spodem */}
                  <div className="lg:col-span-8">
                    {/* Karta główna w dziale (układ poziomy) */}
                    <article
                      className={`group rounded-2xl border border-[#E6E8EC] p-5 sm:p-6 ${
                        isTinted ? 'bg-white' : 'bg-[#F7F8FA]'
                      }`}
                    >
                      <div className="grid items-center gap-6 sm:grid-cols-12">
                        <Link
                          to={`/artykul/${leadArticle.slug}`}
                          className="block sm:col-span-6"
                          aria-label={leadArticle.title}
                        >
                          <EditorialImage
                            src={leadArticle.image}
                            alt={leadArticle.imageAlt}
                            aspectClass="aspect-[4/3]"
                          />
                        </Link>

                        <div className="sm:col-span-6">
                          <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#7B8494]">
                            <time dateTime={leadArticle.publishedAt}>
                              {formatPolishDate(leadArticle.publishedAt)}
                            </time>
                            <span aria-hidden="true">·</span>
                            <span>{formatReadTime(leadArticle.readTimeMinutes)}</span>
                          </div>

                          <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight text-[#23272E] transition-colors group-hover:text-[#3B4452]">
                            <Link to={`/artykul/${leadArticle.slug}`}>
                              {leadArticle.title}
                            </Link>
                          </h3>

                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#4E5663]">
                            {leadArticle.excerpt}
                          </p>

                          <Link
                            to={`/artykul/${leadArticle.slug}`}
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#3B4452] transition-colors hover:text-[#23272E]"
                          >
                            <span>Czytaj dalej</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </article>

                    {/* Pozostałe 3 artykuły w równym, przejrzystym rzędzie */}
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                      {secondaryArticles.map((article) => (
                        <article
                          key={article.id}
                          className={`group flex h-full flex-col rounded-xl border border-[#E6E8EC] p-4 transition-colors hover:border-[#D5D9E0] ${
                            isTinted ? 'bg-white' : 'bg-white'
                          }`}
                        >
                          <Link
                            to={`/artykul/${article.slug}`}
                            className="block"
                            aria-label={article.title}
                          >
                            <EditorialImage
                              src={article.image}
                              alt={article.imageAlt}
                              aspectClass="aspect-[16/10]"
                            />
                          </Link>

                          <div className="mt-3.5 flex flex-1 flex-col">
                            <p className="text-xs text-[#7B8494]">
                              {formatReadTime(article.readTimeMinutes)}
                            </p>
                            <h3 className="mt-1.5 font-display text-[15px] font-semibold leading-snug text-[#23272E] transition-colors group-hover:text-[#3B4452]">
                              <Link to={`/artykul/${article.slug}`}>{article.title}</Link>
                            </h3>
                            <p className="mt-auto pt-3 text-xs text-[#7B8494]">
                              {formatPolishDate(article.publishedAt)}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. NA SAMYM DOLE POD SEKCJĄ URODA: POPULARNE ARTYKUŁY I POLECANE PORADNIKI */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Popularne artykuły — poziomy pasek 5 numerowanych publikacji */}
          <div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#23272E]">
                Popularne artykuły
              </h2>
              <p className="text-sm text-[#7B8494]">
                Najczęściej wybierane teksty przez czytelników.
              </p>
            </div>

            <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {popularArticles.map((article, index) => (
                <li key={article.id}>
                  <Link
                    to={`/artykul/${article.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-[#E6E8EC] bg-white p-5 transition-colors hover:border-[#D5D9E0]"
                  >
                    <span className="font-display text-lg font-semibold text-[#7B8494]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-3 text-xs font-medium text-[#4E5663]">
                      {CATEGORIES[article.category].name}
                    </p>
                    <h3 className="mt-1.5 font-display text-sm font-semibold leading-snug text-[#23272E] transition-colors group-hover:text-[#3B4452]">
                      {article.title}
                    </h3>
                    <span className="mt-auto pt-4 text-xs text-[#7B8494]">
                      {formatReadTime(article.readTimeMinutes)}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          {/* Polecane poradniki — siatka 2x2 z miniaturą po lewej i opisem po prawej */}
          <div className="mt-14 border-t border-[#E6E8EC] pt-14">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#23272E]">
                Polecane poradniki
              </h2>
              <p className="text-sm text-[#7B8494]">
                Praktyczne przewodniki krok po kroku do spokojnej lektury.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {guideArticles.map((guide) => (
                <article
                  key={guide.id}
                  className="group rounded-xl border border-[#E6E8EC] bg-white p-5 transition-colors hover:border-[#D5D9E0]"
                >
                  <div className="grid items-start gap-5 sm:grid-cols-[140px_1fr]">
                    <Link
                      to={`/artykul/${guide.slug}`}
                      className="block"
                      aria-label={guide.title}
                    >
                      <EditorialImage
                        src={guide.image}
                        alt={guide.imageAlt}
                        aspectClass="aspect-[4/3] sm:aspect-square"
                      />
                    </Link>

                    <div className="flex h-full flex-col">
                      <div className="flex items-center gap-2 text-xs text-[#7B8494]">
                        <BookOpen className="h-3.5 w-3.5 text-[#7B8494]" />
                        <span className="font-medium text-[#4E5663]">
                          {CATEGORIES[guide.category].name}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{formatReadTime(guide.readTimeMinutes)}</span>
                      </div>

                      <h3 className="mt-2 font-display text-base font-semibold leading-snug text-[#23272E] transition-colors group-hover:text-[#3B4452]">
                        <Link to={`/artykul/${guide.slug}`}>{guide.title}</Link>
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#4E5663]">
                        {guide.excerpt}
                      </p>

                      <div className="mt-auto pt-3">
                        <Link
                          to={`/artykul/${guide.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3B4452] transition-colors hover:text-[#23272E]"
                        >
                          <span>Przeczytaj poradnik</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

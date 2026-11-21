import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight, List } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { EditorialImage } from '../components/EditorialImage';
import { CATEGORIES } from '../config/site';
import { AUTHORS } from '../data/authors';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import { useSeo } from '../hooks/useSeo';
import { formatPolishDate, formatReadTime } from '../utils/formatters';
import { NotFoundPage } from './NotFoundPage';

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [readProgress, setReadProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  const article = slug ? getArticleBySlug(slug) : undefined;
  const category = article ? CATEGORIES[article.category] : undefined;
  const author = article ? AUTHORS[article.authorId] : undefined;

  useSeo({
    title: article ? article.title : 'Nie znaleziono artykułu',
    description: article
      ? article.excerpt
      : 'Szukany artykuł nie został odnaleziony w portalu BEAUTIVA.',
    type: 'article',
  });

  const tocItems = useMemo(() => {
    if (!article) return [];
    return article.sections.map((section) => ({
      id: section.id,
      heading: section.heading,
      subsections: section.subsections ?? [],
    }));
  }, [article]);

  useEffect(() => {
    if (!article) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setReadProgress(progress);

      let currentId = article.sections[0]?.id ?? '';
      for (const section of article.sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140) {
            currentId = section.id;
          }
        }
      }
      setActiveSectionId(currentId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  if (!article || !category) {
    return <NotFoundPage />;
  }

  const relatedArticles = getRelatedArticles(article, 3);

  return (
    <div className="bg-white">
      {/* Subtle Reading Progress Bar */}
      <div
        className="fixed left-0 top-16 z-30 h-[2px] w-full bg-transparent lg:top-20"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#3B4452] transition-[width] duration-150 ease-out"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <article>
        {/* Article Header */}
        <header className="mx-auto max-w-4xl px-4 pt-10 pb-8 sm:px-6 sm:pt-12 lg:px-8">
          <nav
            aria-label="Ścieżka nawigacji"
            className="flex flex-wrap items-center gap-1.5 text-xs text-[#7B8494]"
          >
            <Link to="/" className="transition-colors hover:text-[#23272E]">
              Strona główna
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              to={`/kategoria/${category.slug}`}
              className="transition-colors hover:text-[#23272E]"
            >
              {category.name}
            </Link>
          </nav>

          <div className="mt-5 flex flex-wrap items-center gap-x-2 text-xs text-[#7B8494]">
            <Link
              to={`/kategoria/${category.slug}`}
              className="font-medium text-[#4E5663] transition-colors hover:text-[#23272E]"
            >
              {category.name}
            </Link>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>
              {formatPolishDate(article.publishedAt)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{formatReadTime(article.readTimeMinutes)}</span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.2] tracking-tight text-[#23272E] sm:text-4xl">
            {article.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[#4E5663]">
            {article.excerpt}
          </p>

          {author && (
            <div className="mt-6 flex items-center gap-3.5 border-t border-[#E6E8EC] pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1F3F5] font-display text-xs font-semibold text-[#23272E]">
                {author.initials}
              </div>
              <div>
                <p className="text-sm font-medium text-[#23272E]">{author.name}</p>
                <p className="text-xs text-[#7B8494]">{author.role}</p>
              </div>
            </div>
          )}
        </header>

        {/* Featured Image */}
        <figure className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <EditorialImage
            src={article.image}
            alt={article.imageAlt}
            aspectClass="aspect-[16/10]"
            priority
          />
          {article.imageCaption && (
            <figcaption className="mt-3 text-xs leading-relaxed text-[#7B8494]">
              {article.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Reading Canvas: Sticky TOC + Comfortable Prose */}
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Table of Contents */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="rounded-xl border border-[#E6E8EC] bg-[#F7F8FA] p-5 lg:sticky lg:top-24">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#23272E] uppercase">
                  <List className="h-4 w-4 text-[#7B8494]" />
                  <span>Spis treści</span>
                </div>

                <nav aria-label="Spis treści artykułu" className="mt-4">
                  <ol className="space-y-2.5 text-sm">
                    {tocItems.map((item) => {
                      const isActive = activeSectionId === item.id;
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`block leading-snug transition-colors ${
                              isActive
                                ? 'font-medium text-[#23272E]'
                                : 'text-[#5C6472] hover:text-[#23272E]'
                            }`}
                          >
                            {item.heading}
                          </a>
                          {item.subsections.length > 0 && (
                            <ul className="mt-2 space-y-1.5 pl-3.5 text-xs">
                              {item.subsections.map((sub) => (
                                <li key={sub.id}>
                                  <a
                                    href={`#${sub.id}`}
                                    className="block leading-snug text-[#7B8494] transition-colors hover:text-[#23272E]"
                                  >
                                    {sub.heading}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Article Prose */}
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="max-w-[66ch] space-y-10">
                {article.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 space-y-4"
                  >
                    <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-[#23272E]">
                      {section.heading}
                    </h2>

                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-[16.5px] leading-[1.8] text-[#4E5663]"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.pullQuote && (
                      <blockquote className="my-6 rounded-xl border border-[#E6E8EC] bg-[#F7F8FA] px-6 py-5 font-display text-lg font-medium leading-relaxed text-[#23272E]">
                        „{section.pullQuote}”
                      </blockquote>
                    )}

                    {section.keyPoints && section.keyPoints.length > 0 && (
                      <div className="my-6 rounded-xl border border-[#E6E8EC] bg-[#F7F8FA] p-6">
                        <h3 className="font-display text-sm font-semibold text-[#23272E]">
                          Warto zapamiętać
                        </h3>
                        <ul className="mt-3.5 space-y-2.5">
                          {section.keyPoints.map((point, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#4E5663]"
                            >
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#3B4452]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {section.subsections && section.subsections.length > 0 && (
                      <div className="space-y-6 pt-2">
                        {section.subsections.map((sub) => (
                          <div
                            key={sub.id}
                            id={sub.id}
                            className="scroll-mt-24 space-y-3"
                          >
                            <h3 className="font-display text-lg font-semibold leading-snug text-[#23272E]">
                              {sub.heading}
                            </h3>
                            {sub.paragraphs.map((paragraph, index) => (
                              <p
                                key={index}
                                className="text-[16.5px] leading-[1.8] text-[#4E5663]"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}

                {/* Topics (Unboxed clean text links) */}
                {article.tags.length > 0 && (
                  <div className="border-t border-[#E6E8EC] pt-6 text-sm text-[#7B8494]">
                    <span className="font-medium text-[#4E5663]">Tematy: </span>
                    {article.tags.map((tag, index) => (
                      <span key={tag}>
                        <Link
                          to={`/szukaj?q=${encodeURIComponent(tag)}`}
                          className="transition-colors hover:text-[#23272E] hover:underline underline-offset-4"
                        >
                          {tag}
                        </Link>
                        {index < article.tags.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                )}

                {/* Author Bio Card */}
                {author && (
                  <div className="rounded-xl border border-[#E6E8EC] bg-[#F7F8FA] p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-display text-sm font-semibold text-[#23272E] border border-[#E6E8EC]">
                        {author.initials}
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold text-[#23272E]">
                          {author.name}
                        </p>
                        <p className="text-xs text-[#7B8494]">
                          {author.role} · {author.specialization}
                        </p>
                        <p className="mt-2.5 text-sm leading-relaxed text-[#4E5663]">
                          {author.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <Link
                    to={`/kategoria/${category.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#3B4452] transition-colors hover:text-[#23272E]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Wróć do działu {category.name}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="border-t border-[#E6E8EC] bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[#23272E]">
            Powiązane artykuły
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <ArticleCard key={related.id} article={related} showAuthor />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import type { Article } from '../types/editorial';
import { CATEGORIES } from '../config/site';
import { AUTHORS } from '../data/authors';
import { formatPolishDate, formatReadTime } from '../utils/formatters';
import { EditorialImage } from './EditorialImage';

interface ArticleCardProps {
  article: Article;
  variant?: 'standard' | 'horizontal' | 'compact';
  showExcerpt?: boolean;
  showAuthor?: boolean;
}

export function ArticleCard({
  article,
  variant = 'standard',
  showExcerpt = true,
  showAuthor = false,
}: ArticleCardProps) {
  const category = CATEGORIES[article.category];
  const author = AUTHORS[article.authorId];

  if (variant === 'horizontal') {
    return (
      <article className="group grid gap-5 sm:grid-cols-12 sm:items-start">
        <Link
          to={`/artykul/${article.slug}`}
          className="block sm:col-span-5"
          aria-label={article.title}
        >
          <EditorialImage
            src={article.image}
            alt={article.imageAlt}
            aspectClass="aspect-[4/3]"
          />
        </Link>

        <div className="sm:col-span-7">
          <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#7B8494]">
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

          <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight text-[#23272E] transition-colors group-hover:text-[#3B4452]">
            <Link to={`/artykul/${article.slug}`}>{article.title}</Link>
          </h3>

          {showExcerpt && (
            <p className="mt-2.5 line-clamp-3 text-[15px] leading-relaxed text-[#4E5663]">
              {article.excerpt}
            </p>
          )}

          {showAuthor && author && (
            <p className="mt-3 text-xs font-medium text-[#7B8494]">
              {author.name}
            </p>
          )}
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group flex flex-col">
        <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#7B8494]">
          <Link
            to={`/kategoria/${category.slug}`}
            className="font-medium text-[#4E5663] transition-colors hover:text-[#23272E]"
          >
            {category.name}
          </Link>
          <span aria-hidden="true">·</span>
          <span>{formatReadTime(article.readTimeMinutes)}</span>
        </div>

        <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-[#23272E] transition-colors group-hover:text-[#3B4452]">
          <Link to={`/artykul/${article.slug}`}>{article.title}</Link>
        </h3>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col">
      <Link
        to={`/artykul/${article.slug}`}
        className="block"
        aria-label={article.title}
      >
        <EditorialImage
          src={article.image}
          alt={article.imageAlt}
          aspectClass="aspect-[4/3]"
        />
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#7B8494]">
          <Link
            to={`/kategoria/${category.slug}`}
            className="font-medium text-[#4E5663] transition-colors hover:text-[#23272E]"
          >
            {category.name}
          </Link>
          <span aria-hidden="true">·</span>
          <span>{formatReadTime(article.readTimeMinutes)}</span>
        </div>

        <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-[#23272E] transition-colors group-hover:text-[#3B4452]">
          <Link to={`/artykul/${article.slug}`}>{article.title}</Link>
        </h3>

        {showExcerpt && (
          <p className="mt-2.5 line-clamp-3 text-[15px] leading-relaxed text-[#4E5663]">
            {article.excerpt}
          </p>
        )}

        <div className="mt-auto pt-4 text-xs text-[#7B8494]">
          {showAuthor && author ? (
            <span>
              {author.name} ·{' '}
              <time dateTime={article.publishedAt}>
                {formatPolishDate(article.publishedAt)}
              </time>
            </span>
          ) : (
            <time dateTime={article.publishedAt}>
              {formatPolishDate(article.publishedAt)}
            </time>
          )}
        </div>
      </div>
    </article>
  );
}

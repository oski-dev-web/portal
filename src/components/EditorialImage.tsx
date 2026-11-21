import { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  aspectClass = 'aspect-[4/3]',
  className = '',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#F1F3F5] ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-[#F7F8FA] p-6 text-center"
          role="img"
          aria-label={alt}
        >
          <span className="font-display text-xs font-medium tracking-[0.14em] text-[#7B8494] uppercase">
            BEAUTIVA
          </span>
        </div>
      )}
    </div>
  );
}

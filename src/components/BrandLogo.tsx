interface BrandLogoProps {
  className?: string;
}

/**
 * Minimalistyczny sygnet redakcyjny BEAUTIVA — subtelny znak botaniczno-geometryczny
 * zaprojektowany pod jasne, spokojne tło w miękkim graficie.
 */
export function BrandLogo({ className = 'h-10 w-10' }: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Zewnętrzny delikatny okrąg ramujący */}
      <circle
        cx="24"
        cy="24"
        r="21.5"
        stroke="#D5D9E0"
        strokeWidth="1.25"
      />

      {/* Centralny płatek / kropla pielęgnacyjna */}
      <path
        d="M24 10.5C28.2 15.8 30.2 20.4 30.2 25.2C30.2 29.5 27.4 32.8 24 32.8C20.6 32.8 17.8 29.5 17.8 25.2C17.8 20.4 19.8 15.8 24 10.5Z"
        stroke="#23272E"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Lewy otwierający się listek */}
      <path
        d="M23.5 32.8C17.8 32.4 13.5 28.4 12.6 22.4C16.8 22.8 20.2 25.4 21.8 29.2"
        stroke="#4E5663"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Prawy otwierający się listek */}
      <path
        d="M24.5 32.8C30.2 32.4 34.5 28.4 35.4 22.4C31.2 22.8 27.8 25.4 26.2 29.2"
        stroke="#4E5663"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Subtelna oś centralna i punkt bazowy */}
      <path
        d="M24 19.5V36.5"
        stroke="#23272E"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="24" cy="17" r="1.4" fill="#23272E" />
    </svg>
  );
}

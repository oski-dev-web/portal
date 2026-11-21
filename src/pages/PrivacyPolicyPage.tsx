import { SITE_CONFIG } from '../config/site';
import { useSeo } from '../hooks/useSeo';

export function PrivacyPolicyPage() {
  useSeo({
    title: 'Polityka prywatności',
    description: `Zasady prywatności i przetwarzania danych w portalu ${SITE_CONFIG.name}.`,
  });

  return (
    <div className="bg-white">
      <section className="border-b border-[#E6E8EC] bg-[#F7F8FA]">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-[#7B8494]">Dokumenty serwisu</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#23272E] sm:text-4xl">
            Polityka prywatności
          </h1>
          <p className="mt-3 text-sm text-[#7B8494]">
            Ostatnia aktualizacja: listopad {SITE_CONFIG.foundedYear}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#4E5663]">
          <div>
            <h2 className="font-display text-xl font-semibold text-[#23272E]">
              1. Informacje ogólne
            </h2>
            <p className="mt-3">
              Niniejsza strona jest demonstracyjną wersją tematycznego portalu redakcyjnego{' '}
              {SITE_CONFIG.name}. Aplikacja działa w całości lokalnie w przeglądarce użytkownika,
              nie korzysta z zewnętrznej bazy danych i nie przekazuje danych osobowych podmiotom
              trzecim.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[#23272E]">
              2. Formularz kontaktowy
            </h2>
            <p className="mt-3">
              Formularz dostępny na podstronie Kontakt służy wyłącznie do prezentacji działania
              serwisu. Wprowadzane w nim informacje nie są zapisywane w bazie danych ani wysyłane
              poza przeglądarkę. Przed uruchomieniem wersji produkcyjnej administrator serwisu
              uzupełni dokument o pełne dane rejestrowe oraz podstawy prawne zgodne z RODO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[#23272E]">
              3. Pliki cookies i wyszukiwanie
            </h2>
            <p className="mt-3">
              Serwis nie instaluje zewnętrznych skryptów śledzących. Wyszukiwanie artykułów odbywa
              się bezpośrednio po stronie przeglądarki na lokalnej liście publikacji.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[#23272E]">
              4. Kontakt w sprawie prywatności
            </h2>
            <p className="mt-3">
              W przypadku pytań dotyczących zasad funkcjonowania portalu można skontaktować się z
              nami pod adresem{' '}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="font-medium text-[#23272E] underline-offset-4 hover:underline"
              >
                {SITE_CONFIG.contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

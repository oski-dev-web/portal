import { EDITORIAL_IMAGES } from '../config/site';
import type { Article, CategorySlug } from '../types/editorial';

export const ARTICLES: Article[] = [
  // =========================================================================
  // KATEGORIA 1: PIELĘGNACJA SKÓRY (4 artykuły — w tym 1 wyróżniony Hero)
  // =========================================================================
  {
    id: 'sk-1',
    slug: 'bariera-hydrolipidowa-jak-rozpoznac-i-odbudowac-rownowage-skory',
    title: 'Bariera hydrolipidowa w praktyce: jak rozpoznać jej osłabienie i odbudować komfort skóry',
    excerpt:
      'Uczucie ściągnięcia po myciu, nagła nadwrażliwość na dotychczasowe kremy i matowy koloryt rzadko wymagają kolejnego serum z kwasami. Wyjaśniamy, jak przywrócić równowagę naskórka w czterech spokojnych krokach.',
    category: 'pielegnacja-skory',
    authorId: 'karolina-nowicka',
    publishedAt: '2026-11-18',
    readTimeMinutes: 7,
    image: EDITORIAL_IMAGES.heroSkincareRitual,
    imageAlt: 'Minimalistyczny poranny rytuał pielęgnacyjny ze szklaną butelką serum i lnianym ręcznikiem na kamiennym blacie',
    imageCaption: 'Prosty schemat oparty na łagodnym oczyszczaniu i lipidach to fundament długofalowego komfortu cery.',
    featured: true,
    popularRank: 1,
    isGuide: true,
    tags: ['bariera hydrolipidowa', 'ceramidy', 'skóra wrażliwa', 'minimalizm'],
    sections: [
      {
        id: 'czym-jest-bariera',
        heading: 'Czym właściwie jest bariera hydrolipidowa i dlaczego tak łatwo ją naruszyć',
        paragraphs: [
          'Zewnętrzna warstwa naskórka działa jak precyzyjnie ułożony mur: komórki rogowe pełnią rolę cegieł, a spoiwo międzykomórkowe — złożone z ceramidów, cholesterolu i wolnych kwasów tłuszczowych — utrzymuje szczelność całej konstrukcji. Na powierzchni znajduje się cienki płaszcz hydrolipidowy o lekko kwaśnym pH, który ogranicza transepidermalną utratę wody i wspiera naturalny mikrobiom.',
          'W codziennej praktyce do osłabienia tej warstwy najczęściej prowadzi nie brak pielęgnacji, lecz jej nadmiar. Zbyt częste złuszczanie kwasami, mycie gorącą wodą, agresywne detergenty o wysokim potencjale odtłuszczającym oraz sezonowe zmiany temperatur stopniowo wypłukują lipidy, zanim skóra zdąży je uzupełnić.',
        ],
        subsections: [
          {
            id: 'sygnaly-ostrzegawcze',
            heading: 'Pierwsze sygnały przeciążenia naskórka',
            paragraphs: [
              'Najbardziej charakterystycznym objawem jest paradoksalne połączenie: skóra jednocześnie piecze lub łuszczy się w okolicy skrzydełek nosa, a w strefie T zaczyna się nadmiernie błyszczeć. Zdarza się również, że dobrze znany wcześniej krem nawilżający wywołuje krótkotrwałe zaczerwienienie zaraz po aplikacji.',
            ],
          },
        ],
      },
      {
        id: 'plan-odbudowy',
        heading: 'Czterotygodniowy reset pielęgnacji bez zbędnych kroków',
        paragraphs: [
          'Regeneracja bariery naskórkowej wymaga przede wszystkim czasu i zdjęcia ze skóry bodźców drażniących. Cykl odnowy naskórka trwa około 28 dni, dlatego rozsądny plan naprawczy zakłada minimum trzy do czterech tygodni wyciszenia.',
          'W tym okresie warto odłożyć peelingi ziarniste, wysokie stężenia kwasów AHA/BHA, retinoidy oraz produkty mocno perfumowane. Zamiast rozbudowanej wieloetapowej rutyny lepiej oprzeć dzień na trzech powtarzalnych elementach: łagodnym oczyszczaniu, nawilżeniu z lipidami oraz fotoprotekcji.',
        ],
        pullQuote:
          'Skóra z naruszoną barierą nie potrzebuje kolejnego aktywnego koncentratu — potrzebuje spokoju, lipidów i przewidywalnego rytmu.',
        subsections: [
          {
            id: 'oczyszczanie-i-temperatura',
            heading: 'Łagodne oczyszczanie i letnia woda',
            paragraphs: [
              'Rano w wielu przypadkach wystarcza przemycie twarzy letnią wodą lub ultradelikatną emulsją bez silnych surfaktantów. Wieczorem zmycie filtrów UV i makijażu warto przeprowadzić etapowo: najpierw olejek lub masełko emulgujące, następnie łagodny żel myjący bez wysuszającego efektu „skrzypiącej” skóry.',
            ],
          },
          {
            id: 'skladniki-wspierajace',
            heading: 'Składniki, które realnie wspierają regenerację',
            paragraphs: [
              'W formulacjach odbudowujących warto szukać ceramidów (np. Ceramide NP, AP, EOP), skwalanu, pantenolu, alantoiny, ektoiny, beta-glukanu oraz kwasów tłuszczowych omega. Połączenie humektantów wiążących wodę z emolientami ograniczającymi jej odparowanie tworzy stabilne środowisko do naturalnej naprawy naskórka.',
            ],
          },
        ],
        keyPoints: [
          'Ogranicz mycie twarzy do letniej wody i delikatnych emulsji o fizjologicznym pH.',
          'Zrób 3–4 tygodnie przerwy od kwasów złuszczających i retinoidów.',
          'Nakładaj krem regenerujący na lekko wilgotną skórę, aby ograniczyć utratę wody.',
          'Utrzymuj codzienną ochronę przed promieniowaniem UV, które spowalnia naprawę lipidów.',
        ],
      },
      {
        id: 'powrot-do-aktywnych',
        heading: 'Jak bezpiecznie wrócić do składników aktywnych',
        paragraphs: [
          'Gdy znika uczucie ściągnięcia, a cera odzyskuje równomierny koloryt i miękkość, można stopniowo wprowadzać pojedyncze składniki aktywne — zawsze po jednym na raz, z co najmniej dwutygodniową obserwacją reakcji skóry. Dzięki temu łatwo wychwycić granicę tolerancji i uniknąć ponownego przeciążenia.',
        ],
      },
    ],
  },
  {
    id: 'sk-2',
    slug: 'dwuetapowe-oczyszczanie-twarzy-kiedy-ma-sens-a-kiedy-mozna-je-uproscic',
    title: 'Dwuetapowe oczyszczanie twarzy: kiedy rzeczywiście ma sens, a kiedy można je uprościć',
    excerpt:
      'Metoda oparta na olejku i żelu zyskała ogromną popularność, ale nie każda cera wymaga identycznego schematu o każdej porze dnia. Sprawdzamy, jak dobrać oczyszczanie do realnych potrzeb skóry.',
    category: 'pielegnacja-skory',
    authorId: 'karolina-nowicka',
    publishedAt: '2026-11-11',
    readTimeMinutes: 5,
    image: EDITORIAL_IMAGES.skincareBarrierCream,
    imageAlt: 'Ceramiczny słoiczek z delikatnym kremem pielęgnacyjnym na jasnym kamieniu trawertynowym',
    imageCaption: 'Dobrze dobrane oczyszczanie pozostawia skórę czystą, lecz pozbawioną uczucia napięcia.',
    popularRank: 4,
    tags: ['oczyszczanie twarzy', 'demakijaż', 'rutyna wieczorna'],
    sections: [
      {
        id: 'mechanizm-oczyszczania',
        heading: 'Dlaczego wieczorem tłuszcz rozpuszcza tłuszcz',
        paragraphs: [
          'Filtry przeciwsłoneczne nowej generacji, podkłady o przedłużonej trwałości oraz sebum zmieszane z pyłem miejskim mają charakter lipofilowy. Sam łagodny żel wodny nie zawsze potrafi je dokładnie usunąć bez długiego pocierania skóry, które mechanicznie drażni naskórek.',
          'Pierwszy etap — olejek hydrofilowy, balsam myjący lub mleczko — rozpuszcza warstwę makijażu i filtrów w sposób bezinwazyjny. Dopiero drugi krok, czyli delikatna emulsja lub pianka myjąca, domyka proces i usuwa pozostałości emulgatorów wraz z zanieczyszczeniami rozpuszczalnymi w wodzie.',
        ],
      },
      {
        id: 'kiedy-wystarczy-jeden-etap',
        heading: 'Kiedy jednoetapowe mycie będzie lepszym wyborem',
        paragraphs: [
          'Dwuetapowe oczyszczanie nie jest dogmatem. Jeśli danego dnia nie stosujesz makijażu ani wodoodpornego SPF, a Twoja skóra jest sucha lub reaktywna, pojedyncze, staranne umycie łagodną emulsją całkowicie wystarczy.',
        ],
        subsections: [
          {
            id: 'poranna-pielegnacja',
            heading: 'Poranne mycie bez nadmiernego odtłuszczania',
            paragraphs: [
              'Po nocy na skórze nie ma filtrów UV ani kurzu z zewnątrz — znajdują się na niej głównie resztki wieczornego kremu i niewielka ilość sebum. Cery suche i dojrzałe często lepiej reagują na samą wodę lub pojedynczą dawkę mlecznej emulsji niż na pieniący się żel.',
            ],
          },
        ],
      },
      {
        id: 'najczestsze-bledy',
        heading: 'Trzy drobne nawyki, które poprawiają komfort mycia',
        paragraphs: [
          'Zamiast zmieniać kosmetyki co kilka tygodni, warto przyjrzeć się samej technice: długości masażu (około 30–40 sekund), dokładnemu spłukiwaniu przy linii włosów i żuchwy oraz delikatnemu osuszaniu twarzy czystym, osobnym ręcznikiem bez pocierania.',
        ],
        keyPoints: [
          'Emulguj olejek na twarzy odrobiną ciepłej wody przed spłukaniem.',
          'Wymieniaj ręcznik do twarzy co 2–3 dni lub stosuj miękkie chusteczki bawełniane.',
          'Aplikuj tonik lub krem w ciągu kilku minut po osuszeniu skóry.',
        ],
      },
    ],
  },
  {
    id: 'sk-3',
    slug: 'masaz-twarzy-gua-sha-i-drenaz-limfatyczny-bez-rozciagania-skory',
    title: 'Masaż twarzy i płytka gua sha: jak wykonywać drenaż limfatyczny bez rozciągania skóry',
    excerpt:
      'Dobrze poprowadzony automasaż potrafi zmniejszyć poranną opuchliznę i rozluźnić napięcie żuchwy, ale wymaga odpowiedniego poślizgu i bardzo lekkiego nacisku. Poznaj bezpieczne zasady techniki.',
    category: 'pielegnacja-skory',
    authorId: 'helena-wisniewska',
    publishedAt: '2026-11-02',
    readTimeMinutes: 6,
    image: EDITORIAL_IMAGES.skincareFacialMassage,
    imageAlt: 'Kamienna płytka gua sha w odcieniu kremowym obok ceramicznej miseczki i gałązki oliwnej na lnianej tkaninie',
    imageCaption: 'Kluczem w masażu gua sha jest płaski kąt prowadzenia płytki oraz odpowiedni poślizg olejku.',
    isGuide: true,
    tags: ['masaż twarzy', 'gua sha', 'drenaż limfatyczny', 'rytuały'],
    sections: [
      {
        id: 'co-daje-masaz',
        heading: 'Realne korzyści automasażu zamiast obietnic bez pokrycia',
        paragraphs: [
          'Regularny, łagodny masaż twarzy nie zastąpi snu ani ochrony przeciwsłonecznej, ale pełni ważną funkcję wspierającą: usprawnia odpływ chłonki, redukuje poranne zastoje w okolicy oczu i pomaga rozluźnić spięte mięśnie żwacze po długim dniu przed ekranem.',
          'Równie istotny jest aspekt wyciszenia — pięć minut spokojnych, powtarzalnych ruchów przed snem obniża napięcie mimiczne i ułatwia przejście z trybu zadaniowego w wieczorny odpoczynek.',
        ],
      },
      {
        id: 'technika-krok-po-kroku',
        heading: 'Zasady bezpiecznego prowadzenia dłoni i płytki',
        paragraphs: [
          'Najczęstszy błąd podczas korzystania z gua sha to ustawianie kamienia prostopadle do skóry oraz zbyt duży nacisk. Płytkę należy trzymać niemal płasko — pod kątem około 15 stopni — i poruszać nią powoli, zawsze przy pełnym poślizgu.',
        ],
        subsections: [
          {
            id: 'poslizg-i-przygotowanie',
            heading: 'Przygotowanie skóry i wybór bazy poślizgowej',
            paragraphs: [
              'Przed masażem skóra musi być dokładnie oczyszczona. Jako bazę warto zastosować lekki olejek roślinny (na przykład ze słodkich migdałów, skwalan lub olej z pestek śliwki) albo bogatszą emulsję, która nie wchłania się natychmiast. Po zakończeniu masażu nadmiar olejku można delikatnie odsączyć chusteczką lub zmyć, jeśli cera ma skłonność do zapychania.',
            ],
          },
          {
            id: 'kierunki-ruchow',
            heading: 'Kolejność i kierunki drenażu',
            paragraphs: [
              'Zawsze zaczynaj od szyi i okolic obojczyków, aby otworzyć drogę odpływu limfy, a dopiero potem przechodź do linii żuchwy, policzków i czoła. Każdy ruch wykonuj od środka twarzy na zewnątrz i lekko w górę, kończąc delikatnym zjechaniem w dół po bocznej krawędzi szyi.',
            ],
          },
        ],
        keyPoints: [
          'Nie masuj skóry z aktywnymi stanami zapalnymi ani zaostrzonym trądzikiem różowatym.',
          'Myj płytkę ciepłą wodą z delikatnym mydłem po każdym użyciu.',
          'Wystarczy 5–7 minut trzy razy w tygodniu — liczy się systematyczność, nie siła nacisku.',
        ],
      },
    ],
  },
  {
    id: 'sk-4',
    slug: 'pielegnacja-skory-jesienia-i-zima-jak-chronic-cere-przed-suchym-powietrzem',
    title: 'Pielęgnacja skóry jesienią i zimą: jak chronić cerę przed mrozem i sezonem grzewczym',
    excerpt:
      'Gwałtowne przejścia między chłodnym wiatrem a suchym powietrzem w ogrzewanych pomieszczeniach stawiają przed naskórkiem zupełnie inne wyzwania niż lato. Podpowiadamy, co warto skorygować w kosmetyczce.',
    category: 'pielegnacja-skory',
    authorId: 'karolina-nowicka',
    publishedAt: '2026-10-21',
    readTimeMinutes: 5,
    image: EDITORIAL_IMAGES.skincareBarrierCream,
    imageAlt: 'Krem o bogatej konsystencji obok ceramicznego opakowania w naturalnym świetle dziennym',
    imageCaption: 'Zimą warto stawiać na warstwowe nawilżanie domknięte łagodnym kremem ochronnym.',
    tags: ['pielęgnacja zimowa', 'skóra sucha', 'nawilżanie', 'sezon grzewczy'],
    sections: [
      {
        id: 'dlaczego-skora-traci-wode',
        heading: 'Dlaczego zimą nawet cera mieszana bywa odwodniona',
        paragraphs: [
          'Gdy wilgotność powietrza w ogrzewanych wnętrzach spada poniżej 35 procent, woda z powierzchni naskórka paruje znacznie szybciej. Na zewnątrz niskie temperatury zwężają naczynia krwionośne i spowalniają wydzielanie sebum, co osłabia naturalną warstwę ochronną.',
          'W efekcie nawet osoby o cerze normalnej lub mieszanej zauważają szorstkość, uczucie ściągnięcia po powrocie do domu oraz skłonność do rumienia na policzkach.',
        ],
      },
      {
        id: 'korekta-rutyny',
        heading: 'Jak mądrze zmodyfikować rutynę bez wymiany całej półki',
        paragraphs: [
          'Nie trzeba rezygnować ze wszystkich letnich produktów. Często wystarcza dodanie jednej warstwy otulającej wieczorem oraz zamiana lekkiego żelu nawilżającego na krem o pełniejszej frakcji lipidowej w dni z silnym wiatrem.',
        ],
        subsections: [
          {
            id: 'mikroklimat-w-domu',
            heading: 'Wsparcie spoza kosmetyczki',
            paragraphs: [
              'Nawilżacz powietrza w sypialni, unikanie długich, gorących pryszniców oraz osłanianie wrażliwych policzków przed lodowatym wiatrem często przynoszą szybszą poprawę komfortu niż kolejny kosmetyk w łazience.',
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // KATEGORIA 2: WŁOSY (4 artykuły)
  // =========================================================================
  {
    id: 'wl-1',
    slug: 'rownowaga-peh-w-pielegnacji-wlosow-przewodnik-bez-skomplikowanych-tabelek',
    title: 'Równowaga PEH bez skomplikowanych tabelek: jak odczytywać potrzeby swoich włosów',
    excerpt:
      'Proteiny, emolienty i humektanty brzmią jak chemiczna łamigłówka, choć w praktyce sprowadzają się do uważnej obserwacji pasm. Wyjaśniamy, jak ułożyć prosty tydzień pielęgnacji.',
    category: 'wlosy',
    authorId: 'zofia-kaczmarek',
    publishedAt: '2026-11-16',
    readTimeMinutes: 7,
    image: EDITORIAL_IMAGES.hairScalpBotanical,
    imageAlt: 'Zdrowe, naturalnie pofalowane brązowe włosy w ciepłym popołudniowym świetle na neutralnym tle',
    imageCaption: 'Elastyczność i miękkość pasm wynikają z równowagi między nawilżeniem, odbudową i wygładzeniem.',
    popularRank: 2,
    isGuide: true,
    tags: ['równowaga PEH', 'porowatość włosów', 'odżywki', 'świadoma pielęgnacja'],
    sections: [
      {
        id: 'trzy-filary-peh',
        heading: 'Trzy grupy składników i ich konkretna rola na łodydze włosa',
        paragraphs: [
          'Każda odżywka i maska do włosów opiera się na proporcjach trzech grup składników. Proteiny (np. keratyna hydrolizowana, proteiny jedwabiu, owsa lub pszenicy) uzupełniają mikrouszkodzenia i dodają pasmom sprężystości. Humektanty (gliceryna, aloes, pantenol, mocznik) wiążą wilgoć, nadając włosom miękkość. Emolienty (oleje roślinne, masła, alkohole tłuszczowe, silikony) tworzą warstwę ochronną, która domyka łuski i zabezpiecza nawilżenie.',
          'Problem pojawia się wtedy, gdy przez kilka tygodni sięgamy wyłącznie po jeden typ formulacji — na przykład same lekkie odżywki humektantowe przy wysokiej wilgotności powietrza, co skutkuje puszeniem się pasm.',
        ],
      },
      {
        id: 'jak-rozpoznac-czego-brakuje',
        heading: 'Jak rozpoznać, czego w danym tygodniu potrzebują pasma',
        paragraphs: [
          'Zamiast trzymać się sztywnego harmonogramu z internetu, lepiej po każdym myciu zadać sobie jedno pytanie: jakie włosy są w dotyku po wysuszeniu?',
        ],
        subsections: [
          {
            id: 'nadmiar-i-niedobor',
            heading: 'Szybka diagnoza dotykowa',
            paragraphs: [
              'Włosy przyklapnięte, obciążone i szybko zbijające się w strąki zazwyczaj otrzymały za dużo emolientów — pomoże dokładniejsze oczyszczenie oraz lżejsza odżywka proteinowo-humektantowa. Pasma sztywne, szorstkie i pozbawione lekkości bywają przeproteinowane; wówczas ulgę przynosi maska emolientowa. Z kolei lekkie, sianowate i elektryzujące się włosy najczęściej potrzebują domknięcia emolientem po wcześniejszym nawilżeniu.',
            ],
          },
        ],
        pullQuote:
          'Najlepsza pielęgnacja włosów nie polega na posiadaniu piętnastu masek, lecz na umiejętnym rotowaniu trzech dobrze dobranych formuł.',
      },
      {
        id: 'prosty-schemat-tygodniowy',
        heading: 'Praktyczny plan minimum z trzema odżywkami',
        paragraphs: [
          'Dla większości osób w zupełności wystarczają trzy produkty na półce: uniwersalna odżywka emolientowa (najbezpieczniejsza baza do zamykania pielęgnacji), lekka odżywka nawilżająca oraz raz na 1–2 tygodnie maska proteinowa dopasowana do grubości i porowatości włosa.',
        ],
        keyPoints: [
          'Zawsze rozczesuj pasma delikatnie z nałożoną odżywką, zaczynając od końcówek.',
          'Zabezpieczaj końcówki kroplą serum emolientowego po każdym myciu.',
          'Dostosowuj ilość humektantów do pogody — w deszczowe dni zmniejszaj ich udział.',
        ],
      },
    ],
  },
  {
    id: 'wl-2',
    slug: 'peeling-skory-glowy-i-masaz-trychologiczny-jak-zadbac-o-cebulki',
    title: 'Peeling skóry głowy i delikatne oczyszczanie: fundament mocniejszych włosów u nasady',
    excerpt:
      'Skóra głowy jest przedłużeniem skóry twarzy, a jednak często traktujemy ją w pośpiechu. Dowiedz się, jak działa peeling enzymatyczny i kwasowy oraz jak dobrać częstotliwość złuszczania.',
    category: 'wlosy',
    authorId: 'zofia-kaczmarek',
    publishedAt: '2026-11-08',
    readTimeMinutes: 6,
    image: EDITORIAL_IMAGES.hairSilkCare,
    imageAlt: 'Drewniana szczotka do włosów, butelka olejku z pipetą i jedwabna wstążka na jasnym wapieniu',
    imageCaption: 'Regularne, łagodne złuszczanie naskórka skóry głowy poprawia lekkość pasm i wchłanianie wcierek.',
    tags: ['skóra głowy', 'peeling trychologiczny', 'oczyszczanie', 'wcierki'],
    sections: [
      {
        id: 'dlaczego-szampon-to-nie-wszystko',
        heading: 'Dlaczego sam szampon nie zawsze wystarcza skórze głowy',
        paragraphs: [
          'Na powierzchni skalpu każdego dnia gromadzą się zrogowaciały naskórek, sebum, pozostałości kosmetyków do stylizacji oraz zanieczyszczenia środowiskowe. Łagodne szampony na co dzień świetnie odświeżają pasma, jednak z czasem przy ujściach mieszków włosowych może tworzyć się warstwa krystalizacji, która ogranicza uczucie lekkości i utrudnia działanie wcierek.',
          'Rozwiązaniem nie jest codzienne sięganie po silne detergenty, lecz regularny, łagodny peeling trychologiczny stosowany raz na 7 do 14 dni.',
        ],
      },
      {
        id: 'rodzaje-peelingow',
        heading: 'Peeling enzymatyczny, kwasowy czy mechaniczny — co wybrać',
        paragraphs: [
          'W nowoczesnej pielęgnacji skóry głowy odchodzi się od gruboziarnistych peelingów z drobinkami pestek, które potrafią mikrourazowo rysować naskórek i plątać włosy u nasady. Zdecydowanie delikatniejsze i równie skuteczne są formuły oparte na enzymach (np. papaina, bromelaina) oraz łagodnych kwasach (kwas mlekowy, szikimowy, glukonolakton lub niskie stężenie kwasu salicylowego).',
        ],
        subsections: [
          {
            id: 'jak-aplikowac-peeling',
            heading: 'Prawidłowa aplikacja przed myciem',
            paragraphs: [
              'Preparat najlepiej nakładać na suchą lub lekko zwilżoną skórę głowy przed myciem, dzieląc włosy na przedziałki. Po upływie czasu zalecanego na etykiecie (zwykle 5–10 minut) należy wykonać krótki masaż opuszkami palców, obficie spłukać kosmetyk letnią wodą, a następnie umyć głowę łagodnym szamponem.',
            ],
          },
        ],
      },
      {
        id: 'kiedy-zachowac-ostroznosc',
        heading: 'Kiedy zrezygnować z peelingu i skonsultować się ze specjalistą',
        paragraphs: [
          'Jeśli skóra głowy jest wyraźnie podrażniona, bolesna, pojawiają się ranki lub nasilone łuszczenie o charakterze zapalnym, zamiast domowego złuszczania warto skonsultować się z dermatologiem lub trychologiem. Pielęgnacja domowa ma wspierać zdrowy naskórek, a nie maskować objawy wymagające diagnostyki.',
        ],
      },
    ],
  },
  {
    id: 'wl-3',
    slug: 'olejowanie-wlosow-na-sucho-i-na-podklad-jak-dobrac-metode',
    title: 'Olejowanie włosów krok po kroku: na sucho, na mokro czy na podkład nawilżający?',
    excerpt:
      'Dobrze przeprowadzone olejowanie wygładza łuski i ułatwia rozczesywanie, ale zbyt duża ilość produktu albo źle dobrany sposób zmywania potrafią zniechęcić już po pierwszym razie.',
    category: 'wlosy',
    authorId: 'zofia-kaczmarek',
    publishedAt: '2026-10-29',
    readTimeMinutes: 5,
    image: EDITORIAL_IMAGES.hairSilkCare,
    imageAlt: 'Szklana butelka naturalnego olejku do włosów na jasnej kamiennej powierzchni',
    imageCaption: 'Do pełnego zabiegu olejowania zazwyczaj wystarcza jedna do dwóch łyżeczek oleju.',
    tags: ['olejowanie włosów', 'emulgowanie', 'blask włosów'],
    sections: [
      {
        id: 'ile-oleju-uzyc',
        heading: 'Zasada mniejszej ilości i emulgowania odżywką',
        paragraphs: [
          'Włosy podczas olejowania nie powinny ociekać tłuszczem — wystarczy cienka warstwa sprawiająca, że pasma są lekko dociążone i gładkie w dotyku. Kluczowym momentem zabiegu jest jednak jego zakończenie, czyli emulgowanie.',
          'Zamiast zmywać olej dwukrotnie mocnym szamponem, nałóż na naolejowane pasma porcję lekkiej odżywki bez silikonów i pozostaw ją na 10–15 minut. Emulgatory zawarte w odżywce połączą tłuszcz z wodą, dzięki czemu wszystko spłucze się bez wysuszania włosów.',
        ],
      },
      {
        id: 'wybor-metody',
        heading: 'Trzy warianty zabiegu dla różnych potrzeb',
        paragraphs: [
          'Olejowanie na sucho sprawdza się przy włosach cienkich i łatwych do obciążenia — to najszybsza forma na start. Olejowanie na podkład nawilżający (np. mgiełkę aloesową, wodę z kroplą humektantu lub żel lniany) lepiej służy pasmom suchym, falowanym i rozjaśnianym, którym brakuje miękkości.',
        ],
      },
    ],
  },
  {
    id: 'wl-4',
    slug: 'ochrona-termiczna-i-suszenie-wlosow-fakty-ktore-zmieniaja-kondycje-koncowek',
    title: 'Suszenie i ochrona termiczna: dlaczego naturalne schnięcie nie zawsze jest najlepsze dla pasm',
    excerpt:
      'Przez lata powtarzano, że suszarka zawsze niszczy włosy. Tymczasem długie przetrzymywanie mokrych pasm w ręczniku bywa równie obciążające dla struktury włosa. Wyjaśniamy, jak suszyć bezpiecznie.',
    category: 'wlosy',
    authorId: 'zofia-kaczmarek',
    publishedAt: '2026-10-14',
    readTimeMinutes: 5,
    image: EDITORIAL_IMAGES.hairScalpBotanical,
    imageAlt: 'Miękkie, zadbane fale włosów w ciepłym świetle dziennym',
    imageCaption: 'Umiarkowany nawiew skierowany zgodnie z kierunkiem łusek wygładza pasma i chroni skórę głowy.',
    tags: ['suszenie włosów', 'termoochrona', 'końcówki', 'pielęgnacja'],
    sections: [
      {
        id: 'zmeczenie-higroskopijne',
        heading: 'Dlaczego mokry włos jest najbardziej podatny na uszkodzenia',
        paragraphs: [
          'Gdy włosy chłoną wodę, ich włókna pęcznieją, a wiązania wodorowe ulegają chwilowemu rozluźnieniu. Długotrwałe utrzymywanie wilgotnej skóry głowy — szczególnie nocą — sprzyja również dyskomfortowi mikrobiomu i mechanicznemu tarcie mokrych pasm o poduszkę.',
          'Spokojne osuszenie włosów letnim nawiewem suszarki z odległości kilkunastu centymetrów, poprzedzone delikatnym odciśnięciem wody w bawełniany T-shirt lub ręcznik z mikrofibry, jest często bezpieczniejsze niż wielogodzinne schnięcie w wilgotnym turbanie.',
        ],
      },
      {
        id: 'jak-stosowac-termoochrone',
        heading: 'Rola mgiełki lub kremu termoochronnego',
        paragraphs: [
          'Produkty termoochronne tworzą cienki film spowalniający gwałtowne nagrzewanie się włosa i zmniejszający tarcie szczotki. Warto rozprowadzić je równomiernie na wilgotnych pasmach przed sięgnięciem po suszarkę, a na koniec domknąć stylizację chłodnym nawiewem.',
        ],
      },
    ],
  },

  // =========================================================================
  // KATEGORIA 3: KOSMETYKI (4 artykuły)
  // =========================================================================
  {
    id: 'ko-1',
    slug: 'jak-czytac-sklady-inci-bez-paniki-praktyczny-przewodnik-po-etykiecie',
    title: 'Jak czytać składy INCI bez paniki: 5 zasad, które pozwalają zrozumieć etykietę kosmetyku',
    excerpt:
      'Lista łacińskich i angielskich nazw na odwrocie opakowania nie służy do szukania „zakazanych” słów, lecz do oceny funkcji całej receptury. Poznaj logikę zapisu INCI.',
    category: 'kosmetyki',
    authorId: 'marta-zielinska',
    publishedAt: '2026-11-15',
    readTimeMinutes: 7,
    image: EDITORIAL_IMAGES.cosmeticsBotanicalLab,
    imageAlt: 'Szklane butelki z pipetami, biały porcelanowy moździerz i suszone zioła na jasnym kamieniu',
    imageCaption: 'Zrozumienie kolejności składników i ich ról w recepturze pomaga kupować mniej, ale trafniej.',
    popularRank: 3,
    isGuide: true,
    tags: ['INCI', 'składy kosmetyków', 'świadome zakupy', 'formulacje'],
    sections: [
      {
        id: 'kolejnosc-na-etykiecie',
        heading: 'Co oznacza kolejność składników i gdzie przebiega granica 1 procenta',
        paragraphs: [
          'W Unii Europejskiej składniki kosmetyczne w zapisie INCI wymienia się malejąco według ich stężenia w formule — ale zasada ta dotyczy substancji występujących powyżej 1 procenta masy produktu. Wszystko poniżej tej granicy producent może ułożyć w dowolnej kolejności.',
          'Dlatego pierwsze pięć do siedmiu pozycji zwykle opisuje bazę kosmetyku: rozpuszczalnik (najczęściej wodę), emolienty, humektanty oraz emulgatory odpowiedzialne za konsystencję i komfort rozprowadzania.',
        ],
      },
      {
        id: 'dlaczego-niskie-stezenie-bywa-zaleta',
        heading: 'Dlaczego składnik na końcu listy wcale nie musi być bezużyteczny',
        paragraphs: [
          'Wiele nowoczesnych substancji aktywnych działa już w ułamkach procenta. Retinol, peptydy sygnałowe, kwas hialuronowy czy wybrane ekstrakty botaniczne nie wymagają wysokich stężeń, by spełniać swoją funkcję w recepturze — wyższe stężenie wcale nie oznacza lepszej skuteczności, a często zwiększa ryzyko podrażnień.',
        ],
        subsections: [
          {
            id: 'alkohole-i-konserwanty',
            heading: 'Alkohole tłuszczowe i konserwanty — najczęstsze nieporozumienia',
            paragraphs: [
              'Słowo „alcohol” na etykiecie bywa mylące. Cetearyl Alcohol czy Cetyl Alcohol to łagodne alkohole tłuszczowe o działaniu zmiękczającym, zupełnie inne niż wysuszający Alcohol Denat. Podobnie układ konserwujący jest niezbędnym elementem bezpieczeństwa mikrobiologicznego w produktach zawierających wodę.',
            ],
          },
        ],
        pullQuote:
          'Dobra formulacja to harmonia całej receptury, a nie wyścig na najwyższą liczbę procentów na froncie kartonika.',
      },
      {
        id: 'kryteria-wyboru',
        heading: 'O co pytać przed włożeniem produktu do koszyka',
        paragraphs: [
          'Zamiast analizować każdą nazwę w oderwaniu od reszty, warto sprawdzić trzy rzeczy: czy baza pasuje do rodzaju mojej skóry, jakie substancje aktywne pełnią główną rolę oraz czy w składzie obecne są substancje zapachowe, na które moja cera reaguje nadwrażliwością.',
        ],
        keyPoints: [
          'Pierwsze pozycje INCI mówią o bazie i odczuciu sensorycznym formuły.',
          'Stężenie poniżej 1% jest całkowicie naturalne dla peptydów, retinoidów i antyoksydantów.',
          'Alkohole tłuszczowe (Cetyl, Cetearyl, Stearyl) są emolientami i nie wysuszają naskórka.',
        ],
      },
    ],
  },
  {
    id: 'ko-2',
    slug: 'filtry-przeciwsloneczne-spf-czym-roznia-sie-filtry-mineralne-od-organicznych',
    title: 'Filtry SPF bez tajemnic: czym różnią się formuły mineralne, organiczne i hybrydowe',
    excerpt:
      'Wybór kremu z filtrem, po który chętnie sięgasz każdego ranka, decyduje o skuteczności całej ochrony przeciwsłonecznej. Porównujemy typy filtrów i ich zachowanie pod makijażem.',
    category: 'kosmetyki',
    authorId: 'marta-zielinska',
    publishedAt: '2026-11-05',
    readTimeMinutes: 6,
    image: EDITORIAL_IMAGES.cosmeticsSpfMinimal,
    imageAlt: 'Minimalistyczne matowe tubki kosmetyczne w piaskowym kolorze i szklany flakon na wapiennych blokach',
    imageCaption: 'Nowoczesne filtry organiczne nowej generacji oferują lekkie, nietłuste wykończenie idealne na co dzień.',
    popularRank: 5,
    tags: ['SPF', 'fotoprotekcja', 'filtry UV', 'UVA'],
    sections: [
      {
        id: 'spf-i-ochrona-uva',
        heading: 'SPF to nie wszystko — zwróć uwagę na ochronę przed UVA',
        paragraphs: [
          'Wskaźnik SPF informuje głównie o stopniu ochrony przed promieniowaniem UVB, odpowiedzialnym za rumień i oparzenia słoneczne. Równie istotne w kontekście fotostarzenia i przebarwień jest promieniowanie UVA, które przenika przez chmury i szyby przez cały rok.',
          'W Europie potwierdzeniem odpowiedniej ochrony przed UVA jest symbol UVA wpisany w kółeczko (oznacza ochronę UVA na poziomie co najmniej 1/3 wartości SPF) lub oznaczenie PPD / PA++++.',
        ],
      },
      {
        id: 'porownanie-typow-filtrow',
        heading: 'Mineralne, organiczne czy mieszane — jak dopasować konsystencję',
        paragraphs: [
          'Filtry mineralne (tlenek cynku, dwutlenek tytanu) bywają cenione przez osoby z bardzo wrażliwymi oczami i cerą reaktywną, choć w wyższych stężeniach mogą pozostawiać delikatną poświatę. Nowoczesne filtry organiczne (zwane też chemicznymi, np. Tinosorb S, Uvinul A Plus) pozwalają tworzyć niezwykle lekkie emulsje, które nie bielą i dobrze współpracują z makijażem.',
          'Coraz popularniejsze formuły hybrydowe łączą zalety obu rozwiązań, zapewniając szerokie spektrum ochrony i eleganckie, satynowe wykończenie.',
        ],
      },
      {
        id: 'ile-kremu-nakladac',
        heading: 'Kwestia ilości i komfortu reaplikacji',
        paragraphs: [
          'Aby uzyskać deklarowaną na opakowaniu ochronę, na twarz i szyję należy nałożyć porcję odpowiadającą w przybliżeniu długości dwóch palców (około 1,2–1,5 ml na samą twarz). Najlepszy filtr to zawsze ten, który nakładasz w odpowiedniej ilości z przyjemnością, a nie z przymusu.',
        ],
      },
    ],
  },
  {
    id: 'ko-3',
    slug: 'retinoidy-niacynamid-i-peptydy-jak-laczyc-skladniki-aktywne-bez-podraznien',
    title: 'Retinoidy, niacynamid i peptydy: jak łączyć składniki aktywne bez przeciążania skóry',
    excerpt:
      'Współczesne kosmetyki oferują bogactwo substancji aktywnych, ale łączenie kilku silnych formuł jednego wieczoru rzadko przyspiesza efekty. Zobacz, jakie duety wzajemnie się wspierają.',
    category: 'kosmetyki',
    authorId: 'marta-zielinska',
    publishedAt: '2026-10-25',
    readTimeMinutes: 6,
    image: EDITORIAL_IMAGES.cosmeticsBotanicalLab,
    imageAlt: 'Zestaw szklanych butelek z serum na kamiennej tacy w delikatnym świetle',
    imageCaption: 'Rozdzielenie składników między poranek i wieczór pozwala ograniczyć ryzyko reaktywności skóry.',
    tags: ['retinoidy', 'niacynamid', 'peptydy', 'składniki aktywne'],
    sections: [
      {
        id: 'zasada-rozdzielania-por',
        heading: 'Poranek dla antyoksydantów, wieczór dla regeneracji',
        paragraphs: [
          'Najprostszym sposobem na uniknięcie konfliktów między składnikami jest logiczny podział na rutynę poranną i wieczorną. Rano skóra potrzebuje wsparcia antyoksydacyjnego (np. witamina C, kwas ferulowy, resweratrol) oraz fotoprotekcji. Wieczorem lepiej sprawdzają się składniki wspierające odnowę komórkową — takie jak retinoidy czy łagodne kwasy PHA — przeplatane nocami wyłącznie regeneracyjnymi.',
        ],
      },
      {
        id: 'zgrane-duety',
        heading: 'Połączenia, które dobrze ze sobą współpracują',
        paragraphs: [
          'Niacynamid w umiarkowanym stężeniu (2–5%) świetnie uzupełnia kuracje z retinolem lub retinalem, ponieważ wspiera syntezę ceramidów i łagodzi potencjalną suchość. Podobnie działają peptydy biomimetyczne oraz ceramidy — tworzą komfortową poduszkę ochronną w dniach bez retinoidów.',
        ],
        subsections: [
          {
            id: 'czego-nie-nakladac-naraz',
            heading: 'Czego lepiej nie kumulować w jednej rutynie wieczornej',
            paragraphs: [
              'Na początku przygody z retinoidami warto unikać nakładania ich w ten sam wieczór co kwasy złuszczające AHA/BHA. Choć niektóre zaawansowane rutyny dopuszczają takie połączenia, u większości osób znacznie lepsze i bezpieczniejsze efekty daje naprzemienne stosowanie w różne dni tygodnia.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ko-4',
    slug: 'minimalistyczna-kosmetyczka-kapsulowa-co-naprawde-warto-miec-na-polce',
    title: 'Kosmetyczka kapsułowa: pięć produktów, które z powodzeniem zastępują przepełnioną półkę',
    excerpt:
      'Mniej opakowań w łazience to nie tylko porządek wizualny, ale też niższe ryzyko podrażnień i łatwiejsza ocena, co naprawdę służy Twojej cerze. Sprawdź szkielet uniwersalnego zestawu.',
    category: 'kosmetyki',
    authorId: 'marta-zielinska',
    publishedAt: '2026-10-12',
    readTimeMinutes: 5,
    image: EDITORIAL_IMAGES.cosmeticsSpfMinimal,
    imageAlt: 'Minimalistyczna kompozycja tubek i flakonu na jasnym trawertynie',
    imageCaption: 'Ograniczenie liczby otwartych kosmetyków pozwala zużywać je w terminie PAO bez marnotrawstwa.',
    tags: ['minimalizm', 'kosmetyczka kapsułowa', 'świadoma pielęgnacja'],
    sections: [
      {
        id: 'filozofia-kapsulowej-pielegnacji',
        heading: 'Dlaczego nadmiar kosmetyków utrudnia obserwację skóry',
        paragraphs: [
          'Gdy w jednym tygodniu wprowadzamy trzy nowe produkty, trudno ocenić, który z nich przyniósł wygładzenie, a który wywołał zaskórniki lub zaczerwienienie. Kosmetyczka kapsułowa porządkuje pielęgnację wokół sprawdzonych fundamentów i pozwala świadomie domykać opakowania przed upływem ich daty ważności po otwarciu (symbol PAO).',
        ],
      },
      {
        id: 'piec-fundamentow',
        heading: 'Pięć elementów wystarczających na start',
        paragraphs: [
          'Uniwersalną bazę tworzą: łagodny produkt do mycia dopasowany do cery, preparat do demakijażu (jeśli nosisz makijaż lub wodoodporny SPF), dobrze tolerowany krem nawilżająco-regenerujący, lekki krem z filtrem UV na dzień oraz jeden celowany produkt aktywny dobrany do głównej potrzeby skóry.',
        ],
      },
    ],
  },

  // =========================================================================
  // KATEGORIA 4: URODA (4 artykuły)
  // =========================================================================
  {
    id: 'ur-1',
    slug: 'makijaz-w-duchu-second-skin-jak-podkreslic-naturalny-blask-cery',
    title: 'Makijaż w duchu „second skin”: jak uzyskać świeże, świetliste wykończenie bez efektu maski',
    excerpt:
      'Współczesny makijaż dzienny coraz rzadziej ukrywa skórę pod grubą warstwą krycia. Zamiast tego wykorzystuje światło, kremowe konsystencje i punktowy korektor. Oto cztery zasady lekkości.',
    category: 'uroda',
    authorId: 'helena-wisniewska',
    publishedAt: '2026-11-14',
    readTimeMinutes: 6,
    image: EDITORIAL_IMAGES.beautyEditorialPortrait,
    imageAlt: 'Subtelny portret urodowy kobiety o naturalnej, promiennej cerze w ciepłym świetle z okna',
    imageCaption: 'Najpiękniejszy efekt daje cienka warstwa koloru połączona z dobrze nawilżoną, przygotowaną skórą.',
    isGuide: true,
    tags: ['naturalny makijaż', 'glow', 'second skin', 'makijaż dzienny'],
    sections: [
      {
        id: 'przygotowanie-zamiast-warstw',
        heading: 'Wszystko zaczyna się na dziesięć minut przed makijażem',
        paragraphs: [
          'Żaden podkład nie ułoży się gładko na przesuszonym naskórku. Zamiast nakładać kilka warstw kryjących produktów, lepiej poświęcić chwilę na wchłonięcie kremu nawilżającego oraz filtra SPF. Jeśli po kwadransie skóra w strefie T jest zbyt wilgotna, wystarczy delikatnie przyłożyć cienką bibułkę i odsączyć nadmiar bez wycierania produktu.',
        ],
      },
      {
        id: 'punktowe-krycie',
        heading: 'Technika punktowego korektora i kremowego różu',
        paragraphs: [
          'Zamiast ujednolicać całą twarz gęstym podkładem, spróbuj lekkiego kremu tonującego lub minimalnej ilości fluidu rozprowadzonego od środka twarzy ku zewnątrz. Miejsca wymagające większego krycia — okolice skrzydełek nosa, pojedyncze przebarwienia czy wewnętrzny kącik pod okiem — wyrównaj cienką warstwą korektora wklepanego opuszką palca.',
        ],
        subsections: [
          {
            id: 'kremowe-formuly',
            heading: 'Dlaczego kremowy róż i bronzer wyglądają najbardziej naturalnie',
            paragraphs: [
              'Produkty kremowe i w sztyfcie stapiają się ze skórą zamiast osiadać na jej powierzchni w postaci pudrowej warstwy. Nałożone wysoko na kości policzkowe i lekko roztarte ku skroniom natychmiast ożywiają rysy, zachowując autentyczną fakturę cery.',
            ],
          },
        ],
        pullQuote:
          'Naturalny makijaż nie ma zasłaniać prawdziwej skóry — ma sprawiać, że wygląda jak po ośmiu godzinach spokojnego snu.',
      },
      {
        id: 'utrwalenie-bez-matowienia',
        heading: 'Strategiczne pudrowanie zamiast matowienia całej twarzy',
        paragraphs: [
          'Drobno zmielony puder transparentny warto nałożyć małym, puszystym pędzlem wyłącznie tam, gdzie zależy Ci na trwałości: w strefie T, przy skrzydełkach nosa oraz pod oczami. Szczyty kości policzkowych pozostawione bez pudru zachowają świeży, naturalny połysk.',
        ],
      },
    ],
  },
  {
    id: 'ur-2',
    slug: 'pielegnacja-dloni-i-plytki-paznokcia-minimalistyczny-manicure-w-domu',
    title: 'Minimalistyczny manicure i pielęgnacja dłoni: jak utrzymać zadbaną płytkę bez ciągłej hybrydy',
    excerpt:
      'Krótkie, równe paznokcie z naturalnym połyskiem i miękkie skórki wracają do łask jako synonim dyskretnej elegancji. Sprawdzamy, jak w prosty sposób wzmacniać dłonie przez cały rok.',
    category: 'uroda',
    authorId: 'helena-wisniewska',
    publishedAt: '2026-11-01',
    readTimeMinutes: 5,
    image: EDITORIAL_IMAGES.skincareFacialMassage,
    imageAlt: 'Spokojna kompozycja akcesoriów pielęgnacyjnych i naturalnej ceramiki na jasnym lnie',
    imageCaption: 'Systematyczne olejowanie skórek i ochrona przed detergentami działają skuteczniej niż doraźne odżywki.',
    tags: ['dłonie', 'paznokcie', 'manicure japoński', 'pielęgnacja'],
    sections: [
      {
        id: 'codzienne-nawyki-dloni',
        heading: 'Dlaczego dłonie najszybciej zdradzają przesuszenie',
        paragraphs: [
          'Skóra na grzbietach dłoni ma bardzo niewiele gruczołów łojowych, a codziennie styka się z wodą, środkami czyszczącymi, zmianami temperatur i promieniowaniem UV. Dlatego krem do rąk stojący przy umywalce oraz rękawiczki zakładane podczas prac domowych dają zauważalną różnicę już po dwóch tygodniach.',
        ],
      },
      {
        id: 'delikatne-opracowanie-plytki',
        heading: 'Krótki rytuał dla naturalnej płytki raz w tygodniu',
        paragraphs: [
          'Zamiast wycinać skórki cążkami przy każdej okazji, lepiej zmiękczać je ciepłą kąpielą lub preparatem zmiękczającym i delikatnie odsuwać drewnianym patyczkiem. Do nadawania kształtu wybieraj pilnik szklany lub papierowy o drobnej gradacji (180–240), prowadząc go w jednym kierunku, aby ograniczyć rozdwajanie wolnego brzegu.',
        ],
      },
    ],
  },
  {
    id: 'ur-3',
    slug: 'sen-regeneracyjny-a-wyglad-cery-co-dzieje-sie-ze-skora-noca',
    title: 'Sen regeneracyjny a wygląd cery: dlaczego rytm dobowy ma znaczenie dla kondycji skóry',
    excerpt:
      'Noc to czas intensywnych procesów naprawczych w naskórku, ale też zwiększonej utraty wody. Przyglądamy się zależnościom między jakością snu, higieną sypialni a poranną świeżością cery.',
    category: 'uroda',
    authorId: 'helena-wisniewska',
    publishedAt: '2026-10-19',
    readTimeMinutes: 6,
    image: EDITORIAL_IMAGES.beautyEditorialPortrait,
    imageAlt: 'Spokojny portret w miękkim świetle porannym w jasnej lnianej narzutce',
    imageCaption: 'Higiena snu i przewiewne, naturalne tkaniny w sypialni wspierają nocną odnowę naskórka.',
    tags: ['sen', 'rytm dobowy', 'regeneracja skóry', 'wellbeing'],
    sections: [
      {
        id: 'nocna-fizjologia-skory',
        heading: 'Co zmienia się w skórze po zapadnięciu zmroku',
        paragraphs: [
          'Zgodnie z rytmem okołodobowym wieczorem i w nocy wzrasta mikrokrążenie skórne oraz tempo podziałów komórkowych, ale jednocześnie rośnie przepuszczalność naskórka dla wody. To dlatego bogatsze kremy regenerujące i maseczki całonocne działają tak dobrze przed snem — pomagają ograniczyć nocne odwodnienie.',
          'Z kolei przewlekły niedobór snu podnosi poziom kortyzolu, co u wielu osób przekłada się na poszarzały koloryt, cienie pod oczami oraz wolniejsze wyciszanie drobnych niedoskonałości.',
        ],
      },
      {
        id: 'wieczorne-wyciszenie',
        heading: 'Proste zmiany w sypialni, które odczuje Twoja skóra',
        paragraphs: [
          'Częsta wymiana poszewki na poduszkę (wykonanej z gładkiej bawełny satynowej, lnu lub jedwabiu), przewietrzenie pokoju przed snem oraz utrzymanie lekko chłodnej temperatury wokół 18–20 stopni sprzyjają zarówno głębszemu odpoczynkowi, jak i mniejszej porannej opuchliźnie.',
        ],
      },
    ],
  },
  {
    id: 'ur-4',
    slug: 'wieczorny-rytual-slow-beauty-kwadrans-ktory-domyka-dzien',
    title: 'Kwadrans w duchu slow beauty: jak stworzyć wieczorny rytuał bez poczucia obowiązku',
    excerpt:
      'Pielęgnacja nie powinna być kolejną listą zadań do odhaczenia o północy. Pokazujemy, jak uprościć wieczorne kroki, by stały się spokojnym momentem zatrzymania na koniec dnia.',
    category: 'uroda',
    authorId: 'karolina-nowicka',
    publishedAt: '2026-10-06',
    readTimeMinutes: 5,
    image: EDITORIAL_IMAGES.heroSkincareRitual,
    imageAlt: 'Spokojna łazienkowa aranżacja z naturalnym lnianym ręcznikiem i szklanym serum',
    imageCaption: 'Uważność podczas prostego oczyszczania i aplikacji kremu działa kojąco nie tylko na skórę.',
    tags: ['slow beauty', 'wieczorny rytuał', 'minimalizm', 'odpoczynek'],
    sections: [
      {
        id: 'pielegnacja-bez-presji',
        heading: 'Od perfekcjonizmu do codziennej regularności',
        paragraphs: [
          'Łatwo ulec wrażeniu, że pełnowartościowa pielęgnacja wymaga dziesięciu etapów, urządzeń LED i szczegółowego arkusza zapisów. W praktyce zbyt skomplikowany plan szybko prowadzi do zmęczenia i pomijania nawet podstawowego demakijażu.',
          'Podejście slow beauty przesuwa akcent z liczby produktów na jakość doświadczenia: ciepłe światło w łazience, niespieszne zmycie dnia, przyjemną konsystencję kremu i kilka spokojnych oddechów.',
        ],
      },
      {
        id: 'rytual-w-trzech-krokach',
        heading: 'Wieczór w trzech spokojnych ruchach',
        paragraphs: [
          'Pierwszy krok to dokładne, łagodne oczyszczenie twarzy i szyi — najlepiej godzinę przed pójściem spać, a nie w ostatniej minucie ze zmęczenia. Drugi to nałożenie dopasowanego serum lub kremu regenerującego z krótkim rozluźnieniem mięśni żuchwy i brwi. Trzeci — zadbanie o usta i dłonie tuż przy łóżku, co zamyka dzień prostym, przyjemnym gestem.',
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return ARTICLES.filter((article) => article.category === category).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedArticle(): Article {
  return ARTICLES.find((article) => article.featured) ?? ARTICLES[0];
}

export function getLatestArticles(excludeSlug?: string, limit = 6): Article[] {
  return ARTICLES.filter((article) => article.slug !== excludeSlug)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getPopularArticles(limit = 5): Article[] {
  return ARTICLES.filter((article) => typeof article.popularRank === 'number')
    .sort((a, b) => (a.popularRank ?? 99) - (b.popularRank ?? 99))
    .slice(0, limit);
}

export function getGuideArticles(limit = 4): Article[] {
  return ARTICLES.filter((article) => article.isGuide).slice(0, limit);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const sameCategory = ARTICLES.filter(
    (item) => item.category === article.category && item.slug !== article.slug
  );
  const otherCategories = ARTICLES.filter(
    (item) => item.category !== article.category && item.slug !== article.slug
  );
  return [...sameCategory, ...otherCategories].slice(0, limit);
}

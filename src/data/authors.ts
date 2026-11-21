import type { Author } from '../types/editorial';

export const AUTHORS: Record<string, Author> = {
  'karolina-nowicka': {
    id: 'karolina-nowicka',
    name: 'Karolina Nowicka',
    role: 'Redaktorka naczelna',
    specialization: 'Pielęgnacja skóry i minimalizm kosmetyczny',
    bio: 'Od dekady zajmuje się dziennikarstwem urodowym i edukacją kosmetologiczną. W swoich tekstach skupia się na fizjologii bariery hydrolipidowej oraz budowaniu prostych, powtarzalnych rutyn pielęgnacyjnych.',
    initials: 'KN',
  },
  'zofia-kaczmarek': {
    id: 'zofia-kaczmarek',
    name: 'Zofia Kaczmarek',
    role: 'Redaktorka działu Włosy',
    specialization: 'Trychologia domowa i pielęgnacja skóry głowy',
    bio: 'Pasjonatka świadomej pielęgnacji pasm i mikrobiomu skóry głowy. Tłumaczy zasady równowagi PEH, dobór olejów i techniki mycia w sposób zrozumiały dla osób początkujących.',
    initials: 'ZK',
  },
  'marta-zielinska': {
    id: 'marta-zielinska',
    name: 'Marta Zielińska',
    role: 'Redaktorka ds. składów i formulacji',
    specialization: 'Chemia kosmetyczna i analiza INCI',
    bio: 'Absolwentka chemii ze specjalizacją kosmetologiczną. Analizuje działanie substancji aktywnych, stabilność filtrów UV oraz praktyczne zasady łączenia składników bez podrażnień.',
    initials: 'MZ',
  },
  'helena-wisniewska': {
    id: 'helena-wisniewska',
    name: 'Helena Wiśniewska',
    role: 'Redaktorka działu Uroda',
    specialization: 'Naturalny makijaż i codzienne rytuały',
    bio: 'Zajmuje się estetyką codzienności, makijażem w duchu „second skin” oraz wpływem snu i regeneracji na wygląd skóry. Stawia na ponadczasową prostotę zamiast chwilowych trendów.',
    initials: 'HW',
  },
};

export const AUTHOR_LIST: Author[] = Object.values(AUTHORS);

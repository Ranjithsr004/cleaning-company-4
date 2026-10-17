/**
 * ============================================================
 *  Central rebrand hub for the whole website.
 *  Edit the values here to rebrand the entire site — name,
 *  contact details, services, reviews, FAQs, colors (in index.css).
 * ============================================================
 */

export const site = {
  name: 'Yunus Gebäudereinigung & Dienstleistungen',
  shortName: 'Yunus Reinigung',
  tagline: 'Sauberkeit, auf die Sie sich verlassen können.',
  city: 'Alsdorf',
  region: 'Aachen-Kreis',
  serviceArea: [
    'Alsdorf',
    'Aachen',
    'Herzogenrath',
    'Eschweiler',
    'Baesweiler',
    'Würselen',
  ],
  primaryService: 'Gebäudereinigung & Dienstleistungen',
  foundedYear: 2024,

  contact: {
    phone: '+49 0176 55438063',
    phoneHref: 'tel:+4917655438063',
    whatsapp: '4917655438063',
    whatsappHref: 'https://wa.me/4917655438063',
    email: 'yunus.reinigung@gmail.com',
    emailHref: 'mailto:yunus.reinigung@gmail.com',
    address: 'Poststraße 35, 52477 Alsdorf',
    contactPerson: 'Ahmad Suleiman',
    contactRole: 'Geschäftsführer',
    mapEmbed:
      'https://www.google.com/maps?q=Poststraße+35+52477+Alsdorf&output=embed',
    mapLink: 'https://www.google.com/maps?q=Poststraße+35+52477+Alsdorf',
  },

  legal: {
    vatId: 'DE463836813',
    taxNumber: '202/5141/3479',
    taxOffice: 'Finanzamt Aachen-Kreis',
    website: 'www.yunus-reinigung.de',
  },

  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    x: 'https://x.com',
  },

  stats: [
    { label: 'Zufriedene Kunden', value: '150+' },
    { label: 'Gereinigte Objekte', value: '200+' },
    { label: 'Geschulte Mitarbeiter', value: '10+' },
    { label: 'Jahre Erfahrung', value: '5+' },
  ],
} as const;

export type Service = {
  icon: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    icon: 'Building2',
    title: 'Büroreinigung',
    description:
      'Professionelle Reinigung von Büros jeder Größe — täglich, wöchentlich oder nach Feierabend. Schreibtische, Pausenräume, Sanitäranlagen und Gemeinschaftsbereiche werden makellos gehalten.',
    image:
      'https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'Layers',
    title: 'Treppenhausreinigung',
    description:
      'Mehrstöckige Treppenhäuser und Gemeinschaftsflächen werden gefegt, gewischt und desinfiziert — inklusive Handläufe, Treppenabsätze und Beleuchtungskörper.',
    image:
      'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'Sun',
    title: 'Fensterreinigung',
    description:
      'Streifenfreie Innen- und Außenreinigung von Fenstern für Geschäfte, Büros und mehrstöckige Gebäude mit professionellem Equipment.',
    image:
      'https://images.pexels.com/photos/4239133/pexels-photo-4239133.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'Wrench',
    title: 'Hausmeister-Service',
    description:
      'Zuverlässiger Hausmeisterservice für Wohn- und Gewerbeimmobilien — kleine Reparaturen, Wartung, Grünpflege und Winterdienst auf Anfrage.',
    image:
      'https://images.pexels.com/photos/8617719/pexels-photo-8617719.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'Sparkles',
    title: 'Weitere Dienstleistungen',
    description:
      'Grundreinigungen, Baureinigungen, Sonderreinigungen und maßgeschneiderte Dienstleistungen — wir passen uns Ihren individuellen Anforderungen an.',
    image:
      'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'Truck',
    title: 'Umzug',
    description:
      'Professioneller Umzugsservice mit sorgfältigem Transport Ihrer Möbel und Gegenstände — zuverlässig, pünktlich und zum fairen Preis.',
    image:
      'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export type Review = {
  name: string;
  role: string;
  rating: number;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: 'Klaus M.',
    role: 'Büroleiter, Anwaltskanzlei Aachen',
    rating: 5,
    quote:
      'Yunus Reinigung säubert unser Büro seit einem Jahr. Pünktlich, zuverlässig und das Ergebnis ist jeden Morgen makellos. Bestes Reinigungsunternehmen, das wir je hatten.',
  },
  {
    name: 'Sabine H.',
    role: 'Hausverwalterin, Alsdorf',
    rating: 5,
    quote:
      'Die Treppenhäuser in unseren Wohnanlagen werden regelmäßig von Yunus gereinigt. Absolut professionell, gründlich und immer freundlich. Sehr empfehlenswert!',
  },
  {
    name: 'Thomas B.',
    role: 'Geschäftsführer, Dienstleistungsunternehmen',
    rating: 5,
    quote:
      'Wir haben von einem großen Anbieter zu Yunus gewechselt und bereuen es keine Sekunde. Persönlicher, gründlicher und deutlich günstiger. Absolute Weiterempfehlung.',
  },
  {
    name: 'Monika S.',
    role: 'Schulverwaltung, Eschweiler',
    rating: 5,
    quote:
      'Herr Suleiman und sein Team reinigen unsere Schule mit größter Sorgfalt. Schonende Produkte, aufmerksam und das Ergebnis überzeugt Lehrer und Schüler gleichermaßen.',
  },
  {
    name: 'Andreas K.',
    role: 'Immobilienverwaltung',
    rating: 5,
    quote:
      'Professioneller Umzugsservice und anschließende Grundreinigung aus einer Hand — alles problemlos und ohne Nacharbeit. Gerne wieder!',
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'Wie oft können Sie unser Objekt reinigen?',
    answer:
      'Wir passen den Reinigungsplan ganz an Ihre Bedürfnisse an — täglich, wöchentlich, zweiwöchentlich oder monatlich. Die meisten Büros entscheiden sich für 2–5 Einsätze pro Woche, und wir können die Häufigkeit jederzeit mit einer Woche Vorlaufzeit anpassen.',
  },
  {
    question: 'Sind Sie versichert und angemeldet?',
    answer:
      'Ja. Yunus Gebäudereinigung ist beim Finanzamt Aachen-Kreis unter der Steuernummer 202/5141/3479 registriert und verfügt über eine gültige Umsatzsteuer-ID (DE463836813). Wir arbeiten vollständig legal und transparent.',
  },
  {
    question: 'Bieten Sie auch Einmalreinigungen oder Grundreinigungen an?',
    answer:
      'Selbstverständlich. Neben regelmäßigen Verträgen übernehmen wir Grundreinigungen, Baureinigungen, Einzugs-/Auszugsreinigungen und saisonale Sonderreinigungen. Nennen Sie uns Ihren Bedarf und Termin.',
  },
  {
    question: 'Wie wird der Preis berechnet?',
    answer:
      'Der Preis richtet sich nach Fläche, Reinigungsfrequenz, Leistungsumfang und Zustand des Objekts. Nach einem kostenlosen Vor-Ort-Termin erhalten Sie ein detailliertes Angebot — ohne versteckte Kosten und ohne langfristige Bindung.',
  },
  {
    question: 'Wie schnell können Sie starten?',
    answer:
      'In den meisten Fällen können wir innerhalb von 3–5 Werktagen nach einem bestätigten Angebot beginnen. Für dringende oder kurzfristige Einsätze rufen Sie uns einfach an — wir tun unser Bestes.',
  },
  {
    question: 'Welche Reinigungsmittel verwenden Sie?',
    answer:
      'Wir setzen professionelle, umweltverträgliche Reinigungsmittel ein, die für bewohnte und genutzte Räume sicher sind. HEPA-Staubsauger und Mikrofasersysteme verhindern Kreuzkontamination. Auf Wunsch arbeiten wir auch mit zertifiziert ökologischen Produkten.',
  },
];

export const nav = [
  { label: 'Startseite', href: '#home' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Bewertungen', href: '#reviews' },
  { label: 'Über uns', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' },
];


import { ShieldCheck, Clock, Leaf } from 'lucide-react';
import { site } from '@/config/site';

type Props = {
  onQuoteClick: () => void;
};

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Versichert & Angemeldet',
    text: 'Vollständig beim Finanzamt registriert mit gültiger USt-IdNr. DE463836813.',
  },
  {
    icon: Clock,
    title: 'Flexible Zeiten',
    text: 'Reinigung nach Ihrem Zeitplan — frühmorgens, abends oder am Wochenende.',
  },
  {
    icon: Leaf,
    title: 'Sichere Mittel',
    text: 'Umweltverträgliche Reinigungsmittel, sicher für bewohnte und genutzte Räume.',
  },
];

export function About({ onQuoteClick }: Props) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[1.5rem] overflow-hidden shadow-lg aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Gründliche Reinigungskraft bei der Arbeit"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
              />
            </div>
            <div className="rounded-[1.5rem] overflow-hidden shadow-lg aspect-[3/4] mt-8 bg-slate-950 border border-slate-800">
              <img
                src="/business-card.jpg"
                alt="Yunus Gebäudereinigung & Dienstleistungen Visitenkarte"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 card px-6 py-4 text-center min-w-[14rem] shadow-lg">
            <div
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: 'var(--brand-600)' }}
            >
              100% Zuverlässig
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Für Sie im {site.region}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Über {site.shortName}
          </span>
          <h2 className="mt-4 section-title">
            Ein lokales Team, das Ihr Objekt wie das eigene behandelt
          </h2>
          <div className="mt-5 space-y-4 text-slate-600 leading-relaxed text-[1.02rem]">
            <p>
              {site.name} hält {site.city} und die umliegende Region {site.region}{' '}
              seit {site.foundedYear} sauber. Was als kleines Team begann, betreut heute
              zahlreiche Büros, Treppenhäuser, Schulen und Gewerbeobjekte — mit derselben
              persönlichen Sorgfalt wie am ersten Tag.
            </p>
            <p>
              Wir sind tätig in {site.serviceArea.slice(0, 5).join(', ')} und{' '}
              {site.serviceArea[site.serviceArea.length - 1]}. Jeder Kunde erhält einen
              persönlichen Ansprechpartner, der Ihr Objekt, Ihre Anforderungen und
              Ihre Wünsche kennt — damit Sie nie wieder von vorne erklären müssen.
            </p>
          </div>

          <ul className="mt-8 grid sm:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <li key={p.title} className="card p-5">
                <p.icon
                  className="w-7 h-7"
                  style={{ color: 'var(--brand-600)' }}
                />
                <h3 className="mt-3 font-bold text-slate-900 text-sm">{p.title}</h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {p.text}
                </p>
              </li>
            ))}
          </ul>

          <button onClick={onQuoteClick} className="btn-primary mt-8">
            Kostenlosen Vor-Ort-Termin buchen
          </button>
        </div>
      </div>
    </section>
  );
}

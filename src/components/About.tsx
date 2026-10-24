import { ShieldCheck, Clock, Leaf, Award, CheckCircle2, UserCheck } from 'lucide-react';
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
        {/* Left: Real Photos Showcase */}
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {/* Owner portrait card */}
            <div className="group relative rounded-[1.75rem] overflow-hidden shadow-xl aspect-[3/4] bg-slate-900 border border-slate-100">
              <img
                src={site.contact.photo}
                alt={`${site.contact.contactPerson} - ${site.contact.contactRole}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/50 text-slate-900">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--brand-700)]">
                  <UserCheck className="w-3.5 h-3.5" />
                  Geschäftsführung
                </div>
                <div className="text-sm font-extrabold text-slate-900 truncate">
                  {site.contact.contactPerson}
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  Inhaber & Ansprechpartner
                </div>
              </div>
            </div>

            {/* On-site active work photo card */}
            <div className="group relative rounded-[1.75rem] overflow-hidden shadow-xl aspect-[3/4] mt-8 bg-slate-100 border border-slate-100">
              <img
                src={site.contact.workPhoto}
                alt={`${site.contact.contactPerson} bei der Arbeit vor Ort`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/50 text-slate-900">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Einsatz vor Ort
                </div>
                <div className="text-sm font-extrabold text-slate-900 truncate">
                  Aktiv & Engagiert
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  Hausmeister & Pflege
                </div>
              </div>
            </div>
          </div>

          {/* Central floating trust seal */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 card px-6 py-3.5 text-center min-w-[15rem] shadow-xl border border-slate-100">
            <div
              className="text-xl sm:text-2xl font-extrabold tracking-tight flex items-center justify-center gap-2"
              style={{ color: 'var(--brand-600)' }}
            >
              <Award className="w-5 h-5 text-amber-500" />
              100% Inhabergeführt
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Für Sie in {site.city} & {site.region}
            </div>
          </div>
        </div>

        {/* Right: Text & Owner Quote */}
        <div className="order-1 lg:order-2">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Über {site.shortName}
          </span>
          <h2 className="mt-4 section-title">
            Ein verlässliches lokales Team, geführt von Inhaber {site.contact.contactPerson}
          </h2>
          <div className="mt-5 space-y-4 text-slate-600 leading-relaxed text-[1.02rem]">
            <p>
              {site.name} steht für erstklassige Reinigungs- und Servicedienstleistungen in{' '}
              {site.city} und der gesamten Städteregion Aachen. Als inhabergeführter Betrieb
              legen wir größten Wert auf persönliche Nähe, termingerechte Ausführung und
              makellose Sauberkeit.
            </p>
            <p>
              Ob Bürokomplexe, Mehrfamilienhäuser, Schulen oder Gewerbeobjekte — wir stimmen
              unsere Reinigungszyklen exakt auf Ihre Anforderungen ab. Jeder Kunde profitiert von
              einem festen Ansprechpartner ohne lästige Callcenter-Warteschleifen.
            </p>
          </div>

          {/* Personal quote box from Owner */}
          <div
            className="mt-6 p-4 sm:p-5 rounded-2xl border flex items-start gap-4 shadow-sm"
            style={{
              background: 'linear-gradient(135deg, var(--brand-50), #ffffff)',
              borderColor: 'var(--brand-200)',
            }}
          >
            <img
              src={site.contact.photo}
              alt={site.contact.contactPerson}
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md shrink-0"
            />
            <div>
              <p className="text-sm italic text-slate-800 leading-relaxed">
                „Sauberkeit und Gründlichkeit sind echte Vertrauenssache. Ich stehe mit meinem
                Namen dafür ein, dass jedes Objekt so gepflegt wird, als wäre es unser eigenes.“
              </p>
              <div className="mt-2 text-xs font-bold text-slate-900 flex items-center gap-2">
                <span>{site.contact.contactPerson}</span>
                <span className="text-slate-400">·</span>
                <span style={{ color: 'var(--brand-600)' }}>{site.contact.contactRole}</span>
              </div>
            </div>
          </div>

          <ul className="mt-8 grid sm:grid-cols-3 gap-3">
            {pillars.map((p) => (
              <li key={p.title} className="card p-4">
                <p.icon
                  className="w-6 h-6"
                  style={{ color: 'var(--brand-600)' }}
                />
                <h3 className="mt-2.5 font-bold text-slate-900 text-sm">{p.title}</h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {p.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onQuoteClick} className="btn-primary">
              Kostenlosen Vor-Ort-Termin buchen
            </button>
            <a href={site.contact.phoneHref} className="btn-secondary">
              Direkt anrufen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

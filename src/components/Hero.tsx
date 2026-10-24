import { Phone, Star, ShieldCheck, BadgeCheck, MessageCircle, Play } from 'lucide-react';
import { site } from '@/config/site';

type Props = {
  onQuoteClick: () => void;
};

const badges = [
  { icon: ShieldCheck, label: 'Angemeldet & Versichert' },
  { icon: BadgeCheck, label: 'Erfahrenes Personal' },
  { icon: Star, label: '5-Sterne Service' },
];

export function Hero({ onQuoteClick }: Props) {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -top-32 -right-24 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30"
          style={{ background: 'var(--brand-100)' }}
        />
        <div
          className="absolute top-40 -left-32 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-40"
          style={{ background: 'var(--brand-50)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
      </div>

      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        <div className="animate-fade-in-up">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {site.primaryService} in {site.city} & {site.region}
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight text-slate-900">
            {site.primaryService} in {site.city}{' '}
            <span style={{ color: 'var(--brand-600)' }}>zuverlässig & gründlich</span>
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
            Makellose Büros, saubere Treppenhäuser, streifenfreie Fenster und verlässlicher
            Hausmeisterservice. Flexible Einsatzzeiten, transparente Preise und ein persönlicher
            Ansprechpartner, auf den Sie sich verlassen können.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm"
              >
                <b.icon className="w-4 h-4" style={{ color: 'var(--brand-600)' }} />
                {b.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <a href={site.contact.phoneHref} className="btn-primary">
              <Phone className="w-4 h-4" />
              Jetzt anrufen
            </a>
            <button onClick={onQuoteClick} className="btn-secondary">
              <MessageCircle className="w-4 h-4" />
              Kostenloses Angebot
            </button>
            <a
              href="#praxis"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all shadow-sm hover:border-[var(--brand-300)]"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[var(--brand-600)]" />
              Videos ansehen
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-4 gap-4 max-w-lg">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {s.label}
                </dt>
                <dd
                  className="mt-1 text-2xl font-extrabold tracking-tight"
                  style={{ color: 'var(--brand-700)' }}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:120ms]">
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)] aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5]">
            <img
              src="https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Yunus Gebäudereinigung & Dienstleistungen im Einsatz"
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(10,50,90,0.5))',
              }}
            />
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-8 card p-4 pr-6 flex items-center gap-3 max-w-[18rem]">
            <div
              className="grid place-items-center w-12 h-12 rounded-xl text-white shrink-0"
              style={{ background: 'var(--brand-500)' }}
            >
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-sm font-semibold text-slate-700">
                4.9/5 Bewertung von 150+ zufriedenen Kunden
              </p>
            </div>
          </div>

          <a
            href="#about"
            className="absolute -top-5 -right-2 sm:-right-6 card py-2 px-3.5 flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all group"
          >
            <img
              src={site.contact.photo}
              alt={site.contact.contactPerson}
              className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0"
            />
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[var(--brand-600)] transition-colors">
                Inhabergeführt
              </div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                {site.contact.contactPerson}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

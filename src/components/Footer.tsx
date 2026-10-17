import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { site, nav, services } from '@/config/site';

type Props = {
  onQuoteClick: () => void;
  onLegalClick?: (tab: 'impressum' | 'datenschutz' | 'agb') => void;
};

const socials = [
  { icon: Facebook, href: site.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: site.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: site.social.x, label: 'X' },
];

export function Footer({ onQuoteClick, onLegalClick }: Props) {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt={site.name}
                className="w-11 h-11 object-contain rounded-xl bg-white p-0.5 shadow-sm"
              />
              <span className="font-extrabold text-lg text-white">
                {site.shortName}
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              {site.tagline} Professionelle Gebäudereinigung im {site.region}{' '}
              seit {site.foundedYear}.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:bg-[var(--brand-500)] hover:text-white transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">
              Schnellzugriff
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <button
                    onClick={() => handleNav(n.href)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => handleNav('#services')}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--brand-400)]" />
                <span className="text-slate-400">{site.contact.address}</span>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[var(--brand-400)]" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[var(--brand-400)]" />
                  {site.contact.email}
                </a>
              </li>
            </ul>
            <button
              onClick={onQuoteClick}
              className="btn-primary mt-5 text-sm px-5 py-2.5"
            >
              Kostenloses Angebot
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <span className="text-slate-500">USt-IdNr.: {site.legal.vatId}</span>
            <span className="text-slate-500">St.-Nr.: {site.legal.taxNumber}</span>
            <button
              onClick={() => onLegalClick?.('impressum')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              Impressum
            </button>
            <button
              onClick={() => onLegalClick?.('datenschutz')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              Datenschutz
            </button>
            <button
              onClick={() => onLegalClick?.('agb')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              AGB
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

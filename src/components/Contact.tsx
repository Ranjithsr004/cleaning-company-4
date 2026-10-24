import { MapPin, Phone, Mail, User, Clock, Navigation } from 'lucide-react';
import { site } from '@/config/site';

type Props = {
  onQuoteClick: () => void;
};

export function Contact({ onQuoteClick }: Props) {
  const items = [
    {
      icon: MapPin,
      label: 'Adresse',
      value: site.contact.address,
      href: site.contact.mapLink,
    },
    {
      icon: Phone,
      label: 'Anrufen',
      value: site.contact.phone,
      href: site.contact.phoneHref,
    },
    {
      icon: Mail,
      label: 'E-Mail schreiben',
      value: site.contact.email,
      href: site.contact.emailHref,
    },
    {
      icon: Clock,
      label: 'Bürozeiten',
      value: 'Mo–Fr 8:00 – 18:00 Uhr',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Kontakt aufnehmen
          </span>
          <h2 className="mt-4 section-title">Sprechen wir über Ihr Objekt</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Kontaktieren Sie uns per Telefon, E-Mail oder WhatsApp — oder fordern Sie
            ein kostenloses Angebot an und wir kommen zu Ihnen.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((it) => {
                const Inner = (
                  <>
                    <div
                      className="grid place-items-center w-11 h-11 rounded-xl"
                      style={{
                        background: 'var(--brand-50)',
                        color: 'var(--brand-600)',
                      }}
                    >
                      <it.icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {it.label}
                      </div>
                      <div className="mt-0.5 font-bold text-slate-900 break-words">
                        {it.value}
                      </div>
                    </div>
                  </>
                );
                return it.href ? (
                  <a
                    key={it.label}
                    href={it.href}
                    target={it.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="card p-5 flex items-center gap-4"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={it.label} className="card p-5 flex items-center gap-4">
                    {Inner}
                  </div>
                );
              })}
            </div>

            <div
              className="rounded-2xl p-5 flex items-center gap-4 border"
              style={{
                background: 'var(--brand-50)',
                borderColor: 'var(--brand-200)',
              }}
            >
              <div className="relative shrink-0">
                <img
                  src={site.contact.photo}
                  alt={site.contact.contactPerson}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                />
                <span
                  className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"
                  title="Erreichbar"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <User className="w-3.5 h-3.5" />
                  Ihr persönlicher Ansprechpartner
                </div>
                <div className="mt-0.5 font-extrabold text-slate-900">
                  {site.contact.contactPerson}
                </div>
                <div className="text-sm text-slate-600">
                  {site.contact.contactRole}
                </div>
              </div>
              <a
                href={site.contact.phoneHref}
                className="btn-primary text-sm px-4 py-2.5"
              >
                Anrufen
              </a>
            </div>

            <button onClick={onQuoteClick} className="btn-primary w-full sm:w-auto self-start">
              Kostenloses Angebot anfragen
            </button>
          </div>

          <div className="relative rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-sm min-h-[22rem] lg:min-h-full">
            <iframe
              title="Standortkarte Yunus Gebäudereinigung"
              src={site.contact.mapEmbed}
              className="w-full h-full min-h-[22rem] lg:min-h-[28rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={site.contact.mapLink}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-bold shadow-md hover:bg-slate-50 transition-colors"
            >
              <Navigation className="w-4 h-4" style={{ color: 'var(--brand-600)' }} />
              Route planen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

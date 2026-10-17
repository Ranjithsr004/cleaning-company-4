import { ShieldCheck, CalendarClock, Headset, ThumbsUp, Award, Users } from 'lucide-react';
import { site } from '@/config/site';

type Props = {
  onQuoteClick: () => void;
};

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Offiziell registriert & versichert',
    text: `Registriert beim Finanzamt Aachen-Kreis (St.-Nr. ${site.legal.taxNumber}, USt-IdNr. ${site.legal.vatId}) mit umfassender Haftpflichtversicherung für Ihren Schutz.`,
  },
  {
    icon: CalendarClock,
    title: 'Flexible Termine ohne Bindung',
    text: 'Täglich, wöchentlich oder monatlich — wir reinigen passend zu Ihren Betriebszeiten. Anpassung jederzeit kurzfristig möglich.',
  },
  {
    icon: Headset,
    title: 'Persönlicher Ansprechpartner',
    text: `${site.contact.contactPerson} und unser Team stehen Ihnen direkt zur Verfügung. Keine Callcenter, keine Umwege.`,
  },
  {
    icon: Award,
    title: 'Geschultes & sorgfältiges Personal',
    text: 'Jede Reinigungskraft arbeitet nach strengen Standards für Sauberkeit, Hygiene und Diskretion in Ihren Räumen.',
  },
  {
    icon: ThumbsUp,
    title: 'Gleichbleibend hohe Qualität',
    text: 'Strukturierte Arbeitsabläufe stellen sicher, dass die Qualität bei jedem Einsatz überzeugt — vom ersten Tag an.',
  },
  {
    icon: Users,
    title: 'Lokal vor Ort in der Region',
    text: `Mit Sitz in ${site.city} für Sie im gesamten ${site.region} im Einsatz. Kurze Wege, schnelle Absprachen und persönliche Nähe.`,
  },
];

export function Trust({ onQuoteClick }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Warum Yunus Reinigung?
          </span>
          <h2 className="mt-4 section-title">
            Zuverlässig, flexibel und gründlich — das ist unser Versprechen
          </h2>
          <div className="mt-5 space-y-4 text-slate-600 leading-relaxed text-[1.02rem]">
            <p>
              Bei der Gebäudereinigung zählen Verlässlichkeit und Gründlichkeit.
              {site.name} wurde gegründet, um genau diesen Standard zu bieten:
              Ein fester Ansprechpartner, geschultes Personal und saubere Ergebnisse bei
              jedem einzelnen Einsatz.
            </p>
            <p>
              Ob Büro, Treppenhaus, Fenster oder Entrümpelung & Umzug — wir stimmen
              unsere Dienstleistungen exakt auf Ihre Anforderungen und Wünsche ab.
              Transparent, fair und partnerschaftlich.
            </p>
          </div>

          <div
            className="mt-7 rounded-2xl p-5 border"
            style={{
              background: 'var(--brand-50)',
              borderColor: 'var(--brand-200)',
            }}
          >
            <p className="text-sm font-semibold text-slate-800">
              Bei jedem Auftrag garantiert:
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" style={{ color: 'var(--brand-600)' }} />
                Betriebshaftpflicht
              </li>
              <li className="flex items-center gap-2">
                <Headset className="w-4 h-4" style={{ color: 'var(--brand-600)' }} />
                Fester Ansprechpartner
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4" style={{ color: 'var(--brand-600)' }} />
                Geschultes Personal
              </li>
              <li className="flex items-center gap-2">
                <CalendarClock className="w-4 h-4" style={{ color: 'var(--brand-600)' }} />
                Flexible Einsatzzeiten
              </li>
            </ul>
          </div>

          <button onClick={onQuoteClick} className="btn-primary mt-7">
            Jetzt unverbindlich anfragen
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="card p-6">
              <div
                className="grid place-items-center w-11 h-11 rounded-xl"
                style={{ background: 'var(--brand-50)', color: 'var(--brand-600)' }}
              >
                <r.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

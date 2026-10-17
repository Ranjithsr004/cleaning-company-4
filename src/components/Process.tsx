import { PhoneCall, ClipboardCheck, Repeat } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Kostenlose Erstberatung',
    text: 'Kontaktieren Sie uns telefonisch oder per Nachricht. Wir besprechen Ihren Bedarf und vereinbaren einen unverbindlichen Vor-Ort-Termin.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Besichtigung & Angebot',
    text: 'Wir prüfen Ihr Objekt vor Ort und erstellen Ihnen innerhalb kürzester Zeit ein transparentes, detailliertes Angebot ohne versteckte Kosten.',
  },
  {
    icon: Repeat,
    step: '03',
    title: 'Zuverlässige Ausführung',
    text: 'Pünktliche und gründliche Durchführung aller vereinbarten Leistungen durch unser geschultes Team mit festem Ansprechpartner.',
  },
];

export function Process() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Unser Ablauf
          </span>
          <h2 className="mt-4 section-title">
            In 3 einfachen Schritten zu sauberen Räumen
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Unkompliziert, transparent und verlässlich — von Ihrer ersten Anfrage bis
            zur erstklassigen Reinigung.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          <div
            className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px"
            style={{
              background:
                'repeating-linear-gradient(90deg, var(--brand-300) 0 8px, transparent 8px 16px)',
            }}
          />
          {steps.map((s) => (
            <div key={s.step} className="relative text-center">
              <div
                className="relative mx-auto grid place-items-center w-24 h-24 rounded-full text-white shadow-lg z-10"
                style={{ background: 'var(--brand-500)' }}
              >
                <s.icon className="w-9 h-9" />
                <span className="absolute -top-2 -right-2 grid place-items-center w-8 h-8 rounded-full bg-white text-slate-900 text-xs font-extrabold shadow border border-slate-100">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed max-w-xs mx-auto">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

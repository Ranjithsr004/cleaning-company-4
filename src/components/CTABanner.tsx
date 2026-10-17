import { Phone, MessageCircle } from 'lucide-react';
import { site } from '@/config/site';

type Props = {
  onQuoteClick: () => void;
};

export function CTABanner({ onQuoteClick }: Props) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 lg:px-16 lg:py-16 text-white shadow-[0_30px_60px_-25px_rgba(10,102,194,0.5)]"
          style={{ background: 'linear-gradient(135deg, var(--brand-800), var(--brand-600))' }}
        >
          <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight">
                Fordern Sie noch heute Ihr unverbindliches Angebot an
              </h2>
              <p className="mt-3 text-white/85 text-lg max-w-xl">
                Kostenlose Vor-Ort-Besichtigung und transparentes Festpreisangebot.
                Lassen Sie Ihr Objekt in neuem Glanz erstrahlen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-white text-slate-900 font-extrabold text-lg shadow-lg hover:-translate-y-0.5 transition-transform w-full lg:w-auto"
              >
                <Phone className="w-5 h-5" style={{ color: 'var(--brand-600)' }} />
                {site.contact.phone}
              </a>
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/15 text-white font-bold border border-white/30 hover:bg-white/25 transition-colors w-full lg:w-auto backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Kostenloses Angebot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

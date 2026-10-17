import { ArrowRight } from 'lucide-react';
import { services, site } from '@/config/site';
import { ServiceIcon } from '@/components/ServiceIcon';

type Props = {
  onQuoteClick: () => void;
};

export function Services({ onQuoteClick }: Props) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Unsere Leistungen
          </span>
          <h2 className="mt-4 section-title">
            Professionelle Gebäudereinigung & Dienstleistungen
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Von der regelmäßigen Büro- und Treppenhausreinigung bis hin zu Fensterreinigung,
            Hausmeisterservice und Umzug — Ihr zuverlässiger Partner in {site.city} und der Region {site.region}.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="card overflow-hidden group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent && !parent.querySelector('.img-fallback')) {
                      const fb = document.createElement('div');
                      fb.className =
                        'img-fallback w-full h-full grid place-items-center';
                      fb.style.background = 'var(--brand-50)';
                      parent.appendChild(fb);
                    }
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,50,90,0.6))',
                  }}
                />
                <div
                  className="absolute top-3 left-3 grid place-items-center w-10 h-10 rounded-xl text-white shadow-md backdrop-blur-sm"
                  style={{ background: 'rgba(10,102,194,0.9)' }}
                >
                  <ServiceIcon name={s.icon} className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-slate-900 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                  {s.description}
                </p>
                <button
                  onClick={onQuoteClick}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                  style={{ color: 'var(--brand-600)' }}
                >
                  Angebot anfordern
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Haben Sie individuellen Bedarf?{' '}
            <button
              onClick={onQuoteClick}
              className="font-bold underline-offset-4 hover:underline"
              style={{ color: 'var(--brand-600)' }}
            >
              Sprechen Sie uns an
            </button>{' '}
            — wir bieten maßgeschneiderte Lösungen für jedes Anliegen.
          </p>
        </div>
      </div>
    </section>
  );
}

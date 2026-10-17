import { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews, site } from '@/config/site';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-current' : 'fill-none text-slate-200'}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const avg =
    reviews.reduce((sum, r) => sum + r.rating, 0) / Math.max(reviews.length, 1);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[data-review-card]');
    const amount = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Kundenstimmen
            </span>
            <h2 className="mt-4 section-title">
              Zufriedene Kunden in {site.city} und der Region
            </h2>
          </div>

          <div className="flex items-center gap-4 card px-6 py-4">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-slate-900">
                {avg.toFixed(1)}
              </div>
              <Stars rating={Math.round(avg)} />
            </div>
            <div className="h-12 w-px bg-slate-200" />
            <div>
              <div className="text-sm font-bold text-slate-900">150+ Kunden</div>
              <div className="text-xs text-slate-500">Regionale Empfehlungen</div>
            </div>
          </div>
        </div>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1"
          >
            {reviews.map((r) => (
              <article
                key={r.name}
                data-review-card
                className="snap-start shrink-0 w-[88%] sm:w-[60%] md:w-[44%] lg:w-[31.5%] card p-6 flex flex-col"
              >
                <Quote
                  className="w-8 h-8 mb-3"
                  style={{ color: 'var(--brand-300)' }}
                />
                <p className="text-slate-700 leading-relaxed flex-1">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <div
                    className="grid place-items-center w-11 h-11 rounded-full text-white font-bold text-sm shrink-0"
                    style={{ background: 'var(--brand-500)' }}
                  >
                    {r.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-slate-900 text-sm truncate">
                      {r.name}
                    </div>
                    <div className="text-xs text-slate-500 truncate">{r.role}</div>
                  </div>
                  <div className="ml-auto">
                    <Stars rating={r.rating} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              className="grid place-items-center w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              aria-label="Vorherige Bewertungen"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="grid place-items-center w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              aria-label="Nächste Bewertungen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

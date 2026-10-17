import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '@/config/site';

type Props = {
  onQuoteClick: () => void;
};

export function FAQ({ onQuoteClick }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20">
      <div className="container-x grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          <span className="eyebrow">
            <HelpCircle className="w-4 h-4" />
            Häufige Fragen
          </span>
          <h2 className="mt-4 section-title">Antworten auf Ihre Fragen</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Haben Sie eine Frage, die hier nicht aufgeführt ist? Kontaktieren Sie uns gerne direkt.
          </p>
          <button onClick={onQuoteClick} className="btn-primary mt-6">
            Direkt anfragen
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.question}
                className={`card overflow-hidden transition-all ${
                  isOpen ? 'border-[var(--brand-200)]' : ''
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-[0.97rem]">
                    {f.question}
                  </span>
                  <span
                    className="grid place-items-center w-8 h-8 rounded-full shrink-0 transition-colors"
                    style={{
                      background: isOpen ? 'var(--brand-500)' : 'var(--brand-50)',
                      color: isOpen ? '#fff' : 'var(--brand-600)',
                    }}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-slate-600 leading-relaxed text-[0.97rem]">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

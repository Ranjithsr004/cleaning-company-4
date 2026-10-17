import { useEffect, useState } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { site, nav } from '@/config/site';

type Props = {
  onQuoteClick: () => void;
};

export function Header({ onQuoteClick }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(15,23,42,0.18)] border-b border-slate-100'
          : 'bg-white/0'
      }`}
    >
      <div className="container-x flex items-center justify-between h-18 py-3">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="flex items-center gap-3 shrink-0 group"
        >
          <img
            src="/logo.jpg"
            alt={site.name}
            className="w-12 h-12 object-contain rounded-xl shadow-sm border border-slate-100 bg-white transition-transform group-hover:scale-105"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-[var(--brand-600)] transition-colors">
              {site.shortName}
            </span>
            <span className="text-[10px] font-bold tracking-wider text-slate-500">
              Gebäudereinigung & Dienstleistungen
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="px-3.5 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={site.contact.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[var(--brand-600)] transition-colors"
          >
            <Phone className="w-4 h-4" />
            {site.contact.phone}
          </a>
          <button onClick={onQuoteClick} className="btn-primary text-sm">
            Angebot anfordern
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Menü öffnen und schließen"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-40 animate-fade-in">
          <div
            className="absolute inset-0 bg-slate-900/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-72px)] overflow-y-auto">
            <nav className="container-x py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center justify-center gap-2 btn-secondary"
                >
                  <Phone className="w-4 h-4" />
                  {site.contact.phone}
                </a>
                <button
                  onClick={() => {
                    setOpen(false);
                    onQuoteClick();
                  }}
                  className="btn-primary"
                >
                  Angebot anfordern
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

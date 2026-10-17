import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { site } from '@/config/site';

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t1 = window.setTimeout(() => setShowTip(true), 800);
    const t2 = window.setTimeout(() => setShowTip(false), 7000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [visible]);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-end gap-2.5 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {showTip && (
        <div className="relative mb-1 hidden sm:block animate-fade-in">
          <button
            onClick={() => setShowTip(false)}
            className="absolute -top-2 -right-2 grid place-items-center w-5 h-5 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300"
            aria-label="Schließen"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 max-w-[14rem]">
            <p className="text-sm font-semibold text-slate-800">
              Per WhatsApp schreiben
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Schnelle Antworten auf Ihre Anfrage.
            </p>
          </div>
        </div>
      )}

      <a
        href={site.contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Per WhatsApp kontaktieren"
        className="relative grid place-items-center w-14 h-14 rounded-full text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: '#25D366' }}
        onMouseEnter={() => setShowTip(true)}
      >
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ background: '#25D366' }}
        />
        <MessageCircle className="relative w-7 h-7 fill-current" />
      </a>
    </div>
  );
}

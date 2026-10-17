import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'yunus-cookie-consent';

type Props = {
  onOpenPrivacy?: () => void;
};

export function CookieConsent({ onOpenPrivacy }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mounted = true;
    try {
      const choice = localStorage.getItem(STORAGE_KEY);
      if (!choice) {
        const t = window.setTimeout(() => mounted && setVisible(true), 1500);
        return () => window.clearTimeout(t);
      }
    } catch {
      const t = window.setTimeout(() => mounted && setVisible(true), 1500);
      return () => window.clearTimeout(t);
    }
  }, []);

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] animate-fade-in-up px-4 pb-4 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div
          className="grid place-items-center w-11 h-11 rounded-xl shrink-0"
          style={{ background: 'var(--brand-50)', color: 'var(--brand-600)' }}
        >
          <Cookie className="w-6 h-6" />
        </div>
        <p className="text-sm text-slate-600 flex-1 leading-relaxed">
          Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten.
          Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.{' '}
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="font-semibold underline underline-offset-2 hover:opacity-80"
            style={{ color: 'var(--brand-600)' }}
          >
            Datenschutzerklärung
          </button>
          .
        </p>
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => decide('declined')}
            className="px-4 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={() => decide('accepted')}
            className="btn-primary text-sm px-5 py-2.5"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { site, services } from '@/config/site';

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = 'idle' | 'success' | 'error';

type QuoteForm = {
  name: string;
  email: string;
  phone: string;
  city: string;
  zip: string;
  service: string;
  message: string;
  consent: boolean;
};

const field =
  'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-[var(--brand-400)] focus:bg-white focus:ring-4 focus:ring-[var(--brand-100)]';

export function QuoteModal({ open, onClose }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState<QuoteForm>({
    name: '',
    email: '',
    phone: '',
    city: site.city,
    zip: '',
    service: '',
    message: '',
    consent: false,
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setStatus('idle');
  }, [open]);

  if (!open) return null;

  const update = (k: keyof QuoteForm, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      setStatus('error');
      setErrorMsg('Bitte stimmen Sie der Kontaktaufnahme zu, um das Angebot zu erhalten.');
      return;
    }
    const subject = `Anfrage Angebot — ${form.service || 'Gebäudereinigung'} in ${form.city}`;
    const body = [
      `Name: ${form.name}`,
      `E-Mail: ${form.email}`,
      `Telefon: ${form.phone}`,
      `Ort: ${form.city}`,
      `PLZ: ${form.zip}`,
      `Gewünschte Leistung: ${form.service || 'Nicht angegeben'}`,
      '',
      'Nachricht:',
      form.message || '(keine Nachricht)',
    ].join('\n');
    const mailto = `${site.contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus('success');
  };

  const close = () => {
    if (status === 'success') {
      setForm({
        name: '',
        email: '',
        phone: '',
        city: site.city,
        zip: '',
        service: '',
        message: '',
        consent: false,
      });
    }
    setStatus('idle');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={close}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-[1.5rem] shadow-2xl animate-scale-in"
      >
        <div className="px-6 sm:px-8 pt-6 pb-5 sticky top-0 bg-white/95 backdrop-blur z-10 border-b border-slate-100">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="quote-title" className="text-xl font-extrabold text-slate-900">
                Kostenloses Angebot anfordern
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Teilen Sie uns Ihren Bedarf mit — wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
            <button
              onClick={close}
              className="grid place-items-center w-9 h-9 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors shrink-0"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <img
              src={site.contact.photo}
              alt={site.contact.contactPerson}
              className="w-9 h-9 rounded-full object-cover border border-white shadow-sm shrink-0"
            />
            <div className="text-xs text-slate-600">
              <span className="font-bold text-slate-900">{site.contact.contactPerson}</span> ({site.contact.contactRole}) prüft jede Anfrage persönlich.
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-6">
          {status === 'success' ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="relative inline-block mx-auto mb-4">
                <img
                  src={site.contact.photo}
                  alt={site.contact.contactPerson}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500 shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 grid place-items-center w-6 h-6 rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                Anfrage bereit zum Versenden!
              </h3>
              <p className="mt-2 text-slate-600 max-w-sm mx-auto">
                Vielen Dank, {form.name.split(' ')[0] || ''}! Ihr E-Mail-Programm
                sollte sich mit der vorformulierten Anfrage geöffnet haben.
                Möchten Sie lieber direkt sprechen? Rufen Sie uns an unter{' '}
                <a
                  href={site.contact.phoneHref}
                  className="font-semibold"
                  style={{ color: 'var(--brand-600)' }}
                >
                  {site.contact.phone}
                </a>
                .
              </p>
              <button onClick={close} className="btn-primary mt-6">
                Fertig
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-slate-700">
                    Vollständiger Name <span className="text-rose-500">*</span>
                  </span>
                  <input
                    required
                    type="text"
                    autoComplete="name"
                    className={field}
                    placeholder="Max Mustermann"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-slate-700">
                    E-Mail <span className="text-rose-500">*</span>
                  </span>
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    className={field}
                    placeholder="beispiel@domain.de"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-slate-700">
                    Telefonnummer <span className="text-rose-500">*</span>
                  </span>
                  <input
                    required
                    type="tel"
                    autoComplete="tel"
                    className={field}
                    placeholder="+49 176 55438063"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-slate-700">
                    Gewünschte Leistung
                  </span>
                  <select
                    className={field}
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                  >
                    <option value="">Leistung auswählen</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Sonstiges">Sonstiges / Nicht sicher</option>
                  </select>
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-slate-700">
                    Ort / Stadt <span className="text-rose-500">*</span>
                  </span>
                  <input
                    required
                    type="text"
                    className={field}
                    placeholder="Alsdorf"
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-slate-700">
                    Postleitzahl <span className="text-rose-500">*</span>
                  </span>
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    className={field}
                    placeholder="52477"
                    value={form.zip}
                    onChange={(e) => update('zip', e.target.value)}
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-slate-700">
                  Ihre Nachricht
                </span>
                <textarea
                  rows={3}
                  className={field + ' resize-none'}
                  placeholder="Fläche in qm, Häufigkeit, gewünschte Termine..."
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                />
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 rounded-md border-slate-300 text-[var(--brand-600)] focus:ring-[var(--brand-400)]"
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                />
                <span className="text-xs text-slate-500 leading-relaxed">
                  Ich erkläre mich damit einverstanden, bezüglich meiner Anfrage per Telefon,
                  E-Mail oder WhatsApp kontaktiert zu werden. Daten werden nicht an Dritte weitergegeben.
                </span>
              </label>

              {status === 'error' && (
                <div className="flex items-start gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm animate-fade-in">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button type="submit" className="btn-primary mt-1">
                <Send className="w-4 h-4" />
                Unverbindliches Angebot anfordern
              </button>
              <p className="text-center text-xs text-slate-400">
                100% unverbindlich. Keine versteckten Gebühren. Kostenloser Vor-Ort-Termin.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

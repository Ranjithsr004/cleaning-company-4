import { useEffect } from 'react';
import { X, ShieldCheck, FileText, Scale } from 'lucide-react';
import { site } from '@/config/site';

export type LegalTab = 'impressum' | 'datenschutz' | 'agb';

type Props = {
  open: boolean;
  tab: LegalTab;
  onClose: () => void;
  onTabChange: (tab: LegalTab) => void;
};

export function LegalModal({ open, tab, onClose, onTabChange }: Props) {
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-[1.5rem] shadow-2xl animate-scale-in overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onTabChange('impressum')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                tab === 'impressum'
                  ? 'bg-[var(--brand-600)] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Impressum
            </button>
            <button
              onClick={() => onTabChange('datenschutz')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                tab === 'datenschutz'
                  ? 'bg-[var(--brand-600)] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Datenschutz
            </button>
            <button
              onClick={() => onTabChange('agb')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                tab === 'agb'
                  ? 'bg-[var(--brand-600)] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              AGB
            </button>
          </div>

          <button
            onClick={onClose}
            className="grid place-items-center w-8 h-8 rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
          {tab === 'impressum' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Impressum
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="font-extrabold text-slate-900 text-base">
                  {site.name}
                </p>
                <p>Inhaber: {site.contact.contactPerson}</p>
                <p>{site.contact.address}</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">Kontakt</h3>
                <p className="mt-1">
                  Telefon: <a href={site.contact.phoneHref} className="text-[var(--brand-600)] font-semibold">{site.contact.phone}</a>
                </p>
                <p>
                  E-Mail: <a href={site.contact.emailHref} className="text-[var(--brand-600)] font-semibold">{site.contact.email}</a>
                </p>
                <p>
                  Website: <a href={`https://${site.legal.website}`} target="_blank" rel="noreferrer" className="text-[var(--brand-600)] font-semibold">{site.legal.website}</a>
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">Steuern & Registrierung</h3>
                <p className="mt-1">
                  <strong>Umsatzsteuer-Identifikationsnummer (USt-IdNr.):</strong> {site.legal.vatId} gemäß § 27 a Umsatzsteuergesetz
                </p>
                <p>
                  <strong>Steuernummer:</strong> {site.legal.taxNumber}
                </p>
                <p>
                  <strong>Zuständiges Finanzamt:</strong> {site.legal.taxOffice}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                <p className="mt-1">
                  {site.contact.contactPerson}<br />
                  {site.contact.address}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">EU-Streitschlichtung & Verbraucherstreitbeilegung</h3>
                <p className="mt-1">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--brand-600)] underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">Haftung für Inhalte und Links</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                </p>
              </div>
            </div>
          )}

          {tab === 'datenschutz' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Datenschutzerklärung
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Informationen zur Verarbeitung personenbezogener Daten nach DSGVO
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">1. Datenschutz auf einen Blick</h3>
                <p className="mt-1 text-slate-600">
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang sowie zur Beantwortung Ihrer Anfragen erhoben. Die nachfolgende Erklärung gibt Ihnen einen Überblick darüber, welche Art von Daten zu welchem Zweck erhoben werden.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">2. Verantwortliche Stelle</h3>
                <p className="mt-1">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                  <strong>{site.name}</strong><br />
                  Inhaber: {site.contact.contactPerson}<br />
                  {site.contact.address}<br />
                  Telefon: {site.contact.phone}<br />
                  E-Mail: {site.contact.email}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">3. Datenerfassung auf unserer Website</h3>
                <div className="mt-2 space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-800">Kontaktformular & E-Mail-Anfragen</h4>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Wenn Sie uns per Kontaktformular, E-Mail oder Telefon Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800">WhatsApp-Kontakt</h4>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Sofern Sie per WhatsApp Kontakt mit uns aufnehmen, verarbeitet WhatsApp Ireland Ltd. personenbezogene Daten. Wir nutzen diesen Kanal ausschließlich zur schnellen Kundenkommunikation auf Grundlage Ihrer freiwilligen Kontaktaufnahme (Art. 6 Abs. 1 lit. a und lit. b DSGVO).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800">Cookies & Speicherung</h4>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Diese Website verwendet lediglich technisch notwendige Cookies sowie lokale Speicherelemente (LocalStorage), um Ihre Cookie-Präferenz zu speichern. Es findet kein unbefugtes Tracking Ihrer Person statt.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">4. Ihre Rechte als betroffene Person</h3>
                <p className="mt-1 text-slate-600 text-xs">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung (Art. 15 DSGVO) sowie ein Recht auf Berichtigung (Art. 16 DSGVO), Sperrung oder Löschung dieser Daten (Art. 17 DSGVO). Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen) zu.
                </p>
              </div>
            </div>
          )}

          {tab === 'agb' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Allgemeine Geschäftsbedingungen (AGB)
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Stand: {new Date().getFullYear()} — {site.name}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">§ 1 Geltungsbereich</h3>
                  <p className="mt-1 text-slate-600 text-xs">
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, Angebote und Dienstleistungen zwischen {site.name} (nachfolgend Auftragnehmer) und ihren Auftraggebern (Unternehmen, Hausverwaltungen sowie Privatkunden).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">§ 2 Angebot & Vertragsschluss</h3>
                  <p className="mt-1 text-slate-600 text-xs">
                    Angebote des Auftragnehmers sind unverbindlich und freibleibend. Der Vertrag kommt durch schriftliche Auftragsbestätigung, Bestätigung per E-Mail oder Beginn der Arbeitsausführung zustande.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">§ 3 Leistungsumfang & Ausführung</h3>
                  <p className="mt-1 text-slate-600 text-xs">
                    Der Leistungsumfang (z.B. Büroreinigung, Treppenhausreinigung, Fensterreinigung, Hausmeisterservice, Umzug) richtet sich nach dem individuellen Angebot bzw. Leistungsverzeichnis. Der Auftragnehmer setzt geschultes Personal sowie geeignete Reinigungsmittel und Geräte ein.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">§ 4 Pflichten des Auftraggebers</h3>
                  <p className="mt-1 text-slate-600 text-xs">
                    Der Auftraggeber gewährleistet dem Auftragnehmer den vereinbarten Zugang zu den zu reinigenden Räumlichkeiten sowie die Bereitstellung von Wasser und Strom zur Leistungserbringung im erforderlichen Umfang.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">§ 5 Abnahme & Reklamationen</h3>
                  <p className="mt-1 text-slate-600 text-xs">
                    Etwaige Beanstandungen hinsichtlich der ausgeführten Reinigungsarbeiten sind dem Auftragnehmer unverzüglich, spätestens innerhalb von 24 Stunden nach Leistungserbringung, mitzuteilen. Bei berechtigten Mängeln erfolgt eine kostenfreie Nachbesserung.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">§ 6 Zahlungsbedingungen</h3>
                  <p className="mt-1 text-slate-600 text-xs">
                    Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">§ 7 Haftung & Versicherung</h3>
                  <p className="mt-1 text-slate-600 text-xs">
                    Der Auftragnehmer verfügt über eine Betriebshaftpflichtversicherung zur Deckung gesetzlicher Haftpflichtansprüche. Für Schäden haftet der Auftragnehmer im Rahmen der gesetzlichen Bestimmungen bei Vorsatz und grober Fahrlässigkeit.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            {site.name} • {site.city}
          </p>
          <button onClick={onClose} className="btn-primary text-xs px-5 py-2">
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}

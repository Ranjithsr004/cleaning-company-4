import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { QuoteModal } from '@/components/QuoteModal';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Reviews } from '@/components/Reviews';
import { Process } from '@/components/Process';
import { Trust } from '@/components/Trust';
import { FAQ } from '@/components/FAQ';
import { CTABanner } from '@/components/CTABanner';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { CookieConsent } from '@/components/CookieConsent';
import { LegalModal, type LegalTab } from '@/components/LegalModal';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('impressum');

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  const openLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setLegalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header onQuoteClick={openQuote} />

      <main>
        <Hero onQuoteClick={openQuote} />
        <About onQuoteClick={openQuote} />
        <Services onQuoteClick={openQuote} />
        <Reviews />
        <Process />
        <Trust onQuoteClick={openQuote} />
        <FAQ onQuoteClick={openQuote} />
        <CTABanner onQuoteClick={openQuote} />
        <Contact onQuoteClick={openQuote} />
      </main>

      <Footer onQuoteClick={openQuote} onLegalClick={openLegal} />

      <FloatingWhatsApp />
      <CookieConsent onOpenPrivacy={() => openLegal('datenschutz')} />
      <QuoteModal open={quoteOpen} onClose={closeQuote} />
      <LegalModal
        open={legalOpen}
        tab={legalTab}
        onClose={() => setLegalOpen(false)}
        onTabChange={setLegalTab}
      />
    </div>
  );
}

export default App;

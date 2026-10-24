import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { videoShowcase, site } from '@/config/site';

type Props = {
  onQuoteClick: () => void;
};

type VideoPlayerProps = {
  src: string;
  title: string;
  badge: string;
  equipment: string;
};

function VideoPlayerCard({ src, title, badge, equipment }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="relative group rounded-[1.75rem] overflow-hidden bg-slate-950 aspect-[4/5] sm:aspect-[3/4] shadow-2xl border border-slate-800">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Subtle top & bottom gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-slate-950/60 pointer-events-none" />

      {/* Top badges */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-md">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Vor-Ort-Einsatz
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-extrabold shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[var(--brand-600)]" />
          {equipment}
        </span>
      </div>

      {/* Center play/pause overlay button */}
      <button
        onClick={togglePlay}
        className={`absolute inset-0 m-auto grid place-items-center w-16 h-16 rounded-full bg-white/90 text-slate-900 shadow-2xl backdrop-blur-md transition-all duration-300 z-10 hover:scale-110 ${
          isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 scale-100'
        }`}
        aria-label={isPlaying ? 'Video pausieren' : 'Video abspielen'}
      >
        {isPlaying ? (
          <Pause className="w-7 h-7 fill-current" />
        ) : (
          <Play className="w-7 h-7 fill-current ml-1 text-[var(--brand-600)]" />
        )}
      </button>

      {/* Bottom info & controls bar */}
      <div className="absolute bottom-4 inset-x-4 z-10">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0 pointer-events-none">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-300)]">
              {badge}
            </span>
            <h4 className="text-white font-extrabold text-base sm:text-lg leading-snug truncate drop-shadow-sm">
              {title}
            </h4>
          </div>

          {/* Quick interactive controls */}
          <div className="flex items-center gap-1.5 shrink-0 bg-slate-900/80 backdrop-blur-md p-1 rounded-xl border border-white/10">
            <button
              onClick={toggleMute}
              className="grid place-items-center w-8 h-8 rounded-lg text-white/90 hover:text-white hover:bg-white/20 transition-colors"
              title={isMuted ? 'Ton einschalten' : 'Ton stummschalten'}
              aria-label={isMuted ? 'Ton einschalten' : 'Ton stummschalten'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={handleFullscreen}
              className="grid place-items-center w-8 h-8 rounded-lg text-white/90 hover:text-white hover:bg-white/20 transition-colors"
              title="Vollbild"
              aria-label="Vollbild"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkShowcase({ onQuoteClick }: Props) {
  return (
    <section id="praxis" className="py-20 lg:py-28 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div
          className="absolute top-1/4 -right-40 w-96 h-96 rounded-full blur-[120px] opacity-25"
          style={{ background: 'var(--brand-500)' }}
        />
        <div
          className="absolute bottom-10 -left-40 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{ background: 'var(--brand-400)' }}
        />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow justify-center bg-white/10 text-[var(--brand-300)] border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Echte Vor-Ort-Aufnahmen
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Unsere Arbeit & Einsätze live im Video
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Sehen Sie unser Team und modernes Spezial-Equipment bei echten Einsätzen — von
            anspruchsvollen Höhenarbeiten in Industriehallen bis zur porentiefen maschinellen Grundreinigung.
          </p>
        </div>

        {/* Video showcase cards grid */}
        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-10">
          {videoShowcase.map((item) => (
            <div
              key={item.id}
              className="rounded-[2rem] p-5 sm:p-7 bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-colors"
            >
              <VideoPlayerCard
                src={item.video}
                title={item.title}
                badge={item.badge}
                equipment={item.equipment}
              />

              <div className="mt-6 flex flex-col flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[var(--brand-500)]/20 text-[var(--brand-300)] border border-[var(--brand-400)]/30">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.equipment}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-200">
                  {item.highlights.map((hl) => (
                    <li key={hl} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-700/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Fachgerecht & voll versichert
                  </div>

                  <button
                    onClick={onQuoteClick}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md hover:-translate-y-0.5"
                  >
                    Projekt anfragen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA block inside video section */}
        <div className="mt-12 rounded-[1.75rem] p-6 sm:p-8 bg-gradient-to-r from-slate-800/90 to-slate-800/50 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-[var(--brand-500)] text-white shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base sm:text-lg">
                Benötigen Sie eine maschinelle Grundreinigung oder Industriereinigung?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Kostenlose Besichtigung vor Ort in {site.city} und der Region {site.region}.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onQuoteClick}
              className="btn-primary w-full sm:w-auto text-sm px-5 py-3"
            >
              Jetzt unverbindlich anfragen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

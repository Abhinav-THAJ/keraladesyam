'use client';

import React from 'react';
import { X, Play, Volume2, Radio, Maximize2, Users } from 'lucide-react';

interface LiveTvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiveTvModal({ isOpen, onClose }: LiveTvModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-ink-midnight text-surface-pure rounded-lg overflow-hidden shadow-2xl border border-secondary/30 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-ink-midnight border-b border-secondary/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-live-alert animate-ping" />
            <span className="font-bold text-sm tracking-wide text-live-alert flex items-center gap-1">
              <Radio className="w-4 h-4" /> കേരളദേശം 24x7 ലൈവ് ടിവി
            </span>
            <span className="text-xs bg-surface-pure/10 px-2 py-0.5 rounded text-secondary-fixed-dim">
              HD സ്ട്രീം
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-surface-pure/20 text-surface-pure transition-colors"
            title="ക്ലോസ് ചെയ്യുക"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Simulated Broadcast Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-midnight via-transparent to-black/60" />

          {/* Broadcast Overlay Graphic */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-live-alert text-white px-2.5 py-1 rounded text-xs font-bold shadow">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            LIVE
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur px-2.5 py-1 rounded text-xs text-white">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>48,219 പേർ കാണുന്നു</span>
          </div>

          {/* Central Play Badge */}
          <div className="z-10 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center mx-auto shadow-lg hover:scale-105 transition-transform cursor-pointer border-2 border-white/40">
              <Play className="w-8 h-8 fill-current translate-x-0.5" />
            </div>
            <p className="mt-3 text-sm font-medium text-white/90 drop-shadow">
              പ്രൈം ടൈം വാർത്താ വിശകലനം • ലൈവ് സംപ്രേഷണം പുരോഗമിക്കുന്നു
            </p>
          </div>

          {/* Bottom News Ticker inside Video */}
          <div className="absolute bottom-0 left-0 right-0 bg-ink-midnight/90 border-t border-secondary/30 p-2.5 flex items-center gap-2">
            <span className="bg-editorial-crimson text-white text-[11px] font-bold px-2 py-0.5 rounded shrink-0">
              തത്സമയം
            </span>
            <div className="overflow-hidden whitespace-nowrap text-xs text-white/90 font-medium">
              <span>
                വയനാട് തുരങ്കപാത നിർമാണത്തിന് കേന്ദ്ര പരിസ്ഥിതി അനുമതി ലഭിച്ചു; മന്ത്രിസഭയുടെ പ്രത്യേക യോഗം തുടങ്ങി • തെക്കൻ ജില്ലകളിൽ ഇന്ന് ശക്തമായ വേനൽമഴയ്ക്ക് സാധ്യത
              </span>
            </div>
          </div>
        </div>

        {/* Video Controls & Related Channels */}
        <div className="p-4 bg-ink-midnight/95 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs border-t border-secondary/20">
          <div className="flex items-center gap-3 text-secondary-fixed-dim">
            <span className="flex items-center gap-1 text-surface-pure font-semibold">
              <Volume2 className="w-4 h-4 text-primary" /> ഓഡിയോ: മലയാളം
            </span>
            <span>•</span>
            <span>ഗുണനിലവാരം: 1080p 60fps</span>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-surface-pure/10 hover:bg-surface-pure/20 text-white font-medium transition-colors"
            >
              വാർത്തകളിലേക്ക് മടങ്ങുക
            </button>
            <a
              href="/article/wayanad-tunnel"
              className="px-4 py-1.5 rounded bg-primary text-white font-medium hover:bg-editorial-crimson transition-colors"
            >
              പ്രധാന വാർത്ത വായിക്കുക
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

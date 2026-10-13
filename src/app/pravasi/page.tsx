'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Globe,
  Plane,
  HeartHandshake,
  TrendingUp,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building,
  Coins,
  Bell
} from 'lucide-react';
import {
  MAIN_ARTICLES,
  CURRENCY_RATES,
  PRAVASI_COUNTRIES
} from '@/data/newsData';
import CurrencyConverter from '@/components/CurrencyConverter';

export default function PravasiPage() {
  const [selectedCountry, setSelectedCountry] = useState('all');

  const pravasiArticles = MAIN_ARTICLES.filter((art) => {
    if (selectedCountry === 'all') {
      return (
        art.country !== undefined ||
        art.category.includes('പ്രവാസ') ||
        art.tags?.some((t) => t.toLowerCase().includes('pravasi') || t.toLowerCase().includes('gulf'))
      );
    }
    return art.country === selectedCountry;
  });

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Live Currency & Gold Exchange Rate Ribbon */}
      <section className="w-full bg-ink-midnight text-surface-pure shadow-sm border-b border-surface-pure/10">
        <div className="max-w-[1360px] mx-auto px-4 md:px-margin-desktop py-2.5 flex flex-col lg:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto no-scrollbar py-0.5">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-tertiary-fixed shrink-0">
              <TrendingUp className="w-3.5 h-3.5 text-opinion-ochre" />
              ലൈവ് വിനിമയ നിരക്കുകൾ:
            </span>
            <div className="flex items-center gap-4 whitespace-nowrap text-secondary-fixed-dim shrink-0">
              {CURRENCY_RATES.map((c) => (
                <span key={c.code} className="flex items-center gap-1">
                  <span className="text-surface-pure font-semibold">1 {c.code}</span> = ₹{c.inrRate}{' '}
                  {c.change === 'up' && (
                    <span className="text-emerald-400 text-[10px]">▲</span>
                  )}
                  {c.change === 'down' && (
                    <span className="text-editorial-crimson text-[10px]">▼</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 bg-surface-pure/10 px-3 py-1 rounded-full text-surface-pure text-xs">
            <span className="flex items-center gap-1 text-opinion-ochre font-bold">
              <Coins className="w-3.5 h-3.5" /> സ്വർണ്ണവില (22K പവൻ):
            </span>
            <span className="font-semibold">കേരളം: ₹58,400</span>
            <span className="text-secondary-fixed-dim">|</span>
            <span className="font-semibold">ദുബായ്: AED 2,820</span>
          </div>
        </div>
      </section>

      {/* Diaspora Identity & Region Bar */}
      <section className="w-full bg-surface-pure shadow-sm border-b border-slate-border">
        <div className="max-w-[1360px] mx-auto px-4 md:px-margin-desktop py-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-white bg-primary text-[10px] font-bold uppercase tracking-wider">
                  ഗൾഫ് & പ്രവാസി പതിപ്പ്
                </span>
                <span className="text-secondary text-xs">
                  24x7 ആഗോള മലയാളി ന്യൂസ് ഡെസ്ക്
                </span>
              </div>
              <h1 className="font-headline text-3xl md:text-4xl text-ink-midnight font-bold tracking-tight">
                പ്രവാസി ലോകം
              </h1>
            </div>

            <div className="flex items-center gap-3 text-secondary text-xs">
              <span className="flex items-center gap-1 bg-surface-container px-3 py-1.5 rounded text-ink-midnight font-medium">
                <Clock className="w-3.5 h-3.5 text-primary" /> IST 14:32 • GST 13:02 • AST 12:02
              </span>
              <button
                onClick={() => alert('പ്രവാസി അടിയന്തര ഹെൽപ്പ്‌ലൈൻ: നോർക്ക റൂട്ട്സ് ടോൾ ഫ്രീ 1800 425 3939')}
                className="flex items-center gap-1 bg-primary text-white px-3 py-1.5 rounded hover:bg-editorial-crimson transition-colors font-medium shadow-xs"
              >
                <Bell className="w-3.5 h-3.5" /> ഹെൽപ്പ്‌ലൈൻ
              </button>
            </div>
          </div>

          {/* Country Quick Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3 mt-1 border-t border-slate-border/60">
            {PRAVASI_COUNTRIES.map((ctry) => (
              <button
                key={ctry.id}
                onClick={() => setSelectedCountry(ctry.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  selectedCountry === ctry.id
                    ? 'bg-ink-midnight text-white shadow-xs'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span>{ctry.flag}</span>
                <span>{ctry.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="w-full max-w-[1360px] mx-auto px-4 md:px-margin-desktop py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Diaspora News Feed (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {pravasiArticles.map((art) => (
              <article
                key={art.id}
                className="bg-surface-pure rounded p-5 shadow-sm border border-slate-border flex flex-col md:flex-row gap-5 group"
              >
                <div className="md:w-5/12 overflow-hidden rounded shrink-0">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded"
                  />
                </div>

                <div className="md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5 text-xs">
                      <span
                        className="font-bold uppercase tracking-wider text-[11px]"
                        style={{ color: art.categoryColor }}
                      >
                        {art.category}
                      </span>
                      <span className="text-secondary text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {art.timeAgo}
                      </span>
                    </div>

                    <Link href={`/article/${art.id}`}>
                      <h3 className="font-headline text-lg font-bold text-ink-midnight group-hover:text-primary transition-colors leading-snug mb-2">
                        {art.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed mb-3">
                      {art.lead}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-border text-xs text-secondary">
                    <span className="font-medium text-ink-midnight">
                      ലേഖകൻ: {art.author.name} ({art.author.location})
                    </span>

                    <Link
                      href={`/article/${art.id}`}
                      className="text-primary hover:underline font-bold flex items-center gap-1"
                    >
                      വായിക്കുക <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* Flight & Airline Updates Strip */}
            <div className="bg-surface-pure rounded p-5 shadow-sm border border-slate-border">
              <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
                <h3 className="font-headline text-base font-bold text-ink-midnight flex items-center gap-2">
                  <Plane className="w-4 h-4 text-editorial-crimson" />
                  വിമാന സർവീസുകൾ & എയർപോർട്ട് വിവരങ്ങൾ
                </h3>
                <span className="text-xs text-primary font-bold">ഏവിയേഷൻ ഡെസ്ക്</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded bg-surface-container-low border border-slate-border">
                  <span className="font-bold text-ink-midnight block mb-1">
                    ഈദ് അവധിക്കാല പ്രത്യേക വിമാനങ്ങൾ
                  </span>
                  <p className="text-secondary text-[11px] leading-relaxed">
                    എയർ ഇന്ത്യ എക്സ്പ്രസും ഇൻഡിഗോയും ഗൾഫിൽ നിന്ന് കേരളത്തിലേക്ക് 28 അധിക സർവീസുകൾ നടത്തും.
                  </p>
                </div>
                <div className="p-3 rounded bg-surface-container-low border border-slate-border">
                  <span className="font-bold text-ink-midnight block mb-1">
                    കൊച്ചി വിമാനത്താവളത്തിൽ പുതിയ സൗകര്യങ്ങൾ
                  </span>
                  <p className="text-secondary text-[11px] leading-relaxed">
                    സിയാലിൽ അന്താരാഷ്ട്ര ടെർമിനലിൽ ഇമിഗ്രേഷൻ കൗണ്ടറുകളുടെ എണ്ണം കൂട്ടി; കാത്തിരിപ്പ് സമയം കുറയും.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Diaspora Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Live Currency Calculator */}
            <CurrencyConverter />

            {/* NORKA & Pravasi Welfare Card */}
            <div className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border">
              <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
                <h4 className="font-headline text-base font-bold text-ink-midnight flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-editorial-crimson" />
                  നോർക്ക & പ്രവാസി ക്ഷേമം
                </h4>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                  ഔദ്യോഗികം
                </span>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="p-2.5 rounded bg-surface-container-low border border-slate-border">
                  <span className="font-bold text-ink-midnight block mb-0.5">
                    പ്രവാസി ക്ഷേമനിധി പെൻഷൻ
                  </span>
                  <span className="text-secondary text-[11px] block">
                    അംശാദായം ഓൺലൈനായി അടയ്ക്കാനുള്ള പുതിയ പോർട്ടൽ സജ്ജമായി.
                  </span>
                </li>
                <li className="p-2.5 rounded bg-surface-container-low border border-slate-border">
                  <span className="font-bold text-ink-midnight block mb-0.5">
                    പ്രവാസി ഭദ്രത പുനരധിവാസ വായ്പ
                  </span>
                  <span className="text-secondary text-[11px] block">
                    മടങ്ങിയെത്തിയ പ്രവാസികൾക്ക് സംരംഭം തുടങ്ങാൻ 30 ലക്ഷം രൂപ വരെ സബ്‌സിഡിയോടെ വായ്പ.
                  </span>
                </li>
                <li className="p-2.5 rounded bg-surface-container-low border border-slate-border">
                  <span className="font-bold text-ink-midnight block mb-0.5">
                    നോർക്ക ഐഡന്റിറ്റി കാർഡ്
                  </span>
                  <span className="text-secondary text-[11px] block">
                    5 ലക്ഷം രൂപയുടെ ആക്സിഡന്റൽ ഇൻഷുറൻസ് പരിരക്ഷ ഉൾപ്പെടുന്ന കാർഡ്.
                  </span>
                </li>
              </ul>
            </div>

            {/* Gulf Visa & Legal Guide */}
            <div className="bg-[#FDFBF7] rounded p-4 shadow-sm border border-amber-200">
              <h4 className="font-headline text-base font-bold text-ink-midnight pb-2 border-b border-amber-200 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-opinion-ochre" />
                വിസ & തൊഴിൽ നിയമങ്ങൾ
              </h4>
              <p className="text-xs text-secondary leading-relaxed mb-3">
                ഗൾഫ് രാജ്യങ്ങളിലെ പുതിയ ലേബർ ലോ പരിഷ്കരണങ്ങളും പ്രവാസികൾ അറിഞ്ഞിരിക്കേണ്ട നിയമപരമായ സംശയങ്ങളും.
              </p>
              <button
                onClick={() => alert('നിയമ സഹായ സെൽ ഉടൻ സമ്പർക്കത്തിൽ വരും.')}
                className="w-full py-1.5 rounded bg-opinion-ochre text-white text-xs font-bold hover:bg-amber-700 transition-colors shadow-xs"
              >
                നിയമ സഹായം തേടുക
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

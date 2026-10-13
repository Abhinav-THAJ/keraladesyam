'use client';

import React from 'react';
import Link from 'next/link';
import {
  Globe2,
  Building,
  MapPin,
  ShieldCheck,
  Radio,
  Users,
  Target,
  Sparkles,
  Phone,
  Mail,
  Award
} from 'lucide-react';

export default function AboutPage() {
  const pillars = [
    {
      icon: <Globe2 className="w-6 h-6 text-editorial-crimson" />,
      title: 'ആഗോള വാർത്തകൾ (Global News)',
      desc: 'ലോകത്തിന്റെ വിവിധ ഭാഗങ്ങളിൽ സംഭവിക്കുന്ന ചരിത്രപരമായ മുന്നേറ്റങ്ങളും, രാജ്യാന്തര നയതന്ത്രങ്ങളും, പ്രവാസി മലയാളികളുടെ ജീവിത യാഥാർത്ഥ്യങ്ങളും വസ്തുനിഷ്ഠമായി റിപ്പോർട്ട് ചെയ്യുന്നു.',
    },
    {
      icon: <Building className="w-6 h-6 text-tertiary-container" />,
      title: 'ഭാരതം & സമകാലികം (National Affairs)',
      desc: 'ഇന്ത്യയിലെ ഭരണഘടനാപരമായ തീരുമാനങ്ങൾ, പാർലമെന്റ് നടപടികൾ, ദേശീയ സാമ്പത്തിക വളർച്ച, ശാസ്ത്ര-സാങ്കേതിക നേട്ടങ്ങൾ എന്നിവയുടെ ആഴത്തിലുള്ള വിശകലനം.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-opinion-ochre" />,
      title: 'കേരളം സമഗ്രം (Focus on Kerala)',
      desc: 'കാസർഗോഡ് മുതൽ തിരുവനന്തപുരം വരെയുള്ള 14 ജില്ലകളിലെയും തദ്ദേശീയ പ്രശ്നങ്ങൾ, ജനകീയ മുന്നേറ്റങ്ങൾ, കല, സാഹിത്യം, പരിസ്ഥിതി എന്നിവ മുൻഗണനയോടെ ജനങ്ങളിലേക്ക് എത്തിക്കുന്നു.',
    },
    {
      icon: <Radio className="w-6 h-6 text-live-alert" />,
      title: 'ഡിജിറ്റൽ ചാനൽ & ലൈവ് ടിവി (Digital Channel)',
      desc: 'നവമാധ്യമങ്ങളുടെ വേഗതയിൽ 24x7 തത്സമയ ഡിജിറ്റൽ സംപ്രേഷണം, പ്രത്യേക ചർച്ചകൾ, പ്രൈം ടൈം വാർത്താ ബുള്ളറ്റിനുകൾ, വീഡിയോ ഡോക്യുമെന്ററികൾ.',
    },
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Hero Header */}
      <section className="w-full bg-ink-midnight text-surface-pure py-14 px-4 md:px-margin-desktop border-b-4 border-editorial-crimson">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-editorial-crimson" />
              <span className="text-secondary-fixed-dim text-xs font-bold uppercase tracking-widest">
                ഞങ്ങളെക്കുറിച്ച് • ABOUT US
              </span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-2">
              കേരളദേശം
            </h1>
            <p className="font-caption text-base text-secondary-fixed tracking-widest uppercase font-semibold mb-4">
              KERALA DESAM • GLOBAL MALAYALAM NEWS NETWORK
            </p>
            <p className="text-secondary-fixed-dim text-sm md:text-base leading-relaxed">
              ആഗോളതലത്തിൽ നടക്കുന്ന വാർത്തകളും, ഭാരതത്തിലെ സമകാലിക സംഭവവികാസങ്ങളും, പ്രത്യേകിച്ച് ദൈവത്തിന്റെ സ്വന്തം നാടായ കേരളത്തിന്റെ ഓരോ സ്പന്ദനങ്ങളും തത്സമയം വിരൽത്തുമ്പിലെത്തിക്കുന്ന ആധുനിക മലയാള വാർത്താ വെബ് പോർട്ടലും ഡിജിറ്റൽ ചാനലും.
            </p>
          </div>

          <div className="bg-surface-pure/10 p-6 rounded-lg border border-surface-pure/20 text-center shrink-0 w-full md:w-80 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-editorial-crimson flex items-center justify-center text-white font-headline text-3xl font-bold mx-auto mb-3 shadow-md">
              കേ
            </div>
            <h3 className="font-headline text-xl font-bold text-surface-pure">
              കേരളദേശം
            </h3>
            <p className="text-xs text-secondary-fixed-dim uppercase tracking-wider mt-0.5 mb-3">
              KERALA DESAM
            </p>
            <div className="pt-3 border-t border-surface-pure/20 text-xs text-secondary-fixed-dim space-y-1">
              <p>സത്യം • ജനപക്ഷം • നിഷ്പക്ഷം</p>
              <p className="text-[11px] text-tertiary-fixed">24x7 ആഗോള മലയാളം ന്യൂസ്റൂം</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Mission Content */}
      <main className="w-full max-w-[1360px] mx-auto px-4 md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Editorial Mission (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-surface-pure p-8 rounded-lg shadow-sm border border-slate-border">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-ink-midnight mb-4">
                ഞങ്ങളുടെ ദൗത്യം (Our Mission)
              </h2>
              <div className="space-y-4 text-base text-on-surface leading-relaxed font-normal">
                <p className="newspaper-lead">
                  കേരളദേശം (Kerala Desam) മലയാളം എന്നത് ആഗോള പശ്ചാത്തലത്തിൽ വാർത്തകളെ സമഗ്രമായി നോക്കിക്കാണുന്ന ഒരു സ്വതന്ത്ര മാധ്യമ സംരംഭമാണ്. ഡിജിറ്റൽ യുഗത്തിൽ അതിവേഗം മാറിക്കൊണ്ടിരിക്കുന്ന ലോകത്ത്, വാർത്തകൾ കേവലം വേഗതയിൽ മാത്രമല്ല, കൃത്യതയിലും സത്യസന്ധതയിലും എത്തിക്കുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം.
                </p>
                <p>
                  ലോകത്തിന്റെ ഏതു കോണിൽ ജീവിക്കുന്ന മലയാളിക്കും സ്വന്തം നാടിന്റെ ഓരോ വിശേഷങ്ങളും സ്വന്തം ഭാഷയിൽ അറിയാനുള്ള അവകാശമുണ്ട്. അന്താരാഷ്ട്ര തലത്തിലുള്ള സംഭവവികാസങ്ങൾ മുതൽ ഇന്ത്യയിലെ കേന്ദ്ര നയങ്ങളും സുപ്രധാന ഭരണഘടനാ വിധികളും, തുടർന്ന് കേരളത്തിന്റെ 14 ജില്ലകളിലെയും സാധാരണക്കാരുടെ ജീവിതപ്രശ്നങ്ങളും ഭരണകൂടത്തിന്റെ വികസന പ്രവർത്തനങ്ങളും വരെ ഒരേപോലെ കേരളദേശം വാർത്തയാക്കുന്നു.
                </p>
                <p>
                  വാണിജ്യ താൽപ്പര്യങ്ങൾക്കും പക്ഷപാതപരമായ അജണ്ടകൾക്കും അതീതമായി, സാധാരണ ജനങ്ങളുടെ ശബ്ദമായി നിലകൊള്ളാൻ കേരളദേശം പ്രതിജ്ഞാബദ്ധമാണ്.
                </p>
              </div>
            </section>

            {/* 4 Pillars Grid */}
            <div>
              <h2 className="font-headline text-2xl font-bold text-ink-midnight mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-editorial-crimson" />
                വാർത്താ മുൻഗണനകൾ (Coverage Pillars)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillars.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-pure p-5 rounded border border-slate-border shadow-xs hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 rounded bg-surface-container-low">
                        {p.icon}
                      </div>
                      <h3 className="font-headline text-base font-bold text-ink-midnight">
                        {p.desc.includes('ആഗോള') ? 'ആഗോള വാർത്തകൾ' : p.title.split(' (')[0]}
                      </h3>
                    </div>
                    <span className="text-[11px] text-secondary font-semibold uppercase tracking-wider block mb-2">
                      {p.title}
                    </span>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Code of Ethics */}
            <section className="bg-[#FDFBF7] p-6 rounded-lg border-l-4 border-l-opinion-ochre border border-slate-border">
              <h3 className="font-headline text-xl font-bold text-ink-midnight mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-opinion-ochre" />
                ധാർമ്മിക മൂല്യങ്ങൾ (Code of Ethics)
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="text-opinion-ochre font-bold">•</span>
                  <span><strong>വസ്തുനിഷ്ഠത:</strong> ഊഹാപോഹങ്ങൾക്ക് പകരം തെളിവുകളോടെയുള്ള റിപ്പോർട്ടിംഗ്.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-opinion-ochre font-bold">•</span>
                  <span><strong>ജനപക്ഷ നിലപാട്:</strong> ദുർബലരുടെയും അടിസ്ഥാന വിഭാഗങ്ങളുടെയും അവകാശ സംരക്ഷണം.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-opinion-ochre font-bold">•</span>
                  <span><strong>പ്രവാസി സൗഹൃദം:</strong> ലോകമെമ്പാടുമുള്ള പ്രവാസി മലയാളികളുടെ പ്രശ്നങ്ങളിൽ സജീവ ഇടപെടൽ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-opinion-ochre font-bold">•</span>
                  <span><strong>സാങ്കേതിക മികവ്:</strong> വായനക്കാർക്ക് ആധുനിക ഡിജിറ്റൽ യൂസർ ഇന്റർഫേസും വോയ്സ് റീഡറും ഉറപ്പാക്കൽ.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Right Info Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Identity Card */}
            <div className="bg-surface-pure rounded p-6 shadow-sm border border-slate-border">
              <h3 className="font-headline text-lg font-bold text-ink-midnight pb-2 border-b border-slate-border mb-3">
                സ്ഥാപന വിവരങ്ങൾ
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-secondary block">മാധ്യമ നാമം:</span>
                  <span className="font-bold text-ink-midnight text-sm">
                    കേരളദേശം (Kerala Desam)
                  </span>
                </div>
                <div>
                  <span className="text-secondary block">മാധ്യമ സ്വഭാവം:</span>
                  <span className="font-semibold text-ink-midnight">
                    വെബ് പോർട്ടൽ & ഡിജിറ്റൽ ചാനൽ (Web Portal / Channel)
                  </span>
                </div>
                <div>
                  <span className="text-secondary block">പ്രവർത്തന പരിധി:</span>
                  <span className="font-semibold text-ink-midnight">
                    ആഗോളതലം, ഭാരതം, കേരളം (Global, India & Kerala)
                  </span>
                </div>
                <div>
                  <span className="text-secondary block">പ്രധാന ഭാഷ:</span>
                  <span className="font-semibold text-ink-midnight">
                    മലയാളം (Malayalam) • English Subtitles
                  </span>
                </div>
                <div>
                  <span className="text-secondary block">ആസ്ഥാനം:</span>
                  <span className="font-semibold text-ink-midnight">
                    കേരളം, ഇന്ത്യ (തിരുവനന്തപുരം & കൊച്ചി)
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-border">
                <Link
                  href="/"
                  className="w-full py-2 rounded bg-primary hover:bg-editorial-crimson text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-xs"
                >
                  പ്രധാന വാർത്തകളിലേക്ക് മടങ്ങുക
                </Link>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-surface-pure rounded p-6 shadow-sm border border-slate-border">
              <h3 className="font-headline text-lg font-bold text-ink-midnight pb-2 border-b border-slate-border mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-editorial-crimson" />
                വാർത്താ ഡെസ്ക് സമ്പർക്കം
              </h3>
              <p className="text-xs text-secondary leading-relaxed mb-4">
                നിങ്ങളുടെ പ്രദേശത്തെ പ്രധാന വാർത്തകൾ, ചിത്രങ്ങൾ, വീഡിയോകൾ, അഭിപ്രായങ്ങൾ എന്നിവ ഞങ്ങൾക്ക് അയക്കാം:
              </p>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-ink-midnight font-medium">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>news@keraladesam.in</span>
                </div>
                <div className="flex items-center gap-2 text-ink-midnight font-medium">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 484 2900000 (News Desk)</span>
                </div>
                <div className="flex items-center gap-2 text-ink-midnight font-medium">
                  <Globe2 className="w-4 h-4 text-primary" />
                  <span>www.keraladesam.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

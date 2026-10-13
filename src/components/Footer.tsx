'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Check, ArrowUp, Send, Phone, MapPin, Globe } from 'lucide-react';
import { KERALA_DISTRICTS } from '@/data/newsData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-midnight text-surface-pure pt-12 pb-8 border-t-4 border-editorial-crimson">
      <div className="max-w-[1360px] mx-auto px-4 md:px-margin-desktop">
        {/* Top Grid: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-surface-pure/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded bg-editorial-crimson flex items-center justify-center text-white font-headline text-2xl font-bold">
                കേ
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-3xl font-bold text-surface-pure tracking-tight">
                  കേരളദേശം
                </span>
                <span className="text-[11px] text-secondary-fixed-dim uppercase tracking-wider font-bold">
                  KERALA DESAM • GLOBAL MALAYALAM NEWS NETWORK
                </span>
              </div>
            </div>
            <p className="text-secondary-fixed-dim text-xs leading-relaxed max-w-md">
              കേരളദേശം (Kerala Desam) മലയാളം: ലോകമെമ്പാടും നടക്കുന്ന പ്രധാന വാർത്തകളും, ഭാരതത്തിലെ സമകാലിക വിഷയങ്ങളും, പ്രത്യേകിച്ച് കേരളത്തിന്റെ ഓരോ രാഷ്ട്രീയ, സാമൂഹിക, സാംസ്കാരിക, വികസന സ്പന്ദനങ്ങളും തത്സമയം വിരൽത്തുമ്പിലെത്തിക്കുന്ന ആധുനിക മലയാള വാർത്താ വെബ് പോർട്ടലും ഡിജിറ്റൽ ചാനലും.
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs text-secondary-fixed-dim">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-opinion-ochre" /> തിരുവനന്തപുരം, കൊച്ചി, കോഴിക്കോട്, ദുബായ്
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-opinion-ochre" /> +91 484 2900000
              </span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-surface-pure/5 p-6 rounded-lg border border-surface-pure/10">
            <h3 className="font-headline text-lg font-bold text-surface-pure mb-1">
              പ്രഭാത വാർത്താ സംഗ്രഹം നിങ്ങളുടെ ഇൻബോക്സിൽ
            </h3>
            <p className="text-secondary-fixed-dim text-xs mb-3">
              ഓരോ ദിവസത്തെയും ഏറ്റവും പ്രധാനപ്പെട്ട വാർത്തകൾ, വിശകലനങ്ങൾ, മാർക്കറ്റ് റിപ്പോർട്ടുകൾ എന്നിവ രാവിലെ 7 മണിക്ക് മുൻപായി ലഭ്യമാക്കാൻ ഇമെയിൽ നൽകുക.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 rounded bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-medium">
                <Check className="w-4 h-4 text-emerald-400" />
                നന്ദി! നിങ്ങളുടെ ഇമെയിൽ വിജയകരമായി രജിസ്റ്റർ ചെയ്തു.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-3 top-2.5 text-secondary-fixed-dim" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="നിങ്ങളുടെ ഇമെയിൽ വിലാസം..."
                    className="w-full bg-surface-pure/10 text-surface-pure text-xs rounded pl-9 pr-3 py-2 border border-surface-pure/20 focus:outline-none focus:border-editorial-crimson"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-editorial-crimson hover:bg-primary text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow"
                >
                  <Send className="w-3.5 h-3.5" /> സബ്സ്ക്രൈബ്
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-8 border-b border-surface-pure/10 text-xs">
          {/* Col 1 */}
          <div>
            <h4 className="font-bold text-opinion-ochre uppercase tracking-wider text-[11px] mb-3">
              പ്രധാന വിഭാഗങ്ങൾ
            </h4>
            <ul className="space-y-2 text-secondary-fixed-dim">
              <li>
                <Link href="/" className="hover:text-surface-pure transition-colors">
                  പ്രധാന വാർത്തകൾ
                </Link>
              </li>
              <li>
                <Link href="/kerala" className="hover:text-surface-pure transition-colors">
                  കേരളം സമഗ്രം
                </Link>
              </li>
              <li>
                <Link href="/pravasi" className="hover:text-surface-pure transition-colors">
                  പ്രവാസി & ഗൾഫ് വാർത്തകൾ
                </Link>
              </li>
              <li>
                <Link href="/article/wayanad-tunnel" className="hover:text-surface-pure transition-colors">
                  വയനാട് തുരങ്കപാത റിപ്പോർട്ട്
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-surface-pure transition-colors font-semibold text-tertiary-fixed">
                  ഞങ്ങളെക്കുറിച്ച് (About Us)
                </Link>
              </li>
              <li>
                <Link href="/#politics" className="hover:text-surface-pure transition-colors">
                  രാഷ്ട്രീയ വിശകലനം
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-opinion-ochre uppercase tracking-wider text-[11px] mb-3">
              ജില്ലാ ഡെസ്ക് (14 ജില്ലകൾ)
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-secondary-fixed-dim text-[11px]">
              {KERALA_DISTRICTS.slice(1, 11).map((dist) => (
                <Link
                  key={dist}
                  href={`/kerala?district=${encodeURIComponent(dist)}`}
                  className="hover:text-surface-pure transition-colors"
                >
                  {dist}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-opinion-ochre uppercase tracking-wider text-[11px] mb-3">
              പ്രവാസ ലോകം
            </h4>
            <ul className="space-y-2 text-secondary-fixed-dim">
              <li>
                <Link href="/pravasi" className="hover:text-surface-pure transition-colors">
                  യു.എ.ഇ (ദുബായ് / അബുദാബി)
                </Link>
              </li>
              <li>
                <Link href="/pravasi" className="hover:text-surface-pure transition-colors">
                  സൗദി അറേബ്യ (വിഷൻ 2030)
                </Link>
              </li>
              <li>
                <Link href="/pravasi" className="hover:text-surface-pure transition-colors">
                  ഖത്തർ & കുവൈത്ത്
                </Link>
              </li>
              <li>
                <Link href="/pravasi" className="hover:text-surface-pure transition-colors">
                  കറൻസി നിരക്കുകൾ & സ്വർണ്ണവില
                </Link>
              </li>
              <li>
                <Link href="/pravasi" className="hover:text-surface-pure transition-colors">
                  നോർക്ക & പ്രവാസി ക്ഷേമനിധി
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-opinion-ochre uppercase tracking-wider text-[11px] mb-3">
              മീഡിയ & സർവീസുകൾ
            </h4>
            <ul className="space-y-2 text-secondary-fixed-dim">
              <li>
                <span className="hover:text-surface-pure cursor-pointer transition-colors">
                  ഇ-പേപ്പർ പതിപ്പ്
                </span>
              </li>
              <li>
                <span className="hover:text-surface-pure cursor-pointer transition-colors">
                  ലൈവ് ടിവി സ്ട്രീമിംഗ്
                </span>
              </li>
              <li>
                <span className="hover:text-surface-pure cursor-pointer transition-colors">
                  ഡാം ജലനിരപ്പ് റഡാർ
                </span>
              </li>
              <li>
                <span className="hover:text-surface-pure cursor-pointer transition-colors">
                  കാലാവസ്ഥാ മുന്നറിയിപ്പ്
                </span>
              </li>
              <li>
                <span className="hover:text-surface-pure cursor-pointer transition-colors">
                  വാർത്താ ആർക്കൈവ്സ്
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5 */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-bold text-opinion-ochre uppercase tracking-wider text-[11px] mb-3">
              സ്ഥാപന വിവരം
            </h4>
            <p className="text-secondary-fixed-dim text-[11px] leading-relaxed mb-3">
              കേരളദേശം പബ്ലിക്കേഷൻസ് ലിമിറ്റഡ്. ചീഫ് എഡിറ്റർ: കെ. ആർ. നാരായണൻ.
            </p>
            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-1.5 py-2 rounded bg-surface-pure/10 hover:bg-surface-pure/20 text-surface-pure text-xs font-semibold transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" /> മുകളിലേക്ക്
            </button>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary-fixed-dim">
          <p>
            © 2025 കേരളദേശം (Kerala Desam). All rights reserved. | രജി. നമ്പർ: KL-ED-2025-09
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">സ്വകാര്യതാ നയം</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">ഉപയോഗ നിബന്ധനകൾ</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">പരസ്യ നിരക്കുകൾ</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">പരാതി പരിഹാര സെൽ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

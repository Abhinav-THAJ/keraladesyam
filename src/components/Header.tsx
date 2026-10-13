'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Calendar,
  Sun,
  Newspaper,
  Search,
  Bell,
  Bookmark,
  Menu,
  X,
  Radio,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { useFont } from './FontContext';
import { BREAKING_NEWS, MAIN_ARTICLES } from '@/data/newsData';
import LiveTvModal from './LiveTvModal';

export default function Header() {
  const pathname = usePathname();
  const { fontSize, setFontSize, savedArticles } = useFont();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showAlertsDropdown, setShowAlertsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveTvOpen, setLiveTvOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<'kochi' | 'tvm' | 'calicut'>('kochi');

  const weatherData = {
    kochi: { name: 'കൊച്ചി', temp: '31°C', condition: 'സൂര്യപ്രകാശം' },
    tvm: { name: 'തിരുവനന്തപുരം', temp: '32°C', condition: 'തെളിഞ്ഞ വാനം' },
    calicut: { name: 'കോഴിക്കോട്', temp: '30°C', condition: 'ഈർപ്പമുള്ള കാലാവസ്ഥ' },
  };

  const navLinks = [
    { label: 'പ്രധാന വാർത്തകൾ', href: '/' },
    { label: 'കേരളം', href: '/kerala' },
    { label: 'പ്രവാസം', href: '/pravasi' },
    { label: 'പ്രത്യേക റിപ്പോർട്ട്', href: '/article/wayanad-tunnel' },
    { label: 'ദേശം', href: '/#national' },
    { label: 'ലോകം', href: '/#world' },
    { label: 'രാഷ്ട്രീയം', href: '/#politics' },
    { label: 'ബിസിനസ്', href: '/#business' },
    { label: 'സിനിമ & കല', href: '/#cinema' },
    { label: 'സ്പോർട്സ്', href: '/#sports' },
    { label: 'അഭിപ്രായം', href: '/#opinion' },
    { label: 'ഞങ്ങളെക്കുറിച്ച്', href: '/about' },
  ];

  const searchResults = searchQuery.trim()
    ? MAIN_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.lead.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (a.district && a.district.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <>
      <header className="sticky top-0 z-40 bg-surface-pure/95 backdrop-blur-md shadow-[0_2px_8px_rgba(10,25,47,0.04)] border-b border-slate-border">
        {/* Top utility ribbon */}
        <div className="bg-ink-midnight text-surface-pure text-caption">
          <div className="max-w-[1360px] mx-auto px-4 md:px-margin-desktop h-9 flex items-center justify-between">
            <div className="flex items-center gap-space-lg text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-secondary-fixed-dim" />
                <span>2025 മാർച്ച് 29, ശനി</span>
              </span>
              <div className="hidden md:flex items-center gap-1.5 cursor-pointer group">
                <Sun className="w-3.5 h-3.5 text-opinion-ochre" />
                <span>
                  {weatherData[selectedCity].name} {weatherData[selectedCity].temp}
                </span>
                <span className="text-[10px] text-secondary-fixed-dim ml-1">
                  ({weatherData[selectedCity].condition})
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-2 text-secondary-fixed-dim">
                <span>പതിപ്പുകൾ:</span>
                <button
                  onClick={() => setSelectedCity('tvm')}
                  className={`hover:underline ${
                    selectedCity === 'tvm' ? 'text-surface-pure font-bold' : 'text-surface-pure/80'
                  }`}
                >
                  തിരുവനന്തപുരം
                </button>
                <span>|</span>
                <button
                  onClick={() => setSelectedCity('kochi')}
                  className={`hover:underline ${
                    selectedCity === 'kochi' ? 'text-surface-pure font-bold' : 'text-surface-pure/80'
                  }`}
                >
                  കൊച്ചി
                </button>
                <span>|</span>
                <button
                  onClick={() => setSelectedCity('calicut')}
                  className={`hover:underline ${
                    selectedCity === 'calicut' ? 'text-surface-pure font-bold' : 'text-surface-pure/80'
                  }`}
                >
                  കോഴിക്കോട്
                </button>
                <span>|</span>
                <Link href="/pravasi" className="text-secondary-fixed hover:underline font-medium">
                  ഗൾഫ് / NRI
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-space-md text-xs">
              <button
                onClick={() => alert('കേരളദേശം ഡിജിറ്റൽ ഇ-പേപ്പർ പുതിയ ലക്കം ഉടൻ ഡൗൺലോഡ് ചെയ്യാം!')}
                className="flex items-center gap-1 text-tertiary-fixed hover:underline"
              >
                <Newspaper className="w-3.5 h-3.5" />
                <span>ഇ-പേപ്പർ</span>
              </button>

              <div className="flex items-center gap-1 bg-ink-midnight/80 px-2 py-0.5 rounded border border-surface-pure/10">
                <span className="text-secondary-fixed-dim text-[11px] mr-1 hidden sm:inline">
                  അക്ഷരവലിപ്പം:
                </span>
                <button
                  onClick={() => setFontSize('sm')}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    fontSize === 'sm' ? 'bg-primary text-white font-bold' : 'text-surface-pure hover:bg-secondary/40'
                  }`}
                  title="ചെറുത്"
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize('md')}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    fontSize === 'md' ? 'bg-primary text-white font-bold' : 'text-surface-pure hover:bg-secondary/40'
                  }`}
                  title="സാധാരണ"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('lg')}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    fontSize === 'lg' ? 'bg-primary text-white font-bold' : 'text-surface-pure hover:bg-secondary/40'
                  }`}
                  title="വലുത്"
                >
                  A+
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Masthead Banner */}
        <div className="max-w-[1360px] mx-auto px-4 md:px-margin-desktop h-20 flex items-center justify-between gap-space-lg">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-space-md">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded bg-editorial-crimson flex items-center justify-center text-white shadow-sm font-headline text-2xl font-bold tracking-tight border border-white/20">
                കേ
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-3xl md:text-4xl text-primary font-bold tracking-tight leading-none group-hover:text-editorial-crimson transition-colors">
                  കേരളദേശം
                </span>
                <span className="font-caption text-[11px] text-secondary tracking-wider uppercase mt-1 font-bold">
                  KERALA DESAM • GLOBAL MALAYALAM NEWS NETWORK
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Live Updates Status Strip */}
          <div className="hidden lg:flex items-center bg-error-container/40 text-editorial-crimson px-4 py-1.5 rounded-full gap-2 border border-error-container">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-editorial-crimson opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-editorial-crimson" />
            </span>
            <span className="font-label-ticker text-xs tracking-wide font-bold">
              ലൈവ് അപ്‌ഡേറ്റുകൾ സജീവം • 14 ജില്ലകൾ
            </span>
          </div>

          {/* Search Bar & User Actions */}
          <div className="flex items-center gap-3">
            {/* Search Input Box */}
            <div className="relative hidden md:block w-64 lg:w-72">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                placeholder="വാർത്തകൾ തിരയുക..."
                className="w-full bg-parchment-base rounded-full py-1.5 pl-9 pr-4 text-xs font-medium text-on-surface border border-slate-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
              />
              <Search className="w-4 h-4 absolute left-3 top-2 text-secondary" />

              {/* Search Autocomplete Dropdown */}
              {showSearchDropdown && searchQuery.trim() && (
                <div className="absolute top-10 left-0 right-0 bg-surface-pure rounded-lg shadow-xl border border-slate-border p-2 z-50 max-h-80 overflow-y-auto">
                  <div className="flex justify-between items-center px-2 py-1 text-[11px] text-secondary border-b border-slate-border">
                    <span>ഫലങ്ങൾ ({searchResults.length})</span>
                    <button
                      onClick={() => setShowSearchDropdown(false)}
                      className="text-xs text-secondary hover:text-on-surface"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {searchResults.length === 0 ? (
                    <p className="p-3 text-xs text-secondary text-center">
                      ഫലങ്ങളൊന്നും കണ്ടെത്തിയില്ല
                    </p>
                  ) : (
                    searchResults.map((item) => (
                      <Link
                        key={item.id}
                        href={`/article/${item.id}`}
                        onClick={() => setShowSearchDropdown(false)}
                        className="block p-2 rounded hover:bg-surface-container-low transition-colors"
                      >
                        <p className="text-xs font-semibold text-on-surface line-clamp-1">
                          {item.title}
                        </p>
                        <span className="text-[10px] text-secondary">
                          {item.category} • {item.timeAgo}
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Notification Bell Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowAlertsDropdown(!showAlertsDropdown)}
                className="p-2 text-secondary hover:text-primary transition-colors relative rounded-full hover:bg-surface-container"
                title="അറിയിപ്പുകൾ"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-live-alert" />
              </button>

              {showAlertsDropdown && (
                <div className="absolute right-0 top-10 w-80 bg-surface-pure rounded-lg shadow-xl border border-slate-border p-3 z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-border">
                    <span className="font-bold text-xs text-ink-midnight flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-editorial-crimson" />
                      പ്രധാന അറിയിപ്പുകൾ
                    </span>
                    <button
                      onClick={() => setShowAlertsDropdown(false)}
                      className="text-xs text-secondary hover:text-on-surface"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="divide-y divide-slate-border mt-1">
                    {BREAKING_NEWS.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="py-2 text-xs">
                        <p className="font-medium text-on-surface hover:text-primary cursor-pointer line-clamp-2">
                          {item}
                        </p>
                        <span className="text-[10px] text-secondary">തത്സമയ ഡെസ്ക്</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Saved Bookmarks Counter */}
            <Link
              href="/#bookmarks"
              className="p-2 text-secondary hover:text-primary transition-colors relative rounded-full hover:bg-surface-container"
              title="സംരക്ഷിച്ച വാർത്തകൾ"
            >
              <Bookmark className="w-5 h-5" />
              {savedArticles.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedArticles.length}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-on-surface lg:hidden rounded hover:bg-surface-container"
              title="മെനു തുറക്കുക"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Primary Desktop Navigation Bar */}
        <div className="bg-surface-pure border-t border-slate-border">
          <div className="max-w-[1360px] mx-auto px-4 md:px-margin-desktop overflow-x-auto no-scrollbar">
            <nav className="flex items-center gap-1 py-1.5 min-w-max text-xs font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-sm transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-primary-container text-white font-bold shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Live TV Button in Navbar */}
              <button
                onClick={() => setLiveTvOpen(true)}
                className="px-3 py-1.5 rounded-sm text-live-alert font-bold hover:bg-red-50 transition-colors flex items-center gap-1.5 ml-2 border border-live-alert/30"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-live-alert animate-pulse" />
                ലൈവ് ടിവി
              </button>
            </nav>
          </div>
        </div>

        {/* Breaking News Ticker Ribbon */}
        <div className="bg-parchment-base border-t border-slate-border">
          <div className="max-w-[1360px] mx-auto px-4 md:px-margin-desktop h-10 flex items-center overflow-hidden">
            <div className="flex items-center bg-primary text-on-primary px-3 py-1 font-label-ticker text-xs uppercase shrink-0 gap-1.5 shadow-sm rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-surface-pure animate-ping" />
              <span>ബ്രേക്കിംഗ്</span>
            </div>
            <div className="overflow-hidden whitespace-nowrap px-4 text-xs font-medium text-on-surface flex-1">
              <div className="animate-ticker space-x-12">
                {BREAKING_NEWS.concat(BREAKING_NEWS).map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-block text-on-surface hover:text-primary transition-colors cursor-pointer mr-8"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden pt-40 px-4">
          <div className="bg-surface-pure rounded-lg p-5 max-h-[75vh] overflow-y-auto shadow-2xl border border-slate-border">
            <div className="flex items-center justify-between pb-3 border-b border-slate-border mb-4">
              <span className="font-headline text-lg font-bold text-primary">കേരളദേശം മെനു</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded text-secondary hover:text-on-surface"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold rounded hover:bg-surface-container text-on-surface"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLiveTvOpen(true);
                }}
                className="px-3 py-2 text-sm font-bold text-live-alert flex items-center gap-2 rounded hover:bg-red-50 text-left"
              >
                <Radio className="w-4 h-4" /> ലൈവ് ടിവി കാണുക
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live TV Modal */}
      <LiveTvModal isOpen={liveTvOpen} onClose={() => setLiveTvOpen(false)} />
    </>
  );
}

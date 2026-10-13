'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Eye,
  Filter,
  ArrowRight,
  ShieldAlert,
  Building2,
  GraduationCap,
  Sparkles,
  Share2,
  Bookmark
} from 'lucide-react';
import { MAIN_ARTICLES, KERALA_DISTRICTS } from '@/data/newsData';
import { useFont } from '@/components/FontContext';

export default function KeralaPage() {
  const { toggleBookmark, isBookmarked } = useFont();

  const [selectedDistrict, setSelectedDistrict] = useState('എല്ലാം');
  const [selectedCategory, setSelectedCategory] = useState('സമഗ്രം');

  const categories = [
    'സമഗ്രം',
    'രാഷ്ട്രീയം',
    'ഭരണം & നിയമസഭ',
    'വിദ്യാഭ്യാസം',
    'ക്രൈം & ക്രമസമാധാനം',
    'വികസനം & അടിസ്ഥാനസൗകര്യം',
  ];

  // Filter articles by district and category
  const filteredArticles = MAIN_ARTICLES.filter((article) => {
    const matchesDistrict =
      selectedDistrict === 'എല്ലാം' || article.district === selectedDistrict;
    const matchesCategory =
      selectedCategory === 'സമഗ്രം' || article.category.includes(selectedCategory);
    return matchesDistrict && (selectedCategory === 'സമഗ്രം' || matchesCategory);
  });

  const spotlightDistrict = selectedDistrict === 'എല്ലാം' ? 'വയനാട്' : selectedDistrict;

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Section Header & Sub-Category Filter Strip */}
      <section className="w-full bg-surface-pure shadow-sm border-b border-slate-border">
        <div className="max-w-[1360px] mx-auto px-4 md:px-margin-desktop py-4">
          {/* Breadcrumb & Live Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs text-secondary">
            <div className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-primary transition-colors">
                ഹോം
              </Link>
              <span>/</span>
              <span className="text-editorial-crimson font-bold">കേരളം</span>
              <span>/</span>
              <span className="text-on-surface">സമഗ്ര വാർത്തകൾ</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low px-2.5 py-1 rounded-full text-secondary text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-live-alert animate-ping" />
              <span className="font-bold">തത്സമയ ഡെസ്ക് • 14 ജില്ലകൾ സജീവം</span>
            </div>
          </div>

          {/* Section Title & Sub-category Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
            <div className="flex items-baseline gap-3">
              <h1 className="font-headline text-3xl md:text-4xl text-ink-midnight font-bold tracking-tight">
                കേരളം
              </h1>
              <span className="text-xs text-secondary uppercase tracking-widest font-bold">
                State Newsroom
              </span>
            </div>

            {/* Category Navigation Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs rounded transition-all whitespace-nowrap font-medium ${
                    selectedCategory === cat
                      ? 'bg-primary text-white font-bold shadow-sm'
                      : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 14 District Quick Filter Pills Bar */}
          <div className="pt-3 mt-1 border-t border-slate-border/60 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1 text-xs text-secondary shrink-0 pr-1 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-editorial-crimson" />
              <span>ജില്ലകൾ:</span>
            </div>
            <div className="flex items-center gap-1.5 min-w-max pb-1">
              {KERALA_DISTRICTS.map((dist) => (
                <button
                  key={dist}
                  onClick={() => setSelectedDistrict(dist)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors font-medium ${
                    selectedDistrict === dist
                      ? 'bg-ink-midnight text-white font-bold shadow-xs'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {dist}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main District Content Grid */}
      <main className="w-full max-w-[1360px] mx-auto px-4 md:px-margin-desktop py-6">
        {/* District Spotlight Header */}
        <div className="bg-surface-pure rounded p-4 mb-6 shadow-sm border border-slate-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-editorial-crimson/10 text-editorial-crimson flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-headline text-lg font-bold text-ink-midnight">
                {selectedDistrict === 'എല്ലാം'
                  ? 'കേരളം: 14 ജില്ലകളിലെ പ്രധാന വിവരങ്ങൾ'
                  : `${selectedDistrict} ജില്ലാ വിശേഷങ്ങൾ`}
              </h2>
              <p className="text-xs text-secondary">
                {filteredArticles.length} വാർത്തകൾ കണ്ടെത്തി • തത്സമയ റിപ്പോർട്ടുകൾ
              </p>
            </div>
          </div>

          {selectedDistrict !== 'എല്ലാം' && (
            <button
              onClick={() => setSelectedDistrict('എല്ലാം')}
              className="text-xs text-primary font-bold hover:underline"
            >
              എല്ലാ ജില്ലകളും കാണിക്കുക &times;
            </button>
          )}
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Story Feed (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {filteredArticles.length === 0 ? (
              <div className="bg-surface-pure p-8 rounded text-center border border-slate-border">
                <p className="text-sm text-secondary">
                  തിരഞ്ഞെടുത്ത ഫിൽട്ടറിൽ വാർത്തകൾ ഒന്നും കണ്ടെത്തിയില്ല.
                </p>
                <button
                  onClick={() => {
                    setSelectedDistrict('എല്ലാം');
                    setSelectedCategory('സമഗ്രം');
                  }}
                  className="mt-3 px-4 py-1.5 rounded bg-primary text-white text-xs font-bold"
                >
                  ഫിൽട്ടർ പുനഃക്രമീകരിക്കുക
                </button>
              </div>
            ) : (
              filteredArticles.map((art, index) => (
                <article
                  key={art.id}
                  className="bg-surface-pure rounded p-5 shadow-sm border border-slate-border flex flex-col md:flex-row gap-5 group"
                >
                  {/* Article Thumbnail */}
                  <div className="md:w-5/12 overflow-hidden rounded shrink-0">
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded"
                    />
                  </div>

                  {/* Article Meta & Content */}
                  <div className="md:w-7/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5 text-xs">
                        <span
                          className="font-bold uppercase tracking-wider text-[11px]"
                          style={{ color: art.categoryColor }}
                        >
                          {art.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-secondary text-[11px] flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {art.timeAgo}
                          </span>
                          <button
                            onClick={() => toggleBookmark(art.id)}
                            className="text-secondary hover:text-primary transition-colors"
                            title="ബുക്ക്‌മാർക്ക്"
                          >
                            <Bookmark
                              className={`w-3.5 h-3.5 ${
                                isBookmarked(art.id) ? 'fill-primary text-primary' : ''
                              }`}
                            />
                          </button>
                        </div>
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
                      <span className="flex items-center gap-1 font-semibold text-ink-midnight">
                        <MapPin className="w-3 h-3 text-editorial-crimson" />
                        {art.district || 'കേരളം'}
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
              ))
            )}
          </div>

          {/* Right District Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* District Quick Statistics Card */}
            <div className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border">
              <h3 className="font-headline text-base font-bold text-ink-midnight pb-2 border-b border-slate-border mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-editorial-crimson" />
                കേരളം ഒറ്റനോട്ടത്തിൽ
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between p-2 rounded bg-surface-container-low">
                  <span className="text-secondary">ആകെ ജില്ലകൾ:</span>
                  <span className="font-bold text-ink-midnight">14 എണ്ണം</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-surface-container-low">
                  <span className="text-secondary">നിയമസഭാ മണ്ഡലങ്ങൾ:</span>
                  <span className="font-bold text-ink-midnight">140</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-surface-container-low">
                  <span className="text-secondary">ലോക്‌സഭാ മണ്ഡലങ്ങൾ:</span>
                  <span className="font-bold text-ink-midnight">20</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-surface-container-low">
                  <span className="text-secondary">അന്താരാഷ്ട്ര വിമാനത്താവളങ്ങൾ:</span>
                  <span className="font-bold text-ink-midnight">4 (തിരുവനന്തപുരം, കൊച്ചി, കോഴിക്കോട്, കണ്ണൂർ)</span>
                </div>
              </div>
            </div>

            {/* Crime & Law Enforcement Desk */}
            <div className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border">
              <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
                <h4 className="font-headline text-base font-bold text-ink-midnight flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-editorial-crimson" />
                  ക്രൈം & സുരക്ഷാ ഡെസ്ക്
                </h4>
                <span className="text-[10px] text-secondary">അടിയന്തര മുന്നറിയിപ്പ്</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-2 rounded bg-red-50/70 border border-red-200/70">
                  <span className="text-[10px] text-editorial-crimson font-bold block mb-1">
                    സൈബർ സുരക്ഷാ ജാഗ്രത
                  </span>
                  <p className="font-medium text-ink-midnight leading-snug">
                    ഓൺലൈൻ ട്രേഡിംഗ് തട്ടിപ്പുകൾക്കെതിരെ പോലീസ് മുന്നറിയിപ്പ്; അപരിചിത ലിങ്കുകളിൽ ക്ലിക്ക് ചെയ്യരുത്.
                  </p>
                </div>
                <div className="p-2 rounded bg-amber-50/70 border border-amber-200/70">
                  <span className="text-[10px] text-amber-800 font-bold block mb-1">
                    ട്രാഫിക് അഡ്വൈസറി
                  </span>
                  <p className="font-medium text-ink-midnight leading-snug">
                    ദേശീയപാത 66 വികസനവുമായി ബന്ധപ്പെട്ട് കോഴിക്കോട്-മലപ്പുറം അതിർത്തികളിൽ ഗതാഗത നിയന്ത്രണം.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Employment Bulletin */}
            <div className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border">
              <h4 className="font-headline text-base font-bold text-ink-midnight pb-2 border-b border-slate-border mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-tertiary-container" />
                വിദ്യാഭ്യാസം & തൊഴിൽ
              </h4>
              <ul className="space-y-2 text-xs divide-y divide-slate-border">
                <li className="pt-1.5 first:pt-0">
                  <span className="font-semibold text-on-surface hover:text-primary cursor-pointer block leading-snug">
                    എസ്എസ്എൽസി, പ്ലസ് ടു പരീക്ഷാ മൂല്യനിർണയം ഏപ്രിൽ ആദ്യവാരം തുടങ്ങും
                  </span>
                  <span className="text-[10px] text-secondary">വിദ്യാഭ്യാസ വകുപ്പ്</span>
                </li>
                <li className="pt-2">
                  <span className="font-semibold text-on-surface hover:text-primary cursor-pointer block leading-snug">
                    കേരള പി.എസ്.സി എൽ.ഡി ക്ലർക്ക് പുതിയ വിജ്ഞാപനം ഈ മാസം അവസാനം
                  </span>
                  <span className="text-[10px] text-secondary">പി.എസ്.സി ബുള്ളറ്റിൻ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

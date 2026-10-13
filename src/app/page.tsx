'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  Eye,
  Bookmark,
  Share2,
  TrendingUp,
  Flame,
  CheckCircle2,
  ArrowRight,
  Vote,
  Sparkles,
  PlayCircle,
  Volume2
} from 'lucide-react';
import { MAIN_ARTICLES, BREAKING_NEWS } from '@/data/newsData';
import DamWeatherWidget from '@/components/DamWeatherWidget';
import { useFont } from '@/components/FontContext';

export default function HomePage() {
  const { toggleBookmark, isBookmarked } = useFont();

  const [activeTrendingTag, setActiveTrendingTag] = useState<string | null>(null);
  const [pollVoted, setPollVoted] = useState<number | null>(null);
  const [pollCounts, setPollCounts] = useState([68, 24, 8]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const heroArticle = MAIN_ARTICLES[0];
  const secondaryArticles = MAIN_ARTICLES.slice(1, 5);
  const opinionArticles = [
    {
      id: 'opinion-1',
      title: 'വികസനവും പരിസ്ഥിതിയും: വയനാട് തുരങ്കപാത ഉയർത്തുന്ന ചോദ്യങ്ങൾ',
      author: 'പ്രൊഫ. എം. കെ. സാനു',
      role: 'പ്രമുഖ സാഹിത്യ നിരൂപകൻ & ചിന്തകൻ',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8',
    },
    {
      id: 'opinion-2',
      title: 'പ്രവാസി നിക്ഷേപങ്ങളും കേരളത്തിന്റെ വ്യവസായ വളർച്ചയും',
      author: 'സി. പി. ജോൺ',
      role: 'സാമ്പത്തിക നിരീക്ഷകൻ',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8',
    },
  ];

  const handleVote = (idx: number) => {
    if (pollVoted === null) {
      setPollVoted(idx);
      setPollCounts((prev) => {
        const next = [...prev];
        next[idx] += 1;
        return next;
      });
    }
  };

  const handleShare = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard?.writeText(window.location.origin + `/article/${id}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const trendingTags = [
    '#WayanadTunnel',
    '#KeralaBudget2025',
    '#PravasiHolidays',
    '#KochiMetro',
    '#SantoshTrophy',
    '#SummerRainAlert',
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Trending Topics & Kerala Desam Focus Strip */}
      <section className="w-full bg-surface-pure border-b border-slate-border py-2.5 px-4 md:px-margin-desktop">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden text-xs">
            <span className="font-bold text-ink-midnight flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-editorial-crimson" />
              കേരളദേശം ഫോക്കസ്:
            </span>
            <p className="text-secondary truncate text-xs font-medium">
              ആഗോള സമകാലികം • ഭാരതം • കേരളത്തിലെ 14 ജില്ലകളിലെ തത്സമയ വാർത്തകൾ
            </p>
          </div>

          {/* Quick Topic Chips */}
          <div className="flex items-center gap-2 overflow-x-auto text-xs no-scrollbar py-0.5 shrink-0 w-full md:w-auto">
            <span className="text-secondary font-bold shrink-0 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-opinion-ochre" />
              ട്രെൻഡിംഗ്:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setActiveTrendingTag(activeTrendingTag === tag ? null : tag)
                }
                className={`px-2.5 py-0.5 rounded-full transition-colors whitespace-nowrap text-xs font-medium ${
                  activeTrendingTag === tag
                    ? 'bg-primary text-white font-bold shadow-xs'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Editorial 3-Column Broadsheet Grid */}
      <main className="w-full max-w-[1360px] mx-auto px-4 md:px-margin-desktop py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN (25% / 3 cols): Live Feed Desk, Dam Level Card, Interactive Poll */}
          <aside className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
            {/* Live Feed Desk */}
            <div className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border">
              <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-editorial-crimson rounded-full" />
                  <h2 className="font-headline text-lg font-bold text-ink-midnight">
                    ഇപ്പോഴത്തെ വാർത്തകൾ
                  </h2>
                </div>
                <span className="text-[11px] text-secondary font-medium bg-red-50 text-editorial-crimson px-2 py-0.5 rounded border border-red-200">
                  തത്സമയം
                </span>
              </div>

              {/* Feed Items */}
              <div className="flex flex-col divide-y divide-slate-border">
                {MAIN_ARTICLES.slice(0, 5).map((art) => (
                  <article key={art.id} className="py-3 group cursor-pointer">
                    <Link href={`/article/${art.id}`} className="block">
                      <div className="flex items-center justify-between mb-1 text-[11px]">
                        <span
                          className="font-bold uppercase tracking-wider"
                          style={{ color: art.categoryColor }}
                        >
                          {art.category}
                        </span>
                        <span className="text-secondary flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {art.timeAgo}
                        </span>
                      </div>
                      <h3 className="text-xs font-semibold text-on-surface group-hover:text-primary transition-colors leading-snug">
                        {art.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1.5 text-[11px] text-secondary">
                        <span className="flex items-center gap-0.5">
                          <Eye className="w-3 h-3" /> {art.views}
                        </span>
                        <span>•</span>
                        <span>{art.district || 'കേരളം'}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Dam Water Level & Weather Card */}
            <DamWeatherWidget />

            {/* Interactive Readers' Poll */}
            <div className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border">
              <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
                <h4 className="font-headline text-base font-bold text-ink-midnight flex items-center gap-1.5">
                  <Vote className="w-4 h-4 text-editorial-crimson" />
                  വായനക്കാരുടെ അഭിപ്രായം
                </h4>
                <span className="text-[10px] text-secondary font-semibold">ജനഹിതം</span>
              </div>
              <p className="text-xs font-semibold text-ink-midnight leading-relaxed mb-3">
                വയനാട് തുരങ്കപാത യാഥാർത്ഥ്യമാകുമ്പോൾ താമരശ്ശേരി ചുരത്തിലെ യാത്രാപ്രശ്നങ്ങൾക്ക് പൂർണ്ണ പരിഹാരമാകുമോ?
              </p>

              <div className="space-y-2 text-xs">
                {['തീർച്ചയായും, ശാശ്വത പരിഹാരമാകും', 'ചില മാറ്റങ്ങൾ മാത്രം ഉണ്ടാകും', 'പരിസ്ഥിതി പ്രശ്നങ്ങൾ ഉണ്ടാക്കാം'].map(
                  (opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleVote(idx)}
                      disabled={pollVoted !== null}
                      className={`w-full text-left p-2.5 rounded border transition-all relative overflow-hidden ${
                        pollVoted === idx
                          ? 'border-primary bg-primary/5 font-bold text-primary'
                          : 'border-slate-border hover:bg-surface-container text-on-surface'
                      }`}
                    >
                      {pollVoted !== null && (
                        <div
                          className="absolute inset-y-0 left-0 bg-primary/10 transition-all duration-700 -z-0"
                          style={{ width: `${pollCounts[idx]}%` }}
                        />
                      )}
                      <div className="relative z-10 flex justify-between items-center">
                        <span>{opt}</span>
                        {pollVoted !== null && (
                          <span className="font-bold">{pollCounts[idx]}%</span>
                        )}
                      </div>
                    </button>
                  )
                )}
              </div>
              {pollVoted !== null && (
                <p className="text-[11px] text-emerald-700 bg-emerald-50 p-2 rounded mt-3 text-center border border-emerald-200 font-medium">
                  നിങ്ങളുടെ വോട്ട് രേഖപ്പെടുത്തി! ആകെ രേഖപ്പെടുത്തിയ വോട്ടുകൾ: 14,380
                </p>
              )}
            </div>
          </aside>

          {/* MIDDLE COLUMN (50% / 6 cols): Lead Story, Secondary 2-Col Stories, Photo Essay */}
          <section className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
            {/* Lead Broadsheet Hero Article */}
            <article className="bg-surface-pure rounded p-5 shadow-sm border border-slate-border relative group">
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="bg-primary text-white px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                  പ്രധാന വാർത്ത
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleShare(e, heroArticle.id)}
                    className="p-1.5 text-secondary hover:text-primary transition-colors rounded-full hover:bg-surface-container"
                    title="പങ്കുവെക്കുക"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleBookmark(heroArticle.id)}
                    className={`p-1.5 transition-colors rounded-full hover:bg-surface-container ${
                      isBookmarked(heroArticle.id)
                        ? 'text-primary fill-current'
                        : 'text-secondary hover:text-primary'
                    }`}
                    title="ബുക്ക്‌മാർക്ക് ചെയ്യുക"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isBookmarked(heroArticle.id) ? 'fill-primary' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Dominant Headline */}
              <Link href={`/article/${heroArticle.id}`}>
                <h1 className="font-headline text-2xl md:text-3xl text-ink-midnight font-bold leading-tight group-hover:text-primary transition-colors mb-3">
                  {heroArticle.title}
                </h1>
              </Link>

              {/* Lead Image */}
              <Link href={`/article/${heroArticle.id}`} className="block overflow-hidden rounded relative mb-4">
                <img
                  src={heroArticle.imageUrl}
                  alt={heroArticle.title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-ink-midnight/80 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded">
                  {heroArticle.readTime} • ശബ്ദരൂപം ലഭ്യമാണ്
                </span>
              </Link>

              {/* Lead Paragraph with Newspaper Drop-Cap */}
              <p className="newspaper-lead text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
                {heroArticle.paragraphs[0]}
              </p>

              {/* Highlights Bullet Box */}
              {heroArticle.highlights && (
                <div className="bg-surface-container-low p-3.5 rounded border border-slate-border mb-4">
                  <h4 className="text-xs font-bold text-ink-midnight uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-editorial-crimson" />
                    പ്രധാന കണ്ടെത്തലുകൾ:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-on-surface">
                    {heroArticle.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-editorial-crimson font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Byline & Read More */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-border text-xs">
                <div className="flex items-center gap-2.5">
                  <img
                    src={heroArticle.author.avatar}
                    alt={heroArticle.author.name}
                    className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-border"
                  />
                  <div>
                    <span className="font-bold text-ink-midnight block">
                      {heroArticle.author.name}
                    </span>
                    <span className="text-[11px] text-secondary">
                      {heroArticle.author.location} • {heroArticle.timeAgo}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/article/${heroArticle.id}`}
                  className="px-3.5 py-1.5 rounded bg-primary text-white font-bold hover:bg-editorial-crimson transition-colors flex items-center gap-1"
                >
                  വായിക്കുക <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {copiedId === heroArticle.id && (
                <div className="absolute top-4 right-14 bg-ink-midnight text-white text-xs px-2.5 py-1 rounded shadow">
                  ലിങ്ക് കോപ്പി ചെയ്തു!
                </div>
              )}
            </article>

            {/* Secondary 2-Column Story Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {secondaryArticles.slice(0, 2).map((item) => (
                <article
                  key={item.id}
                  className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border flex flex-col justify-between group"
                >
                  <div>
                    <div className="overflow-hidden rounded mb-3">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span
                      className="text-[11px] font-bold uppercase block mb-1"
                      style={{ color: item.categoryColor }}
                    >
                      {item.category}
                    </span>
                    <Link href={`/article/${item.id}`}>
                      <h3 className="font-headline text-base font-bold text-ink-midnight group-hover:text-primary transition-colors leading-snug mb-2">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-on-surface-variant line-clamp-2 mb-3">
                      {item.lead}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-border text-[11px] text-secondary">
                    <span>{item.timeAgo}</span>
                    <Link
                      href={`/article/${item.id}`}
                      className="text-primary hover:underline font-bold flex items-center"
                    >
                      വിശദമായി <ArrowRight className="w-3 h-3 ml-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Visual Journalism / Photo Feature Banner */}
            <div className="bg-ink-midnight text-surface-pure rounded p-5 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] bg-opinion-ochre text-white px-2 py-0.5 rounded font-bold uppercase">
                  ഫോട്ടോ സ്റ്റോറി
                </span>
                <span className="text-xs text-secondary-fixed-dim">
                  ദൃശ്യങ്ങളിലൂടെ കേരളം
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">
                കുട്ടനാടൻ കായൽ ജീവിതം: വേനൽമഴയുടെ വരവറിയിച്ച് ഓളങ്ങൾ
              </h3>
              <p className="text-xs text-secondary-fixed-dim mb-4 leading-relaxed max-w-xl">
                ആലപ്പുഴയുടെ പച്ചപ്പും കായലോളങ്ങളും പകർത്തുന്ന വിസ്മയകരമായ ക്യാമറ കാഴ്ചകൾ.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80"
                  alt="Kuttanad 1"
                  className="rounded object-cover h-24 w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
                  alt="Kuttanad 2"
                  className="rounded object-cover h-24 w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80"
                  alt="Kuttanad 3"
                  className="rounded object-cover h-24 w-full"
                />
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN (25% / 3 cols): Editorial & Opinion, Pravasi Highlights, Top Reads */}
          <aside className="lg:col-span-3 flex flex-col gap-6 order-3">
            {/* Opinion & Editorial Box */}
            <div className="bg-[#FDFBF7] rounded p-4 shadow-sm border-l-4 border-l-opinion-ochre border border-slate-border">
              <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-opinion-ochre" />
                  <h3 className="font-headline text-base font-bold text-ink-midnight">
                    എഡിറ്റോറിയൽ & അഭിപ്രായം
                  </h3>
                </div>
                <span className="text-[11px] text-opinion-ochre font-bold">പംക്തി</span>
              </div>

              <div className="space-y-4">
                {opinionArticles.map((op) => (
                  <div key={op.id} className="group cursor-pointer">
                    <h4 className="font-headline text-sm font-bold text-ink-midnight group-hover:text-primary transition-colors leading-snug mb-2">
                      &ldquo;{op.title}&rdquo;
                    </h4>
                    <div className="flex items-center gap-2.5">
                      <img
                        src={op.image}
                        alt={op.author}
                        className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-border"
                      />
                      <div>
                        <span className="text-xs font-bold text-on-surface block">
                          {op.author}
                        </span>
                        <span className="text-[10px] text-secondary">
                          {op.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pravasi / Gulf Quick Box */}
            <div className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border">
              <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <h3 className="font-headline text-base font-bold text-ink-midnight">
                    പ്രവാസി സ്പെഷ്യൽ
                  </h3>
                </div>
                <Link
                  href="/pravasi"
                  className="text-[11px] text-primary hover:underline font-bold"
                >
                  മുഴുവൻ വാർത്തകൾ &rarr;
                </Link>
              </div>

              <div className="space-y-3">
                <div className="p-2.5 rounded bg-surface-container-low border border-slate-border/80">
                  <span className="text-[10px] bg-primary text-white px-1.5 py-0.5 rounded font-bold uppercase">
                    യു.എ.ഇ
                  </span>
                  <Link href="/pravasi">
                    <p className="text-xs font-semibold text-ink-midnight hover:text-primary transition-colors mt-1.5 leading-snug">
                      ഈദ് അൽ ഫിത്തർ അവധികൾ പ്രഖ്യാപിച്ചു; സർക്കാർ ജീവനക്കാർക്ക് ദീർഘാവധി
                    </p>
                  </Link>
                </div>

                <div className="p-2.5 rounded bg-surface-container-low border border-slate-border/80">
                  <span className="text-[10px] bg-tertiary text-white px-1.5 py-0.5 rounded font-bold uppercase">
                    സൗദി അറേബ്യ
                  </span>
                  <Link href="/pravasi">
                    <p className="text-xs font-semibold text-ink-midnight hover:text-primary transition-colors mt-1.5 leading-snug">
                      പ്രീമിയം റെസിഡൻസി വിസ വിഭാഗങ്ങളിൽ കൂടുതൽ ഇളവുകൾ പ്രഖ്യാപിച്ചു
                    </p>
                  </Link>
                </div>

                <div className="bg-amber-50 p-2.5 rounded border border-amber-200 text-xs flex items-center justify-between">
                  <span className="font-semibold text-ink-midnight">1 AED = ₹ 23.42</span>
                  <span className="text-[10px] font-bold text-emerald-600">▲ ഉയർന്നു</span>
                </div>
              </div>
            </div>

            {/* Most Read (Numbered Broadsheet Style) */}
            <div className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border">
              <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
                <h3 className="font-headline text-base font-bold text-ink-midnight">
                  ഏറ്റവും കൂടുതൽ വായിക്കപ്പെട്ടവ
                </h3>
                <TrendingUp className="w-4 h-4 text-editorial-crimson" />
              </div>

              <div className="space-y-3">
                {MAIN_ARTICLES.slice(0, 4).map((art, idx) => (
                  <Link
                    key={art.id}
                    href={`/article/${art.id}`}
                    className="flex items-start gap-3 group py-1 border-b border-slate-border/50 last:border-0"
                  >
                    <span className="font-headline text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors leading-none shrink-0 w-6">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold text-ink-midnight group-hover:text-primary transition-colors leading-snug">
                        {art.title}
                      </h4>
                      <span className="text-[10px] text-secondary mt-1 block">
                        {art.views} വായനക്കാർ • {art.timeAgo}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

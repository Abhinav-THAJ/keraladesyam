'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Clock,
  MapPin,
  CheckCircle2,
  Share2,
  Bookmark,
  Volume2,
  VolumeX,
  Play,
  Pause,
  MessageSquare,
  ThumbsUp,
  Send,
  ArrowLeft,
  ArrowRight,
  Eye,
  Check
} from 'lucide-react';
import { MAIN_ARTICLES, Article } from '@/data/newsData';
import { useFont } from '@/components/FontContext';

export default function ArticleDetailPage() {
  const params = useParams();
  const articleId = (params?.id as string) || 'wayanad-tunnel';
  const { toggleBookmark, isBookmarked } = useFont();

  const article: Article =
    MAIN_ARTICLES.find((a) => a.id === articleId) || MAIN_ARTICLES[0];

  // Audio TTS player simulation state
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Comments state
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'മുഹമ്മദ് റാഫി, കോഴിക്കോട്',
      text: 'താമരശ്ശേരി ചുരത്തിലെ ഗതാഗതക്കുരുക്കിന് ഇത് വലിയൊരു ആശ്വാസമാകും. പദ്ധതി സമയബന്ധിതമായി പൂർത്തിയാക്കണം.',
      time: '1 മണിക്കൂർ മുൻപ്',
      likes: 24,
    },
    {
      id: 2,
      author: 'ഡോ. സുരേഷ് ബാബു, സുൽത്താൻ ബത്തേരി',
      text: 'വയനാട്ടിലെ ജനങ്ങൾക്ക് ചികിത്സാ ആവശ്യങ്ങൾക്ക് കോഴിക്കോട് മെഡിക്കൽ കോളേജിലേക്ക് പെട്ടെന്ന് എത്താൻ ഈ തുരങ്കപാത ഉപകരിക്കും.',
      time: '45 മിനിറ്റ് മുൻപ്',
      likes: 18,
    },
  ]);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  // Audio timer simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 350);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleAudio = () => {
    // If Web Speech API is available, speak out the lead paragraph in Malayalam
    if (!isPlaying) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(
          `${article.title}. ${article.lead}`
        );
        utterance.lang = 'ml-IN';
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
      }
    } else {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`${article.title}\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        {
          id: Date.now(),
          author: commentAuthor.trim() || 'വായനക്കാരൻ',
          text: newComment.trim(),
          time: 'ഇപ്പോൾ',
          likes: 0,
        },
        ...comments,
      ]);
      setNewComment('');
      setCommentAuthor('');
    }
  };

  const relatedArticles = MAIN_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="flex flex-col w-full pb-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-margin-desktop w-full">
        {/* Editorial Breadcrumb & Category Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 pb-2 border-b border-slate-border text-xs text-secondary">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> ഹോം
            </Link>
            <span className="text-slate-border">/</span>
            <Link href="/kerala" className="text-editorial-crimson font-bold hover:underline">
              {article.district || 'കേരളം'}
            </Link>
            <span className="text-slate-border">/</span>
            <span className="text-on-surface font-medium">{article.category}</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-secondary" />
              പ്രസിദ്ധീകരിച്ചത്: {article.publishedAt}
            </span>
            <span className="hidden md:inline text-slate-border">|</span>
            <span className="hidden md:flex items-center gap-1 text-editorial-crimson font-medium">
              അവസാനം പുതുക്കിയത്: {article.updatedAt}
            </span>
          </div>
        </div>

        {/* Article Header & Lead Area */}
        <header className="pt-6 pb-4">
          <h1 className="font-headline text-3xl md:text-5xl text-ink-midnight font-bold tracking-tight mb-3 leading-[1.2]">
            {article.title}
          </h1>

          <p className="text-base md:text-xl text-on-surface-variant leading-relaxed max-w-4xl mb-6 font-normal">
            {article.lead}
          </p>

          {/* Byline & Interactive Audio Toolbar Strip */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-3 border-y border-slate-border bg-surface-pure/80 px-4 rounded-sm">
            {/* Author Byline */}
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-border shadow-xs"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-headline text-base font-bold text-ink-midnight leading-none">
                    {article.author.name}
                  </span>
                  {article.author.verified && (
                    <span title="വെരിഫൈഡ് ലേഖകൻ">
                      <CheckCircle2
                        className="w-4 h-4 text-primary fill-primary/10"
                      />
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-secondary mt-1">
                  <span>{article.author.designation}</span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5">
                    <MapPin className="w-3 h-3" /> {article.author.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Audio Text-To-Speech Player & Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Audio Player Widget */}
              <div className="flex items-center gap-2.5 bg-secondary-container/40 text-on-secondary-container px-3 py-1.5 rounded-full border border-secondary-fixed">
                <button
                  onClick={toggleAudio}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-editorial-crimson transition-transform active:scale-95 shadow-xs"
                  title={isPlaying ? 'പോസ് ചെയ്യുക' : 'ശബ്ദരൂപം പ്ലേ ചെയ്യുക'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  )}
                </button>
                <div className="flex flex-col pr-1">
                  <span className="text-[11px] font-bold text-ink-midnight flex items-center gap-1">
                    <Volume2 className="w-3 h-3 text-primary" />
                    വാർത്ത കേൾക്കാം
                  </span>
                  <div className="w-24 bg-surface-pure rounded-full h-1.5 mt-0.5 overflow-hidden">
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${audioProgress}%` }}
                    />
                  </div>
                </div>
                <span className="text-[10px] text-secondary font-mono">
                  {article.audioDuration || '03:45'}
                </span>
              </div>

              {/* Share & Bookmark buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                  title="വാട്സാപ്പിൽ പങ്കുവെക്കുക"
                >
                  വാട്സാപ്പ്
                </button>

                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold flex items-center gap-1 transition-colors"
                  title="ലിങ്ക് കോപ്പി ചെയ്യുക"
                >
                  {copiedLink ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={() => toggleBookmark(article.id)}
                  className={`p-2 rounded bg-surface-container hover:bg-surface-container-high transition-colors ${
                    isBookmarked(article.id)
                      ? 'text-primary'
                      : 'text-on-surface'
                  }`}
                  title="ബുക്ക്‌മാർക്ക് ചെയ്യുക"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      isBookmarked(article.id) ? 'fill-primary' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* 2-Column Article Reader Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Main Article Body (8 cols) */}
          <main className="lg:col-span-8 space-y-6">
            {/* Featured Image */}
            <figure className="overflow-hidden rounded-md border border-slate-border">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-80 md:h-[460px] object-cover"
              />
              {article.imageCaption && (
                <figcaption className="p-2.5 bg-surface-pure text-xs text-secondary border-t border-slate-border">
                  {article.imageCaption}
                </figcaption>
              )}
            </figure>

            {/* Highlights Box */}
            {article.highlights && (
              <div className="bg-surface-container-low p-5 rounded-md border-l-4 border-l-primary border border-slate-border">
                <h3 className="font-headline text-base font-bold text-ink-midnight mb-3">
                  പ്രധാന വശങ്ങൾ:
                </h3>
                <ul className="space-y-2 text-sm text-on-surface">
                  {article.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold text-lg leading-none">•</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rich Article Paragraphs with Broadsheet formatting */}
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-on-surface">
              {article.paragraphs.map((p, index) => (
                <p
                  key={index}
                  className={index === 0 ? 'newspaper-lead' : 'leading-relaxed'}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Tags Strip */}
            {article.tags && (
              <div className="pt-4 border-t border-slate-border flex flex-wrap items-center gap-2">
                <span className="text-xs text-secondary font-bold">ടാഗുകൾ:</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-surface-container text-xs text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Comments & Reader Discussion Box */}
            <section className="bg-surface-pure rounded p-6 shadow-sm border border-slate-border mt-8">
              <div className="flex items-center justify-between pb-3 border-b border-slate-border mb-4">
                <h3 className="font-headline text-xl font-bold text-ink-midnight flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-editorial-crimson" />
                  വായനക്കാരുടെ പ്രതികരണങ്ങൾ ({comments.length})
                </h3>
                <span className="text-xs text-secondary">സൗജന്യമായി അഭിപ്രായം രേഖപ്പെടുത്താം</span>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="mb-6 space-y-3">
                <input
                  type="text"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  placeholder="നിങ്ങളുടെ പേര്, സ്ഥലം..."
                  className="w-full bg-parchment-base border border-slate-border rounded px-3 py-2 text-xs text-ink-midnight focus:outline-none focus:border-primary"
                />
                <textarea
                  rows={3}
                  required
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="ഈ വാർത്തയെക്കുറിച്ചുള്ള നിങ്ങളുടെ അഭിപ്രായം ഇവിടെ രേഖപ്പെടുത്തുക..."
                  className="w-full bg-parchment-base border border-slate-border rounded p-3 text-xs text-ink-midnight focus:outline-none focus:border-primary"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded bg-primary hover:bg-editorial-crimson text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" /> പ്രതികരണം അയക്കുക
                  </button>
                </div>
              </form>

              {/* Comments Feed */}
              <div className="space-y-4 divide-y divide-slate-border">
                {comments.map((c) => (
                  <div key={c.id} className="pt-3 first:pt-0">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-ink-midnight">{c.author}</span>
                      <span className="text-secondary text-[11px]">{c.time}</span>
                    </div>
                    <p className="text-xs text-on-surface leading-relaxed mb-2">
                      {c.text}
                    </p>
                    <button
                      onClick={() =>
                        setComments(
                          comments.map((item) =>
                            item.id === c.id ? { ...item, likes: item.likes + 1 } : item
                          )
                        )
                      }
                      className="flex items-center gap-1 text-[11px] text-secondary hover:text-primary transition-colors font-medium"
                    >
                      <ThumbsUp className="w-3 h-3" /> ഇഷ്ടപ്പെട്ടു ({c.likes})
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Right Sidebar (4 cols): Related Stories, Editor Desk, Trending */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Related Stories */}
            <div className="bg-surface-pure rounded p-4 shadow-sm border border-slate-border">
              <h3 className="font-headline text-base font-bold text-ink-midnight pb-2 border-b border-slate-border mb-3">
                ബന്ധപ്പെട്ട വാർത്തകൾ
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/article/${rel.id}`}
                    className="flex gap-3 group"
                  >
                    <img
                      src={rel.imageUrl}
                      alt={rel.title}
                      className="w-20 h-16 rounded object-cover shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-ink-midnight group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {rel.title}
                      </h4>
                      <span className="text-[10px] text-secondary mt-1 block">
                        {rel.category} • {rel.timeAgo}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Profile Card */}
            <div className="bg-surface-pure rounded p-5 shadow-sm border border-slate-border text-center">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-primary mb-2"
              />
              <h4 className="font-headline text-base font-bold text-ink-midnight">
                {article.author.name}
              </h4>
              <p className="text-xs text-secondary mb-3">
                {article.author.designation} • {article.author.location}
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                കേരളത്തിലെ വികസന പദ്ധതികൾ, ഭരണരംഗം, പരിസ്ഥിതി വിഷയങ്ങൾ എന്നിവയിൽ 20 വർഷത്തിലേറെ പ്രവർത്തന പരിചയമുള്ള മാധ്യമപ്രവർത്തകൻ.
              </p>
              <button
                onClick={() => alert(`${article.author.name} യുടെ ലേഖനങ്ങൾ ഫോളോ ചെയ്തു!`)}
                className="px-4 py-1.5 rounded-full bg-ink-midnight hover:bg-primary text-white text-xs font-bold transition-colors w-full"
              >
                ലേഖകനെ ഫോളോ ചെയ്യുക
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

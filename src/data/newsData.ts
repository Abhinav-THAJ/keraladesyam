export interface Article {
  id: string;
  title: string;
  lead: string;
  category: string;
  categoryColor: string;
  timeAgo: string;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    designation: string;
    location: string;
    avatar: string;
    verified: boolean;
  };
  district?: string;
  country?: string;
  views: string;
  imageUrl: string;
  imageCaption?: string;
  readTime: string;
  paragraphs: string[];
  highlights?: string[];
  relatedArticles?: string[];
  audioDuration?: string;
  tags?: string[];
  trending?: boolean;
  breaking?: boolean;
}

export interface DamLevel {
  name: string;
  capacity: string;
  percentage: number;
  status: 'normal' | 'warning' | 'alert';
  color: string;
}

export interface CurrencyRate {
  code: string;
  name: string;
  inrRate: number;
  change: 'up' | 'down' | 'same';
  flag: string;
}

export const BREAKING_NEWS = [
  "വയനാട് തുരങ്കപാത നിർമാണത്തിന് കേന്ദ്ര പരിസ്ഥിതി അനുമതി ലഭിച്ചു; ടെൻഡർ നടപടികൾ വേഗത്തിലാക്കാൻ നിർദേശം",
  "സംസ്ഥാനത്ത് വേനൽമഴ ശക്തമാകാൻ സാധ്യത: തെക്കൻ ജില്ലകളിൽ യെല്ലോ അലർട്ട് പ്രഖ്യാപിച്ചു",
  "തിരുവനന്തപുരം മെട്രോ പദ്ധതിയുടെ പുതുക്കിയ ഡിപിആർ കേന്ദ്രാനുമതിക്കായി സമർപ്പിച്ചു",
  "ഗൾഫ് രാജ്യങ്ങളിൽ പെരുന്നാൾ അവധി പ്രഖ്യാപിച്ചു: യുഎഇയിൽ 4 ദിവസത്തെ ശമ്പളത്തോടുകൂടിയ അവധി",
  "കൊച്ചി മെട്രോ കാക്കനാട് പാത നിർമാണം 70% പൂർത്തിയായി: ഡിസംബറിൽ ട്രയൽ റൺ",
];

export const DAM_LEVELS: DamLevel[] = [
  { name: "ഇടുക്കി ഡാം", capacity: "2345.5 അടി (42%)", percentage: 42, status: "normal", color: "#006b9a" },
  { name: "മുല്ലപ്പെരിയാർ", capacity: "128.2 അടി (58%)", percentage: 58, status: "warning", color: "#B45309" },
  { name: "ഇടമലയാർ", capacity: "148.6 മീറ്റർ (36%)", percentage: 36, status: "normal", color: "#006b9a" },
  { name: "ബാണാസുര സാഗർ", capacity: "762.4 മീറ്റർ (49%)", percentage: 49, status: "normal", color: "#006b9a" },
  { name: "തെന്മല (പരപ്പാർ)", capacity: "103.8 മീറ്റർ (62%)", percentage: 62, status: "warning", color: "#B45309" },
];

export const CURRENCY_RATES: CurrencyRate[] = [
  { code: "AED", name: "യു.എ.ഇ ദിർഹം", inrRate: 23.42, change: "up", flag: "🇦🇪" },
  { code: "SAR", name: "സൗദി റിയാൽ", inrRate: 22.95, change: "up", flag: "🇸🇦" },
  { code: "QAR", name: "ഖത്തർ റിയാൽ", inrRate: 23.60, change: "same", flag: "🇶🇦" },
  { code: "KWD", name: "കുവൈത്ത് ദിനാർ", inrRate: 280.15, change: "down", flag: "🇰🇼" },
  { code: "OMR", name: "ഒമാൻ റിയാൽ", inrRate: 223.80, change: "same", flag: "🇴🇲" },
  { code: "BHD", name: "ബഹ്റൈൻ ദിനാർ", inrRate: 228.45, change: "up", flag: "🇧🇭" },
  { code: "USD", name: "യു.എസ് ഡോളർ", inrRate: 86.10, change: "up", flag: "🇺🇸" },
];

export const KERALA_DISTRICTS = [
  "എല്ലാം",
  "തിരുവനന്തപുരം",
  "കൊല്ലം",
  "പത്തനംതിട്ട",
  "ആലപ്പുഴ",
  "കോട്ടയം",
  "ഇടുക്കി",
  "എറണാകുളം",
  "തൃശ്ശൂർ",
  "പാലക്കാട്",
  "മലപ്പുറം",
  "കോഴിക്കോട്",
  "വയനാട്",
  "കണ്ണൂർ",
  "കാസർഗോഡ്",
];

export const PRAVASI_COUNTRIES = [
  { id: "all", name: "മുഴുവൻ പ്രവാസം", flag: "🌐" },
  { id: "uae", name: "യു.എ.ഇ (UAE)", flag: "🇦🇪" },
  { id: "saudi", name: "സൗദി അറേബ്യ", flag: "🇸🇦" },
  { id: "qatar", name: "ഖത്തർ", flag: "🇶🇦" },
  { id: "kuwait", name: "കുവൈത്ത്", flag: "🇰🇼" },
  { id: "oman", name: "ഒമാൻ", flag: "🇴🇲" },
  { id: "bahrain", name: "ബഹ്റൈൻ", flag: "🇧🇭" },
  { id: "europe", name: "യൂറോപ്പ് & യുകെ", flag: "🇬🇧" },
  { id: "americas", name: "യു.എസ് / കാനഡ", flag: "🇺🇸" },
];

export const MAIN_ARTICLES: Article[] = [
  {
    id: "wayanad-tunnel",
    title: "വയനാട് ഇരട്ട തുരങ്കപാത നിർമാണത്തിന് കേന്ദ്ര പരിസ്ഥിതി അനുമതി; മലയോര ഹൈവേ വികസനത്തിൽ നിർണായക വഴിത്തിരിവ്",
    lead: "കോഴിക്കോട് ആനക്കാംപൊയിൽ-കള്ളാടി-മേപ്പാടി തുരങ്കപാത യാഥാർഥ്യമാകുമ്പോൾ താമരശ്ശേരി ചുരത്തിലെ ഗതാഗതക്കുരുക്കിന് ശാശ്വത പരിഹാരം; 2,134 കോടി രൂപയുടെ നിർമാണ പദ്ധതിക്ക് സംസ്ഥാന മന്ത്രിസഭയുടെ പ്രത്യേക അനുമതി.",
    category: "വികസനം & അടിസ്ഥാനസൗകര്യം",
    categoryColor: "#006b9a",
    timeAgo: "25 മിനിറ്റ് മുൻപ്",
    publishedAt: "2025 മാർച്ച് 29, 09:30 AM IST",
    updatedAt: "2025 മാർച്ച് 29, 11:15 AM IST",
    author: {
      name: "കെ. ആർ. നാരായണൻ",
      designation: "സീനിയർ ചീഫ് റിപ്പോർട്ടർ",
      location: "തിരുവനന്തപുരം",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8",
      verified: true,
    },
    district: "വയനാട്",
    views: "18.4k",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "നിർദ്ദിഷ്ട വയനാട് തുരങ്കപാതയുടെ ആനക്കാംപൊയിൽ പ്രവേശന കവാടം സ്ഥിതി ചെയ്യുന്ന മലനിരകളുടെ ആകാശദൃശ്യം.",
    readTime: "4 മിനിറ്റ് വായന",
    audioDuration: "03:45",
    tags: ["WayanadTunnel", "KeralaInfrastructure", "HighrangeNews", "Kozhikode"],
    trending: true,
    breaking: true,
    highlights: [
      "8.11 കിലോമീറ്റർ നീളമുള്ള ഇരട്ട തുരങ്കം രാജ്യത്തെ മൂന്നാമത്തെ വലിയ തുരങ്കപാതയാകും.",
      "കൊങ്കൺ റെയിൽവേ കോർപ്പറേഷനാണ് പദ്ധതിയുടെ നിർമാണ നിർവഹണ ഏജൻസി.",
      "താമരശ്ശേരി ചുരത്തിലെ യാത്രാസമയം ഒന്നര മണിക്കൂറോളം ലാഭിക്കാൻ സാധിക്കും.",
      "പരിസ്ഥിതി സൗഹൃദ ഡ്രിൽ & ബ്ലാസ്റ്റ് സാങ്കേതികവിദ്യ ഉപയോഗിച്ചാകും തുരങ്കം പണിയുക."
    ],
    paragraphs: [
      "കോഴിക്കോട് ജില്ലയിലെ ആനക്കാംപൊയിലിനെയും വയനാട് ജില്ലയിലെ മേപ്പാടിയെയും ബന്ധിപ്പിച്ച് നിർമിക്കുന്ന ചരിത്രപ്രസിദ്ധമായ ഇരട്ട തുരങ്കപാത നിർമാണത്തിന് കേന്ദ്ര വനം പരിസ്ഥിതി മന്ത്രാലയത്തിന്റെ അന്തിമ അനുമതി ലഭിച്ചു. വയനാട് ചുരത്തിലെ നിത്യേനയുള്ള ഗതാഗതക്കുരുക്കുകൾക്കും പ്രകൃതിക്ഷോഭങ്ങൾ മൂലമുണ്ടാകുന്ന യാത്രാതടസ്സങ്ങൾക്കും ഇതോടെ ശാശ്വത പരിഹാരമാകുമെന്ന് മുഖ്യമന്ത്രിയുടെ ഓഫീസ് അറിയിച്ചു.",
      "2,134 കോടി രൂപ കിഫ്ബി വഴി വകയിരുത്തിയിട്ടുള്ള ഈ മെഗാ പ്രൊജക്റ്റിൽ രണ്ട് തുരങ്കങ്ങളിലായി ആകെ നാല് വരി പാതയാണ് വിഭാവനം ചെയ്തിരിക്കുന്നത്. നിർമാണ കരാർ ഉടൻ തന്നെ ഗ്ലോബൽ ടെൻഡറിലൂടെ അന്തിമമാക്കുമെന്നും ഈ വർഷം അവസാനത്തോടെ തുരങ്കം തുരക്കുന്ന പ്രവർത്തനങ്ങൾക്ക് തുടക്കമാകുമെന്നും പൊതുമരാമത്ത് വകുപ്പ് അറിയിച്ചു.",
      "പദ്ധതിക്കായി 12.5 ഹെക്ടർ വനഭൂമിയാണ് വിട്ടുകിട്ടേണ്ടിയിരുന്നത്. ഇതിന് പകരമായി കാസർഗോഡ്, കണ്ണൂർ ജില്ലകളിലായി തത്തുല്യമായ റവന്യൂ ഭൂമി വനവൽക്കരണത്തിനായി വനംവകുപ്പിന് കൈമാറിയിട്ടുണ്ട്. തുരങ്കപാത യാഥാർത്ഥ്യമാകുന്നതോടെ കൊച്ചി, കോഴിക്കോട് വിമാനത്താവളങ്ങളിൽ നിന്ന് വയനാട്ടിലേക്കും മൈസൂരു, ബെംഗളൂരു നഗരങ്ങളിലേക്കുമുള്ള ചരക്കുഗതാഗത ദൂരം ഗണ്യമായി കുറയും.",
      "തുരങ്കത്തിനുള്ളിൽ ആധുനിക എയർ വെന്റിലേഷൻ സംവിധാനങ്ങൾ, 24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന എമർജൻസി എസ്കേപ്പ് പാസേജുകൾ, ഓട്ടോമേറ്റഡ് ഫയർ ഡിറ്റക്ഷൻ നെറ്റ്വർക്ക് എന്നിവയും സജ്ജീകരിക്കും. മലയോര ജനതയുടെ പതിറ്റാണ്ടുകളായുള്ള സ്വപ്നമാണ് ഇതോടെ പൂവണിയുന്നത്."
    ],
    relatedArticles: ["kerala-budget-infra", "thiruvananthapuram-metro", "kochi-water-metro-expansion"],
  },
  {
    id: "kerala-budget-infra",
    title: "സംസ്ഥാന ബജറ്റിൽ അടിസ്ഥാന സൗകര്യ വികസനത്തിന് മുൻഗണന; തീരദേശ-മലയോര ഹൈവേകൾക്ക് അധിക വിഹിതം",
    lead: "സംസ്ഥാനത്തിന്റെ മൊത്തം ആഭ്യന്തര ഉൽപ്പാദനത്തിൽ 6.8% വളർച്ച ലക്ഷ്യമിട്ട് ധനമന്ത്രി പുതിയ വികസന പാക്കേജ് പ്രഖ്യാപിച്ചു.",
    category: "ഭരണം & നിയമസഭ",
    categoryColor: "#C8102E",
    timeAgo: "42 മിനിറ്റ് മുൻപ്",
    publishedAt: "2025 മാർച്ച് 29, 08:45 AM IST",
    updatedAt: "2025 മാർച്ച് 29, 10:20 AM IST",
    author: {
      name: "എസ്. സുരേഷ് കുമാർ",
      designation: "സ്പെഷ്യൽ കറസ്പോണ്ടന്റ്",
      location: "തിരുവനന്തപുരം",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8",
      verified: true,
    },
    district: "തിരുവനന്തപുരം",
    views: "12.8k",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    readTime: "3 മിനിറ്റ് വായന",
    tags: ["KeralaBudget", "Economy", "StateAssembly"],
    trending: true,
    paragraphs: [
      "നിയമസഭയിൽ അവതരിപ്പിച്ച പുതുക്കിയ ധനബജറ്റിൽ അടിസ്ഥാന സൗകര്യങ്ങൾക്കും വിവരസാങ്കേതിക രംഗത്തിനും റെക്കോർഡ് തുക അനുവദിച്ചു.",
      "തീരദേശ ഹൈവേയുടെയും മലയോര ഹൈവേയുടെയും നിർമാണ വേഗത വർധിപ്പിക്കാൻ 1,500 കോടി രൂപ നീക്കിവെച്ചതായി ധനമന്ത്രി അറിയിച്ചു."
    ],
  },
  {
    id: "thiruvananthapuram-metro",
    title: "തിരുവനന്തപുരം ലൈറ്റ് മെട്രോ: പുതിയ ഡിപിആർ കേന്ദ്രാനുമതിക്കായി സമർപ്പിച്ചു",
    lead: "പള്ളിപ്പുറം ടെക്‌നോസിറ്റി മുതൽ കരമന വരെയും രണ്ടാം ഘട്ടത്തിൽ നെയ്യാറ്റിൻകരയിലേക്കും നീളുന്ന പദ്ധതിക്ക് ഭരണാനുമതി.",
    category: "നഗരവികസനം",
    categoryColor: "#006b9a",
    timeAgo: "1 മണിക്കൂർ മുൻപ്",
    publishedAt: "2025 മാർച്ച് 29, 08:00 AM IST",
    updatedAt: "2025 മാർച്ച് 29, 09:10 AM IST",
    author: {
      name: "അനുപമ മേനോൻ",
      designation: "സിറ്റി ബ്യൂറോ ചീഫ്",
      location: "തിരുവനന്തപുരം",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8",
      verified: true,
    },
    district: "തിരുവനന്തപുരം",
    views: "9.5k",
    imageUrl: "https://images.unsplash.com/photo-1555617778-02518510b9fa?auto=format&fit=crop&w=800&q=80",
    readTime: "3 മിനിറ്റ് വായന",
    tags: ["Metro", "UrbanTransit", "Trivandrum"],
    paragraphs: [
      "തലസ്ഥാന നഗരിയിലെ യാത്രാക്ലേശത്തിന് പരിഹാരം കാണുന്ന തിരുവനന്തപുരം മെട്രോ പദ്ധതിയുടെ സമഗ്ര ഡിപിആർ കൊച്ചി മെട്രോ റെയിൽ ലിമിറ്റഡ് (കെഎംആർഎൽ) സമർപ്പിച്ചു."
    ],
  },
  {
    id: "pravasi-eid-holidays",
    title: "ഗൾഫിൽ ഈദ് അൽ ഫിത്തർ അവധികൾ പ്രഖ്യാപിച്ചു; യുഎഇയിൽ സർക്കാർ ജീവനക്കാർക്ക് 9 ദിവസത്തെ ദീർഘാവധി",
    lead: "ചന്ദ്രപ്പിറവി നിരീക്ഷണ സമിതികൾ യോഗം ചേരുന്നതോടെ പെരുന്നാൾ തീയതി അന്തിമമാക്കും; നാട്ടിലേക്കുള്ള വിമാന ടിക്കറ്റ് നിരക്കുകളിൽ വൻ വർധനവ്.",
    category: "പ്രവാസ ലോകം",
    categoryColor: "#9e001f",
    timeAgo: "15 മിനിറ്റ് മുൻപ്",
    publishedAt: "2025 മാർച്ച് 29, 10:15 AM IST",
    updatedAt: "2025 മാർച്ച് 29, 11:30 AM IST",
    author: {
      name: "ഫൈസൽ ബാബു",
      designation: "ഗൾഫ് ബ്യൂറോ ചീഫ്",
      location: "ദുബായ്",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8",
      verified: true,
    },
    country: "uae",
    views: "24.6k",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    readTime: "3 മിനിറ്റ് വായന",
    tags: ["EidMubarak", "GulfNews", "UAEHolidays", "Pravasi"],
    trending: true,
    paragraphs: [
      "യുണൈറ്റഡ് അറബ് എമിറേറ്റ്സ് ഫെഡറൽ അതോറിറ്റി സർക്കാർ, അർദ്ധസർക്കാർ മേഖലകൾക്കുള്ള ഈദ് അൽ ഫിത്തർ അവധികൾ പ്രഖ്യാപിച്ചു.",
      "പ്രവാസികൾ കുടുംബസമേതം ആഘോഷങ്ങളിലേക്ക് കടക്കുമ്പോൾ കേരളത്തിലേക്കുള്ള വിമാന സർവീസുകളിൽ സീറ്റുകൾ മുൻകൂട്ടി റിസർവ് ചെയ്യപ്പെട്ടു കഴിഞ്ഞു."
    ],
  },
  {
    id: "saudi-green-card-update",
    title: "സൗദി അറേബ്യയിൽ പ്രീമിയം റെസിഡൻസി വിസ വിഭാഗങ്ങളിൽ കൂടുതൽ ഇളവുകൾ; പ്രൊഫഷണലുകൾക്ക് സുവർണാവസരം",
    lead: "സ്പെഷ്യലൈസ്ഡ് ടാലന്റ്, റിയൽ എസ്റ്റേറ്റ് ഉടമകൾ എന്നിവർക്ക് സ്പോൺസർഷിപ്പ് ഇല്ലാതെ കുടുംബസമേതം താമസിക്കാനും ബിസിനസ് നടത്താനും പുതിയ ഇളവ്.",
    category: "സൗദി അറേബ്യ",
    categoryColor: "#005277",
    timeAgo: "50 മിനിറ്റ് മുൻപ്",
    publishedAt: "2025 മാർച്ച് 29, 09:00 AM IST",
    updatedAt: "2025 മാർച്ച് 29, 09:50 AM IST",
    author: {
      name: "ജലീൽ മണ്ണാർക്കാട്",
      designation: "റിയാദ് ലേഖകൻ",
      location: "റിയാദ്",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8",
      verified: true,
    },
    country: "saudi",
    views: "14.2k",
    imageUrl: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80",
    readTime: "4 മിനിറ്റ് വായന",
    tags: ["SaudiVision2030", "PremiumResidency", "Riyadh"],
    paragraphs: [
      "സൗദി കിരീടാവകാശി മുഹമ്മദ് ബിൻ സൽമാന്റെ വിഷൻ 2030 പദ്ധതിയുടെ ഭാഗമായി വിദേശ പ്രൊഫഷണലുകൾക്കായി പുതിയ പ്രീമിയം റെസിഡൻസി കാറ്റഗറികൾ കൂടുതൽ ലളിതമാക്കി."
    ],
  },
  {
    id: "kochi-chemical-drugs-bust",
    title: "കൊച്ചിയിൽ വൻ ലഹരിമരുന്ന് വേട്ട: 3 കോടിയുടെ രാസലഹരിയുമായി രണ്ട് പേർ പിടിയിൽ",
    lead: "ഹൈക്കോടതി ജംഗ്ഷന് സമീപത്തെ സ്വകാര്യ ഹോട്ടലിൽ നടത്തിയ മിന്നൽ പരിശോധനയിൽ എംഡിഎംഎയും കൊക്കെയ്നും പിടിച്ചെടുത്തു.",
    category: "ക്രൈം & സുരക്ഷ",
    categoryColor: "#ba1a1a",
    timeAgo: "18 മിനിറ്റ് മുൻപ്",
    publishedAt: "2025 മാർച്ച് 29, 10:45 AM IST",
    updatedAt: "2025 മാർച്ച് 29, 11:20 AM IST",
    author: {
      name: "വിപിൻ രാജ്",
      designation: "ക്രൈം റിപ്പോർട്ടർ",
      location: "കൊച്ചി",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8",
      verified: true,
    },
    district: "എറണാകുളം",
    views: "8.9k",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    readTime: "2 മിനിറ്റ് വായന",
    tags: ["KochiPolice", "CrimeNews", "KeralaExcise"],
    paragraphs: [
      "എറണാകുളം സിറ്റി ഡാൻസാഫ് ടീമും എക്സൈസ് സ്പെഷ്യൽ സ്ക്വാഡും സംയുക്തമായി നടത്തിയ റെയ്ഡിലാണ് അന്തർസംസ്ഥാന ലഹരി റാക്കറ്റിലെ പ്രധാന കണ്ണികൾ പിടിയിലായത്."
    ],
  },
  {
    id: "kozhikode-cultural-fest",
    title: "യുനെസ്‌കോ സാഹിത്യ നഗരിയായ കോഴിക്കോട്ട് അന്താരാഷ്ട്ര സാഹിത്യോത്സവം അടുത്ത മാസം",
    lead: "മാനവികതയും എഴുത്തും വിഷയമാക്കി കടപ്പുറത്ത് നടക്കുന്ന മേളയിൽ 20 രാജ്യങ്ങളിൽ നിന്നുള്ള എഴുത്തുകാർ പങ്കെടുക്കും.",
    category: "സിനിമ & കല",
    categoryColor: "#B45309",
    timeAgo: "2 മണിക്കൂർ മുൻപ്",
    publishedAt: "2025 മാർച്ച് 29, 07:30 AM IST",
    updatedAt: "2025 മാർച്ച് 29, 08:30 AM IST",
    author: {
      name: "ദിലീപ് കുമാർ",
      designation: "കൾച്ചറൽ കറസ്പോണ്ടന്റ്",
      location: "കോഴിക്കോട്",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8",
      verified: true,
    },
    district: "കോഴിക്കോട്",
    views: "6.7k",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    readTime: "3 മിനിറ്റ് വായന",
    tags: ["KozhikodeLiterature", "UNESCOCityOfLiterature", "Culture"],
    paragraphs: [
      "കോഴിക്കോട് ബീച്ചിൽ പ്രത്യേകം തയ്യാറാക്കിയ പന്തലിൽ നടക്കുന്ന സാഹിത്യോത്സവത്തിൽ പ്രമുഖ അന്താരാഷ്ട്ര എഴുത്തുകാരും മലയാളത്തിലെ പ്രമുഖ സാഹിത്യനായകരും സംവദിക്കും."
    ],
  },
  {
    id: "alappuzha-tourism-boom",
    title: "വേമ്പനാട്ട് കായലിൽ ഹൗസ് ബോട്ട് ടൂറിസത്തിന് ഉണർവ്വ്: വേനലവധിക്കാല ബുക്കിംഗിൽ 40% വർധനവ്",
    lead: "വിദേശികൾക്കൊപ്പം ഉത്തരേന്ത്യൻ സഞ്ചാരികളും കുട്ടനാടൻ കാഴ്ചകളിലേക്ക്; സുരക്ഷാ മാനദണ്ഡങ്ങൾ കർശനമാക്കി ടൂറിസം പോലീസ്.",
    category: "യാത്ര & ടൂറിസം",
    categoryColor: "#006b9a",
    timeAgo: "3 മണിക്കൂർ മുൻപ്",
    publishedAt: "2025 മാർച്ച് 29, 06:45 AM IST",
    updatedAt: "2025 മാർച്ച് 29, 08:15 AM IST",
    author: {
      name: "തോമസ് ജോസഫ്",
      designation: "ടൂറിസം ഡെസ്ക്",
      location: "ആലപ്പുഴ",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8",
      verified: true,
    },
    district: "ആലപ്പുഴ",
    views: "5.4k",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    readTime: "2 മിനിറ്റ് വായന",
    tags: ["AlappuzhaBackwaters", "KeralaTourism", "Houseboat"],
    paragraphs: [
      "ആലപ്പുഴയുടെ പ്രകൃതിസൗന്ദര്യവും കുട്ടനാടൻ കായൽ വിഭവങ്ങളും ആസ്വദിക്കാൻ എത്തുന്ന സഞ്ചാരികളുടെ എണ്ണത്തിൽ വലിയ വർധനവ് രേഖപ്പെടുത്തി."
    ],
  },
  {
    id: "santosh-trophy-kerala",
    title: "സന്തോഷ് ട്രോഫി: കേരള ടീം പരിശീലനം ആരംഭിച്ചു; കപ്പിനായി ഉറച്ച തയ്യാറെടുപ്പ്",
    lead: "യുവതാരങ്ങൾക്ക് മുൻതൂക്കം നൽകി രൂപീകരിച്ച 22 അംഗ ടീം കോഴിക്കോട് ഇ.എം.എസ് സ്റ്റേഡിയത്തിൽ പരിശീലന ക്യാമ്പ് തുടങ്ങി.",
    category: "സ്പോർട്സ്",
    categoryColor: "#005277",
    timeAgo: "4 മണിക്കൂർ മുൻപ്",
    publishedAt: "2025 മാർച്ച് 29, 05:30 AM IST",
    updatedAt: "2025 മാർച്ച് 29, 07:00 AM IST",
    author: {
      name: "അഭിലാഷ് നായർ",
      designation: "സ്പോർട്സ് എഡിറ്റർ",
      location: "തൃശ്ശൂർ",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYYHCHhgyTEaleB6KsujrLK-JvitACp_ZFM9MzEdJHRi_d0C8VmnMzOMMK-u17yasy2NbId1bupaXx_4iKs7XB4NIsCyIMXn7JOo-i4lhEaGeuiJqzKaFNUK_uCGRG1iVGWYcRUi-lMTeHPm6pPJC6HutiF0Xl7HEQ7HuFeWxUUfN_nsHYk1DHLIWHirfqJMPcqiJ40oqxD3WwteEtcQZ7l_jZeoa1V71xJOQcf9qH8cfFOMF27T8",
      verified: true,
    },
    district: "തൃശ്ശൂർ",
    views: "11.2k",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    readTime: "3 മിനിറ്റ് വായന",
    tags: ["SantoshTrophy", "KeralaFootball", "SportsNews"],
    paragraphs: [
      "മുൻ ചാമ്പ്യന്മാരായ കേരളം ഇത്തവണ കിരീടം തിരിച്ചുപിടിക്കാനുള്ള ശക്തമായ പോരാട്ടത്തിനാണ് ഒരുങ്ങുന്നത്."
    ],
  }
];

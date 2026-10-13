'use client';

import React, { useState } from 'react';
import { ArrowRightLeft, DollarSign, Coins, TrendingUp } from 'lucide-react';
import { CURRENCY_RATES } from '@/data/newsData';

export default function CurrencyConverter() {
  const [selectedCurrency, setSelectedCurrency] = useState('AED');
  const [amount, setAmount] = useState<number>(1000);

  const activeRate = CURRENCY_RATES.find((c) => c.code === selectedCurrency) || CURRENCY_RATES[0];
  const calculatedInr = (amount * activeRate.inrRate).toLocaleString('en-IN', {
    maximumFractionDigits: 2,
  });

  return (
    <div className="bg-surface-pure rounded p-space-md shadow-sm border border-slate-border">
      <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
        <h4 className="font-headline text-base font-bold text-ink-midnight flex items-center gap-1.5">
          <ArrowRightLeft className="w-4 h-4 text-editorial-crimson" />
          ലൈവ് കറൻസി കാൽക്കുലേറ്റർ
        </h4>
        <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold border border-emerald-200">
          തത്സമയം
        </span>
      </div>

      <div className="space-y-3">
        {/* Currency selection tabs */}
        <div className="grid grid-cols-4 gap-1">
          {CURRENCY_RATES.slice(0, 4).map((cur) => (
            <button
              key={cur.code}
              onClick={() => setSelectedCurrency(cur.code)}
              className={`py-1 text-xs rounded font-medium text-center transition-colors ${
                selectedCurrency === cur.code
                  ? 'bg-ink-midnight text-white font-bold shadow-xs'
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {cur.flag} {cur.code}
            </button>
          ))}
        </div>

        {/* Input box */}
        <div>
          <label className="text-[11px] text-secondary font-medium block mb-1">
            തുക ({selectedCurrency} ൽ):
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              className="w-full bg-parchment-base border border-slate-border rounded px-3 py-1.5 text-sm font-bold text-ink-midnight focus:outline-none focus:border-primary"
            />
            <span className="absolute right-3 top-2 text-xs text-secondary font-semibold">
              {selectedCurrency}
            </span>
          </div>
        </div>

        {/* Conversion Result Card */}
        <div className="bg-surface-container-low p-3 rounded border border-slate-border/80">
          <span className="text-[11px] text-secondary block">ഇന്ത്യൻ രൂപയിൽ (INR):</span>
          <div className="flex items-baseline justify-between mt-0.5">
            <span className="text-xl font-bold text-editorial-crimson">
              ₹ {calculatedInr}
            </span>
            <span className="text-[10px] text-secondary">
              1 {selectedCurrency} = ₹ {activeRate.inrRate}
            </span>
          </div>
        </div>

        {/* Gold price comparison box */}
        <div className="pt-2 border-t border-slate-border">
          <div className="flex items-center gap-1 text-xs font-bold text-opinion-ochre mb-1.5">
            <Coins className="w-3.5 h-3.5" />
            സ്വർണ്ണവില താരതമ്യം (22K പവൻ)
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-amber-50/60 p-2 rounded border border-amber-200/60">
              <span className="text-[10px] text-secondary block">കേരളത്തിൽ</span>
              <span className="font-bold text-ink-midnight">₹58,400</span>
              <span className="text-[10px] text-amber-700 block font-medium">ഗ്രാമിന്: ₹7,300</span>
            </div>
            <div className="bg-amber-50/60 p-2 rounded border border-amber-200/60">
              <span className="text-[10px] text-secondary block">ദുബായിൽ (യുഎഇ)</span>
              <span className="font-bold text-ink-midnight">AED 2,820</span>
              <span className="text-[10px] text-emerald-600 block font-medium">ലാഭം: ~₹4,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

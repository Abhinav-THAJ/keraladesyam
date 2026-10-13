'use client';

import React, { useState } from 'react';
import { Waves, AlertTriangle, CheckCircle2, ChevronRight, Droplets, CloudSun } from 'lucide-react';
import { DAM_LEVELS } from '@/data/newsData';

export default function DamWeatherWidget() {
  const [activeTab, setActiveTab] = useState<'dams' | 'weather'>('dams');

  const districtWeather = [
    { name: 'ഇടുക്കി', temp: '22°C', rain: '80% മഴസാധ്യത', alert: 'യെല്ലോ അലർട്ട്', alertColor: 'text-amber-600 bg-amber-50' },
    { name: 'പത്തനംതിട്ട', temp: '29°C', rain: '65% മഴസാധ്യത', alert: 'യെല്ലോ അലർട്ട്', alertColor: 'text-amber-600 bg-amber-50' },
    { name: 'എറണാകുളം', temp: '31°C', rain: '20% മഴസാധ്യത', alert: 'സാധാരണ', alertColor: 'text-emerald-600 bg-emerald-50' },
    { name: 'വയനാട്', temp: '24°C', rain: '55% മഴസാധ്യത', alert: 'ശ്രദ്ധിക്കുക', alertColor: 'text-blue-600 bg-blue-50' },
    { name: 'തിരുവനന്തപുരം', temp: '32°C', rain: '30% മഴസാധ്യത', alert: 'സാധാരണ', alertColor: 'text-emerald-600 bg-emerald-50' },
  ];

  return (
    <div className="bg-surface-pure rounded p-space-md shadow-sm border border-slate-border">
      {/* Widget Tabs Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-border mb-3">
        <div className="flex items-center gap-1 bg-surface-container p-0.5 rounded text-xs">
          <button
            onClick={() => setActiveTab('dams')}
            className={`px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1 ${
              activeTab === 'dams'
                ? 'bg-surface-pure text-primary font-bold shadow-xs'
                : 'text-secondary hover:text-on-surface'
            }`}
          >
            <Waves className="w-3.5 h-3.5 text-tertiary-container" />
            ഡാം ജലനിരപ്പ്
          </button>
          <button
            onClick={() => setActiveTab('weather')}
            className={`px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1 ${
              activeTab === 'weather'
                ? 'bg-surface-pure text-primary font-bold shadow-xs'
                : 'text-secondary hover:text-on-surface'
            }`}
          >
            <CloudSun className="w-3.5 h-3.5 text-opinion-ochre" />
            കാലാവസ്ഥ
          </button>
        </div>

        <span className="text-[10px] text-secondary font-medium">തത്സമയം</span>
      </div>

      {activeTab === 'dams' ? (
        <div className="space-y-3">
          {DAM_LEVELS.map((dam) => (
            <div key={dam.name} className="group">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-on-surface flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-tertiary-container" />
                  {dam.name}
                </span>
                <span className="text-secondary font-medium">{dam.capacity}</span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${dam.percentage}%`,
                    backgroundColor: dam.color,
                  }}
                />
              </div>
            </div>
          ))}

          <div className="pt-2 border-t border-slate-border flex items-center justify-between text-[11px] text-secondary">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              നീല: സുരക്ഷിതം (40-60%)
            </span>
            <span className="text-primary hover:underline cursor-pointer flex items-center">
              കൂടുതൽ വിവരങ്ങൾ <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-2.5">
          {districtWeather.map((w) => (
            <div
              key={w.name}
              className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container-low transition-colors text-xs"
            >
              <div>
                <span className="font-semibold text-on-surface block">{w.name}</span>
                <span className="text-[11px] text-secondary">{w.rain}</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-ink-midnight block">{w.temp}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${w.alertColor}`}>
                  {w.alert}
                </span>
              </div>
            </div>
          ))}
          <p className="text-[10px] text-secondary text-center pt-1 border-t border-slate-border">
            ഉറവിടം: കേന്ദ്ര കാലാവസ്ഥാ വകുപ്പ് (IMD)
          </p>
        </div>
      )}
    </div>
  );
}

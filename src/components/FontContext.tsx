'use strict';
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type FontSize = 'sm' | 'md' | 'lg';

interface FontContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  savedArticles: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const FontContext = createContext<FontContextType>({
  fontSize: 'md',
  setFontSize: () => {},
  savedArticles: [],
  toggleBookmark: () => {},
  isBookmarked: () => false,
});

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('md');
  const [savedArticles, setSavedArticles] = useState<string[]>([]);

  useEffect(() => {
    const savedSize = localStorage.getItem('vv_font_size') as FontSize;
    if (savedSize && ['sm', 'md', 'lg'].includes(savedSize)) {
      setFontSizeState(savedSize);
    }
    const savedBookmarks = localStorage.getItem('vv_bookmarks');
    if (savedBookmarks) {
      try {
        setSavedArticles(JSON.parse(savedBookmarks));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('vv_font_size', size);
  };

  const toggleBookmark = (id: string) => {
    setSavedArticles((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('vv_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const isBookmarked = (id: string) => savedArticles.includes(id);

  return (
    <FontContext.Provider
      value={{
        fontSize,
        setFontSize,
        savedArticles,
        toggleBookmark,
        isBookmarked,
      }}
    >
      <div
        className={
          fontSize === 'sm'
            ? 'font-scale-sm'
            : fontSize === 'lg'
            ? 'font-scale-lg text-[106%]'
            : 'font-scale-md'
        }
      >
        {children}
      </div>
    </FontContext.Provider>
  );
}

export function useFont() {
  return useContext(FontContext);
}

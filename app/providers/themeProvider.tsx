// app/providers/themeProvider.tsx
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeCtx = { isDark: boolean; toggle: () => void; setDark: (v: boolean) => void };
const ThemeContext = createContext<ThemeCtx | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // ⚡ Default ke LIGHT saat SSR. Di client, baca class <html> (yang sudah diset ThemeInitScript)
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;              // SSR → light
    try {
      // Hormati class dari ThemeInitScript (langsung sinkron, tanpa flicker)
      if (document.documentElement.classList.contains('dark')) return true;

      // Kalau belum ada class, cek localStorage. Jika 'dark' → dark, selain itu → light
      const stored = localStorage.getItem('theme');
      return stored === 'dark';
    } catch {
      return false; // aman: light
    }
  });

  // Sinkronkan class <html> + simpan preferensi
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  }, [isDark]);

  const value: ThemeCtx = {
    isDark,
    toggle: () => setIsDark(v => !v),
    setDark: (v: boolean) => setIsDark(v),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

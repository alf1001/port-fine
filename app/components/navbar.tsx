'use client';

import { useTheme } from '@/app/providers/themeProvider';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Navbar: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(menuOpen);
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const { isDark, toggle } = useTheme();

  // ----- mounted: untuk kontrol logo default & aria-pressed -----
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // keep menuOpenRef in sync so event handlers can read latest value
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu on Escape and detect outside clicks (pointerdown is more reliable)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!menuOpenRef.current) return;

      const target = e.target as Node | null;
      if (!target) return;

      if (sideMenuRef.current && sideMenuRef.current.contains(target)) return;
      if (toggleButtonRef.current && toggleButtonRef.current.contains(target)) return;

      setMenuOpen(false);
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointerDown);

    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  // aria-pressed ditunda sampai mounted agar tidak mismatch
  const ariaPressed = mounted ? (isDark ? 'true' : 'false') : undefined;

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-3/4">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-4 lg:px-6 xl:px-[6%] py-2 flex items-center justify-between z-50 transition-colors duration-200
          ${isScroll ? 'bg-surface backdrop-blur-lg shadow-sm' : ''}`}
      >
        {/* Logo – default SSR light, baru switch ke dark setelah mounted */}
        <Link href="/" aria-label="Fine portfolio home" className="mr-14">
          <Image
            src={!mounted ? assets.logo : isDark ? assets.logo_dark : assets.logo}
            alt="Fine logo"
            width={112}
            height={40}
            className="cursor-pointer transition-opacity duration-300"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2 ${isScroll ? '' : 'bg-surface shadow-sm'}`}>
          <li><a className="font-ovo" href="#top">Home</a></li>
          <li><a className="font-ovo" href="#about">About Me</a></li>
          <li><a className="font-ovo" href="#services">Services</a></li>
          <li><a className="font-ovo" href="#work">My Work</a></li>
          <li><a className="font-ovo" href="#contact">Contact me</a></li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme toggle – ikon tidak kondisional, switch via CSS; aria-pressed ditunda */}
          <button
            ref={toggleButtonRef}
            type="button"
            aria-label="Toggle theme"
            aria-pressed={ariaPressed}
            onClick={toggle}
            className="p-2 rounded-full relative w-6 h-6"
          >
            <Image src={assets.sun_icon} alt="Switch to light" fill className="object-contain block dark:hidden" />
            <Image src={assets.moon_icon} alt="Switch to dark" fill className="object-contain hidden dark:block" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo hover:bg-light-hover transition"
          >
            Contact
            <Image src={isDark ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow icon" width={12} height={12} />
          </a>

          {/* Mobile menu button – theme-aware via CSS; hanya state menuOpen yang mengubah tampilan */}
          <button
            type="button"
            className="block md:hidden ml-3 p-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            {/* menu icon */}
            <span className={menuOpen ? 'hidden' : 'inline-block relative w-6 h-6'}>
              <Image src={assets.menu_black} alt="menu" fill className="object-contain block dark:hidden" />
              <Image src={assets.menu_white} alt="menu" fill className="object-contain hidden dark:block" />
            </span>
            {/* close icon */}
            <span className={menuOpen ? 'inline-block relative w-6 h-6' : 'hidden'}>
              <Image src={assets.close_black} alt="close" fill className="object-contain block dark:hidden" />
              <Image src={assets.close_white} alt="close" fill className="object-contain hidden dark:block" />
            </span>
          </button>
        </div>

        {/* Mobile menu panel */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-300
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'} bg-surface`}
        >
          <div className="absolute right-6 top-6">
            <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="relative w-5 h-5">
              <Image src={assets.close_black} alt="close" fill className="object-contain block dark:hidden" />
              <Image src={assets.close_white} alt="close" fill className="object-contain hidden dark:block" />
            </button>
          </div>

          <li><a className="font-ovo" onClick={() => setMenuOpen(false)} href="#top">Home</a></li>
          <li><a className="font-ovo" onClick={() => setMenuOpen(false)} href="#about">About Me</a></li>
          <li><a className="font-ovo" onClick={() => setMenuOpen(false)} href="#services">Services</a></li>
          <li><a className="font-ovo" onClick={() => setMenuOpen(false)} href="#work">My Work</a></li>
          <li><a className="font-ovo" onClick={() => setMenuOpen(false)} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

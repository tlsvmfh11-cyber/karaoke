"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import { NAV_LINKS, PHONE_TEL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-obsidian-line/60 bg-obsidian/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-b from-champagne-bright to-champagne-deep text-lg font-bold text-obsidian shadow-gold-soft">
            正
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-bold tracking-tight text-ivory group-hover:text-champagne-bright">
              강남 가라오케
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-[0.2em] text-champagne-dim">
              정직한 실장 직영
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주요 메뉴">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-champagne/10 text-champagne"
                  : "text-ivory-dim hover:bg-obsidian-card hover:text-ivory"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={PHONE_TEL}
            className="ml-3 inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-b from-champagne-bright via-champagne to-champagne-deep px-5 text-sm font-bold text-obsidian shadow-gold-soft transition-all hover:brightness-110 active:scale-[0.98]"
          >
            <PhoneCall className="h-4 w-4" aria-hidden />
            실장 다이렉트 연결
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-obsidian-line/60 bg-obsidian/95 backdrop-blur-xl md:hidden"
            aria-label="모바일 메뉴"
          >
            <div className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium",
                    pathname === link.href
                      ? "bg-champagne/10 text-champagne"
                      : "text-ivory-dim"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={PHONE_TEL}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-champagne-bright to-champagne-deep text-base font-bold text-obsidian"
              >
                <PhoneCall className="h-5 w-5" aria-hidden />
                오늘 견적, 지금 바로 확인
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

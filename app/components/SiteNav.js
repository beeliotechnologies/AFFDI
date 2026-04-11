"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function SiteNav({
  brand,
  links = [],
  donateHref = "/donate",
  menuSections = [],
  phone,
  email,
  learnMoreHref = "#about",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(menuSections[0]?.id ?? "");
  const triggerRef = useRef(null);
  const drawerRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty("overflow");
      if (wasOpenRef.current) {
        triggerRef.current?.focus();
      }
      wasOpenRef.current = false;
      return;
    }
    wasOpenRef.current = true;
    document.body.style.overflow = "hidden";
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      const focusable = drawerRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleEscape);
    window.addEventListener("keydown", handleTab);
    setTimeout(() => {
      const focusable = drawerRef.current?.querySelector(
        'a[href], button:not([disabled]), input:not([disabled])'
      );
      focusable?.focus?.();
    }, 0);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("keydown", handleTab);
      document.body.style.removeProperty("overflow");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!menuSections.length) return;
    if (!menuSections.some((section) => section.id === activeSection)) {
      setActiveSection(menuSections[0].id);
    }
  }, [menuSections, activeSection]);

  const close = () => setIsOpen(false);
  const activePanel =
    menuSections.find((section) => section.id === activeSection) ?? menuSections[0];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 md:px-6 lg:px-10">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-lg text-slate-700 transition hover:bg-slate-50"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            ref={triggerRef}
          >
            {isOpen ? "×" : "☰"}
          </button>

          <Link href="/" className="flex items-center gap-3" aria-label={`${brand.name} home`}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1d4f8f] text-sm font-extrabold text-white">
              {brand.mark}
            </span>
            <span className="leading-tight">
              <span className="font-display block text-sm font-bold text-slate-900 md:text-base">{brand.name}</span>
              {brand.tagline ? <span className="hidden text-xs text-slate-500 md:block">{brand.tagline}</span> : null}
            </span>
          </Link>

          <nav className="ml-3 hidden items-center gap-6 text-sm text-slate-700 md:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-[#1d4f8f]">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto">
            <Link
              href={donateHref}
              className="inline-flex items-center rounded-xl bg-[#ef8b1e] px-3 py-2 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17] sm:px-4"
            >
              Donate
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 transition-opacity ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={close}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-full max-w-4xl overflow-y-auto bg-white/95 shadow-2xl shadow-slate-300/60 backdrop-blur-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        ref={drawerRef}
      >
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-xl text-slate-700"
          onClick={close}
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="grid min-h-full grid-cols-1 md:grid-cols-[300px_1fr]">
          <div className="border-b border-slate-200 p-5 md:border-b-0 md:border-r md:p-8">
            <Link href="/" className="mb-8 flex items-center gap-3" onClick={close}>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#1d4f8f] font-extrabold text-white">
                {brand.mark}
              </span>
              <span className="font-display text-lg font-bold text-slate-900">{brand.name}</span>
            </Link>

            <nav className="grid gap-2" aria-label="Drawer sections">
              {(menuSections.length ? menuSections : [{ id: "main", label: "Main" }]).map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                    section.id === activeSection
                      ? "bg-[#1d4f8f] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 grid gap-2">
              <Link href={donateHref} onClick={close} className="rounded-xl bg-[#ef8b1e] px-4 py-2 text-center text-sm font-bold text-slate-900">
                Donate
              </Link>
              <Link href={learnMoreHref} onClick={close} className="rounded-xl border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700">
                Learn More
              </Link>
            </div>
          </div>

          <div className="p-5 md:p-10">
            <h3 className="mb-4 text-xl font-bold text-slate-900">{activePanel?.title ?? "Navigation"}</h3>
            <nav aria-label="Drawer links" className="grid gap-2">
              {(activePanel?.items ?? links).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition hover:border-[#1d4f8f]/30 hover:bg-[#eef4fb]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {(phone || email) ? (
              <div className="mt-8 grid gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d4f8f]">Contact</p>
                {phone ? <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-slate-900">{phone}</a> : null}
                {email ? <a href={`mailto:${email}`} className="hover:text-slate-900">{email}</a> : null}
              </div>
            ) : null}
          </div>
        </div>
      </aside>
    </>
  );
}
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export function Brand() {
  return (
    <span className="brand">
      <span className="brand-symbol" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>
        SKYHIGH<small>ENGINEERING</small>
      </span>
    </span>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" aria-label="Skyhigh Engineering home">
          <Brand />
        </Link>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {[
            ["/solutions", "Our solutions"],
            ["/engineering", "Our approach"],
            ["/about", "About us"],
          ].map(([href, name]) => (
            <Link
              key={href}
              href={href}
              aria-current={path.startsWith(href) ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
          <Link href="/contact" className="button button-dark header-cta">
            Discuss your project
          </Link>
        </nav>
      </div>
    </header>
  );
}

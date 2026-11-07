"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Instructors", href: "/instructors" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <svg
            className={styles.logo}
            viewBox="0 0 52 52"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M4 17 26 5l22 12-22 12L4 17Z" fill="currentColor" />
            <path d="M12 20v8c0 6 6 10 14 10s14-4 14-10v-8l-14 8-14-8Z" fill="currentColor" />
            <circle cx="26" cy="33" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="26" cy="33" rx="6" ry="13" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M14 30h24M14 36h24M46 18v12" fill="none" stroke="#319bf0" strokeWidth="2" />
            <circle cx="46" cy="32" r="2" fill="currentColor" />
          </svg>
          <span>Learnify</span>
        </Link>
        <button
          ref={toggle}
          className={styles.toggle}
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation-links"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div id="main-navigation-links" className={`${styles.content} ${open ? styles.open : ""}`}>
          <ul className={styles.links}>
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  prefetch={false}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/register" prefetch={false} className={styles.registration} onClick={() => setOpen(false)}>
            <span>Registration</span>
            <span className={styles.arrow}><ArrowUpRight size={23} strokeWidth={1.7} aria-hidden="true" /></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./footer.module.css";

const exploreLinks = [
  { label: "Course categories", href: "#categories-heading" },
  { label: "Popular courses", href: "#courses-heading" },
  { label: "Learner stories", href: "#stories-heading" },
];

const supportLinks = [
  { label: "Why Learnify", href: "#trust-heading" },
  { label: "Frequently asked questions", href: "#faq-heading" },
  { label: "Get started", href: "#learning-cta-heading" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <Link href="/" className={styles.brand} aria-label="Learnify home">
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
            <p>
              Build real-world skills and move closer to your goals, one lesson
              at a time.
            </p>
          </div>

          <nav className={styles.linkGroup} aria-label="Explore Learnify">
            <h2>Explore</h2>
            {exploreLinks.map(({ label, href }) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </nav>

          <nav className={styles.linkGroup} aria-label="Learnify support">
            <h2>Learnify</h2>
            {supportLinks.map(({ label, href }) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Learnify. All rights reserved.</p>
          <a className={styles.backToTop} href="#home-heading">
            Back to top <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

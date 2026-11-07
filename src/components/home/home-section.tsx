import Image from "next/image";
import { GraduationCap, Star } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { CourseSearch } from "./course-search";
import styles from "./home-section.module.css";

const learnerPortraits = [
  "photo-1531123897727-8f129e1688ce",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1494790108377-be9c29b29330",
  "photo-1535713875002-d1d0cf377fde",
];

export function HomeSection() {
  return (
    <div id="home" className={styles.home} tabIndex={-1}>
      <Navbar />
      <main>
        <section aria-labelledby="home-heading" className={styles.hero}>
          <div className={styles.intro}>
            <p className={styles.badge}><GraduationCap size={23} aria-hidden="true" /> Learn From the Top Experts</p>
            <h1 id="home-heading">Learn Anywhere, Anytime<br />Empower Your Future</h1>
            <p className={styles.description}>Join thousands of learners gaining new skills, advancing careers<br className={styles.desktopBreak} /> and shaping a better tomorrow—one lesson at a time.</p>
            <CourseSearch />
          </div>
          <div className={styles.visual} style={{ position: "relative" }}>
            <Image src="/images/home-student.png" alt="Smiling student in an orange sweater holding books" fill sizes="100vw" priority className={styles.student} />
            {/* Reference-design figures; replace with verified metrics before launch. */}
            <aside className={`${styles.card} ${styles.rating}`} aria-label="Student rating">
              <strong>4.8</strong>
              <div className={styles.stars} aria-label="4.8 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={25} fill={index < 4 ? "currentColor" : "none"} aria-hidden="true" />)}</div>
              <p>By students worldwide for quality learning and support.</p>
            </aside>
            <aside className={`${styles.card} ${styles.learners}`} aria-label="Learner community">
              <div className={styles.learnerPortraits} aria-hidden="true">
                {learnerPortraits.map((portrait) => (
                  <Image
                    key={portrait}
                    src={`https://images.unsplash.com/${portrait}?auto=format&fit=crop&crop=faces&w=128&h=128&q=80`}
                    alt=""
                    width={64}
                    height={64}
                    sizes="(max-width: 640px) 32px, 64px"
                    className={styles.learnerPortrait}
                  />
                ))}
              </div>
              <strong>60k+</strong>
              <p>Learners growing with expert guidance from trusted mentors.</p>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}

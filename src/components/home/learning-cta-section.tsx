import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./learning-cta-section.module.css";

export function LearningCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="learning-cta-heading">
      <div className={styles.content}>
        <h2 id="learning-cta-heading">Ready to Start Learning?</h2>
        <p>
          Join learners gaining real skills and accelerating
          <br className={styles.desktopBreak} /> their careers — one lesson at a time.
        </p>
        <a className={styles.button} href="#courses-heading">
          Explore courses
          <span className={styles.buttonIcon}>
            <ArrowUpRight size={19} aria-hidden="true" />
          </span>
        </a>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <Image
          src="/images/learning-cta-student.png"
          alt=""
          fill
          sizes="(max-width: 700px) calc(100vw - 36px), 560px"
          className={styles.student}
        />
      </div>
    </section>
  );
}

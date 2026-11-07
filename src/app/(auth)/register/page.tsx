import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Check } from "lucide-react";
import { RegisterForm } from "./register-form";
import styles from "./register.module.css";

export const metadata: Metadata = {
  title: "Create an account | Learnify",
  description: "Start your learning journey with Learnify.",
};

export default function RegisterPage() {
  return (
    <main className={styles.page}>
      <aside className={styles.visual} aria-label="Welcome to Learnify">
        <Link href="/" className={styles.brand} aria-label="Learnify home">
          <GraduationCap size={34} aria-hidden="true" /> Learnify
        </Link>
        <div className={styles.pitch}>
          <span className={styles.eyebrow}>A little curiosity. A world of possibilities.</span>
          <h2>Your next chapter<br />starts here.</h2>
          <p>Build new skills, follow your curiosity, and take the next step toward your goals.</p>
        </div>
        <div className={styles.portrait}>
          <Image src="/images/learning-cta-student.png" alt="Smiling learner holding books" fill sizes="(max-width: 900px) 1px, 40vw" className={styles.student} />
        </div>
        <div className={styles.caption}><Check size={18} aria-hidden="true" /> One lesson closer to your future.</div>
      </aside>

      <section className={styles.formPanel} aria-labelledby="register-heading">
        <Link className={styles.back} href="/"><ArrowLeft size={18} aria-hidden="true" /> Back to home</Link>
        <div className={styles.formContent}>
          <span className={styles.kicker}>WELCOME TO LEARNIFY</span>
          <h1 id="register-heading">Create your account</h1>
          <p className={styles.intro}>Make room for something new. Your learning journey starts with you.</p>
          <RegisterForm />
          <p className={styles.explore}>Still exploring? <Link href="/#courses">Browse our courses</Link></p>
        </div>
        <p className={styles.footnote}>Learn at your pace. Grow in your own direction.</p>
      </section>
    </main>
  );
}

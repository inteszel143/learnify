import Image from "next/image";
import { ArrowUpRight, BookOpen, MessageCircle } from "lucide-react";
import styles from "./discover-sections.module.css";

const instructors = [
  // Stock portraits for the UI; replace with each creator's own photo when available.
  { name: "purepearl studio", subject: "UI/UX Design", course: "Learn Figma from Basic", portrait: "photo-1494790108377-be9c29b29330" },
  { name: "devhub", subject: "Development", course: "Web Development Bootcamp", portrait: "photo-1507003211169-0a1dd7228f2d" },
  { name: "finvision", subject: "UI/UX Design", course: "Webflow for Beginners", portrait: "photo-1535713875002-d1d0cf377fde" },
];

const guides = [
  {
    category: "Getting started",
    title: "How to choose your first online course",
    summary: "Start with a clear goal and a course that fits your experience.",
    paragraphs: [
      "Write down one thing you want to be able to do: design a landing page, build a website, or plan a marketing campaign. A specific outcome makes it easier to compare courses.",
      "Check the level, prerequisites, lesson count, and duration. Choose a course that builds on what you know and leaves room for practice in your weekly schedule.",
      "Before you begin, decide on a small project you can complete using what you learn. Use that project to check your progress as you work through the lessons.",
    ],
  },
  {
    category: "Study habits",
    title: "Build a learning routine you can keep",
    summary: "Make steady progress with short sessions and purposeful practice.",
    paragraphs: [
      "Choose a repeatable time in your week and start with a session you can comfortably finish. Consistency matters more than trying to complete a course in one sitting.",
      "After each lesson, close the video and try the task yourself. Write down what you remember, what worked, and what you need to revisit.",
      "End each session by choosing your next small task. When you return, you will have a clear starting point instead of needing to plan all over again.",
    ],
  },
  {
    category: "Career skills",
    title: "Turn a lesson into a portfolio project",
    summary: "Show what you can do by applying a new skill to a practical problem.",
    paragraphs: [
      "Pick a small problem and define who the project is for. A focused brief helps you decide what to build and when it is complete.",
      "Apply the techniques from your course, then make your own decisions about the content, design, or implementation. Explain why you made those choices.",
      "Document your process, share the result, and ask for specific feedback. Include what you would improve next so your portfolio shows how you think as well as what you made.",
    ],
  },
];

export function InstructorsSection() {
  return (
    <section id="instructors" tabIndex={-1} className={styles.section} aria-labelledby="instructors-heading">
      <header className={styles.heading}>
        <span className={styles.eyebrow}>Instructors</span>
        <h2 id="instructors-heading">Meet Your Course Creators</h2>
        <p>Explore the creators behind our design and development courses.</p>
      </header>
      <div className={styles.grid}>
        {instructors.map(({ name, subject, course, portrait }) => (
          <article className={styles.card} key={name}>
            <Image
              src={`https://images.unsplash.com/${portrait}?auto=format&fit=crop&crop=faces&w=192&h=192&q=85`}
              alt=""
              width={96}
              height={96}
              sizes="96px"
              className={styles.creatorPortrait}
            />
            <p className={styles.eyebrow}>{subject}</p>
            <h3>{name}</h3>
            <p>{course}</p>
            <a className={styles.link} href="#courses">Explore courses <ArrowUpRight size={18} aria-hidden="true" /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BlogSection() {
  return (
    <section id="blog" tabIndex={-1} className={`${styles.section} ${styles.tinted}`} aria-labelledby="blog-heading">
      <header className={styles.heading}>
        <span className={styles.eyebrow}>The Learnify Blog</span>
        <h2 id="blog-heading">Ideas for Your Learning Journey</h2>
        <p>Practical guides to help you start, stay consistent, and put your skills to work.</p>
      </header>
      <div className={styles.grid}>
        {guides.map(({ title, category, summary, paragraphs }) => (
          <article className={styles.card} key={title}>
            <p className={styles.eyebrow}>{category}</p>
            <h3>{title}</h3>
            <p>{summary}</p>
            <details className={styles.article}>
              <summary>Read guide<span className={styles.srOnly}>: {title}</span></summary>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" tabIndex={-1} className={styles.section} aria-labelledby="contact-heading">
      <header className={styles.heading}>
        <span className={styles.eyebrow}>Contact & Support</span>
        <h2 id="contact-heading">Need Help Getting Started?</h2>
        <p>Find answers to common questions and explore your next learning step.</p>
      </header>
      <div className={styles.support}>
        <article className={styles.card}>
          <span className={styles.icon}><MessageCircle size={28} aria-hidden="true" /></span>
          <h3>Questions about learning?</h3>
          <p>Read about course levels, learning materials, certificates, and instructor support.</p>
          <a className={styles.link} href="#faq-heading">Read the FAQs <ArrowUpRight size={18} aria-hidden="true" /></a>
        </article>
        <article className={styles.card}>
          <span className={styles.icon}><BookOpen size={28} aria-hidden="true" /></span>
          <h3>Find your next course</h3>
          <p>Compare subjects and levels to find a course that fits your goals.</p>
          <a className={styles.link} href="#courses">Browse courses <ArrowUpRight size={18} aria-hidden="true" /></a>
        </article>
      </div>
    </section>
  );
}

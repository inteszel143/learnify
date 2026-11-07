import { ChevronDown } from "lucide-react";
import styles from "./faq-section.module.css";

const questions = [
  {
    question: "Do I need any prior experience before starting a course?",
    answer:
      "Our expert-led courses focus on real-world skills. Check each course description for its level and any recommended prerequisites before enrolling.",
  },
  {
    question: "How do I choose the right course for my skill level?",
    answer:
      "Review the course level, learning outcomes, and prerequisites on its course card to find the best fit for your current experience and goals.",
  },
  {
    question: "How long will I have access to the course materials after enrolling?",
    answer:
      "Courses shown with lifetime access remain available to you after enrollment. Check the course details for the access terms that apply.",
  },
  {
    question: "Are the certificates you provide recognized or useful for career advancement?",
    answer:
      "Certificate availability varies by course. Check its details to see whether a certificate is included; certificates document completion and are not necessarily formal accreditations.",
  },
  {
    question: "Can I interact with instructors or get support during the course?",
    answer:
      "Support options depend on the course. Review its description for details about instructor guidance, community access, or other learner support.",
  },
];

export function FaqSection() {
  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <header className={styles.heading}>
        <h2 id="faq-heading">Frequently Asked Questions</h2>
        <p>
          Got questions? We’ve answered the most common
          <br className={styles.desktopBreak} /> ones to help you get started confidently.
        </p>
      </header>

      <div className={styles.questions}>
        {questions.map(({ question, answer }, index) => (
          <details className={styles.question} key={question} open={index === 0}>
            <summary>
              <span>{question}</span>
              <ChevronDown className={styles.chevron} size={22} aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

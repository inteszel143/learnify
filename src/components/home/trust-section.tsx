import Image from "next/image";
import { Globe, GraduationCap, UsersRound } from "lucide-react";
import styles from "./trust-section.module.css";

const communityMembers = [
  {
    name: "Alex",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    position: "top",
  },
  {
    name: "Maya",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    position: "upperRight",
  },
  {
    name: "Jordan",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    position: "lowerRight",
  },
  {
    name: "Sam",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    position: "bottom",
  },
  {
    name: "Taylor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    position: "lowerLeft",
  },
  {
    name: "Riley",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    position: "upperLeft",
  },
];

export function TrustSection() {
  return (
    <section id="about" tabIndex={-1} className={styles.section} aria-labelledby="trust-heading">
      <header className={styles.heading}>
        <h2 id="trust-heading">Why Thousands of Learners Trust Us</h2>
        <p>
          Join a growing community of learners gaining real skills through expert-led,
          <br className={styles.desktopBreak} /> high-quality courses — built with care, trust, and transparency.
        </p>
      </header>

      <div className={styles.grid}>
        <div className={`${styles.photo} ${styles.firstPhoto}`}>
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Learner following an online lesson on a laptop"
            fill
            sizes="(max-width: 760px) 100vw, (max-width: 1050px) 48vw, 32vw"
          />
        </div>

        <article className={`${styles.infoCard} ${styles.trainers}`}>
          <span className={styles.icon}><GraduationCap size={26} aria-hidden="true" /></span>
          <h3>Expert Trainers</h3>
          <p>Learn from real industry professionals with years of experience and practical knowledge.</p>
        </article>

        <article className={`${styles.infoCard} ${styles.community}`}>
          <div className={styles.orbit} aria-hidden="true">
            {communityMembers.map(({ name, image, position }) => (
              <span className={`${styles.member} ${styles[position]}`} key={name}>
                <Image src={image} alt="" fill sizes="64px" />
              </span>
            ))}
            <span className={styles.centerMember}>
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt=""
                fill
                sizes="100px"
              />
            </span>
          </div>
          <div className={styles.communityContent}>
            <div className={styles.communityTitle}>
              <span className={styles.icon}><Globe size={26} aria-hidden="true" /></span>
              <h3>Global Community</h3>
            </div>
            <p>Connect, share, and grow with thousands of learners from around the world—exchange ideas, collaborate on goals, and be part of a supportive learning journey.</p>
          </div>
        </article>

        <article className={`${styles.infoCard} ${styles.flexible}`}>
          <span className={styles.icon}><UsersRound size={26} aria-hidden="true" /></span>
          <h3>Flexible Learning Experience</h3>
          <p>Learn anytime, anywhere — at your own pace, on your own terms, with complete control over how.</p>
        </article>

        <div className={`${styles.photo} ${styles.secondPhoto}`}>
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
            alt="Student taking notes while studying"
            fill
            sizes="(max-width: 760px) 100vw, (max-width: 1050px) 48vw, 32vw"
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Play } from "lucide-react";
import styles from "./stories-section.module.css";

const stories = [
  {
    name: "Yesha Khan",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    imageAlt: "Learner studying at a laptop with headphones",
  },
  {
    name: "Ethan Samuel",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    imageAlt: "Product designer working at a desk",
  },
  {
    name: "William Henry",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    imageAlt: "Web developer smiling at his desk",
  },
  {
    name: "Robert",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    imageAlt: "Frontend developer portrait",
  },
  {
    name: "Ava Morgan",
    role: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    imageAlt: "Digital marketer portrait",
  },
  {
    name: "Noah Williams",
    role: "Business Consultant",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    imageAlt: "Business consultant portrait",
  },
];

export function StoriesSection() {
  return (
    <section className={styles.section} aria-labelledby="stories-heading">
      <header className={styles.heading}>
        <h2 id="stories-heading">Stories from Our Successful Learners</h2>
        <p>
          See how everyday learners became professionals with
          <br className={styles.desktopBreak} /> guidance, effort, and expert-led learning.
        </p>
      </header>

      <div
        className={styles.storyTrack}
        role="region"
        aria-label="Learner success stories"
        tabIndex={0}
      >
        <div className={styles.storyTrackInner}>
          {[false, true].map((duplicate) => (
            <div
              className={`${styles.storyGroup} ${duplicate ? styles.duplicateGroup : ""}`}
              key={duplicate ? "duplicate" : "stories"}
              aria-hidden={duplicate || undefined}
            >
              {stories.map(({ name, role, image, imageAlt }) => (
                <article className={styles.story} key={name}>
                  <Image src={image} alt={imageAlt} fill sizes="(max-width: 640px) 82vw, 27vw" />
                  <div className={styles.storyOverlay}>
                    <div className={styles.storyText}>
                      <h3>{name}</h3>
                      <p>{role}</p>
                    </div>
                    <span className={styles.playIcon} aria-hidden="true">
                      <Play size={18} fill="currentColor" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

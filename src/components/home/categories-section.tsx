import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./categories-section.module.css";

const categories = [
  {
    name: "Design",
    courseCount: 20,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    imageAlt: "Designer working on a creative project at a desk",
  },
  {
    name: "Web Development",
    courseCount: 50,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    imageAlt: "Laptop displaying code on a developer's desk",
    featured: true,
  },
  {
    name: "Business Consulting",
    courseCount: 80,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    imageAlt: "Colleagues collaborating around a table",
  },
  {
    name: "Digital Marketing",
    courseCount: 40,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    imageAlt: "Digital marketing analytics dashboard with colorful charts and graphs",
  },
  {
    name: "Photography & Videography",
    courseCount: 25,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    imageAlt: "Camera and lenses ready for a photography and videography session",
  },
  {
    name: "Language Learning",
    courseCount: 35,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    imageAlt: "Books and materials for language learning",
  },
];

export function CategoriesSection() {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <header className={styles.heading}>
        <h2 id="categories-heading">Explore Our Top Course Categories</h2>
        <p>
          Discover a wide range of learning paths—from design to
          <br className={styles.desktopBreak} /> development, business to personal growth.
        </p>
      </header>

      <div className={styles.grid}>
        {categories.map(({ name, courseCount, image, imageAlt }) => (
          <article className={styles.category} key={name}>
            <div className={styles.imageFrame}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <span className={styles.arrow} aria-hidden="true">
                <ArrowUpRight size={28} strokeWidth={2} />
              </span>
            </div>
            <h3>{name}</h3>
            <p>{courseCount} Courses</p>
          </article>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Clock3, Star, UsersRound } from "lucide-react";
import styles from "./courses-section.module.css";

const categories = [
  "All courses",
  "UI/UX Design",
  "Development",
  "Digital Marketing",
  "Language Learning",
  "Business Consulting",
] as const;

type CourseCategory = (typeof categories)[number];
type Course = {
  title: string;
  category: Exclude<CourseCategory, "All courses">;
  instructor: string;
  image: string;
  imageAlt: string;
  level: string;
  lessons: number;
  duration: string;
  students: string;
  price: string;
};

const courses: Course[] = [
  {
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    instructor: "purepearl studio",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    imageAlt: "Colorful interface design displayed on a designer's screen",
    level: "Beginner",
    lessons: 17,
    duration: "2h 16m",
    students: "850+",
    price: "$50.00",
  },
  {
    title: "Web Development Bootcamp",
    category: "Development",
    instructor: "devhub",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    imageAlt: "Laptop displaying code on a developer's desk",
    level: "All Levels",
    lessons: 28,
    duration: "4h 10m",
    students: "2.1K+",
    price: "$75.00",
  },
  {
    title: "Webflow for Beginners",
    category: "UI/UX Design",
    instructor: "finvision",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    imageAlt: "Website analytics and design previews on a laptop",
    level: "Beginner",
    lessons: 25,
    duration: "3h 30m",
    students: "1.4K+",
    price: "$60.00",
  },
  {
    title: "Digital Marketing Essentials",
    category: "Digital Marketing",
    instructor: "growthlab",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    imageAlt: "Marketing performance charts on a computer screen",
    level: "Beginner",
    lessons: 20,
    duration: "3h 05m",
    students: "970+",
    price: "$55.00",
  },
  {
    title: "Speak a New Language with Confidence",
    category: "Language Learning",
    instructor: "lingua academy",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    imageAlt: "Language learning books and study materials",
    level: "All Levels",
    lessons: 32,
    duration: "5h 20m",
    students: "1.2K+",
    price: "$45.00",
  },
  {
    title: "Business Consulting Foundations",
    category: "Business Consulting",
    instructor: "the business school",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    imageAlt: "Business team collaborating around a table",
    level: "Intermediate",
    lessons: 22,
    duration: "3h 45m",
    students: "780+",
    price: "$65.00",
  },
];

const pageSize = 6;

export function CoursesSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<CourseCategory>("All courses");
  const [page, setPage] = useState(0);
  const visibleCourses =
    selectedCategory === "All courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);
  const pageCount = Math.ceil(visibleCourses.length / pageSize);
  const currentPage = Math.min(page, pageCount - 1);
  const pageCourses = visibleCourses.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <section id="courses" tabIndex={-1} className={styles.section} aria-labelledby="courses-heading">
      <header className={styles.heading}>
        <h2 id="courses-heading">Explore Most Popular Courses</h2>
        <p>
          Learn from top-rated instructors across in-demand categories
          <br className={styles.desktopBreak} /> and start growing your skills today.
        </p>
      </header>

      <div className={styles.categories} aria-label="Filter courses by category">
        {categories.map((category) => (
          <button
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.selectedCategory : ""
            }`}
            key={category}
            type="button"
            aria-pressed={selectedCategory === category}
            onClick={() => { setSelectedCategory(category); setPage(0); }}
          >
            {category}
          </button>
        ))}
      </div>

      <div id="course-pages" className={styles.grid}>
        {pageCourses.map((course) => (
          <article className={styles.course} key={course.title}>
            <div className={styles.thumbnail}>
              <Image
                src={course.image}
                alt={course.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
              />
              <span className={`${styles.badge} ${styles.rating}`}>
                <Star size={15} fill="currentColor" aria-hidden="true" />
                <span>4.5</span>
              </span>
              <span className={`${styles.badge} ${styles.level}`}>
                {course.level}
              </span>
            </div>

            <div className={styles.details}>
              <h3>{course.title}</h3>
              <p className={styles.instructor}>
                by <span>{course.instructor}</span>
              </p>

              <ul className={styles.stats} aria-label="Course details">
                <li>
                  <BookOpen size={15} aria-hidden="true" />
                  {course.lessons} Lessons
                </li>
                <li>
                  <Clock3 size={15} aria-hidden="true" />
                  {course.duration}
                </li>
                <li>
                  <UsersRound size={15} aria-hidden="true" />
                  {course.students} Students Enrolled
                </li>
              </ul>

              <div className={styles.footer}>
                <p className={styles.price}>
                  <strong>{course.price}</strong>
                  <span>/lifetime</span>
                </p>
                <span className={styles.enrollLabel}>Enroll Now</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.pagination}>
        <nav className={styles.indicators} aria-label="Course pages">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              className={styles.indicator}
              aria-label={`Go to course page ${index + 1}`}
              aria-current={currentPage === index ? "page" : undefined}
              aria-controls="course-pages"
              onClick={() => setPage(index)}
            ><span /></button>
          ))}
        </nav>
        <div className={styles.pageArrows}>
          <button type="button" className={styles.pageArrow} aria-label="Previous course page" aria-controls="course-pages" disabled={currentPage === 0} onClick={() => setPage(currentPage - 1)}>
            <ArrowLeft size={21} aria-hidden="true" />
          </button>
          <button type="button" className={styles.pageArrow} aria-label="Next course page" aria-controls="course-pages" disabled={currentPage === pageCount - 1} onClick={() => setPage(currentPage + 1)}>
            <ArrowRight size={21} aria-hidden="true" />
          </button>
        </div>
        <p className={styles.pageStatus} role="status">{selectedCategory}: page {currentPage + 1} of {pageCount}</p>
      </div>
    </section>
  );
}

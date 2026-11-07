"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./home-section.module.css";

export function CourseSearch() {
  const [message, setMessage] = useState("");
  return (
    <div className={styles.searchArea}>
      <form className={styles.search} role="search" onSubmit={(event) => {
        event.preventDefault();
        const query = String(new FormData(event.currentTarget).get("query") ?? "").trim();
        setMessage(query ? `Course search for “${query}” will be available when our catalog launches.` : "Enter a topic you’d like to learn.");
      }}>
        <button type="submit" aria-label="Search courses"><Search size={27} strokeWidth={1.7} aria-hidden="true" /></button>
        <label htmlFor="course-query" className={styles.srOnly}>Search courses</label>
        <input id="course-query" name="query" type="search" placeholder="Search your course..." maxLength={100} onChange={() => setMessage("")} />
      </form>
      <p className={styles.searchStatus} role="status">{message}</p>
    </div>
  );
}

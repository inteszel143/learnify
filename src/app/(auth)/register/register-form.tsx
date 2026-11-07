"use client";

import { useState } from "react";
import { ArrowUpRight, Eye, EyeOff } from "lucide-react";
import styles from "./register.module.css";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()} aria-label="Create your account">
      <div className={styles.field}>
        <label htmlFor="register-name">Full name</label>
        <input id="register-name" name="name" autoComplete="name" placeholder="Enter your full name" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="register-email">Email address</label>
        <input id="register-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="register-password">Password</label>
        <div className={styles.password}>
          <input id="register-password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="Create a password" minLength={8} aria-describedby="password-hint" required />
          <button type="button" className={styles.reveal} onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide passwords" : "Show passwords"} aria-pressed={showPassword}>
            {showPassword ? <EyeOff size={20} aria-hidden="true" /> : <Eye size={20} aria-hidden="true" />}
          </button>
        </div>
        <p id="password-hint" className={styles.hint}>Use at least 8 characters.</p>
      </div>
      <div className={styles.field}>
        <label htmlFor="register-confirm-password">Confirm password</label>
        <input id="register-confirm-password" name="confirmPassword" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="Re-enter your password" minLength={8} required />
      </div>
      <button className={styles.submit} type="submit">Create account <ArrowUpRight size={21} aria-hidden="true" /></button>
    </form>
  );
}

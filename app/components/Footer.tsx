import Link from "next/link";
import styles from "./Footer.module.css";
import { Facebook, Twitter, Instagram } from 'lucide-react';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <div className={styles.footerRow}>
          <h2 className={styles.footerLogo}>audiophile</h2>
          <ul className={styles.footerLinks}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/headphones">HEADPHONES</Link></li>
            <li><Link href="/speakers">SPEAKERS</Link></li>
            <li><Link href="/earphones">EARPHONES</Link></li>
          </ul>
        </div>
      </nav>
      <div className={styles.contact}>
        <div className={styles.socials}>
          <p className={styles.footerAbout}>
            Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.
          </p>
          <p className={styles.copyright}>Copyright © 2021. All Rights Reserved</p>
        </div> 
        <div className={styles.socialIcons}>
          <Link href="https://facebook.com" aria-label="Facebook">
            <Facebook size={24} />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter">
            <Twitter size={24} />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <Instagram size={24} />
          </Link>
        </div>
      </div>

    </footer>
  );
}

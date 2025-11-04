"use client";

import Link from "next/link";
import styles from "./NavLink.module.css";
import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function NavLink() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
      <nav className={styles.nav}>
        <div className={styles.navRow}>
          <div className={styles.leftSection}>
            <Menu
              className={styles.menuIcon}
              onClick={() => setIsOpen(!isOpen)}
            />
            <h2 className={styles.logo}>audiophile</h2>
          </div>

          <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/headphones">HEADPHONES</Link></li>
            <li><Link href="/speakers">SPEAKERS</Link></li>
            <li><Link href="/earphones">EARPHONES</Link></li>
          </ul>

          <div className={styles.cart}>
            <ShoppingCart />
          </div>
        </div>
      </nav>
      
    
  );
}

import React, { useContext } from "react";
import Link from "next/link";
import links from "../libs/links";
import { Menu, X } from "react-feather";
import styles from "../styles/header.module.css";
import { AppContext } from "../pages/_app";
import Sidebar from "./Sidebar";

const Header = ({ value }) => {
  const { sectionGrid, title } = value;
  console.log();
  const { openSideber } = useContext(AppContext);
  return (
    <header className={`${styles.header} ${sectionGrid}`}>
      <div className={styles.headerCenter}>
        <Link href="/">
          <a>
            <h1 className={styles.title}>{title}</h1>
          </a>
        </Link>
        <nav className={styles.nav}>
          <div className={styles.navheader}>
            <button
              className={`${styles.openbtn} btn`}
              onClick={() => openSideber()}
            >
              <Menu />
            </button>
          </div>
        </nav>
        <Sidebar />
        <ul className={styles.links}>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.path}>
                  <a>{link.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;

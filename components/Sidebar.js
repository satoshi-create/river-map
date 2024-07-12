import React, { useContext } from "react";
import { AppContext } from "../pages/_app";
import styles from "../styles/sidebar.module.css";
import { X } from "react-feather";
import links from "../libs/links";
import Link from "next/link";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);
  return (
    <ul
      className={styles.links}
      style={isSidebarOpen ? { display: "grid" } : { display: "none" }}
    >
      <button
        className={`${styles.closebtn} btn`}
        onClick={() => closeSidebar()}
      >
        <X />
      </button>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link href={link.path}>
              <a onClick={() => closeSidebar()}>{link.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;

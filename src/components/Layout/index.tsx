import SideBar from "../SideBar";
import styles from './style.module.scss';
import Authorization from "../Authorization";
import React from "react";
const Layout: React.FC = () => {
  return <div className={styles.layoutContainer}>
    <SideBar />
    <div className={styles.main}>
        <Authorization />
      {/* {mainComponent()} */}
    </div>
  </div>
};

export default Layout;
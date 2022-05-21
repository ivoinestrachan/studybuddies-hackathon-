import type { NextPage } from 'next'
import styles from "../styles/dashboard.module.css"
import Image from 'next/image';
import logo from "../assets/logo.svg"
import discover from "../assets/discover.svg"
import directbox from "../assets/directbox-notif.svg"
import settings from "../assets/setting.svg"
import Link from 'next/link';

const Dashboard: NextPage  = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerImg}>
      <Image src={logo} className={styles.logo} alt="logo"/>
        </div> 
        <div className={styles.navigation}>
        <div className={styles.navWrapper}>
        <Link href="/" >
              <div className={styles.linkItemWrapper}>
              <Image src={discover}  alt="discover"/>
                <span className={styles.linkTxt}>Discover</span>
              </div>
            </Link>
            <Link href="/" >
              <div className={styles.linkItemWrapper}>
              <Image src={directbox}  alt="direct"/>
                <span className={styles.linkTxt}>Message</span>
              </div>
            </Link>
            <Link href="/" >
              <div className={styles.linkItemWrapper}>
              <Image src={settings}  alt="setting"/>
                <span className={styles.linkTxt}>Settings</span>
              </div>
            </Link>
          </div>
          </div>
    </div>
  );
}

export default Dashboard;
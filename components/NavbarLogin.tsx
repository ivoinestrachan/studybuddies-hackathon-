import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg"
import profile from "../assets/profile.svg";

const NavbarLogin = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
            <Image src={logo} className={styles.logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.logo}>
          StudyBuddies
            </div>
       </div>
            <div className={styles.buttonWrapper}>
              <Link href="/signup" className={styles.button2}>
            <button className={styles.button2}><span className={styles.spanLogin}><Image src={profile} alt="profile" /></span>Create an account</button>
              </Link>
            </div>
          </div>
         
  );
}

export default NavbarLogin;
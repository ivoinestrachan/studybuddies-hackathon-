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
              <Link href="/login" className={styles.button3}>
            <button className={styles.button3}><span className={styles.spanLogin}><Image src={profile} alt="profile" /></span>Login</button>
              </Link>
            </div>
          </div>
         
  );
}

export default NavbarLogin;
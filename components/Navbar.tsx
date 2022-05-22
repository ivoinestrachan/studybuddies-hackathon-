import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg"
import user from "../assets/profile-circle.svg";


const Navbar = () => {
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
       <div className={styles.linkContainer}>
          <div className={styles.linkHolder}>
            <Link href="/" className={styles.links}>
            <div className={styles.links}>
              About
              </div>
            </Link>
            <Link href="/" className={styles.links}>
            <div className={styles.links}>
              Blog
              </div>
            </Link>
            <Link href="/" className={styles.links}>
              <div className={styles.links}>
              Support
              </div>
            </Link>
            <div className={styles.buttonWrapper}>
              <Link href="/login" className={styles.button}>
            <button className={styles.button}><span className={styles.spanLogin}><Image src={user} alt="name" /></span> Login</button>
              </Link>
            </div>
          </div>
          </div>
      </div>
      
  
  );
};

export default Navbar;
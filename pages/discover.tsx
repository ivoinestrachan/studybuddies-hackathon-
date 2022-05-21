import Dashboard from "../components/dashboard";
import styles from "../styles/discover.module.css";
import Image from 'next/image';
import swipeleft from "../assets/swipeleft.svg";
import swiperight from "../assets/swiperight.svg";

const discover = () => {
  return (
    <div className={styles.container}>
      <Dashboard />
      <div className={styles.app}>
        <div className={styles.swipeContainer}>
        <div>
      <Image src={swipeleft} className={styles.swipeleft} alt="left"
      />
      </div> 
      <div className={styles.card}>
      <div></div>
      </div>
      <div>
      <Image src={swiperight} className={styles.swiperight} alt="right"
      />
      </div> 
      </div>
          </div> 
    </div>
  );
}

export default discover;
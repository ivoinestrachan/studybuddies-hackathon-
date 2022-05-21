import DashboardHome from "../components/dashboardhome";
import styles from "../styles/home.module.css";

const home = () => {
  return (
    <div className={styles.container}>
    <DashboardHome />
    <div className={styles.app}>
       Home
       </div>
    </div>
  
  );
}

export default home;
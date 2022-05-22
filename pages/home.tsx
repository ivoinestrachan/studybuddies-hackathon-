import DashboardHome from "../components/dashboardhome";
import styles from "../styles/home.module.css";

const home = () => {
  return (
    <div className={styles.container}>
    <DashboardHome />
    <div className={styles.app}>
      <div className={styles.TaskContainer}>
      <div className={styles.TasktitleCon}>
        <div className={styles.Tasktitle}>Task</div>
        <div className={styles.friend}>Friends
        </div>
        
        <div>
        <input type="checkbox" className={styles.checkbox}/>
        <label className={styles.check}>Online</label>
        
        
    </div>
        </div>
      </div>
      
       </div>
    </div>
  
  );
}

export default home;
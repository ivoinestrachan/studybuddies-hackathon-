import type { NextPage } from 'next'
import styles from "../styles/landing.module.css"
import nerd from "../assets/nerd.svg"
import Image from 'next/image'
import arrow from "../assets/arrow.svg"
import circle from "../assets/play-circle.svg"
import Navbar from '../components/Navbar'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
    <Navbar />
    <div className={styles.container}>
      <div className={styles.intro}>
      
      A space for <span className={styles.learner}>Learners</span> <br></br>
to find their unique

      </div>
      <div className={styles.study}>
     <Image src={nerd} alt="nerd"/> Study Buddies 
      </div>
      <div className={styles.summary}>
      StudyBuddies –An online platform which <br></br>enables us to view and select peers who share <br></br>quite the same subjects of study,
       <br></br>and have similar interests.
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
        <Link href="/signup">
     <button className={styles.button}>Get started <span className={styles.arrow}><Image src={arrow} alt="arrow" className={styles.arrow}/></span> </button>
     </Link>
        </div>
        <div className={styles.buttonWrapper2}>
         
          <button className={styles.button2}><span className={styles.arrow2}><Image src={circle} alt="circle" className={styles.arrow}/></span>Watch video</button>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Home

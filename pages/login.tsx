import type { NextPage } from 'next'
import styles from "../styles/login.module.css"
import Image from 'next/image';
import logo from "../assets/logo.svg"

function Login(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.headerImg}>
                <Image src={logo} className={styles.logo} alt="logo" />
            </div>
            <h1 className={styles.name}>Study Buddy</h1>
            <div className={styles.box}>
                <h1 className={styles.login_text}>Login</h1>
                <h3 className={styles.input_text}>Username</h3>
                <input placeholder="Username" className={styles.input}></input>
                <h3 className={styles.input_text}>Password</h3>
                <input placeholder="Password" className={styles.input}></input>
                <br/>
                <button className={styles.login_button}>Login</button>
                <a href="signup.tsx" className={styles.signup_link}>Sign Up</a>
            </div>
        </div>
    );
}

export default Login
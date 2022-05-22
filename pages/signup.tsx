import type { NextPage } from 'next'
import styles from "../styles/signup.module.css"
import Image from 'next/image';
import logo from "../assets/logo.svg"

function Login(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.headerImg}>
                <Image src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.box}>
                <h1>Study Buddy</h1>
                <h1>Sign Up</h1>
                <h3 className={styles.input_text}>Name</h3>
                <input placeholder="Name"></input>
                <h3 className={styles.input_text}>Username</h3>
                <input placeholder="Username"></input>
                <h3 className={styles.input_text}>Password</h3>
                <input placeholder="Password"></input>
                <h3 className={styles.input_text}>Enter Password Again</h3>
                <input placeholder="Password"></input>
                <br/>
                <button className={styles.button}>Sign Up</button>
                <br/>
                <a href="login.tsx">Login</a>
            </div>
        </div>
    );
}

export default Login
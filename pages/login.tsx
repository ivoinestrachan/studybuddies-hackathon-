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
            <div className={styles.box}>
                <button className={styles.button}>Login</button>
                <button className={styles.button}>Sign Up</button>
            </div>
        </div>
    );
}

export default Login
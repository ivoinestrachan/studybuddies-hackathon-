import styles from "../styles/login.module.css"
import email from "../assets/email.svg";
import key from "../assets/key.svg";
import google from "../assets/google.svg";
import Image from "next/image";

const login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                <div className={styles.h1}>Welcome back!</div>
                <div className={styles.inputWrapper}>
                    <div className={styles.border}>
                 <span className={styles.spanLogin}><Image src={email} alt="email" /> </span>   <input type="text" placeholder="Email address"  className={styles.input}/>
                 </div>
                </div>
                <div className={styles.inputWrapper}>
                <div className={styles.border}>
                <span className={styles.spanLogin}><Image src={key} alt="key" /> </span>   <input type="password" placeholder="Password"  className={styles.input}/>
                </div>
                </div>
                <div className={styles.loginbuttonWrapper}>
                    <button className={styles.loginbutton}>Login</button>
                </div>
                </form>
            </div>
            <div className={styles.forget}>Shit! I forgot my password</div>
            <div className={styles.googlebuttonWrap}>
                <button className={styles.googlebutton}><span className={styles.google}><Image src={google} alt="google"/></span>Sign in with Google</button>
            </div>
        </div>
    );
}

export default login;
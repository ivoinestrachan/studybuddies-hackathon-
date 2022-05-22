import styles from "../styles/signup.module.css"
import Image from "next/image";
import email from "../assets/email.svg";
import key from "../assets/key.svg";
import google from "../assets/google.svg";
import user from "../assets/user.svg";
import Link from "next/link";
import NavbarSignUp from "../components/NavbarSignUp";

const signup = () => {
    return (
        <div className={styles.container}>
            <NavbarSignUp />
        <div className={styles.formContainer}>
            <form className={styles.form}>
            <div className={styles.h1}>Let’s get started!</div>
            <div className={styles.inputWrapper}>
                <div className={styles.border}>
             <span className={styles.spanLogin}><Image src={user} alt="name" /> </span>   <input type="text" placeholder="Name"  className={styles.input}/>
             </div>
            </div>
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

            <div className={styles.inputWrapper}>
            <div className={styles.border}>
            <span className={styles.spanLogin}><Image src={key} alt="confirm" /> </span>   <input type="password" placeholder="Comfirm password"  className={styles.input}/>
            </div>
            </div>
            <div className={styles.loginbuttonWrapper}>
                <button className={styles.loginbutton}>Sign Up</button>
            </div>
            </form>
        </div>
       
        <div className={styles.forget}>
            <Link href="/login">
            Already have an account
            </Link>
            </div>
        
        <div className={styles.googlebuttonWrap}>
            <button className={styles.googlebutton}><span className={styles.google}><Image src={google} alt="google"/></span>Sign in with Google</button>
        </div>
    </div>
    );
}

export default signup;
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <form noValidate className={styles.form}>
        <h1 className={styles.title}>Sign Up</h1>

        <input type="email" placeholder="Email:" className={styles.input} />
        <input
          type="password"
          placeholder="Password:"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Retype password:"
          className={styles.input}
        />

        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
  );
}

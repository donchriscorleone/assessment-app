import styles from "../styles/SignIn.module.css";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("/home");
  };

  return (
    <div className={styles.container}>
      <form noValidate className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Sign In</h1>

        <input type="email" placeholder="Email:" className={styles.input} />
        <input
          type="password"
          placeholder="Password:"
          className={styles.input}
        />
        <button type="submit" className={styles.submitBtn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;

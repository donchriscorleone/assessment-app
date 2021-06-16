import styles from "../styles/Main.module.css";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/");
  };

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Assessment Application</h1>
      <div className={styles.imageContainer}>
        <img
          src="https://picsum.photos/id/237/220/290?grayscale"
          className={styles.image}
        />
      </div>
      <h1 className={styles.footerText}>
        Buttons can take you to other pages.
      </h1>
      <div className={styles.footer}>
        <button className={styles.footerBtn} onClick={handleSignUp}>
          Sign Up
        </button>
        <button className={styles.footerBtn} onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Home;

import styles from "../styles/Main.module.css";
import { useRouter } from "next/router";
import AboutMe from "../components/AboutMe";

const Home = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/");
  };

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <>
      <div className={styles.main}>
        <section className={styles.container}>
          <h1 className={styles.title}>Assessment Application</h1>
          <div className={styles.imageContainer}>
            <img
              src="https://picsum.photos/id/237/220/290?grayscale"
              className={styles.image}
            />
          </div>
        </section>
        <AboutMe />
        <section className={styles.footer}>
          <h1 className={styles.footerText}>
            Buttons can take you to other pages.
          </h1>
          <button className={styles.footerBtn} onClick={handleSignUp}>
            Sign Up
          </button>
          <button className={styles.footerBtn} onClick={handleSignIn}>
            Sign In
          </button>
        </section>
      </div>
    </>
  );
};

export default Home;

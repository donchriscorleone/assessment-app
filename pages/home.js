import styles from "../styles/Main.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Assessment Application</h1>
      <div className={styles.imageContainer}>
        <img
          src="https://picsum.photos/id/237/220/290?grayscale"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Home;

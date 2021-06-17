import React from "react";
import styles from "../styles/Picsum.module.css";

const data = [
  "https://picsum.photos/seed/15/120/150?grayscale",
  "https://picsum.photos/seed/10/120/150?grayscale",
  "https://picsum.photos/seed/20/120/150?grayscale",
  "https://picsum.photos/seed/30/120/150?grayscale",
];

const Picsum = () => {
  return (
    <section className={styles.pictures}>
      {data.map((img, index) => {
        return <img src={img} alt={index} key={index} className={styles.img} />;
      })}
    </section>
  );
};

export default Picsum;

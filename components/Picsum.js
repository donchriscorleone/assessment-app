import React from "react";
import styles from "../styles/Picsum.module.css";

const data = [
  "https://picsum.photos/seed/2/200/300?grayscale",
  "https://picsum.photos/seed/2/200/300?grayscale",
];

const Picsum = () => {
  return (
    <section className={styles.pictures}>
      {data.map((img, index) => {
        return <img src={img} alt={index} key={index} />;
      })}
    </section>
  );
};

export default Picsum;

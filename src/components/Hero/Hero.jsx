import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oi, eu sou o Vinicius</h1>
        <p className={styles.description}>
          Sou um Dev Júnior com foco em Backend e IA
        </p>
        <a href="mailto:vini.gardim1@gmail.com" className={styles.contactBtn}>
          Entre em contato
        </a>
      </div>
      <img
        src={getImageUrl("hero/eu.jfif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

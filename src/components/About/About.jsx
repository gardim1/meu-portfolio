import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mim</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/icone3d.png")}
          alt=""
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/servidor.png")} alt="" className={styles.aboutIcons}/>
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Backend</h3>
              <p>
                Sou um desenvolvedor backend com conheciemntos em Java Spring Boot e Nodejs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/IA.png")} alt="" id="icone-IA" className={styles.aboutIcons}/>
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor IA</h3>
              <p>
                Tenho experiencia com projetos de Inteligencia Artificial, incluindo principalmente visão computacional
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bd.png")} alt="" className={styles.aboutIcons}/>
            <div className={styles.aboutItemText}>
              <h3>Ferramentas</h3>
              <p>
                Tenho conhecimentos de bancos de dados SQL/NoSQL, docker, testes automatizados
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

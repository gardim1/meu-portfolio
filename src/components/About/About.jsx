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
                Sou desenvolvedor backend com experiência em .NET 5/8, Python, SQL Server e Node.js, atuando na criação de APIs robustas, integrações e automações de processos.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/IA.png")} alt="" id="icone-IA" className={styles.aboutIcons}/>
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor IA</h3>
              <p>
                Tenho experiência com projetos de IA generativa, incluindo modelos de LLM, RAG (LangGraph, LangChain, LlamaIndex, FAISS, ChromaDB), fine-tuning com Unsloth e visão computacional usando OpenCV, Roboflow, YOLO e CNNs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bd.png")} alt="" className={styles.aboutIcons}/>
            <div className={styles.aboutItemText}>
              <h3>Ferramentas</h3>
              <p>
                Conhecimentos em bancos de dados SQL/NoSQL, Docker, testes automatizados e práticas modernas de desenvolvimento e versionamento.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

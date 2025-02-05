import React from 'react';
import AboutImg from "../../assets/profile.jpg"
import CV from "../../assets/Yuri-Cv.pdf"
import Info from './Info';
import "./about.css";

export default function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">Sobre Mim</h2>
        <span className="section__subtitle"></span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            
            <div className="about__data">
                <Info/>

                <p className="about__description">
                Sempre busco expandir meus conhecimentos na área. 
                Participei de projetos acadêmicos que fortaleceram minha formação técnica e minha capacidade de trabalhar em equipe. 
                Sou motivado por desafios e estou sempre em busca de aprendizado e desenvolvimento profissional.</p>

                <a download="" href={CV} className="button button--felx">Download CV</a>
            </div>
        </div>
    </section>
  );
}


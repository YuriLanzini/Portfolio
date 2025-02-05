import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

export default function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Possuo conhecimentos básicos em linguagens de programação como C, Java e Python. Em relação a projetos:</span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
        </div>

    </section>



  );
}


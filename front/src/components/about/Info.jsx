import React from 'react';

export default function Info() {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="uil uil-university about__icon"></i>

            <h3 className="about__title">Universidade Federal da Fronteria Sul</h3>
            <span className="about__subtitle">Chapecó - SC</span>
        </div>

        <div className="about__box">
            <i class="uil uil-desktop-alt about__icon"></i>

            <h3 className="about__title">Ciência da Computação</h3>
            <span className="about__subtitle">7° Semestre</span>
        </div>

        <div className="about__box">
            <i class="uil uil-user about__icon"></i>

            <h3 className="about__title">Idade</h3>
            <span className="about__subtitle">23 anos</span>
        </div>

    </div>
  );
}


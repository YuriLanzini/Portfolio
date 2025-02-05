import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Yuri</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projetos</a>
                </li>
            </ul>

            <div className="footer__social">
               
                <a href="https://www.instagram.com/yuri_lanzini/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>
                
                <a href="https://github.com/YuriLanzini" className="footer__social-link" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">
            &#169; Crypticalcoder. All rigths reserved
            </span>
        </div>
    </footer>
  );
}


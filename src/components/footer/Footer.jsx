import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <div className="footer__container container">
                <h1 className="footer__title">Lautaro Bacega</h1>
            </div>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Acerca de mi</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Portafolio</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonios</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/lauchabacegabmx/?hl=es-la" className="footer__social-link" target='_blank'>
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://github.com/LautaroBacega" className="footer__social-link" target='_blank'>
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Lautaro Bacega. Todos los derechos reservados
            </span>
        </div>
    </footer>
  )
}

export default Footer
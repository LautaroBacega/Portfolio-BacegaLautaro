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
                    <a href="#portfolio" className="footer__link">Portafolio</a>
                </li>

                {/* <li>
                    <a href="#testimonials" className="footer__link">Testimonios</a>
                </li> */}
            </ul>

            <div className="footer__social">
                <a href="https://wa.link/1jfq6d" className="footer__social-link" target='_blank'>
                    <i className="uil uil-whatsapp"></i>
                </a>

                <a href="mailto:lautibacega@gmail.com" className="footer__social-link" target='_blank'>
                    <i className="uil uil-envelope-alt"></i>
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
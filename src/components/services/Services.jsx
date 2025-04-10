"use client"

import { useState, useEffect } from "react"
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  // Efecto para controlar el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (toggleState !== 0) {
      // Cuando el modal está abierto, evita el scroll del body
      document.body.style.overflow = "hidden"
    } else {
      // Cuando el modal está cerrado, permite el scroll del body
      document.body.style.overflow = "auto"
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [toggleState])

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Servicios</h2>
      <span className="section__subtitle">¿Qué ofrezco?</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Desarrollo
              <br />
              Web
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Desarrollo Web</h3>
              <p className="services__modal-description">
                Servicios de desarrollo web centrados en la creación de sitios modernos y funcionales. Mi enfoque se
                basa en la calidad, la creatividad y la atención al detalle para satisfacer las necesidades de mis
                clientes.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">Diseño y desarrollo de sitios web responsivos y atractivos.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Optimización del rendimiento para una experiencia de usuario óptima
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">Integración de tecnologías modernas como React.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Desarrollo de interfaces de usuario intuitivas y fáciles de usar.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Soporte continuo y mantenimiento para garantizar la longevidad y la eficacia del sitio.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-cloud-check services__icon"></i>
            <h3 className="services__title">
              Dominio y<br />
              Host
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Dominio y Host</h3>
              <p className="services__modal-description">
                Servicio de dominio y hosting diseñado para proporcionar a mis clientes una presencia en línea confiable
                y segura. Mi enfoque se centra en la facilidad de uso, el rendimiento óptimo y el soporte técnico.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Registro y gestión de nombres de dominio para asegurar la identidad en línea de tu marca.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Alojamiento web confiable y seguro con altos niveles de disponibilidad y velocidad.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Soporte técnico continuo para resolver cualquier problema y garantizar un funcionamiento sin
                    problemas de tu sitio web.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-info"></i>
                  <p className="services__modal-info">
                    Configuración de correos electrónicos personalizados asociados con el nombre de dominio.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

"use client"

import { useState, useEffect } from "react"
import "./certificaciones.css"
import Analitico1 from "../../assets/Bacega Lautaro_Analítico 1.jpg"
import Analitico2 from "../../assets/Bacega Lautaro_Analítico 2.jpg"
import TituloEnTramite from "../../assets/Bacega Lautaro_Analítico 1.jpg"
import Backend1 from "../../assets/CoderHouse - Backend 1.png"
import Backend2 from "../../assets/CoderHouse - Backend 2.png"
import Backend3 from "../../assets/CoderHouse - Backend 3.png"
import FrontendCarrera from "../../assets/CoderHouse - Carrera Desarrollo FrontEnd React.png"
import FrontendDesarrolloWeb from "../../assets/CoderHouse - Desarrollo Web.png"
import FrontendJavascript from "../../assets/CoderHouse - JavaScript.png"
import FrontendReactJs from "../../assets/CoderHouse - React Js.png"

const Certificaciones = () => {
  const [toggleState, setToggleState] = useState(0)

  // Datos de los certificados (reemplaza con tus propios certificados)
  const certificates = [
    {
      id: 1,
      title: "Analitico 1 de 2",
      image: Analitico1,
    },
    {
      id: 2,
      title: "Analitico 2 de 2",
      image: Analitico2,
    },
    {
      id: 3,
      title: "Titulo en Tramite",
      image: TituloEnTramite,
    },
    {
      id: 4,
      title: "Programacion Backend 1: Desarrollo Avanzado de Backend",
      image: Backend1,
    },
    {
      id: 5,
      title: "Programacion Backend 2: Diseño y Arquitectura Backend",
      image: Backend2,
    },
    {
      id: 6,
      title: "Programacion Backend 3: Testing y Escalabilidad Backend",
      image: Backend3,
    },
    ,
    {
      id: 7,
      title: "Carrera de Desarrollo Frontend React",
      image: FrontendCarrera,
    },
    ,
    {
      id: 8,
      title: "Programacion Backend 1: Desarrollo Web",
      image: FrontendDesarrolloWeb,
    },
    ,
    {
      id: 9,
      title: "Programacion Backend 2: Javascript",
      image: FrontendJavascript,
    },
    ,
    {
      id: 10,
      title: "Programacion Backend 3: React Js",
      image: FrontendReactJs,
    },
  ]

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

  const openModal = (index) => {
    setToggleState(index)
  }

  const closeModal = () => {
    setToggleState(0)
  }

  return (
    <section className="contact container section" id="certificados">
      <h2 className="section__title">Certificados</h2>
      <span className="section__subtitle">Mis certificados</span>

      <div className="certificates__container">
        {certificates.map((certificate) => (
          <div className="certificate__item" key={certificate.id} onClick={() => openModal(certificate.id)}>
            <img src={certificate.image || "/placeholder.svg"} alt={certificate.title} className="certificate__img" />
          </div>
        ))}
      </div>

      {/* Modal para cada certificado */}
      {certificates.map((certificate) => (
        <div
          className={toggleState === certificate.id ? "certificate__modal active-modal" : "certificate__modal"}
          key={`modal-${certificate.id}`}
        >
          <div className="certificate__modal-content">
            <i onClick={closeModal} className="uil uil-times certificate__modal-close"></i>
            <h3 className="certificate__modal-title">{certificate.title}</h3>
            <img
              src={certificate.image || "/placeholder.svg"}
              alt={certificate.title}
              className="certificate__modal-img"
            />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Certificaciones

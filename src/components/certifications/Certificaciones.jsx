"use client"

import { useState, useEffect } from "react"
import "./certificaciones.css"
import Analitico1 from "../../assets/Lautaro Bacega - Analítico 1.jpg"
import Analitico2 from "../../assets/Lautaro Bacega - Analítico 2.jpg"
import TituloEnTramite from "../../assets/Lautaro Bacega - Título en trámite.jpg"
import TituloDigital1 from "../../assets/Bacega Lautaro - Titulo_page-0001.jpg"
import TituloDigital2 from "../../assets/Bacega Lautaro - Titulo_page-0002.jpg"
import Backend1 from "../../assets/CoderHouse - Backend 1.png"
import Backend2 from "../../assets/CoderHouse - Backend 2.png"
import Backend3 from "../../assets/CoderHouse - Backend 3.png"
import FrontendCarrera from "../../assets/CoderHouse - Carrera Desarrollo FrontEnd React.png"
import FrontendDesarrolloWeb from "../../assets/CoderHouse - Desarrollo Web.png"
import FrontendJavascript from "../../assets/CoderHouse - JavaScript.png"
import FrontendReactJs from "../../assets/CoderHouse - React Js.png"

const Certificaciones = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Datos de los certificados
  const certificates = [
    /* {
      id: ,
      title: "Título en Trámite",
      image: TituloEnTramite,
      issuer: "Juan XXIII",
    },
    {
      id: ,
      title: "Analítico 1 de 2",
      image: Analitico1,
      issuer: "Juan XXIII",
    },
    {
      id: ,
      title: "Analítico 2 de 2",
      image: Analitico2,
      issuer: "Juan XXIII",
    }, */
    {
      id: 1,
      title: "Analista de Sistemas - Título Digital 1 de 2",
      image: TituloDigital1,
      issuer: "Juan XXIII",
    },
    {
      id: 2,
      title: "Analista de Sistemas - Título Digital 2 de 2",
      image: TituloDigital2,
      issuer: "Juan XXIII",
    },
    {
      id: 3,
      title: "Programación Backend 1: Desarrollo Avanzado de Backend",
      image: Backend1,
      issuer: "CoderHouse",
    },
    {
      id: 4,
      title: "Programación Backend 2: Diseño y Arquitectura Backend",
      image: Backend2,
      issuer: "CoderHouse",
    },
    {
      id: 5,
      title: "Programación Backend 3: Testing y Escalabilidad Backend",
      image: Backend3,
      issuer: "CoderHouse",
    },
    {
      id: 6,
      title: "Carrera de Desarrollo Frontend React",
      image: FrontendCarrera,
      issuer: "CoderHouse",
    },
    {
      id: 7,
      title: "Desarrollo Web",
      image: FrontendDesarrolloWeb,
      issuer: "CoderHouse",
    },
    {
      id: 8,
      title: "JavaScript",
      image: FrontendJavascript,
      issuer: "CoderHouse",
    },
    {
      id: 9,
      title: "React Js",
      image: FrontendReactJs,
      issuer: "CoderHouse",
    },
  ]

  // Efecto para controlar el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
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
  }, [isModalOpen])

  const openModal = (index) => {
    setActiveIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const navigatePrev = (e) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
  }

  const navigateNext = (e) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
  }

  // Manejar teclas de navegación
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return

      if (e.key === "Escape") {
        closeModal()
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, certificates.length])

  return (
    <section className="contact container section" id="certificados">
      <h2 className="section__title">Certificados</h2>
      <span className="section__subtitle">Mis certificaciones profesionales</span>

      <div className="certificates__container">
        {certificates.map((certificate, index) => (
          <div className="certificate__card" key={certificate.id}>
            <div className="certificate__img-container" onClick={() => openModal(index)}>
              <img src={certificate.image || "/placeholder.svg"} alt={certificate.title} className="certificate__img" />
              <div className="certificate__overlay">
                <span className="certificate__view">Ver certificado</span>
              </div>
            </div>
            <div className="certificate__info">
              <h3 className="certificate__title">{certificate.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para visualizar certificados */}
      <div className={isModalOpen ? "certificate__modal active-modal" : "certificate__modal"} onClick={closeModal}>
        <div className="certificate__modal-content" onClick={(e) => e.stopPropagation()}>
          <i onClick={closeModal} className="uil uil-times certificate__modal-close"></i>

          <div className="certificate__modal-header">
            <h3 className="certificate__modal-title">{certificates[activeIndex]?.title}</h3>
            <p className="certificate__modal-subtitle">{certificates[activeIndex]?.issuer}</p>
          </div>

          <div className="certificate__modal-img-container">
            <img
              src={certificates[activeIndex]?.image || "/placeholder.svg"}
              alt={certificates[activeIndex]?.title}
              className="certificate__modal-img"
            />
          </div>

          <div className="certificate__navigation">
            <div className="certificate__nav-btn" onClick={navigatePrev}>
              <i className="uil uil-angle-left"></i>
            </div>
            <div className="certificate__nav-btn" onClick={navigateNext}>
              <i className="uil uil-angle-right"></i>
            </div>
          </div>

          <div className="certificate__counter">
            {activeIndex + 1} / {certificates.length}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificaciones


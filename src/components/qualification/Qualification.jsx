import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Calificaciones</h2>
        <span className="section__subtitle">Mi Experiencia</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__button qualification__active button--flex active-work work__item" 
                        : "qualification__button button--flex work__item" 
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Educacion
                </div>

                <div 
                    className={
                        toggleState === 2 
                        ? "qualification__button qualification__active button--flex active-work work__item" 
                        : "qualification__button button--flex work__item" 
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experiencia
                </div>
            </div>

            <div className="qualification__sections">
                {/* Educacion */}
                <div
                    className={
                        toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content" 
                    }
                >
                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">Tecnico Superior en Analisis de Sistemas</h3>
                            <span className="qualification__subtitle">Instituto Superior Juan23</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                        <h3 className="qualification__title">Desarrollo Frontend</h3>
                            <span className="qualification__subtitle">CoderHouse</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">Desarrollo Backend</h3>
                            <span className="qualification__subtitle">CoderHouse</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                </div>

                {/* Experiencia */}
                <div
                    className={
                        toggleState === 2 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content" 
                    }
                >
                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">Proyecto Final Desarrollo Frontend</h3>
                            <span className="qualification__subtitle">CoderHouse</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Bolsa de Trabajo Juan23</h3>
                            <span className="qualification__subtitle">Instituto Superior Juan23</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023
                            </div>
                        </div>

                        

                    </div>

                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">Proyecto Final Desarrollo Backend</h3>
                            <span className="qualification__subtitle">CoderHouse</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Ecommerce: 
                                <div></div>
                                    Tienda Bmx
                            </h3>
                            <span className="qualification__subtitle">Freelancer</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024 - actualidad
                            </div>
                        </div>

                        

                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}

export default Qualification
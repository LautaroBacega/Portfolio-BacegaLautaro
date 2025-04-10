import "./skills.css"

const SoftSkills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Competencias Blandas</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Resolución</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Comunicación</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Trabajo Equipo</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Gestión Tiempo</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Aprendizaje</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftSkills

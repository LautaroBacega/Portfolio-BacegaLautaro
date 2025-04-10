import "./skills.css"

const Methodologies = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Metodologías</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Agile/SCRUM</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Testing/Debugging</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Jest</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">TDD</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Methodologies

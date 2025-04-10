import "./skills.css"

const DevTools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Herramientas de Desarrollo</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">GitHub/GitLab</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">RESTful API</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CI/CD</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevTools

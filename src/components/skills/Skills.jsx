import "./skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"
import DevTools from "./DevTools"
import Methodologies from "./Methodologies"
import SoftSkills from "./SoftSkills"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Mi Nivel Técnico</span>

      <div className="skills__container container">
        <div className="skills__row">
          <Frontend />
          <Backend />
        </div>
        <div className="skills__row">
          <DevTools />
          <Methodologies />
          {/* <SoftSkills /> */}
        </div>
      </div>
    </section>
  )
}

export default Skills

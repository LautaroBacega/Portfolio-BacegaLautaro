"use client"

const WorkItems = ({ item, onOpenModal }) => {
  return (
    <div className="work__card" key={item.id} onClick={() => onOpenModal(item)}>
      <img src={item.image || "/placeholder.svg"} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {item.technologies && item.technologies.length > 0 && (
        <div className="work__technologies">
          {item.technologies.map((tech, index) => (
            <span key={index} className="work__tech-badge">
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="work__button" style={{ cursor: "pointer" }}>
        Ver más <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </div>
    </div>
  )
}

export default WorkItems


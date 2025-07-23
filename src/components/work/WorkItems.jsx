"use client"

const WorkItems = ({ item, onOpenModal }) => {
  return (
    <div className="work__card" key={item.id} onClick={() => onOpenModal(item)}>
      <img src={item.image || "/placeholder.svg"} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__button" style={{ cursor: "pointer" }}>
        Ver más <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </div>
    </div>
  )
}

export default WorkItems

"use client"

import { useEffect, useState } from "react"
import { projectsData, projectsNav } from "./Data"
import WorkItems from "./WorkItems"
import ProjectModal from "./ProjectModal"
import "./modal.css"

const Works = () => {
  const [item, setItem] = useState({ name: "todos" })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (item.name === "todos") {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name
      })

      setProjects(newProjects)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index)
              }}
              className={`${active === index ? "active-work" : ""}
                                work__item`}
              key={index}
            >
              {item.name}
            </span>
          )
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} onOpenModal={handleOpenModal} />
        })}
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default Works

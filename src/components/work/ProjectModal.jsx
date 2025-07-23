"use client"

import { useState } from "react"

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return "modal-badge-frontend"
      case "backend":
        return "modal-badge-backend"
      case "fullstack":
        return "modal-badge-fullstack"
      default:
        return "modal-badge-default"
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title">{project.title}</h2>
            <span className={`modal-badge ${getCategoryColor(project.category)}`}>{project.category}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="modal-body">
          {/* Image Carousel */}
          <div className="modal-carousel">
            <div className="carousel-container">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                className="carousel-image"
              />

              {/* Carousel Controls */}
              {project.images.length > 1 && (
                <>
                  <button className="carousel-btn carousel-btn-prev" onClick={prevImage}>
                    ‹
                  </button>
                  <button className="carousel-btn carousel-btn-next" onClick={nextImage}>
                    ›
                  </button>

                  {/* Dots Indicator */}
                  <div className="carousel-dots">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`carousel-dot ${index === currentImageIndex ? "active" : ""}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="modal-grid">
            {/* Left Column */}
            <div className="modal-left">
              {/* Description */}
              <div className="modal-section">
                <h3 className="modal-section-title">Descripción</h3>
                <p className="modal-description">{project.description}</p>
              </div>

              {/* Features */}
              {project.features && (
                <div className="modal-section">
                  <h3 className="modal-section-title">Características</h3>
                  <ul className="modal-features">
                    {project.features.map((feature, index) => (
                      <li key={index} className="modal-feature-item">
                        <span className="feature-bullet">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="modal-right">
              {/* Technologies */}
              <div className="modal-section">
                <h3 className="modal-section-title">Tecnologías</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-section">
                <h3 className="modal-section-title">Enlaces</h3>
                <div className="modal-buttons">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-primary"
                  >
                    🔗 Ver Proyecto
                  </a>

                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn modal-btn-secondary"
                    >
                      📁 Ver Repositorio
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="modal-details">
                <h3 className="modal-section-title">Detalles del Proyecto</h3>
                <div className="details-grid">
                  <div className="detail-row">
                    <span>ID:</span>
                    <span>#{project.id}</span>
                  </div>
                  <div className="detail-row">
                    <span>Categoría:</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="detail-row">
                    <span>Tecnologías:</span>
                    <span>{project.technologies.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

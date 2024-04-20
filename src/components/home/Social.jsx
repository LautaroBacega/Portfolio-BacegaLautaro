import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="mailto:lautibacega@gmail.com" className="home__social-icon" target='_blank'>
            <i className="uil uil-envelope-alt"></i>
        </a>

        <a href="https://wa.link/1jfq6d" className="home__social-icon" target='_blank'>
            <i className="uil uil-whatsapp"></i>
        </a>

        <a href="https://github.com/LautaroBacega" className="home__social-icon" target='_blank'>
            <i className="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social
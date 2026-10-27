import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])

useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <div className="hero-content">
          <img src="/avatar.jpg" alt="Алексей Дидик" className="hero-avatar" />
          <div className="hero-text">
            <h1>Алексей Дидик</h1>
            <p>Full-stack веб-разработчик | Python, JavaScript, React, Django</p>
          </div>
        </div>
      </header>
      <main>
        <section className="projects-section">
          <h2>Мои проекты</h2>
          {projects.length === 0 ? (
            <p>Проекты скоро появятся...</p>
          ) : (
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p><strong>Стек:</strong> {project.tech_stack}</p>
                  {project.github_link && (
                    <a href={project.github_link} target="_blank" rel="noreferrer">
                      Смотреть на GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [isVpnRequired, setIsVpnRequired] = useState(false);

  useEffect(() => {
    axios.get('https://aledidik.pythonanywhere.com/api/projects/', { timeout: 10000 })
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error(error);
        setIsVpnRequired(true);
      });
  }, []);

  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <div className="hero-content">
          <img src="/vizitka/avatar.jpg" alt="Алексей Дидик" className="hero-avatar" />
          <div className="hero-text">
            <h1>Алексей Дидик</h1>
            <p>Full-stack веб-разработчик | Python, JavaScript, React, Django</p>
          </div>
        </div>
      </header>
      <main>
        <section className="projects-section">
          <h2>Мои проекты</h2>
          
          {/* Проверяем, нужна ли плашка VPN */}
          {isVpnRequired ? (
            <div style={{ padding: '20px', backgroundColor: '#ffeeba', color: '#856404', borderRadius: '8px', textAlign: 'center', marginTop: '20px' }}>
              ⚠️ Сервер базы данных заблокирован вашим провайдером. Пожалуйста, включите VPN для просмотра проектов.
            </div>
          ) : projects.length === 0 ? (
            // Если ошибки нет, но проектов еще нет (загрузка)
            <p>Проекты скоро появятся...</p>
          ) : (
            // Если проекты успешно загружены
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
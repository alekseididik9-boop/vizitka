import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Состояние для хранения ссылки на видео (если null - окно закрыто)
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <div className="portfolio-wrapper">
      
      <div className="main-content">
        <div className="text-section">
          
          {/* ... (Главный экран и раздел "Обо мне" остаются без изменений) ... */}
          {activeSection === 'home' && (
            <>
              <p className="subtitle">Full-stack веб-разработчик || Python,JavaScript,React,Django</p>
              <h1 className="title">АЛЕКСЕЙ<br/>ДИДИК</h1>
              
              <div className="social-links">
                {/* Твои иконки соцсетей */}
                <a href="https://t.me/chev_chelios43" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="Telegram">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                </a>
                <a href="https://wa.me/79195167974" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="WhatsApp">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
                <a href="https://max.ru/u/f9LHodD0cOJVN2rXCfz8w7bMRy6kXH3isf5riI1SyhgAmRVMS1r-wgyrQI0" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="MAX">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97c1.31.61 2.75.97 4.29.97 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
                </a>
                <a href="mailto:aledidik@yandex.ru" className="social-icon" data-tooltip="Email">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </a>
              </div>
            </>
          )}

          {activeSection === 'about' && (
            <div className="info-block">
              <h2>Обо мне</h2>
              <p>Привет! Меня зовут Алексей, я full-stack веб-разработчик. Создаю современные и отзывчивые приложения, специализируясь на связке <strong>React</strong> и <strong>Django REST Framework</strong>.</p>
              <p>В разработке я ценю системность. Мой подход — брать сложную задачу, разбивать её на логические блоки и решать пошагово. Я не боюсь трудных багов и готов кропотливо отлаживать код, настраивать серверы на Linux или ковыряться в CORS-политиках до тех пор, пока проект не заработает безупречно.</p>
              <p>В свободное время я увлекаюсь работой с нейросетями для генерации изображений и сборкой роботов (LEGO WeDo) с сыном. Это помогает мне сочетать строгую техническую логику с творческим взглядом на интерфейсы. Ну и конечно всегда в процессе обучения.</p>
              <button className="back-btn" onClick={() => { setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>← Вернуться</button>
            </div>
          )}

          {/* Раздел: Портфолио */}
          {activeSection === 'portfolio' && (
            <div className="info-block portfolio-block">
              <h2>Мои проекты</h2>
              
              <div className="project-item">
                <h3>✂️ Веб-приложение для ателье</h3>
                <p>MVP-проект (React, Django REST, PostgreSQL). JWT аутентификация и админ-панель.</p>
                <div className="project-links">
                  <a href="https://github.com/alekseididik9-boop/atelye" target="_blank" rel="noopener noreferrer" className="action-btn">Смотреть на GitHub</a>
                  
                  {/* Кнопка теперь открывает модалку с нужным видео */}
                  <button onClick={() => setVideoUrl('https://rutube.ru/play/embed/5a103d5591340404e113cee0573c7236')} className="action-btn">
  Видеодемонстрация
</button>
                </div>
              </div>

            

              <button className="back-btn" onClick={() => { setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>← Вернуться</button>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="info-block">
              <h2>Навыки и технологии</h2>
              <p><strong>Frontend:</strong> JavaScript, React, HTML/CSS</p>
              <p><strong>Backend:</strong> Python, Django REST API, PostgreSQL</p>
              <p><strong>Инфраструктура:</strong> Git, Nginx, Linux VPS, развертывание на серверах</p>
              <button className="back-btn" onClick={() => { setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>← Вернуться</button>
            </div>
          )}

        </div>
      </div> 

      <div className="photo-section">
        <img src="/profile-nobg.png" alt="Алексей" className="profile-img" />
      </div>

      <div className="cards-section">
        <div className="card" onClick={() => { setActiveSection('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="card-number"></span>
          <h3>Обо мне</h3>
          <p></p>
        </div>
        <div className="card" onClick={() => { setActiveSection('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="card-number"></span>
          <h3>Портфолио</h3>
          <p></p>
        </div>
        <div className="card" onClick={() => { setActiveSection('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="card-number"></span>
          <h3>Навыки</h3>
          <p>Чем я могу Вам помочь</p>
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {videoUrl && (
        <div className="modal-overlay" onClick={() => setVideoUrl(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setVideoUrl(null)}>×</button>
            <iframe
              src={videoUrl}
              title="Видеодемонстрация"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;
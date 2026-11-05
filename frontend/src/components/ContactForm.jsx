import { useState } from 'react';
import './ContactForm.css'; // Обязательно подключаем файл со стилями

export default function ContactForm() {
    // Храним данные формы
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    // Храним статус отправки: null, 'loading', 'success', 'error'
    const [status, setStatus] = useState(null);

    // Функция для обновления state при вводе текста
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault(); // Останавливаем перезагрузку страницы
        setStatus('loading'); // Показываем индикатор загрузки

        try {
            // Отправляем запрос на ваш Django эндпоинт
            const response = await fetch('http://127.0.0.1:8000/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                // Очищаем форму после успешной отправки
                setFormData({ name: '', phone: '', message: '' });
            } else {
                setStatus('error');
                console.error('Ошибка на сервере:', await response.text());
            }
        } catch (error) {
            setStatus('error');
            console.error('Ошибка сети:', error);
        }
    };
    
    return (
        <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form-container">
                
                {status === 'success' && (
                    <div style={{ color: '#4caf50', marginBottom: '15px' }}>
                        Заявка успешно отправлена! Мы скоро свяжемся с вами.
                    </div>
                )}
                
                {status === 'error' && (
                    <div style={{ color: '#ff6b6b', marginBottom: '15px' }}>
                        Произошла ошибка. Попробуйте еще раз.
                    </div>
                )}

                <div className="form-group">
                    <label>Имя:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="form-input"
                        placeholder="Введите ваше имя"
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label>Телефон:</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="form-input"
                        placeholder="+7 (999) 000-00-00"
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label>Сообщение (необязательно):</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        className="form-input textarea-input"
                        placeholder="Напишите ваш вопрос..."
                        rows="3"
                    />
                </div>

                <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Отправка...' : 'Отправить'}
                </button>
            </form>
        </div>
    );
}
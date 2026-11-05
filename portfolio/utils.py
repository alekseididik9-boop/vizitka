import requests
from django.conf import settings


# Добавили request_id в аргументы
def send_telegram_notification(request_id, name, phone, message=""):
    text = (
        f"🚨 <b>Новая заявка #{request_id}</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}\n"
        f"📝 <b>Сообщение:</b> {message}"
    )

    url = f"https://api.telegram.org/bot{settings.TELEGRAM_BOT_TOKEN}/sendMessage"

    # Добавляем инлайн-кнопки
    payload = {
        "chat_id": settings.TELEGRAM_ADMIN_CHAT_ID,
        "text": text,
        "parse_mode": "HTML",
        "reply_markup": {
            "inline_keyboard": [
                [
                    # В callback_data зашиваем действие и ID заявки
                    {"text": "✅ В работу", "callback_data": f"work_{request_id}"},
                    {"text": "❌ Отклонить", "callback_data": f"reject_{request_id}"}
                ]
            ]
        }
    }

    try:
        response = requests.post(url, json=payload, timeout=10)
        response.raise_for_status()
        return True
    except requests.exceptions.RequestException as e:
        print(f"Ошибка отправки в Telegram: {e}")
        return False
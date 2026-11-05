import traceback
import requests
from django.conf import settings


class TelegramErrorNotificationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        return self.get_response(request)

    def process_exception(self, request, exception):
        # Если включен режим отладки (DEBUG=True), можно не спамить в ТГ,
        # но для теста давайте пока разрешим отправку всегда.

        # Получаем полный текст ошибки
        error_msg = traceback.format_exc()

        # Формируем красивое сообщение
        text = (
            f"🚨 <b>АВАРИЯ НА СЕРВЕРЕ (500)</b> 🚨\n\n"
            f"<b>URL:</b> {request.build_absolute_uri()}\n"
            f"<b>Метод:</b> {request.method}\n"
            f"<b>Ошибка:</b> {str(exception)}\n\n"
            f"<pre>{error_msg[-800:]}</pre>"  # Берем последние 800 символов лога
        )

        url = f"https://api.telegram.org/bot{settings.TELEGRAM_BOT_TOKEN}/sendMessage"
        payload = {
            "chat_id": settings.TELEGRAM_ADMIN_CHAT_ID,
            "text": text,
            "parse_mode": "HTML"
        }

        try:
            requests.post(url, json=payload, timeout=5)
        except:
            pass  # Если не получилось отправить ошибку, просто идем дальше

        return None
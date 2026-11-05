from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Project, ContactRequest  # Добавили импорт ContactRequest
from .serializers import ProjectSerializer
from .utils import send_telegram_notification

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactAPIView(APIView):
    def post(self, request):
        # Извлекаем данные
        name = request.data.get('name')
        phone = request.data.get('phone')
        message = request.data.get('message', 'Без сообщения')

        # Проверка
        if not name or not phone:
            return Response(
                {'error': 'Имя и телефон обязательны для заполнения'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # 1. СОХРАНЯЕМ В БАЗУ ДАННЫХ
        contact_request = ContactRequest.objects.create(
            name=name,
            phone=phone,
            message=message
        )

        # 2. ОТПРАВЛЯЕМ В ТЕЛЕГРАМ
        success = send_telegram_notification(contact_request.id, name, phone, message)

        # 3. ЕСЛИ СООБЩЕНИЕ УШЛО УСПЕШНО — ОБНОВЛЯЕМ СТАТУС
        if success:
            contact_request.is_sent_to_telegram = True
            contact_request.save()
            return Response({'message': 'Заявка успешно отправлена!'}, status=status.HTTP_200_OK)
        else:
            # Оставляем старый ответ с ошибкой, но заявка уже лежит в базе!
            return Response(
                {'error': 'Сбой при отправке заявки. Попробуйте позже.'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
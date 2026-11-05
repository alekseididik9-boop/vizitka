from django.contrib import admin
# Обязательно импортируем ОБЕ модели
from .models import Project, ContactRequest

# Ваша текущая регистрация проектов
admin.site.register(Project)


# Новая регистрация для заявок с удобными колонками
@admin.register(ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    # Какие колонки показывать в общем списке
    list_display = ('name', 'phone', 'is_sent_to_telegram', 'created_at')

    # Фильтры сбоку (например, чтобы посмотреть только те, что не ушли в ТГ)
    list_filter = ('is_sent_to_telegram', 'created_at')

    # Запрещаем изменять дату создания вручную
    readonly_fields = ('created_at',)
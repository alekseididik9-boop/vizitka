from django.db import models


class Project(models.Model):
    title = models.CharField('Название', max_length=150)
    description = models.TextField('Описание')
    tech_stack = models.CharField('Стек технологий', max_length=200)
    github_link = models.URLField('Ссылка на GitHub', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'


class ContactRequest(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    phone = models.CharField(max_length=20, verbose_name='Телефон')
    message = models.TextField(blank=True, verbose_name='Сообщение')

    # Автоматически фиксируем дату и время поступления заявки
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    # Флаг, чтобы понимать, ушло ли сообщение в телеграм
    is_sent_to_telegram = models.BooleanField(default=False, verbose_name='Отправлено в ТГ')

    def __str__(self):
        return f"{self.name} - {self.phone} ({self.created_at.strftime('%d.%m.%Y %H:%M')})"

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'
        ordering = ['-created_at']  # Новые заявки будут сверху



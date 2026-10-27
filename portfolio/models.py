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
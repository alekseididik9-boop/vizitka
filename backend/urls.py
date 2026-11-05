from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from portfolio.views import ProjectViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # Подключаем пути приложения portfolio.
    # API будет доступно по адресу http://127.0.0.1:8000/api/contact/
    path('api/', include('portfolio.urls')),
]
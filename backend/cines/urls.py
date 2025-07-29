from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CineViewSet

router = DefaultRouter()
router.register(r'cines', CineViewSet, basename='cine')

urlpatterns = [
    path('', include(router.urls)),
]
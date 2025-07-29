from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CineViewSet, MovieViewSet

router = DefaultRouter()
router.register(r'cines', CineViewSet, basename='cine')
router.register(r'movies', MovieViewSet, basename='movie')

urlpatterns = [
    path('', include(router.urls)),
]
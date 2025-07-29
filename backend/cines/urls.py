from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CineViewSet, MovieViewSet, BillboardViewSet

router = DefaultRouter()
router.register(r'cines', CineViewSet, basename='cine')
router.register(r'movies', MovieViewSet, basename='movie')
router.register(r'billboards', BillboardViewSet, basename='billboard')

urlpatterns = [
    path('', include(router.urls)),
]
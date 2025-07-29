from rest_framework import viewsets
from ..models import Cine
from ..serializers import CineSerializer

class CineViewSet(viewsets.ModelViewSet):
    queryset = Cine.objects.all()
    serializer_class = CineSerializer

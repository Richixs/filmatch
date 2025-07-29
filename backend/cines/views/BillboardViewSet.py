from rest_framework import viewsets
from ..models import Billboard
from ..serializers import BillboardSerializer

class BillboardViewSet(viewsets.ModelViewSet):
    queryset = Billboard.objects.all()
    serializer_class = BillboardSerializer
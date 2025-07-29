from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from ..models import Billboard, Movie
from ..serializers import BillboardSerializer, MovieSerializer

class BillboardViewSet(viewsets.ModelViewSet):
    queryset = Billboard.objects.all()
    serializer_class = BillboardSerializer

    @action(detail=False, methods=['get'], url_path='movies-with-cine')
    def movies_with_cine(self, request):
        movie_ids = Movie.objects.filter(billboard__isnull=False).distinct().values_list('id', flat=True)
        return Response(list(movie_ids))
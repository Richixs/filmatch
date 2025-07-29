from rest_framework import serializers
from ..models import Billboard

class BillboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Billboard
        fields = ['cine', 'movie']
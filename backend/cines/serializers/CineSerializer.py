from rest_framework import serializers
from ..models import Cine

class CineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cine
        fields = ['id', 'name']
        read_only_fields = ['id']
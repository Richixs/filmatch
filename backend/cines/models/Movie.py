from django.db import models

class Movie(models.Model):
    id = models.IntegerField(primary_key=True)
    
    class Meta:
        db_table = 'movie'
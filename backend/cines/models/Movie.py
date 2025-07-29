from django.db import models

class Movie(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    
    class Meta:
        db_table = 'movie'
        
    def __str__(self):
        return self.name
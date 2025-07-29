from django.db import models

class Billboard(models.Model):
    cine = models.ForeignKey('Cine', on_delete=models.CASCADE)
    movie = models.ForeignKey('Movie', on_delete=models.CASCADE)

    class Meta:
        db_table = 'billboard'
        unique_together = (('cine', 'movie'))
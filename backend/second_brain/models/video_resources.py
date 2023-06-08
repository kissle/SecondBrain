from django.db import models
from .resources import Resource

class VideoResource(Resource):
    title = models.CharField(max_length=128)
    url = models.URLField()
    
    def __str__(self):
        return f'({super().__str__()}) {self.title}'
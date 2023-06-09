from django.db import models
from .resources import Resource

class VideoResource(Resource):
    title = models.CharField(max_length=128, blank=True, null=True)
    
    def __str__(self):
        return f'({super().__str__()}) {self.title}'
    
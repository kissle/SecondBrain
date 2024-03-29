from django.db import models
from .resources import Resource

class TextResource(Resource):
    title = models.CharField(max_length=128, blank=True)
    
    def __str__(self):
        return f'{self.title} ({super().__str__()})'
    
from django.db import models
from .resources import Resource

class PodcastEpisode(Resource):
    title = models.CharField(max_length=128, blank=True, null=True)
    
    def __str__(self):
        return f'({super().__str__()}) {self.title}'
    
    class Meta:
        verbose_name = "Podcast Episode"
        verbose_name_plural = "Podcast Episodes"
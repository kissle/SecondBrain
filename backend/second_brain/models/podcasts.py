from django.db import models
from .resources import Resource

class Podcast(Resource):
    title = models.CharField(max_length=128, blank=True, null=True)
    episodes = models.ManyToManyField('PodcastEpisode', blank=True)
    
    def __str__(self):
        return f'({super().__str__()}) {self.title}'
    
    class Meta:
        verbose_name = "Podcast"
        verbose_name_plural = "Podcasts"
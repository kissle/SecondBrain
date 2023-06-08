from rest_framework import viewsets
from ..models import PodcastEpisode
from ..serializers import PodcastEpisodeSerializer

class PodcastEpisodeViewSet(viewsets.ModelViewSet):
    queryset = PodcastEpisode.objects.all()
    serializer_class = PodcastEpisodeSerializer
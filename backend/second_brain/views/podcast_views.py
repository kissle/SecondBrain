from rest_framework import viewsets
from ..models import Podcast
from ..serializers import PodcastSerializer

class PodcastViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer
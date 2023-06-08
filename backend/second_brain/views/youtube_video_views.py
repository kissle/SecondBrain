from rest_framework import viewsets
from ..models import YoutubeVideo
from ..serializers import YoutubeVideoSerializer

class YoutubeVideoViewSet(viewsets.ModelViewSet):
    queryset = YoutubeVideo.objects.all()
    serializer_class = YoutubeVideoSerializer
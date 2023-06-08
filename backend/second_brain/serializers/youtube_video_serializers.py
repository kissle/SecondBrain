from rest_framework import serializers
from ..models import YoutubeVideo
from ..serializers import VideoResourceSerializer

class YoutubeVideoSerializer(VideoResourceSerializer):
    class Meta:
        model = YoutubeVideo
        fields = ['url', 'title', 'video_id', 'thumbnail_url', ]
        read_only_fields = ['url', 'title',  'video_id', 'thumbnail_url']

    url = serializers.HyperlinkedIdentityField(
        view_name='youtubevideo-detail',
        lookup_field='pk'
    )
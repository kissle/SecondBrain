from rest_framework import serializers
from ..models import PodcastEpisode
from .audio_resource_serializers import AudioResourceSerializer

class PodcastEpisodeSerializer(AudioResourceSerializer):
    class Meta:
        model = PodcastEpisode
        fields = '__all__'
        depth = 1

    url = serializers.HyperlinkedIdentityField(
        view_name='podcastepisode-detail',
        lookup_field='pk'
    )
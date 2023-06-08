from rest_framework import serializers
from ..models import Podcast 
from .resource_serializers import ResourceSerializer

class PodcastSerializer(ResourceSerializer):
    episodes = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Podcast
        fields = '__all__'
        depth = 1

    url = serializers.HyperlinkedIdentityField(
        view_name='podcast-detail',
        lookup_field='pk'
    )
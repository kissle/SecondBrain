from rest_framework import serializers
from ..models.video_resources import VideoResource
from .resource_serializers import ResourceSerializer

class VideoResourceSerializer(ResourceSerializer):
    class Meta:
        model = VideoResource
        fields = ['id', 'url', 'title']
        
    url = serializers.HyperlinkedIdentityField(
        view_name='videoresource-detail',
        lookup_field='pk'
    )
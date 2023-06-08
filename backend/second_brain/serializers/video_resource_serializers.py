from rest_framework import serializers
from ..models.video_resources import VideoResource

class VideoResourceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = VideoResource
        fields = ['id', 'url', 'title']
        
    url = serializers.HyperlinkedIdentityField(
        view_name='videoresource-detail',
        lookup_field='pk'
    )
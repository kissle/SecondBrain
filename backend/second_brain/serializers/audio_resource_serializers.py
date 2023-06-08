from ..models import AudioResource
from .resource_serializers import ResourceSerializer
from rest_framework import serializers

class AudioResourceSerializer(ResourceSerializer):
    class Meta:
        model = AudioResource
        fields = '__all__'
        depth = 1

    url = serializers.HyperlinkedIdentityField(
        view_name='audio-resource-detail',
        lookup_field='pk'
    )
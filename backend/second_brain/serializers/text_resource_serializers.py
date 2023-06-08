from rest_framework import serializers
from ..models.text_resources import TextResource
from ..serializers.resource_serializers import ResourceSerializer

class TextResourceSerializer(ResourceSerializer):
    class Meta:
        model = TextResource
        fields = ['id', 'related', 'url']
    
    url = serializers.HyperlinkedIdentityField(
        view_name='textresource-detail',
        lookup_field='pk'
    )
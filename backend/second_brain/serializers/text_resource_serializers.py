from rest_framework import serializers
from ..models.text_resources import TextResource

class TextResourceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TextResource
        fields = ['id', 'related', 'url']
    
    url = serializers.HyperlinkedIdentityField(
        view_name='textresource-detail',
        lookup_field='pk'
    )
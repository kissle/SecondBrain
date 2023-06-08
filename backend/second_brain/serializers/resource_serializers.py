from django.urls import reverse
from rest_framework import serializers
from ..models import Resource
        
class ResourceSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Resource
        fields = ['id', 'related', 'url']
    
    url = serializers.HyperlinkedIdentityField(
        view_name='resource-detail',
        lookup_field='pk'
    )
    
    def get_related(self, obj):
        # Check if the object has a related
        if obj.related is not None:            
            # Get the request from the serializer context
            request = self.context['request']
            
            # Construct the URL using reverse function of Django REST Framework
            urls = [request.build_absolute_uri(reverse(f'{related.__class__.__name__.lower()}-detail', args=[related.pk])) for related in obj.related.all()]
            
            return urls


    

from rest_framework import serializers
from ..models.authors import Author

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ['id', 'first_name', 'last_name', 'url']
    
    url = serializers.HyperlinkedIdentityField(
        view_name='author-detail',
        lookup_field='pk'
    )
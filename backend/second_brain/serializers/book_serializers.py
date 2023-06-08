from rest_framework import serializers
from ..models.books import Book
from .text_resource_serializers import TextResourceSerializer

class BookSerializer(TextResourceSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'subtitle', 'isbn', 'url', 'related', 'authors']
    
    url = serializers.HyperlinkedIdentityField(
        view_name='book-detail',
        lookup_field='pk'
    )
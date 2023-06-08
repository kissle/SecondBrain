from rest_framework import serializers
from ..models.books import Book

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'subtitle', 'isbn', 'url']
    
    url = serializers.HyperlinkedIdentityField(
        view_name='book-detail',
        lookup_field='pk'
    )
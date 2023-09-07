from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from ..models import Book
from ..serializers import BookSerializer
from ..views.relation_views import RelationViewInterface

class BookViewSet(viewsets.ModelViewSet, RelationViewInterface):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title', 'subtitle','authors__first_name']

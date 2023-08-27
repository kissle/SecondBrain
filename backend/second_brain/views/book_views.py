from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from rest_framework.decorators import action
from rest_framework.response import Response
from ..models import Book
from ..serializers import BookSerializer, NoteSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title', 'subtitle','authors__first_name']
    
    @action(detail=True, methods=['get'], url_path='relations', url_name='relations')
    def get_relations(self, request, pk=None):
        note = self.get_object()
        # Your custom logic to mark the book as read
        relations_container = note.relations_container.first()
        response = []
        
        if relations_container is None:
            return Response(response)
        
        
        for relation in relations_container.relations.all():
            if (relation.content_type.model == 'note'):
                response.append(NoteSerializer(relation.content_object).data)
            if (relation.content_type.model == 'book'):
                response.append(BookSerializer(relation.content_object).data)
            
        return Response(response)
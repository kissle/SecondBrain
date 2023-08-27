from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from ..models import Note
from ..serializers import NoteSerializer, BookSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    
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
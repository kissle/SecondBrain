from rest_framework import viewsets
from ..models import Note
from ..serializers import NoteSerializer
from ..views.relation_views import RelationViewInterface
from rest_framework.filters import SearchFilter

class NoteViewSet(viewsets.ModelViewSet, RelationViewInterface):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title', 'content']

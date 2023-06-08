from rest_framework import viewsets

from ..models import Author, Book, Note, Resource, TextResource, VideoResource
from ..serializers import AuthorSerializer, BookSerializer, NoteSerializer, ResourceSerializer, TextResourceSerializer, VideoResourceSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    
class TextResourceViewSet(viewsets.ModelViewSet):
    queryset = TextResource.objects.all()
    serializer_class = NoteSerializer
    
class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    
class VideoResourceViewSet(viewsets.ModelViewSet):
    queryset = VideoResource.objects.all()
    serializer_class = VideoResourceSerializer
    
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
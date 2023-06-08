from django.contrib.contenttypes.models import ContentType
from rest_framework import viewsets
from ..serializers import ContentTypeSerializer

class ContentTypeViewSet(viewsets.ModelViewSet):
    queryset = ContentType.objects.all()
    serializer_class = ContentTypeSerializer
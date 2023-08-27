from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from ..models import Relation, RelationsContainer
from ..serializers import RelationSerialize, RelationsContainerSerialize

class RelationViewSet(viewsets.ModelViewSet):
    queryset = Relation.objects.all()
    serializer_class = RelationSerialize
    
class RelationsContainerViewSet(viewsets.ModelViewSet):
    queryset = RelationsContainer.objects.all()
    serializer_class = RelationsContainerSerialize
    filter_backends = [SearchFilter]
    filter_backends = [DjangoFilterBackend]
    search_fields =  ['content_type__model', ]
    filterset_fields = ['object_id']

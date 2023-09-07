from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from ..models import Relation
from ..serializers import RelationSerialize, NoteSerializer, BookSerializer

class RelationViewSet(viewsets.ModelViewSet):
    queryset = Relation.objects.all()
    serializer_class = RelationSerialize
    filter_backends = [SearchFilter]
    filter_backends = [DjangoFilterBackend]
    search_fields =  ['from_content_type__model', 'to_content_type__model' ]
    filterset_fields = ['from_object_id', 'to_object_id']

class RelationViewInterface():
    @action(detail=True, methods=['get'], url_path='relations', url_name='relations')
    def get_relations(self, request, pk=None):
        obj = self.get_object()
        obj_class = obj.__class__.__name__.lower()
        
        relations = {}
        relations['to'] = []
        relations['from'] = []
            
        for relation in Relation.objects.filter(from_content_type__model=obj_class, from_object_id=obj.id):
            print(relation)
            if (relation.to_content_type.model == 'note'):
                relations['to'].append(NoteSerializer(relation.to_content_object).data)
            elif (relation.to_content_type.model == 'book'):
                relations['to'].append(BookSerializer(relation.to_content_object).data)
            
        for relation in Relation.objects.filter(to_content_type__model=obj_class, to_object_id=obj.id):
            print('###############')
            print(relation)
            print(relation.from_content_type.model)
            if (relation.from_content_type.model == 'note'):
                relations['from'].append(NoteSerializer(relation.from_content_object).data)
            elif (relation.from_content_type.model == 'book'):
                relations['from'].append(BookSerializer(relation.from_content_object).data)
            
        return Response(relations)
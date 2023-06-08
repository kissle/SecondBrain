from rest_framework import serializers
from django.urls import reverse
from ..models import Note
from .resource_serializers import ResourceSerializer

class NoteSerializer(ResourceSerializer):

    class Meta:
        model = Note
        # fields = ['id', 'title', 'content', 'url', 'related', 'polymorphic_ctype']
        fields = '__all__'
        depth = 1
        
    url = serializers.HyperlinkedIdentityField(
        view_name='note-detail',
        lookup_field='pk'
    )
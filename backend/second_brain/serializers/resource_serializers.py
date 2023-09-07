from django.urls import reverse
from rest_framework import serializers

from ..models import Resource, Note, Book, YoutubeVideo, Podcast, PodcastEpisode, Relation
        
class ResourcesPolymorphicSerializer(serializers.Serializer):
    
    def to_representation(self, instance):
        depth = self.context.get('depth', 0)
        
        if depth > 1:
            return None
        
        new_context = self.context.copy()
        new_context['depth'] = depth + 1
        
        if isinstance(instance, Note):
            return NoteSerializer(instance, context=new_context).data
        elif isinstance(instance, Book):
            return BookSerializer(instance, context=new_context).data
        elif isinstance(instance, YoutubeVideo):
            return YoutubeVideoSerializer(instance, context=new_context).data
        elif isinstance(instance, Podcast):
            return PodcastSerializer(instance, context=new_context).data
        elif isinstance(instance, PodcastEpisode):
            return PodcastEpisodeSerializer(instance, context=new_context).data
        raise serializers.ValidationError("Unknown object type")

class ResourceSerializer(serializers.ModelSerializer):
    related = serializers.SerializerMethodField()
    
    class Meta:
        model = Resource
        fields = '__all__'
        depth = 1
        
    def get_related(self, obj):
        depth = self.context.get('depth', 0)
        return ResourcesPolymorphicSerializer(obj.related.all(), many=True, context={'depth': depth+1}).data
    
class NoteSerializer(ResourceSerializer):

    class Meta:
        model = Note
        fields = '__all__'
        depth = 1
        
class BookSerializer(ResourceSerializer):
    class Meta:
        model = Book
        fields = '__all__'
        depth = 1
        
class YoutubeVideoSerializer(ResourceSerializer):
    class Meta:
        model = YoutubeVideo
        fields = '__all__'
        depth = 1
        
class PodcastSerializer(ResourceSerializer):
    class Meta:
        model = Podcast
        fields = '__all__'
        depth = 1
        
class PodcastEpisodeSerializer(ResourceSerializer):
    class Meta:
        model = PodcastEpisode
        fields = '__all__'
        depth = 1
        
class RelationSerialize(serializers.ModelSerializer):
    class Meta:
        model = Relation
        fields = '__all__'
        depth = 1

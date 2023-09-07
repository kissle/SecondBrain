from django.db import models
from polymorphic.models import PolymorphicModel
from django.contrib.contenttypes.fields import GenericRelation


class Resource(PolymorphicModel):
    related = models.ManyToManyField('self', blank=True)
    
    def __str__(self):
        return self.__class__.__name__ 
        
class ResourceInterface(models.Model):
    relations_container = GenericRelation('Relation')
    
    class Meta:
        abstract = True
        
        
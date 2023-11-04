from django.db import models
from polymorphic.models import PolymorphicModel

class ResourceInterface(models.Model):
    
    class Meta:
        abstract = True

class Resource(PolymorphicModel, ResourceInterface):
    
    def __str__(self):
        return self.__class__.__name__ 
        
  
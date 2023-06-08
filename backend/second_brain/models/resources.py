from django.db import models
from polymorphic.models import PolymorphicModel

class Resource(PolymorphicModel):
    related = models.ManyToManyField('self', blank=True)
    
    def __str__(self):
        return self.__class__.__name__ 
    
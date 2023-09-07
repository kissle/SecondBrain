from django.db import models
from .text_resources import TextResource
from .authors import Author
from .resources import ResourceInterface

class Book(TextResource):
    subtitle = models.CharField(max_length=128, blank=True)
    authors = models.ManyToManyField(Author, blank=True, null=True)
    isbn = models.CharField(max_length=13, blank=True)
    
    
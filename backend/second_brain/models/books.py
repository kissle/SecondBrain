from django.db import models
from .text_resources import TextResource
from .authors import Author

class Book(TextResource):
    subtitle = models.CharField(max_length=128)
    authors = models.ManyToManyField(Author)
    isbn = models.CharField(max_length=13)
    
    def __str__(self):
        return self.title
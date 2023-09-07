from django.db import models

from .text_resources import TextResource

class Note(TextResource):
    content = models.TextField()


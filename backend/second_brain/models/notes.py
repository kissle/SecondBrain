from django.db import models

from ..models.resources import ResourceInterface
from .text_resources import TextResource

class Note(TextResource, ResourceInterface):
    content = models.TextField()


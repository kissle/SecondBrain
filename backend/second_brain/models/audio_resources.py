from django.db import models
from .resources import Resource

class AudioResource(Resource):
    title = models.CharField(max_length=128, blank=True, null=True)

    class Meta:
        verbose_name = "Audio Resource"
        verbose_name_plural = "Audio Resources"

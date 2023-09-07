from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
    
class Relation(models.Model):
    from_content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, related_name='from_relation', blank=False)
    from_object_id = models.PositiveIntegerField()
    from_content_object = GenericForeignKey('from_content_type', 'from_object_id')

    to_content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, related_name='to_relation', blank=False)
    to_object_id = models.PositiveIntegerField()
    to_content_object = GenericForeignKey('to_content_type', 'to_object_id')
    
    def __str__(self):
        return f'"{self.from_content_object}" is referencing "{self.to_content_object}"'
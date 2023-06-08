from django.db import models
from .video_resources import VideoResource
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

class YoutubeVideo(VideoResource):
    video_id = models.CharField(max_length=128, blank=True)
    url = models.URLField(blank=True)
    thumbnail_url = models.URLField(blank=True)
    
    # update video_id and thumbnail_url on save
    def save(self, *args, **kwargs):
        self.video_id = self.url.split('?v=')[1]
        self.thumbnail_url = f'https://img.youtube.com/vi/{self.video_id}/maxresdefault.jpg'
        super().save(*args, **kwargs)

from django.contrib import admin
from .models import Note
from .models import Author
from .models import Book, YoutubeVideo, Podcast, PodcastEpisode, RelationsContainer, Relation


admin.site.register(Note)
admin.site.register(Author)
admin.site.register(Book)
admin.site.register(YoutubeVideo)
admin.site.register(Podcast)
admin.site.register(PodcastEpisode)
admin.site.register(RelationsContainer)
admin.site.register(Relation)
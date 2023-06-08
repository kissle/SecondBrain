from django.contrib import admin
from .models import Resource
from .models import TextResource
from .models import Note
from .models import VideoResource
from .models import Author
from .models import Book


# Register your models here.
admin.site.register(Resource)
admin.site.register(TextResource)
admin.site.register(Note)
admin.site.register(VideoResource)
admin.site.register(Author)
admin.site.register(Book)

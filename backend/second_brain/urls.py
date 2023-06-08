# urls for second_brain app
from django.urls import path, include
from rest_framework import routers

from .views.resources import NoteViewSet
from .views.resources import ResourceViewSet, VideoResourceViewSet, TextResourceViewSet, BookViewSet

router = routers.DefaultRouter()
router.register(r'notes', NoteViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'videos', VideoResourceViewSet)
router.register(r'texts', TextResourceViewSet)
router.register(r'books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
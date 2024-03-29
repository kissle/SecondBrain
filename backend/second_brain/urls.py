# urls for second_brain app
from django.urls import path, include
from rest_framework import routers
from .views import NoteViewSet, BookViewSet, YoutubeVideoViewSet, AuthorViewSet, PodcastViewSet, PodcastEpisodeViewSet, ContentTypeViewSet, RelationViewSet, CustomSpectacularSwaggerView
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

router = routers.DefaultRouter()
router.register(r'notes', NoteViewSet)
router.register(r'books', BookViewSet)
router.register(r'authors', AuthorViewSet)
router.register(r'podcasts', PodcastViewSet)
router.register(r'podcast_episodes', PodcastEpisodeViewSet)
router.register(r'youtube_videos', YoutubeVideoViewSet)
router.register(r'contenttypes', ContentTypeViewSet)
router.register(r'relations', RelationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    # Optional UI:
    path('schema/swagger-ui/', CustomSpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]
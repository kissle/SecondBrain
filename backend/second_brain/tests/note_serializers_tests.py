from django.urls import reverse
from django.test import RequestFactory
from rest_framework.test import APITestCase
from ..models import Note
from ..serializers import NoteSerializer
 
class NoteSerializerTestCase(APITestCase):
    def setUp(self):
        self.note = Note.objects.create(title='Test Note', content='Test Content')

        self.url = reverse('note-detail', kwargs={'pk': self.note.pk})
        self.request = RequestFactory().get(self.url)
        self.serializer = NoteSerializer(instance=self.note, context={'request': self.request})
    
    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertEqual(set(data.keys()), set(['title', 'content', 'related', 'url', 'polymorphic_ctype']))
    
    def test_prelated_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['related'], [])
    
    def test_url_field_content(self):
        data = self.serializer.data
        expected_url = self.request.build_absolute_uri(reverse('note-detail', kwargs={'pk': self.note.pk}))
        self.assertEqual(data['url'], expected_url)
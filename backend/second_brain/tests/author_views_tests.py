from django.test import RequestFactory
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from ..models import Author
from ..serializers import AuthorSerializer

class AuthorViewSetTestCase(APITestCase):
    def setUp(self):
        self.author1 = Author.objects.create(first_name='Author 1', last_name='Last Name 1')
        self.author2 = Author.objects.create(first_name='Author 2', last_name='Last Name 2')

    def test_list_authors(self):
        url = reverse('author-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_retrieve_author(self):
        url = reverse('author-detail', args=[self.author1.pk])
        response = self.client.get(url)
        request = RequestFactory().get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, AuthorSerializer(self.author1, context={'request': request}).data)

    def test_create_author(self):
        url = reverse('author-list')
        data = {'first_name': 'Author 3', 'last_name': 'Last Name 3'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Author.objects.count(), 3)
        self.assertEqual(Author.objects.get(pk=response.data['id']).first_name, 'Author 3')

    def test_update_author(self):
        url = reverse('author-detail', args=[self.author1.pk])
        data = {'first_name': 'Updated Author 1', 'last_name': 'Updated Last Name 1'}
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Author.objects.get(pk=self.author1.pk).first_name, 'Updated Author 1')

    def test_delete_author(self):
        url = reverse('author-detail', args=[self.author1.pk])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Author.objects.count(), 1)
from django.test import RequestFactory
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from ..models import Author, Book
from ..serializers import BookSerializer

class BookViewSetTestCase(APITestCase):
    def setUp(self):
        self.author1 = Author.objects.create(first_name='Author 1', last_name='Last Name 1')
        self.author2 = Author.objects.create(first_name='Author 2', last_name='Last Name 2')
        self.book1 = Book.objects.create(title='Book 1')
        self.book1.authors.add(self.author1)
        self.book2 = Book.objects.create(title='Book 2')
        self.book2.authors.add(self.author2)

    def test_list_books(self):
        url = reverse('book-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_retrieve_book(self):
        url = reverse('book-detail', args=[self.book1.pk])
        response = self.client.get(url)
        request = RequestFactory().get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, BookSerializer(self.book1, context={'request':request}).data)

    def test_create_book(self):
        request = RequestFactory().get(reverse('book-list'))
        url = request.build_absolute_uri(reverse('book-list'))
        data = {'title': 'Book 3', 'subtitle': 'Fancy Book', 'isbn': '01234', 'authors': []}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Book.objects.count(), 3)
        self.assertEqual(Book.objects.get(pk=response.data['id']).title, 'Book 3')

    def test_update_book(self):
        url = reverse('book-detail', args=[self.book1.pk])
        data = {'title': 'Updated Book 1', 'subtitle': 'Hard to read book'}
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Book.objects.get(pk=self.book1.pk).title, 'Updated Book 1')
        self.assertEqual(Book.objects.get(pk=self.book1.pk).subtitle, 'Hard to read book')

    def test_delete_book(self):
        url = reverse('book-detail', args=[self.book1.pk])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Book.objects.count(), 1)
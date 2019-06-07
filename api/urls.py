from django.urls import path
from .views import TweetListView

urlpatterns = [
    path('', TweetListView.as_view(), name='list'),
]
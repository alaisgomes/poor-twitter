from rest_framework import generics
from .models import Tweet
from .serializers import TweetSerializer

class TweetListView(generics.ListCreateAPIView):
    serializer_class = TweetSerializer
    queryset = Tweet.objects.all()



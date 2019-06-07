from rest_framework import serializers
from .models import Tweet


class TweetSerializer(serializers.ModelSerializer):
    creation_date = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    def create(self, validated_data):
        return Tweet.objects.create(**validated_data)

    class Meta:
        model = Tweet
        fields = '__all__'

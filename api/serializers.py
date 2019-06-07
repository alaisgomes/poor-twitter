from rest_framework import serializers
from .models import Tweet


class TweetSerializer(serializers.ModelSerializer):
    creation_date = serializers.DateTimeField(
        format="%Y-%m-%d %H:%M:%S", read_only=True)
    
    def create(self, validated_data):
        return Tweet.objects.create(**validated_data)

    class Meta:
        model = Tweet
        read_only_fields = ('creation_date',)
        fields = ('creation_date', 'name', 'text')
        

from django.contrib import admin
from .models import Tweet

# Register your models here.
class TweetAdmin(admin.ModelAdmin):
    list_display = ("name", "creation_date",)
    readonly_fields=["creation_date"]

admin.site.register(Tweet, TweetAdmin)
from django.db import models

class Tweet(models.Model):
    name =  models.CharField(max_length=50, null=False, blank=False)
    text = models.CharField(max_length=50, null=False, blank=False)
    creation_date = models.DateTimeField(auto_now_add=True,editable=False)

    class Meta:
        ordering = ["-creation_date", "name"]
    
    def __str__(self):
        """Name of model that will be shown on admin panel """
        return self.name
from django.db import models

class Tag(models.Model):
    title = models.CharField(max_length=200, blank=False, default='')
    description = models.TextField(blank=False, default='')
    Asked = models.IntegerField(blank=False, default=0)
    createdAt = models.DateTimeField(auto_now_add=True, blank=True)
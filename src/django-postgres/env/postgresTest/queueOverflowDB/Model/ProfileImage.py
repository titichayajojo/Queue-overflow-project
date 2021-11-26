from django.db import models

class ProfileImage(models.Model):
    username = models.CharField(max_length=200, blank=False, default='')
    url = models.TextField(max_length=50, blank=False, default='')
    createdAt = models.DateTimeField(auto_now_add=True, blank=True)
from django.db import models
from django.contrib.postgres.fields import ArrayField

class Question(models.Model):
    title = models.CharField(max_length=200, blank=False, default='')
    body = models.TextField(blank=False, default='')
    votes = models.IntegerField(default=0)
    answers = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    tags = ArrayField(models.CharField(max_length=50))
    writer = models.TextField(max_length=50, blank=False, default='')
    createdAt = models.DateTimeField(auto_now_add=True, blank=True)

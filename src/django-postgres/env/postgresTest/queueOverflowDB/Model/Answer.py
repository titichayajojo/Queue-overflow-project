from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.postgres.fields import JSONField

class Answer(models.Model):
    questionId = models.IntegerField(blank=False)
    body = JSONField()
    votes = models.IntegerField(default=0)
    writer = models.TextField(max_length=50, blank=False, default='')
    createdAt = models.DateTimeField(auto_now_add=True, blank=True)

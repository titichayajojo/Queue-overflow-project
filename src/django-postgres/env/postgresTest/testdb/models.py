from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=80)
    age = models.IntegerField()

def __str__(self):
        return self.name

class Question(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    body = models.CharField(max_length=200,blank=False, default='')
    votes = models.IntegerField(default=0)
    answer = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    createAt = models.DateTimeField(auto_now_add=True, blank=True)

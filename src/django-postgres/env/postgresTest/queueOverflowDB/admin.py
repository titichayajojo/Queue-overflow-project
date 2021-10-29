from django.contrib import admin
from .Model.Question import Question, Teacher

# Register your models here.
admin.site.register(Teacher)
admin.site.register(Question)

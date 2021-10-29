from django.contrib import admin
from .Model.Question import Question
from .Model.Tag import Tag

# Register your models here.
admin.site.register(Question)
admin.site.register(Tag)

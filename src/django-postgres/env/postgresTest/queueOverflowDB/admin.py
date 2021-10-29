from django.contrib import admin
from .Model.Question import Question
from .Model.Tag import Tag
from .Model.Answer import Answer

# Register your models here.
admin.site.register(Question)
admin.site.register(Tag)
admin.site.register(Answer)

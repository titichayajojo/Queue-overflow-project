# queueOverflowDB/serializers.py
from django.db.models import fields
from rest_framework import serializers
from .Model.Question import Question
from .Model.Tag import Tag
from .Model.Answer import Answer

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'title', 'body', 'votes', 'answers', 'views', 'tags', 'writer','createdAt')


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('title', 'description', 'Asked', 'createdAt')

class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Answer
        fields = ('questionId','body', 'votes', 'writer', 'createdAt')
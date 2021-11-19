# queueOverflowDB/serializers.py
from django.db.models import fields
from rest_framework import serializers
from .Model.Question import Question
from .Model.Tag import Tag
from .Model.Answer import Answer
from .Model.ProfileImage import ProfileImage

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'title', 'body', 'votes', 'answers', 'views', 'tags', 'writer','createdAt')


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','title', 'description', 'Asked', 'createdAt')

class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Answer
        fields = ('id','questionId','body', 'votes', 'writer', 'createdAt')

class ProfileImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProfileImage
        fields = ('id','username','url', 'createdAt')
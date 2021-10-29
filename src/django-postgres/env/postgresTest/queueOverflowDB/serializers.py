# queueOverflowDB/serializers.py
from rest_framework import serializers
from .Model.Question import Teacher, Question
from .Model.Tag import Tag

class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Teacher
        fields = ('name', 'age')

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'title', 'body', 'votes', 'answers', 'views', 'tags', 'writer','createdAt')


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('title', 'description', 'createdAt')
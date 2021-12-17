# queueOverflowDB/serializers.py
from rest_framework import serializers
<<<<<<< HEAD
from .models import Teacher, Question
=======
from .Model.Question import Question
from .Model.Tag import Tag
from .Model.Answer import Answer
from .Model.ProfileImage import ProfileImage
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051

class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Teacher
        fields = ('name', 'age')

<<<<<<< HEAD
class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'title', 'body', 'votes', 'answers', 'views', 'tags', 'writer','createdAt')
=======

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

>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051

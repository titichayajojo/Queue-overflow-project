from django.db import reset_queries
from django.http import response
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TeacherSerializer, QuestionSerializer
from .models import Teacher, Question
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status

@api_view(['GET', 'POST', 'DELETE'])
def getAllTeachers(request):
    if request.method == 'GET':
        teachers = Teacher.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            teachers = teachers.filter(title__icontains=title)
        
        serializer_class = TeacherSerializer(teachers, many=True)
        return JsonResponse(serializer_class.data, safe=False)
        # 'safe=False' for objects serialization

@api_view(['GET', 'POST', 'DELETE'])
def questions_list(request):
    if request.method == 'GET':
        questions = Question.objects.all()

        
        serializer_class = QuestionSerializer(questions, many=True)
        
        return JsonResponse(serializer_class.data, safe=False)
    
    elif request.method == 'POST':
        question_data = JSONParser().parse(request)
        question_serializer = QuestionSerializer(data=question_data)
        if question_serializer.is_valid():
            question_serializer.save()
            return JsonResponse(question_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(question_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

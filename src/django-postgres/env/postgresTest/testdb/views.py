from django.shortcuts import render

from rest_framework import viewsets

from .serializers import TeacherSerializer
from .models import Teacher
from rest_framework.decorators import api_view
from django.http.response import JsonResponse

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
    

import json
from django.db import reset_queries
from django.http import response
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import QuestionSerializer, TagSerializer
from .Model.Question import Question
from .Model.Tag import Tag
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from .functions.index import calculateNDaysAgo

@api_view(['GET', 'POST', 'DELETE'])
def questionsList(request):
    # get all questions
    if request.method == 'GET':
        questions = list(Question.objects.all().order_by('createdAt'))
        
        serializer_class = QuestionSerializer(questions, many=True)
        dict = serializer_class.data
        res = []
        for element in dict:
            element = json.loads(json.dumps(element))
            element["nDaysAgo"] = calculateNDaysAgo(element.get('createdAt'))
            res.append(element)
            
        return JsonResponse(res, safe=False)

    # post a question
    elif request.method == 'POST':
        questionData = JSONParser().parse(request)
        questionSerializer = QuestionSerializer(data=questionData)
        if questionSerializer.is_valid():
            questionSerializer.save()
            return JsonResponse(questionSerializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(questionSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST', 'DELETE'])
def questionDetail(request, id):
    # get question by id
    if request.method == 'GET':
        question = Question.objects.get(id=id)
        questionSerializer = QuestionSerializer(question) 
        dict = questionSerializer.data
        res = []
        element = json.loads(json.dumps(dict))
        element["askedDate"] = calculateNDaysAgo(element.get('createdAt'))
        res.append(element)
        return JsonResponse(res, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def tagList(request):
    # get all tags
    if request.method == 'GET':
        tags = list(Tag.objects.all().order_by('createdAt'))
        serializer_class = TagSerializer(tags, many=True)
        return JsonResponse(serializer_class.data, safe=False)


    # post a tag
    elif request.method == 'POST':
        tagData = JSONParser().parse(request)
        tagSerializer = TagSerializer(data=tagData)
        if tagSerializer.is_valid():
            tagSerializer.save()
            return JsonResponse(tagSerializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(tagSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

            
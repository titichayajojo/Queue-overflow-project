from datetime import date
import json
from django.db import reset_queries
from django.http import response
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import QuestionSerializer, TagSerializer, AnswerSerializer
from .Model.Question import Question
from .Model.Tag import Tag
from .Model.Answer import Answer
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from .functions.index import calculateNDaysAgo
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

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
    
@api_view(['GET', 'PUT', 'DELETE'])
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
    
    # increase view by 1
    elif request.method == 'PUT':
        question = Question.objects.filter(id=id)
        currentViews = question.values('views')[0]['views']
        question.update(views=currentViews+1)
        return JsonResponse({"views": currentViews+1, "previousView" : currentViews}, safe=False)

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

@api_view(['GET', 'POST', 'DELETE'])
def tagDetail(request, title):
    # get question by title
    if request.method == 'GET':
        tag = Tag.objects.filter(title__contains=title)
        tagSerializer = TagSerializer(tag, many=True) 
        return JsonResponse(tagSerializer.data, safe=False)
        

@api_view(['GET', 'POST', 'DELETE'])
def answerList(request):
    # post an answer
    if request.method == 'POST':
        answerData = JSONParser().parse(request)
        answerSerializer = AnswerSerializer(data=answerData)
        if answerSerializer.is_valid():
            answerSerializer.save()
            return JsonResponse(answerSerializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(answerSerializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', 'DELETE'])
def answerDetail(request, questionId):
    # get answer by questionId
    if request.method == 'GET':
        try:
            answers = Answer.objects.filter(questionId=questionId)
            answerSerializer = AnswerSerializer(answers, many=True) 
            return JsonResponse(answerSerializer.data, safe=False)
        except:
            return JsonResponse({"error": "no answers"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def register(request):
    # register
    if request.method == 'POST':
        try:
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            firstName = body['firstName']
            lastName = body['lastName']
            username = body['username']
            email = body['email']
            password = body['password']
            user = User.objects.create_user(username=username, first_name=firstName,last_name=lastName, email=email, password=password)
            return JsonResponse(body, safe=False)
            
        except(Exception):
            return JsonResponse({"error": "username already exist"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    # login
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        username = body['username']
        password = body['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            # A backend authenticated the credentials
            return JsonResponse({"res" : "user is logged in", "body" : body}, safe=False)
        else:
            # No backend authenticated the credentials
            return JsonResponse({"error" : "username or password is incorrect"} ,status=status.HTTP_400_BAD_REQUEST)
            


        
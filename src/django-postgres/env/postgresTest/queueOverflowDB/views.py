from datetime import date, datetime
import json
from django.db import reset_queries
from rest_framework import viewsets
from .serializers import QuestionSerializer, TagSerializer, AnswerSerializer, ProfileImageSerializer
from .Model.Question import Question
from .Model.Tag import Tag
from .Model.Answer import Answer
from .Model.ProfileImage import ProfileImage
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from .functions.index import calculateNDaysAgo, getUsernameFromToken, getUserProfileByUsername
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from rest_framework.authtoken.models import Token
from django.db.models import Q

from django.http import HttpResponse, response
from django.views.decorators.csrf import csrf_protect
from django.core.files.storage import FileSystemStorage

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
            try :
                username = getUsernameFromToken(request.headers['Authorization'])
            except:
                return JsonResponse({"error": "please spcify token"}, status=status.HTTP_400_BAD_REQUEST)
            body_data = json.loads(request.body)
            questionData = JSONParser().parse(request)
            questionData['writer'] = str(username)

            try:
                tags = body_data['tags']
                for tag in tags:
                    tagData = Tag.objects.filter(title=tag)
                    if not tagData.values('Asked'):
                        return JsonResponse({"error": tag + " doesn't exist"}, status=status.HTTP_400_BAD_REQUEST)
                    currentQuestionAsked = tagData.values('Asked')[0]['Asked']
                    tagData.update(Asked=currentQuestionAsked+1)
            except:
                return JsonResponse({"error": "could not update tag"}, status=status.HTTP_400_BAD_REQUEST)
                
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
    # get tags by title
    if request.method == 'GET':
        tag = Tag.objects.filter(title__contains=title)
        tagSerializer = TagSerializer(tag, many=True) 
        return JsonResponse(tagSerializer.data, safe=False)
        

@api_view(['GET', 'POST', 'DELETE'])
def answerList(request):
    # post an answer
    if request.method == 'POST':
        try:
            username = getUsernameFromToken(request.headers['Authorization'])
        except:
            return JsonResponse({"error": "please spcify token"}, status=status.HTTP_400_BAD_REQUEST)
            
        answerData = JSONParser().parse(request)
        answerData['writer'] = str(username)
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
            answers = Answer.objects.filter(questionId=questionId).order_by('createdAt')
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
            user.save()
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
        user=authenticate(request,
        username=username,
        password=body['password'])
        token = ""
        
        if user is not None :
            # A backend authenticated the credentials
            auth_login(request._request,user)
            users = User.objects.all()
            for user in users:
                if user.username == username:
                    token, created = Token.objects.get_or_create(user=user)
                    token = token.key
                    break
            return JsonResponse({"username" : username, "token": token}, safe=False)
        else:
            # No backend authenticated the credentials
            return JsonResponse({"error" : "username or password is incorrect"} ,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def searchQuestion(request, keyword):
    if request.method == 'GET':
        try:
            questions = Question.objects.filter(Q(title__contains=keyword) | Q(writer__contains=keyword) | Q(tags__contains=[keyword]))
            questionSerializer = QuestionSerializer(questions, many=True) 
            return JsonResponse(questionSerializer.data, safe=False)
        except:
            return JsonResponse({"error": "no questions"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def voteQuestion(request, id):
    if request.method == 'PUT':
        try:
            username = getUsernameFromToken(request.headers['Authorization'])
        except:
            return JsonResponse({"error": "please spcify token"}, status=status.HTTP_400_BAD_REQUEST)

        question = Question.objects.filter(id=id)
        array = question.values('voters')[0]['voters']

        if str(username) in array:
            return JsonResponse({"error": "you can vote only once"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            array.append(str(username))
            question.update(voters=array)
            currentVotes = question.values('votes')[0]['votes']
            question.update(votes=currentVotes+1)
            return JsonResponse({"votes": currentVotes+1, "previousVotes" : currentVotes, 'voters': array}, safe=False)


@api_view(['PUT'])
def devoteQuestion(request, id):
    if request.method == 'PUT':
        try:
            username = getUsernameFromToken(request.headers['Authorization'])
        except:
            return JsonResponse({"error": "please spcify token"}, status=status.HTTP_400_BAD_REQUEST)

        question = Question.objects.filter(id=id)
        array = question.values('voters')[0]['voters']

        if str(username) in array:
            return JsonResponse({"error": "you can vote only once"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            array.append(str(username))
            question.update(voters=array)
            currentVotes = question.values('votes')[0]['votes']
            question.update(votes=currentVotes-1)
            return JsonResponse({"votes": currentVotes-1, "previousVotes" : currentVotes, 'voters': array}, safe=False)    

@api_view(['PUT'])
def voteAnswer(request, id):
    if request.method == 'PUT':
        try:
            username = getUsernameFromToken(request.headers['Authorization'])
        except:
            return JsonResponse({"error": "please spcify token"}, status=status.HTTP_400_BAD_REQUEST)

        answer = Answer.objects.filter(id=id)
        array = answer.values('voters')[0]['voters']

        if str(username) in array:
            return JsonResponse({"error": "you can vote only once"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            array.append(str(username))
            answer.update(voters=array)
            currentVotes = answer.values('votes')[0]['votes']
            answer.update(votes=currentVotes+1)
            return JsonResponse({"votes": currentVotes+1, "previousVotes" : currentVotes, 'voters': array}, safe=False)


@api_view(['PUT'])
def devoteAnswer(request, id):
    if request.method == 'PUT':
        try:
            username = getUsernameFromToken(request.headers['Authorization'])
        except:
            return JsonResponse({"error": "please spcify token"}, status=status.HTTP_400_BAD_REQUEST)

        answer = Answer.objects.filter(id=id)
        array = answer.values('voters')[0]['voters']

        if str(username) in array:
            return JsonResponse({"error": "you can vote only once"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            array.append(str(username))
            answer.update(voters=array)
            currentVotes = answer.values('votes')[0]['votes']
            answer.update(votes=currentVotes-1)
            return JsonResponse({"votes": currentVotes-1, "previousVotes" : currentVotes, 'voters': array}, safe=False)    

@api_view(['GET'])
def getUserInfo(request):
       if request.method == 'GET':
        try:
            username = getUsernameFromToken(request.headers['Authorization'])
        except:
            return JsonResponse({"error": "please spcify token"}, status=status.HTTP_400_BAD_REQUEST)
        listResult = getUserProfileByUsername(username)
        return JsonResponse(listResult, safe=False)

@api_view(['GET'])
def getQuestionByAnswerId(request, answerId):
    if request.method == 'GET':
        questionIdQuerySet = Answer.objects.filter(id=answerId).values_list("questionId")
        questionId = [entry for entry in questionIdQuerySet][0][0]

        questionQuerySet = Question.objects.get(pk=questionId)
        question = QuestionSerializer(questionQuerySet)
        return JsonResponse(question.data, safe=False)

@api_view(['GET'])
def getUserInfoByUsername(request, username):
    if request.method == 'GET':
        try:
            listResult = getUserProfileByUsername(username)
        except:
            return JsonResponse({"error": "username doesn't exist"}, status=status.HTTP_400_BAD_REQUEST)
            
        return JsonResponse(listResult, safe=False)

@api_view(['GET'])
def getAllUsers(request):
    if request.method == 'GET':
        users = User.objects.all().values()
        listResult = [entry for entry in users]
            
        return JsonResponse(listResult, safe=False)

@api_view(['POST'])
def upload(request):
    if request.method == 'POST' and request.FILES['upload']:
        try:
            username = getUsernameFromToken(request.headers['Authorization'])
        except:
            return JsonResponse({"error": "please spcify token"}, status=status.HTTP_400_BAD_REQUEST)

        upload = request.FILES['upload']
        fss = FileSystemStorage(location="media")
        fileName = str(username)+".jpeg"
        file = fss.save(str(username) + "/" + fileName, upload)
        file_url = fss.url(file)

        profileImage = ProfileImage.objects.filter(username=str(username))
        if profileImage:
            profileImage.update(url=file_url)
            return JsonResponse({"username": str(username), "url" : file_url}, safe=False)

        else:
            profileImageSerializer = ProfileImageSerializer(data={'username': str(username), 'url':file_url})

            if profileImageSerializer.is_valid():
                profileImageSerializer.save()
                return JsonResponse(profileImageSerializer.data, status=status.HTTP_201_CREATED) 
            return JsonResponse(profileImageSerializer.errors, status=status.HTTP_400_BAD_REQUEST)


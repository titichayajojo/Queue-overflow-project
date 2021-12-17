<<<<<<< HEAD
=======
from datetime import date, datetime
import json
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
from django.db import reset_queries
from rest_framework import viewsets
<<<<<<< HEAD
from .serializers import TeacherSerializer, QuestionSerializer
from .models import Teacher, Question
=======
from .serializers import QuestionSerializer, TagSerializer, AnswerSerializer, ProfileImageSerializer
from .Model.Question import Question
from .Model.Tag import Tag
from .Model.Answer import Answer
from .Model.ProfileImage import ProfileImage
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
<<<<<<< HEAD
=======
from rest_framework.renderers import JSONRenderer
from .functions.index import calculateNDaysAgo, getUsernameFromToken, getUserProfileByUsername
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from rest_framework.authtoken.models import Token
from django.db.models import Q
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051

from django.http import HttpResponse, response
from django.views.decorators.csrf import csrf_protect
from django.core.files.storage import FileSystemStorage

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
<<<<<<< HEAD
def questions_list(request):
    if request.method == 'GET':
        questions = Question.objects.all()
=======
def answerList(request):
    # post an answer
    if request.method == 'POST':
        try:
            username = getUsernameFromToken(request.headers['Authorization'])
        except:
            return JsonResponse({"error": "please spcify token"}, status=status.HTTP_400_BAD_REQUEST)
            
        answerData = JSONParser().parse(request)
        answerData['writer'] = str(username)
        questionId = answerData['questionId']
        answerSerializer = AnswerSerializer(data=answerData)
        if answerSerializer.is_valid():
            question = Question.objects.filter(id=questionId)
            currentAnswer = question.values('answers')[0]['answers']
            question.update(answers=currentAnswer+1)
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
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051

        
<<<<<<< HEAD
        serializer_class = QuestionSerializer(questions, many=True)
        
        return JsonResponse(serializer_class.data, safe=False)
    
    elif request.method == 'POST':
        question_data = JSONParser().parse(request)
        question_serializer = QuestionSerializer(data=question_data)
        if question_serializer.is_valid():
            question_serializer.save()
            return JsonResponse(question_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(question_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
=======
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

>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051

"""postgresTest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from queueOverflowDB import views
from django.conf.urls import url, include
<<<<<<< HEAD


urlpatterns = [
    url(r'teachers', views.getAllTeachers),
    url(r'api/questions', views.questions_list)
=======
from rest_framework.authtoken import views as rest_framework_views
from django.conf import settings #add this
from django.conf.urls.static import static #add this

urlpatterns = [
    #question
    path('api/questions', views.questionsList),
    path('api/question/<int:id>/', views.questionDetail),
    path('api/question/<str:keyword>/', views.searchQuestion),
    path('api/question/vote/<int:id>/', views.voteQuestion),
    path('api/question/devote/<int:id>/', views.devoteQuestion),

    #tag
    path('api/tags', views.tagList),
    path('api/tag/<str:title>/', views.tagDetail),

    #answer
    path('api/answers', views.answerList),
    path('api/answer/<int:questionId>', views.answerDetail),
    path('api/answer/vote/<int:id>/', views.voteAnswer),
    path('api/answer/devote/<int:id>/', views.devoteAnswer),
    path('api/answer/question/<int:answerId>', views.getQuestionByAnswerId),

    #register
    path('api/register', views.register),

    #login
    path('api/login', views.login, name='api-token-auth'),
    url(r'^get_auth_token/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),

    #user
    path('api/user/info', views.getUserInfo),
    path('api/user/info/<str:username>/', views.getUserInfoByUsername),
    path('api/users', views.getAllUsers),

    #img
    path("upload", views.upload, name="upload")

>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
]


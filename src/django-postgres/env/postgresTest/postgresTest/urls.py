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


urlpatterns = [
    #question
    path('api/questions', views.questionsList),
    path('api/question/<int:id>/', views.questionDetail),

    #tag
    path('api/tags', views.tagList),
    path('api/tag/<str:title>/', views.tagDetail),

    #answer
    path('api/answers', views.answerList),
    path('api/answer/<int:questionId>', views.answerDetail),
]

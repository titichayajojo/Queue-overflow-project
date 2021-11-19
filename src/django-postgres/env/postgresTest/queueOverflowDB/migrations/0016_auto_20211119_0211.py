# Generated by Django 3.2.8 on 2021-11-19 02:11

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('queueOverflowDB', '0015_alter_question_voters'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProfileImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(default='', max_length=200)),
                ('url', models.TextField(default='', max_length=50)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='answer',
            name='voters',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=[], max_length=50), default=[], size=None),
        ),
    ]

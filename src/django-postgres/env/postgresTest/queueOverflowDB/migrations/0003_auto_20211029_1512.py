# Generated by Django 3.2.8 on 2021-10-29 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('queueOverflowDB', '0002_tag'),
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('questionId', models.IntegerField()),
                ('body', models.TextField(default='')),
                ('votes', models.IntegerField(default=0)),
                ('writer', models.TextField(default='', max_length=50)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Teacher',
        ),
    ]

# Generated by Django 3.2.8 on 2021-11-04 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('queueOverflowDB', '0004_auto_20211104_0832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='body',
            field=models.JSONField(default=''),
        ),
    ]
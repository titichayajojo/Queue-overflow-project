# Generated by Django 3.2.8 on 2021-11-19 02:12

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('queueOverflowDB', '0016_auto_20211119_0211'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='voters',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default='', max_length=50), default=[], size=None),
        ),
    ]

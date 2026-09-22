from django.urls import path
from .views import *

urlpatterns = [
    path('',contact_message, name='contact_message'),
]
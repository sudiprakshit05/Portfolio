from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage

from .models import *
# Create your views here.

@api_view(['POST'])
def contact_message(request):

    name = request.data.get('name')
    email = request.data.get('email')
    subject = request.data.get('subject')
    message = request.data.get('message')

    if not name or not email or not subject or not message:
        return Response(
            {
                'success': False,
                'message': 'All fields are required.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    ContactMessage.objects.create(
        name=name,
        email=email,
        subject=subject,
        message=message
    )
    email_message = EmailMessage(
    subject=f"Portfolio Contact: {subject}",
    body=f"""
    Name: {name}
    Email: {email}

    Message:
    {message}
    """,
        from_email=None,
        to=["srakshit923@gmail.com"],
        reply_to=[email],
    )

    email_message.send(fail_silently=False)
    return Response(
        {
            'success': True,
            'message': 'Your message has been sent successfully.'
        },
        status=status.HTTP_201_CREATED
    )
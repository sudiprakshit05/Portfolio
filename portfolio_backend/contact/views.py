
import os

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

import resend

from .models import ContactMessage


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

    # Save message to database
    ContactMessage.objects.create(
        name=name,
        email=email,
        subject=subject,
        message=message
    )

    # Send email using Resend
    resend.api_key = os.getenv("RESEND_API_KEY")

    resend.Emails.send({
        "from": "onboarding@resend.dev",
        "to": ["sudiprakshit05@gmail.com"],
        "subject": f"Portfolio Contact: {subject}",
        "html": f"""
        <h3>New Portfolio Contact Message</h3>

        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Subject:</strong> {subject}</p>

        <p><strong>Message:</strong></p>
        <p>{message}</p>
        """
    })

    return Response(
        {
            'success': True,
            'message': 'Your message has been sent successfully.'
        },
        status=status.HTTP_201_CREATED
    )

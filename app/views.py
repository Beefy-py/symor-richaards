from django.shortcuts import render
from .serializers import FamilyPhotoSerializer
from .models import FamilyPhoto
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.

class FamilyPhotoListView(ListCreateAPIView):  
    serializer_class = FamilyPhotoSerializer
    parser_classes = [MultiPartParser, FormParser]
    queryset = FamilyPhoto.objects.all()

class FamilyPhotoView(RetrieveUpdateDestroyAPIView):
    serializer_class = FamilyPhotoSerializer
    queryset = FamilyPhoto.objects.all() 
    
    def patch(self, request, *args, **kwargs):
        print(request.data)
        return super().patch(request, *args, **kwargs)



    
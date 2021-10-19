from django.urls import path
from .views import FamilyPhotoListView, FamilyPhotoView

urlpatterns = [
    path('', FamilyPhotoListView.as_view(), name='family_photo_list'),
    path('photos/<str:pk>', FamilyPhotoView.as_view(), name='single_photo')
]

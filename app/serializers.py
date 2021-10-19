from .models import FamilyPhoto
from rest_framework.serializers import ModelSerializer

class FamilyPhotoSerializer(ModelSerializer):


  def clean_CAPTION(self):
    CAPTION = self.cleaned_data.get('CAPTION')

    print(CAPTION)

    return CAPTION
    
  class Meta:
        model = FamilyPhoto
        fields = '__all__'


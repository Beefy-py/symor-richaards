from django.db import models

# Create your models here.
class FamilyPhoto(models.Model):
    image = models.ImageField(upload_to='photos/')
    caption = models.CharField(max_length=300, null=True, blank=True)
    date_added= models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.caption[:50]}...'

    class Meta:
        ordering = ['-date_added']
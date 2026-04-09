from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "appliation1/index.html")
def chaluka(request):
    return HttpResponse("Hello, Chaluka")
def greet(request, name):
    return render(request, "appliation/greet.html", {
        "name": name.capitalize()
    })
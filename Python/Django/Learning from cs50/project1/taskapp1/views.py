from django.shortcuts import render

tasks = ["foo", "bar", "baz"]
# Create your views here.
def index(request):
    return render(request, "taskapp1/index.html", {
        "tasks":tasks
    })

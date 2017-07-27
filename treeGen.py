import requests
import json


def call_api(video_id):
    url = "https://api.vimeo.com/me/albums/" + video_id + "/videos"
    headers = {
        'cache-control': "no-cache",
    }
    querystring = {"access_token": access_token, "fields": "uri,name,link,duration"}
    return json.loads(requests.request("GET", url, headers=headers, params=querystring).text.lower())["data"]

access_token = "ACCESS TOKEN HERE"

base = {"course": "ACT", "subjects": [
            {"title": "General", "entries": [
                {"name": "Prep", "id": "4291611"}]},
            {"title": "Reading", "entries": [
                {"name": "Bonus Questions", "id": "4280764"},
                {"name": "New Book Test 2", "id": "4215436"},
                {"name": "New Book Test 3", "id": "4215442"},
                {"name": "New Book Test 4", "id": "4136118"},
                {"name": "New Book Test 1", "id": "4215424"},
                {"name": "Test 0", "id": "4234796"}]},
            {"title": "Math", "entries": [
                {"name": "New Book Test 1", "id": "4215422"},
                {"name": "Bonus Questions", "id": "4280743"},
                {"name": "Test 0 Math", "id": "4324797"},
                {"name": "New Book Test 3", "id": "4215440"},
                {"name": "New Book Test 2", "id": "4215428"}]},
            {"title": "Science", "entries": [
                {"name": "Bonus Questions", "id": "4280760"},
                {"name": "Test 0", "id": "4234801"},
                {"name": "New Book Test 3", "id": "4215441"},
                {"name": "New Book Test 1", "id": "4215419"},
                {"name": "New Book Test 2", "id": "4215434"}]},
            {"title": "English", "entries": [
                {"name": "Bonus Questions", "id": "4280758"},
                {"name": "Test 0", "id": "4234794"},
                {"name": "New Book Test 3", "id": "4215439"},
                {"name": "New Book Test 2", "id": "4215433"},
                {"name": "New Book Test 1", "id": "4211831"},
                {"name": "Red Book Test 4", "id": "4155869"},
                {"name": "Red Book Test 5", "id": "4154399"}]}]}

formatted = {
    "courses": {}
    }

for subject in base["subjects"]:
    formatted["courses"][base["course"]] = {
        "tabs": {}
    }

for subject in base["subjects"]:
    formatted["courses"][base["course"]]["tabs"]["dashboard"] = {}
    for entry in subject["entries"]:
        formatted["courses"][base["course"]]["tabs"][subject["title"]] = {}

for subject in base["subjects"]:
    formatted["courses"][base["course"]]["tabs"]["dashboard"] = {}
    for entry in subject["entries"]:
        formatted["courses"][base["course"]]["tabs"][subject["title"]][entry["name"]] = call_api(entry["id"])

with open('VimeoTree.txt', 'w') as f:
    f.write(json.dumps(formatted).lower())

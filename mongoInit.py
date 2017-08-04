# If you really screw something up, just run this- it will restore the users and courses documents.
# Then, run treeGen.py to generate a new tree that the site can use and you should be good to go.
from pymongo import MongoClient
import json

with open('secret.txt') as data_file:
    data = json.load(data_file)

client = MongoClient("mongodb://admin:{0}@cluster0-shard-00-00-tbb5q.mongodb.net:27017,cluster0-shard-00-01-tbb5q.mongodb.net:27017,cluster0-shard-00-02-tbb5q.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin".format(data['mongoToken']))

base = {"course": "act",
        "subjects": [
            {"title": "General", "entries": [
                {"name": "Prep", "id": "4291611"}]},
            {"title": "Reading", "entries": [
                {"name": "Test 0", "id": "4234796"},
                {"name": "New Book Test 1", "id": "4215436"},
                {"name": "New Book Test 2", "id": "4215442"},
                {"name": "New Book Test 3", "id": "4136118"},
                {"name": "New Book Test 4", "id": "4215424"},
                {"name": "Bonus Questions", "id": "4280764"}]},
            {"title": "Math", "entries": [
                {"name": "Test 0 Math", "id": "4234797"},
                {"name": "New Book Test 1", "id": "4215422"},
                {"name": "New Book Test 2", "id": "4215440"},
                {"name": "New Book Test 3", "id": "4215428"},
                {"name": "Bonus Questions", "id": "4280743"}]},
            {"title": "Science", "entries": [
                {"name": "Test 0", "id": "4234801"},
                {"name": "New Book Test 1", "id": "4215441"},
                {"name": "New Book Test 2", "id": "4215419"},
                {"name": "New Book Test 3", "id": "4215434"},
                {"name": "Bonus Questions", "id": "4280760"}]},
            {"title": "English", "entries": [
                {"name": "Bonus Questions", "id": "4280758"},
                {"name": "Test 0", "id": "4234794"},
                {"name": "New Book Test 1", "id": "4215439"},
                {"name": "New Book Test 2", "id": "4215433"},
                {"name": "New Book Test 3", "id": "4211831"},
                {"name": "Red Book Test 4", "id": "4155869"},
                {"name": "Red Book Test 5", "id": "4154399"}]}]}

doc = client['test']['courses']

# Comment this line out to avoid deleting all other courses
doc.delete_many({})

doc.insert_one(base)
user = {
    "_id": 1,
    "videos": {
        "recentlyWatched": {
            "91765": {
                "name": "SAT Math II Subject Test",
                "time": "0",
                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
            },
            "94328": {
                "name": "SAT Chemistry Subject Test",
                "time": "0",
                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
            },
            "57492": {
                "name": "SAT General Prep",
                "time": "35",
                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
            }
        }
    },
    "profile": {
        "firstName": "Rick",
        "lastName": "Sanchez",
        "image": "https://i.ytimg.com/vi/AzZ4K1OzomE/maxresdefault.jpg"
    },
    "orders": {
        "Complete ACT Prep Package": "z07d6j6i76"
    },
    "settings": {
        "recommendContent": True,
        "resetPassword": "dummylink",
        "offlineContent": False
    }
}

users = client['test']['users']

# Comment this line out to avoid deleting all other users
users.delete_many({})

users.insert_one(user)

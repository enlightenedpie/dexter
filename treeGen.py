import requests
import json
import collections
from pymongo import MongoClient

with open('secret.txt') as data_file:
    data = json.load(data_file)

access_token = data['vimeoToken']


# Method for getting album objects from the Vimeo API
def call_api(album_id):
    url = "https://api.vimeo.com/me/albums/" + album_id + "/videos"
    headers = {
        'cache-control': "no-cache",
    }
    querystring = {"access_token": access_token, "fields": "uri,name,link,duration,pictures.sizes,description"}
    # Dummy Object to keep the loop from throwing an index error if no data is returned for a video
    error_return = [{'name': 'Video Not Found', 'link': 'No Link Found', 'uri': 'No URI Found', 'duration': 0,
                     'pictures': {'sizes': [{'width': 0, 'height': 0, 'link': 'No Link Found',
                                             'link_with_play_button': 'No Link Here Either'},
                                            {'width': 0, 'height': 0, 'link': 'No Link Found',
                                             'link_with_play_button': 'No Link Here Either'},
                                            {'width': 0, 'height': 0, 'link': 'No Link Found',
                                             'link_with_play_button': 'No Link Here Either'},
                                            {'width': 0, 'height': 0, 'link': 'No Link Found',
                                             'link_with_play_button': 'No Link Here Either'},
                                            {'width': 0, 'height': 0, 'link': 'No Link Found',
                                             'link_with_play_button': 'No Link Here Either'},
                                            {'width': 0, 'height': 0, 'link': 'No Link Found',
                                             'link_with_play_button': 'No Link Here Either'}
                                            ]}}]
    response = json.loads(requests.request("GET", url, headers=headers, params=querystring).text.lower())
    try:
        return response['data']
    except KeyError:
        print(response)
        return error_return


# Method for ordering the videos by number (only works for videos with numbers up
# to 3 digits long at the end of their names), returns the number if one exists; otherwise returns 0.
# Therefore, videos must have numbers at the end of their names and the numbers must be 1-999 inclusive.
def order(s):
    try:
        small = int(s['name'][-1:])
    except ValueError:
        return 0
    try:
        medium = int(s['name'][-2:])
    except ValueError:
        return small
    try:
        large = int(s['name'][-3:])
    except ValueError:
        return medium
    return large

# Read course information from the MongoDB

client = MongoClient("mongodb://admin:{0}@cluster0-shard-00-00-tbb5q.mongodb.net:27017,cluster0-shard-00-01-tbb5q.mongodb.net:27017,cluster0-shard-00-02-tbb5q.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin".format(data['mongoToken']))

doc = client['test']['courses']

collection = doc.find()

base = dict()

for i in collection:
    coursename = i["course"]
    base[coursename] = []
    base[coursename].append(i['subjects'])

formatted = {
    "courses": {}
}

# Loops through all courses read from the MongoDB, parses each one, and fetches the appropriate Vimeo data.
for course in base:
    formatted["courses"][course.lower()] = dict()
    for subject in base[course]:
        formatted["courses"][course.lower()] = {
            "tabs": {}
        }

    for subject in base[course]:
        for entry in subject:
            formatted["courses"][course.lower()]["tabs"][entry["title"].lower()] = collections.OrderedDict()

    for subject in base[course]:
        formatted["courses"][course.lower()]["tabs"]["dashboard"] = {}
        for item in subject:
            for entry in item['entries']:
                data = call_api(entry["id"])
                for i in range(len(data)):
                    try:
                        data[i]["pictures"] = data[i]["pictures"]["sizes"][5]
                    except TypeError:
                        continue
                formatted["courses"][course.lower()]["tabs"][item["title"].lower()][entry["name"].lower()] = sorted(data, key=lambda x: (order(x), x['name']))

# Writes the formatted tree into the tree document- note that this will (and must) delete all previous trees

print(formatted)

out = client['test']['tree']

out.delete_many({})

out.insert_one(formatted)

import requests
import json


def request(uri, querystring, lowercase):
    url = "https://api.vimeo.com" + uri
    headers = {
        'cache-control': "no-cache",
    }
    if lowercase:
        return json.loads(requests.request("GET", url, headers=headers, params=querystring).text.lower())["data"]
    else:
        return json.loads(requests.request("GET", url, headers=headers, params=querystring).text)["data"]

access_token = "c4c18e27a0adf058aebd2429e4d4afa9"

albumQuery = {"access_token": access_token, "fields": "uri,name,link"}

videoQuery = {"access_token": access_token, "fields": "uri,name,link,duration"}

resources = request("/me/albums", albumQuery, True)

for i in range(len(resources)):
    resources[i]["Videos"] = request(resources[i]["uri"] + "/videos", videoQuery, False)


formatted = {
    "courses": {}
}

for album_object in resources:
    formatted["courses"][album_object["name"]] = {
        "tabs": {
            "dashboard": {
                "tips": {},
                "content": {}
                    },
            "videos": {
                "tips": {},
                "content": {}
                }
            }
        }

for album_object in resources:
    for video in album_object["Videos"]:
        formatted["courses"][album_object["name"]]["tabs"]["videos"]["content"][video["name"]] = {
                        "duration": video["duration"],
                        "uri": video["uri"],
                        "link": video["link"]
                    }

for album_object in resources:
    for video in album_object["Videos"]:
        formatted["courses"][album_object["name"]]["tabs"]["videos"]["tips"][video["name"]] = {
                        "duration": video["duration"],
                        "uri": video["uri"],
                        "link": video["link"]
                    }

with open('VimeoTree.txt', 'w') as f:
    f.write(json.dumps(formatted))

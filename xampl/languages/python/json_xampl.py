import json

with open("file_xampl.json", 'r') as file:  # we read the file on directory that contains teh json structure
    doc = json.load(file)
    # this way to open streams doesn't require to close the instance


print(doc['price'])                     # python allows read the json files by keys
print(doc['shipTo']['name'])            # also we can check by tree-style along the json file
print(doc['name'], ",", doc['billTo']['state'])
print(type(doc))


import csv
import json

csvfile = open('roomtype_boroughs.csv', 'r')
jsonfile = open('roomtype_boroughs.json', 'w')

fieldnames = ("borough","room_type","Count of room_type")
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')
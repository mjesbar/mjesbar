from pymongo import MongoClient
import time

# -----------------------------------------------------------------------------------------
#   In this xample we will train
#
#       ·connect to the mongodb server.
#       ·select a database.
#       ·select a collection.
#       ·insert a sample document.
#       ·query all the documents n the training database and python collection.
#       ·close the connection to the server.
# -----------------------------------------------------------------------------------------

user = 'kali'
passwd = 'niggue'
host = 'localhost'

# create the connection url
connecturl = "mongodb://{}:{}@{}:27017/?authSource=admin".format(user, passwd, host)


# connect to mongodb server
print("Connecting to mongodb server.")
connection = MongoClient(connecturl)


# select the 'local' database

local = connection.local


# select the 'marks' collection

# marks_collection = db.marks


# query all the documents

docs = local.marks.find()

print("Printing the documents in the collection.")


for document in docs:
    print(document)
    time.sleep(0.25)


# close the server connection

print("Closing the connection.")
connection.close()

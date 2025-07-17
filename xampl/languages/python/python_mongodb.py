from pymongo import MongoClient

#   This file doesn't work yet because we have not set any user from our mongodb database
#   so, in order to lay our the schema we've to follow when need to connect with our previously created
#   collections that we hold in our mongodb database.

user = "kali"               # depend on your credentals, basically root it's the most common credential, but you can create your own user with mongosh CLI
password = "niggue"           # set your password previous to connect, since it's required to has someone to stablish the connection.
host = "localhost"      # Unless we have some collections on the web we use this host for our local projects

# # Create the connection url

connecturl = "mongodb://{}:{}@{}:27017/?authSource=admin".format(user, password, host)  # passing all the previous variables to the connection


# # connect to mongodb Server

print("Connecting to mongodb server.")
connection = MongoClient(connecturl)


# # get database list

print("Getting list of databases")
dbs = connection.list_database_names()

# # print the database names

for db in dbs:
    print(db)
print("Closing the connection to the mongodb server.")

# # close the server connection

connection.close()

exit()

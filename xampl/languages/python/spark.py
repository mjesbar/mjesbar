from pyspark.sql import SparkSession
import json


spark = SparkSession.builder \
    .appName("Python Spark SQL basic example") \
    .config("spark.sparkContext.setLogLevel('INFO')") \
    .getOrCreate()

file = \
[
    {
        "name": "John",
        "age": 30
    },
    {
        "name": "Adriana",
        "age": 25
    },
    {
        "name": "Lucio",
        "age": 56
    }
]

file = json.dumps(file, indent=4)

open("test.json", "w").write(file)

df = spark.read.json("file:///home/debian/mega/github/xampl/python/test.json",
                     multiLine=True,
                     encoding="utf-8")

class Test:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return "Test(name=%r, age=%r)" % (self.name, self.age)


print(f"{a}\n")

a = Test(name, age)
print("Schema:")
df.printSchema()

print("DataFrame:")
df.show()

print("Reordering DataFrame:")
df = df.select("name", "age")
df.show()

print("People over 30 years old:")
df.filter(df["age"] >= 30).show()

print("People below 30 years old:")
df.filter(df["age"] <= 30).show()

print("Quering by TempView:")
sqlDF = df.createOrReplaceTempView("fellows")
sqlDF = spark.sql("SELECT * FROM fellows WHERE age < 30")
sqlDF.show()

print("Quering by GlobalTempView 'global_temp' database:")
sqlDF = df.createGlobalTempView("fellows")
sqlDF = spark.sql("SELECT * FROM global_temp.fellows WHERE name = 'John'")
sqlDF.show()

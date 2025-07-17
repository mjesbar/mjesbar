import pandas as pd


data = {
        "name":['Carl','Migue','Luis'],
        "age":[16, 25, 22],
        "country":['usa','col','chi']
        }

# creating a dataframe from a dictionary
df = pd.DataFrame(data)
print("Printing the dataframe df saved from data dictionary:\n", str(df)+"\n")

# creating a dataframe from dictionary specifying the columns
df = pd.DataFrame(data, columns=data.keys())
print("Printing the dataframe df saved from data dictionary with preset columns:\n", str(df)+"\n")

# catching the empty file directory .csv error, to avoid stucks in runtime
try:
    df = pd.read_csv("...")     # we can also create a dataframe from a csv file with some previously-fed data into it
    # This line raises an error
except:
    print("exception by invalid file directory as parameter")
finally:
    pass

# this line just print the 2 top lines in dataframe
df = pd.DataFrame(data)
print("\nTop 2 data\n", str(df.head(2)))
# this the 2 bottom data
print("\nBot 2 data\n", str(df.tail(2)))

# we can also select part of the dataframe
print("\nName column:\n", df['name'])

# selecting a row
print("\nRow1:\n", df.iloc[1])

# label selecting
print("\nCustom selecting\n", df.loc[1:3, ['age']])

# rename a column
df = df.rename(columns={'country':'Nation'})
print("\nDataframe renamed:\n", df)

# dropping columns
df = df.drop(columns={'name'})
df = df.drop(index=0)
print("\nDropped dataframe\n", df)

# use append instead of drop to add a new row or gregister into dataframe


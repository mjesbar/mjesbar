import csv 
import pandas 


# Using the native csv module
with open('./proxies.csv', 'r') as csv_stream:
    csv_doc = csv.reader(csv_stream)
    print("type object:", csv_doc)

    n = 0       # we need to control the loop limit with a external variable  since native csv module doesn't allow limit the printing of the csv file
    for i in csv_doc:       # csv_doc is  file stream
        
        print("First item >>", i[0])
        print("From the complete line >>", i)
        
        n += 1
        if n == 1:  break

# Using the pandas library
# pandas ease enormously the work due to it orders every csv line in a more accessible frame
csv_doc = pandas.read_csv('./proxies.csv')
print("\nPandas dataframe columns >>\n", csv_doc.columns)
print("\nPandas 5-top data >>\n", csv_doc.head())
print("\nPandas 0-index row >>\n", csv_doc.loc[0:5,'ip'])



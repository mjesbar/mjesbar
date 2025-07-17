import requests
import json


# retrieving a response with a static IP address

url = 'https://httpbin.org/ip'

response = requests.get(url)
print(f'Static Response:\n{response.text}')


# retrieving a response with a dynamic IP address

proxies_list = {
        'https':'20.54.56.26:8080',
        'http':'169.57.1.85:8123',
        }

https_url = 'https://httpbin.org/ip'
http_url = 'http://httpbin.org/ip'

dynamic_response = requests.get(https_url, proxies=proxies_list)
docs_parsed = json.loads(dynamic_response.text)
print('Selected IP https Response:', docs_parsed['origin'])

dynamic_response = requests.get(http_url, proxies=proxies_list)
docs_parsed = json.loads(dynamic_response.text)
print('Selected IP http Response:', docs_parsed['origin'])



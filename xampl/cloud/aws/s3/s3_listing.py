import boto3
import json


# pretty function prints as beauty the s3 response
def pretty(object):

    pretty_json_to_print = json.dumps(object, indent=4, default=str)
    return pretty_json_to_print



s3_client = boto3.client("s3")
response = s3_client.list_buckets()

print(pretty(response))

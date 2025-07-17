
# This function was made with educational purposes and doens't anything important
# just serves as guide for future application of lambda AWS service and its
# integratin with other services like S3.

import requests
import json
import pandas


def handler(event, context):   
    
    print("The event tha I received was:")
    event_pretty = json.dumps(event, indent=4)
    print(event_pretty)


    return {
        "name": "testingLambdaPandasDependencies",
        "eventComplete": event
    }

    # for Synchronous calls return is get by either Lambda consolo or awscli shell
    # Asynchronous invoking discards whatever returned value:
        # under this condition if desire to get some output, that's only possible
        # throught CloudWatch logs streams, so that you have to print all the
        # streams and catch them at the respective Cloudwatch log group
 

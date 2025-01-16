import boto3
import base64

def lambda_handler(event, context):
    myS3 = boto3.client("s3")
    
    buckName = "mypdfbuck"
    file = event.get("sample", "default.pdf")
    fileContent = event.get("fileContent")  

    fileData = base64.b64decode(fileContent)

    myS3.put_object(Bucket=buckName, Key=file, Body=fileData)

    return {
        "statusCode": 200,
        "body": f"File '{file}' has been uploaded successfully to buck '{buckName}'."
    }
    
    
# Sample event
# {
#     "fileName": "sample.pdf", 
#     "fileContent": "ZHVtbXk==="
# }


# OutPut:

# Test Event Name
# e1

# Response
# {
#   "statusCode": 200,
#   "body": "File 'sample.pdf' has been uploaded successfully to bucket 'mypdfbuck'."
# }

    

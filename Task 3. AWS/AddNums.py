def lambda_handler(event, context):
    try:
        n1 = event.get("n1")
        n2 = event.get("n2")
        sum = n1 + n2
        return {
            "statusCode": 200,
            "body": f"The sum od {n1} and {n2} is {sum}.\n"
        }
    except Exception as e:
        return {
            "statusCode": 400,
            "body": f"An error occured: {str(e)}.\n"
        }
        

#sample event could be:
# {
#     "n1": 3,
#     "n2": 6
# }

# OutPut:

# Test Event Name
# event1

# Response
# {
#   "statusCode": 200,
#   "body": "The sum od 3 and 6 is 9.\n"
# }
        


# variation 2

# def lambda_handler(event, context):
#     try:
#         n1 = event.get("n1", 0) # 0 - default value
#         n2 = event.get("n2", 0)
#         sum = n1 + n2
#         return {
#             "statusCode": 200,
#             "body": f"The sum od {n1} and {n2} is {sum}.\n"
#         }
#     except Exception as e:
#         return {
#             "statusCode": 400,
#             "body": f"An error occured: {str(e)}.\n"
#         }
        
#sample event could be:
# {
#     "n1": 3,
# }

# OutPut:

# Test Event Name
# event2

# Response
# {
#   "statusCode": 200,
#   "body": "The sum od 3 and 0 is 3.\n"
# }
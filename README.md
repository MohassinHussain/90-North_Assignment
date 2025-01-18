# Tasks Overview(This repo has 2 tasks Other has Django task)

This repository contains the implementation of a web application with a responsive frontend, along with AWS Lambda functions. (Django chat application in https://github.com/MohassinHussain/chat_app_assign this repo)

## Frontend Development

The frontend of this project consists of a responsive webpage with the following features:

1. **Navbar**  
   A fixed navbar at the top of the page that does not move when scrolling.

2. **Three Sections**  
   - **Left Menu**: A collapsible menu on the left side.
   - **Main Content Area**: The center area where the primary content is displayed.
   - **Right-Side Panel**: A panel on the right side for additional information or widgets.

3. **Footer**  
   A footer section at the bottom of the page.

4. **Responsive Shrinking**  
   A JavaScript function that dynamically adjusts the page width based on the screen size. The following width adjustments are implemented:
   - Screen width between 992px and 1600px: Shrink the page by 90%.
   - Screen width between 700px and 767px: Shrink the page by 80%.
   - Screen width between 600px and 700px: Shrink the page by 75%.
   - Screen width less than or equal to 600px: Shrink the width to 50%.


## AWS Lambda Functions

1. **Add Two Numbers**  
   An AWS Lambda function that adds two numbers and returns the result.

2. **Store File in S3**  
   An AWS Lambda function that stores a document or PDF file in an S3 bucket.

## How to Run the Project

1. **Clone the Repository**  
   Clone this repository to your local machine using:
   ```bash
   git clone https://github.com/your-username/repository-name.git
## To run Frontend
    Change the directory to Task 1. Responsive_website, "cd Task 1. Responsive_website"
    Either use VS Code extension "Go live"
    Or use directly "localhost:8000"

    Note: Do not forget to uncomment the lines(72, 73), to see the shrik function execution

## AWS Tasks are in the file. Self Explanatory
    The Sample events(tested) and outputs are in the file.

## Navbar Output
![Screenshot (115)](https://github.com/user-attachments/assets/b742a8fe-f1be-4a7f-b13c-4391bf27c3f6)
![Screenshot (116)](https://github.com/user-attachments/assets/0086dc81-622f-4d5d-b1e0-b1811e96f7ec)

# Thank You!

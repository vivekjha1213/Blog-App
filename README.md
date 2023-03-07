# Blog-App

full-stack web application that allows users to create, read, update, and delete blog posts.

Set up the back-end with Express.js:
Use npm to install the required dependencies, such as express, body-parser, and mongoose.
Set up the Express app with the necessary middleware, including body-parser for parsing JSON data and cors for handling cross-origin resource sharing.
Create the database schema using Mongoose and define the necessary models for blog posts and users.
Implement the API routes for creating, reading, updating, and deleting blog posts, as well as user authentication and authorization.




Make Sure Config before Run This Application...

Step :1

Create .env File in Api folder 
PORT = 3000

Step :2
npm install 

Step:3
All required Module install like npm install express,dotenv,nodemon end etc..


Step: 4

npm start


Sample Request and Request Body..
//Register
http://localhost:3000/auth/register


{
"username":"vivek",
"email": "testing@gmail.com",
"password":"1234567890"
}

// Login 
http://localhost:3000/auth/login

{
"username":"vivek",
"password":"1234567890"
}


//post

http://localhost:3000/posts

{
"username":"vivek",
"tittle":"test",
"desc":" lorem lorem lorem lorem lorem lorem "
}

//Blog Category..

http://localhost:3000/category

{
    "name":"coding"
}





PostMan Request Url ScreenShot Attached..
![Screenshot 2023-03-07 at 8 01 15 PM](https://user-images.githubusercontent.com/67068290/223452598-82c031f1-99af-4dbf-a077-8c97a6a6f25d.png)


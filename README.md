# Jepretgram - A simple photo sharing app

di client:
> npm run dev

di server:
> nodemon app.js


```
POST - sign in
http://localhost:3000/signin

POST - register
http://localhost:3000/register

GET - get user
http://localhost:3000/me

GET - get all post
http://localhost:3000/post

GET - get post by user
http://localhost:3000/post/:idUser

POST - post new image
http://localhost:3000/post

PUT - update caption
http://localhost:3000/post/:id

DELETE - delete post
http://localhost:3000/post/:id

GET - get all like in post
http://localhost:3000/like/:id

POST - like post
http://localhost:3000/like/:id
```
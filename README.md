# OLX Clone

### Features

1. User Registration and Login
2. Add Items for Sale
3. Purchase Items

### Using this repository

**Backend directory: `./backend`**
> You need to create a **.env** file which contains `MONGO_SERVER` and `SECRET`

- **Installing all the required packages**
```
npm i
```
> It should be done in both root and ./backend directory

- **Running backend on local host:**
```
cd backend
nodemon app.js
```
>This will setup a connection with MongoDB Atlas database

The backend server will be running on http://localhost:8080/

- **Running frontend on local host:**
```
npm start
```
To check the frontend go to http://localhost:3000/

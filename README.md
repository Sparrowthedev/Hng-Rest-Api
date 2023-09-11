# `Person-Api`
# This project is a RESTful API that performs CRUD operations on a person resource using the name property as a point of focus when reading, updating, and deleting a person from the database.

# `Technologies used include`
# 1. Nodejs
# 2. Express js
# 1. MongoDB

# `Packages`:
# 1. mongoose
# 2. express
# 1. dotenv
# 1. body-parser


# `Installation`
# 1. clone this repo: `git clone https://github.com/Sparrowthedev/Hng-Rest-Api.git`
# 2. npm install
# 3. from either `terminal` or `command line` run `npm i nodemon` to install globally or you can opt to install it just inside the root folder.
# 4. Create a `.env` file in the root directory and add the following variables:
#    - `PORT`: The port number for the server to listen on. For example, `PORT=5000`.
#    - `MONGO_URI`: The connection string for MongoDB. For example, `MONGO_URI=mongodb://localhost:27017/persons`.
# 5. locate `server.js` and uncomment `require('dotenv').config()`.
# 6. locate `db.js` and uncomment `require('dotenv').config()`.
# 7. run `nodemon server.js` from the `terminal` or `command line`.


## `Usage`
# The API has four routes that handle different operations on the person resource:

# - `/api/persons`: This route accepts a `*POST*` request with a JSON body that contains the `name`,`age`,`gender`,`country`,`email`, `hobbies` and `occupation` of a person. It adds a new person to the database and returns the person that was added. For example:

#   // Request: `POST`
#   // Route: `/api/persons`
#   // json
#   {
#        "name": "Alice",
#       "age": 25,
#        "email": "example@gmail.com",
#       "occupation": "Hair Dresser",
#       "gender": "F",
#       "country": "Nigeria",
#       "hobbies": ["Reading", "Cooking"],
#   }

#   // Response
#    {
#       "_id": ObjectId("64fed664160cdfdf8bc1a05d")  
#       "name": "Alice",
#       "age": 25,
#       "email": "example@gmail.com",
#       "occupation": "Hair Dresser",
#       "gender": "F",
#       "country": "Nigeria",
#       "hobbies": ["Reading", "Cooking"], 
#       "createdAt": "2023-09-11T08:57:08.894+00:00",
#       "updatedAt":"2023-09-11T09:58:54.875+00:00",
#   }

# Note: The `hobbies` property is of type `Array`

    

# - `/api/persons/:name`: This route accepts three types of requests: `*GET*`, `*PUT*`, and `*DELETE*`, with the name parameter in the URL. It performs different operations on the person resource based on the name:

#   - `*GET*`: It returns the person object with the matching name from the database. If no such person exists, it returns an error message. For example:

#   // Request: `GET`
#   // Route: `/api/persons/Alice`
#   // json

#       // Response
#    {
#       "_id": ObjectId("64fed664160cdfdf8bc1a05d")  
#       "name": "Alice",
#       "age": 25,
#       "email": "example@gmail.com",
#       "occupation": "Hair Dresser",
#       "gender": "F",
#       "country": "Nigeria",
#       "hobbies": ["Reading", "Cooking"], 
#       "createdAt": "2023-09-11T08:57:08.894+00:00",
#       "updatedAt":"2023-09-11T09:58:54.875+00:00",
#   }
        

#    - `*PUT*`: It updates the person object with the matching name from the database with the new data provided in the JSON body of the request. It returns a success message if the update is successful, or an error message if no such person exists or the data is invalid. For example:

#   // Request: `PUT`
#   // Route: `/api/persons/Alice`
#   // json

#   Request body
#       {
#           "age": 28
#       }

#       // Response
#       {
#           "message": "Successfully updated",
#           "newPerson": {
#                   "_id": ObjectId("64fed664160cdfdf8bc1a05d")  
#                   "name": "Alice",
#                    "age": 28,
#                    "email": "example@gmail.com",
#                    "occupation": "Hair Dresser",
#                    "gender": "F",
#                    "country": "Nigeria",
#                    "hobbies": ["Reading", "Cooking"], 
#                    "createdAt": "2023-09-11T08:57:08.894+00:00",
#                    "updatedAt":"2023-09-11T09:58:54.875+00:00",
#                    }
#        }

        
# - `*DELETE*`: It deletes the person object with the matching name from the database. It returns a success message if the deletion is successful, or an error message if no such person exists. For example:

#   // Request: `DELETE`
#   // Route: `/api/persons/Alice`
#   // json

#       // Response
#        {
#           "message": "Person deleted"
#        }

# `Happy Coding`;

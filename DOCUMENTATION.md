# `Person-Api`
# This project is a RESTful API that performs CRUD operations on a person resource using the name property as a point of focus when reading, updating, and deleting a person from the database.

## `Usage`
# The API has four routes that handle different operations on the person resource:

# - `/api/persons`: This route accepts a `*POST*` request with a JSON body that contains the `name`,`age`,`gender`,`country`,`email`, `hobbies` and `occupation` of a person. It adds a new person to the database and returns the person that was added. For example:

#   // Request: `POST`
#   // Route: `/api/persons`
#   // json
#   {
#        "name": "Alice",
#   }

#  ` // Response`
#    {
#       "_id": "64fed664160cdfdf8bc1a05d",
#       "name": "Alice",
#   }

# - `/api/persons/:name`: This route accepts three types of requests: `*GET*`, `*PUT*`, and `*DELETE*`, with the name parameter in the URL. It performs different operations on the person resource based on the name:

#   - `*GET*`: It returns the person object with the matching name from the database. If no such person exists, it returns an error message. For example:

#   // Request: `GET`
#   // Route: `/api/persons/Alice`
#   // json

#       `// Response`
#    {
#       "_id": "64fed664160cdfdf8bc1a05d",  
#       "name": "Alice",
#   }
        

#    - `*PUT*`: It updates the person object with the matching name from the database with the new data provided in the JSON body of the request. It returns a success message if the update is successful, or an error message if no such person exists or the data is invalid. For example:

#   // Request: `PUT`
#   // Route: `/api/persons/Alice`
#   // json

#   `Request body`
#       {
#           "name": "Mary",
#       }

#       `// Response`
#       {
#           "message": "Successfully updated",
#           "newPerson": {
#                   "_id": "64fed664160cdfdf8bc1a05d", 
#                   "name": "Mary",
#                    }
#        }

        
# - `*DELETE*`: It deletes the person object with the matching name from the database. It returns a success message if the deletion is successful, or an error message if no such person exists. For example:

#   // Request: `DELETE`
#   // Route: `/api/persons/Alice`
#   // json

#       `// Response`
#        {
#           "message": "Person deleted"
#        }



# `Deploying API locally`

# 1. clone this repo: `git clone https://github.com/Sparrowthedev/Hng-Rest-Api.git`
# 2. npm install
# 3. from either `terminal` or `command line` run `npm i nodemon` to install globally or you can opt to install it just inside the root folder.
# 4. Create a `.env` file in the root directory and add the following variables:
#    - `PORT`: The port number for the server to listen on. For example, `PORT=5000`.
#    - `MONGO_URI`: The connection string for MongoDB. For example, `MONGO_URI=mongodb://localhost:27017/persons`.
# 5. locate `server.js` and uncomment `require('dotenv').config()`;
# 6. locate `db.js` and uncomment `require('dotenv').config()`;
# 7. run `nodemon server.js`;

# `Deploying API to live server` eg `Render`

# - Create a new repository on GitHub and push your project code.
# - Log into your Render account, click on the New+ button, and select the Web Service option from the drop-down menu.
# - Access your GitHub account, select your project's repository, and connect to it on Render.
# - Choose a name for your service and select the branch you want to deploy from.
# - Specify the build command and the start command for your API. For example, if you are using Node.js and Express.js, you can use `npm install` as the build command and `node index.js` as the start command.
# - Optionally, you can define a health check path for your API, such as `/api/health`, that returns a successful HTTP response if your API is healthy. This will help Render to ensure zero-downtime deploys and automatic restarts for your service.
# - Click on Save to create your service. Render will automatically build and deploy your API on every push to your GitHub repo.
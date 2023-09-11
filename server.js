// require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db');
const personRoutes = require('./routes/routes')

// app
const app = express();

// body-parser middleware
app.use(bodyParser.json())

// global middleware
app.use((req, res, next)=> {
    console.log(req.path, req.method);
    next()
})

// main route
app.use('/api',  personRoutes)

// port
const PORT = process.env.PORT || 3000;

db.then(() => {
    app.listen(PORT, () => {
        console.log(`connected to db and listening on port ${PORT}`);
    })
}).catch(error => console.log(error));



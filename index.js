require('dotenv').config()
require('./config/db.config')

const express = require('express')
const app = express()

//ENABLE FRONT+BACK
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

//REQ.BODY + BODY.PARSER => to get serverside console.log!! ALWAYS
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Use body parser. To be able parse post request information
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //crucial for post requests from client


//ROUTES
const productsRoutes = require('./routes/product.routes')
app.use('/api', productsRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}, dirname ${__dirname}`))
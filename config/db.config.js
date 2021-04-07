require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/justStripe', {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB justStripe connected')
    })
    .catch((err) => {
        console.log('Error: ', err)
})
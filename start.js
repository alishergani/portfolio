const mongoose = require('mongoose')

let url = "mongodb+srv://ka4an:parolotdb@cluster0.ehbnp.mongodb.net/ka4andev"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

mongoose.connection.on('error', (err) => {
    console.log(`ERROR ERROR ERROR -> ${err.message}`);
})


require('./models/Post');


const app = require('./app')
require('dotenv').config()


app.listen(process.env.PORT, () => {
    console.log(`Server on: http://localhost:${process.env.PORT}`)
})
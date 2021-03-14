const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.LOCAL_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

mongoose.connection.on('error', (err) => {
    console.log(`ERROR ERROR ERROR -> ${err.message}`);
})


require('./models/Post');
require('./models/User');


const app = require('./app')


app.listen(process.env.PORT, () => {
    console.log(`Server on: http://localhost:${process.env.PORT}`)
})
const mongoose = require('mongoose')

const configureDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/nhance-task',  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => {
            console.log('connected to DB')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDb
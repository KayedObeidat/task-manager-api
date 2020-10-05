const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, { //to connect to the database
    useNewUrlParser: true,
    useCreateIndex: true, //make sure that when mongoose works with mongodb allowing us to quickley access the data
    useUnifiedTopology: true,
    useFindAndModify: false
}) 






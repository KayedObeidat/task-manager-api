const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express() // create the express application
const port = process.env.PORT //to get our app working on heroku (or) if something failed i can use the local development (port 3000)


// const multer = require('multer')
// const upload = multer({
//     dest: 'images', //destination
//     limits: {
//         fileSize: 1000000        
//     }, 
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) { //regular expression
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// app.post('/upload', upload.single('upload'),(req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

app.use(express.json()) // automatically parse incoming JSON to object
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})

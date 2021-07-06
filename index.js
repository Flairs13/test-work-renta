const express = require('express')
const path = require('path')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const productsRoutes = require ("./routes/product")
const basketRoutes = require ("./routes/basket")
const crRoutes = require ("./routes/category")
const {Router} = require ('express')
const router = Router()
const app = express()
const PORT = config.get('port') || 5000
app.use ('/uploads', express.static ('uploads'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',router,crRoutes,basketRoutes)
app.use('/api', productsRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use ('/', express.static (path.join (__dirname, 'client', 'build')))
    app.get ('*', (req, res) => {
        res.sendFile (path.resolve (__dirname, 'client', 'build', 'index.html'))
    })
}



async function start(){
    try {
       await mongoose.connect(config.get('mongoUri'),{
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,
           useFindAndModify: false,
       })
        app.listen(PORT, () => console.log(`App started on port ${PORT}...`))
    } catch (e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()


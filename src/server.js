import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
import connection from './configs/connectDB'
import initAPIRoute from './route/api'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log('check', port);


configViewEngine(app)

initWebRoute(app)
initAPIRoute(app)



app.listen(port, () => {
    console.log(`Excample app listening at http://localhost:${port}`)
})
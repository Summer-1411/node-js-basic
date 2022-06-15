import express from 'express'
import configViewEngine from './configs/viewEngine'
const app = express()
const port = 8080


configViewEngine(app)
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Excample app listening at http://localhost:${port}`)
})
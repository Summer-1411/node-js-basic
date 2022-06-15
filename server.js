const  express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World vs Hoi dan it')
})

app.listen(port, () => {
    console.log(`Excample app listening at http://localhost:${port}`)
})
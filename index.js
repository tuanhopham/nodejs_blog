const express = require('express')
const app = express()
const port = 3010
app.get('/',(req,res) => res.send('Hello World'))

app.listen(port,()=> console.log(`Exple app listening at http://localhost:${port}`))
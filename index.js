require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('<h1>Hello welcome to twitter</h1>')
})

app.get('/instagram', (req,res) => {
    res.send("Welcome to instagram")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
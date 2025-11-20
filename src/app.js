const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.send(`Server Work`)
})

app.get('/login/', (_, res) => {
  res.send('6ed6f825-864d-4b50-8d8f-ec3bf589ae03')
})

const PORT = process.env.PORT || 8000

app.listen(PORT)
console.log(`Server is running on port ${PORT}`)

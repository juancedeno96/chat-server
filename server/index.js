const express = require('express')
const app = express()
const mc = require('./controller/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const port = 3001

//endpoints
const baseUrl = '/api/messages'
app.post(baseUrl, mc.create)
app.get(baseUrl, mc.read)
app.put(`${baseUrl}/:id`, mc.update)
app.delete(`${baseUrl}/:id`, mc.delete)


app.listen(port, ()=> {console.log(`Listening on port ${port}`)})